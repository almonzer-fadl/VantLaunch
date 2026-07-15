"use client";

import type { MotionValue } from "framer-motion";
import {
  animate,
  MotionConfig,
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  MonitorPlay,
  Rocket,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  siFramer,
  siBetterauth,
  siMongodb,
  siNextdotjs,
  siPosthog,
  siReacthookform,
  siResend,
  siSentry,
  siShadcnui,
  siSocketdotio,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
} from "simple-icons";
import { HOME_PREVIEW_STUB_ORDER, WORK_STUBS } from "./work/stub-projects";

const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

const extraVentures = HOME_PREVIEW_STUB_ORDER.map((slug) => {
  const s = WORK_STUBS[slug];
  return {
    key: slug,
    href: `/work/${s.slug}`,
    imageSrc: s.imageSrc,
    imageAlt: s.imageAlt,
    badges: s.badges,
    title: s.title,
    description: s.cardSummary,
    imgClass: s.previewImgClass,
  };
});

/** SVG path for process flow — shared by stroke and CSS offset-path (viewBox 0 0 900 84) */
const PROCESS_FLOW_PATH_D =
  "M 96 44 C 252 6 348 82 450 44 S 648 6 804 44";

const PROCESS_PHASES = [
  {
    num: "01",
    title: "Dream it together",
    desc: "We shape the story, the screens, and the must-have moments—until you are excited to show it off.",
    Icon: Sparkles,
  },
  {
    num: "02",
    title: "Craft it in the open",
    desc: "Early previews land fast so stakeholders and customers see real progress every week—not slides.",
    Icon: MonitorPlay,
  },
  {
    num: "03",
    title: "Launch and lift off",
    desc: "Payments, onboarding, polish, and analytics—then we celebrate the release and coach your team on what is next.",
    Icon: Rocket,
  },
] as const;

const WHY_US_POINTS = [
  {
    title: "Launch in weeks, not quarters",
    body: "We ship usable product increments fast so you can validate with real users early.",
  },
  {
    title: "Operator-grade quality bar",
    body: "The same engineering and UX standards we enforce on TeraMotors and Gari go into client work.",
  },
  {
    title: "Direct maker collaboration",
    body: "You work with the people designing and building, without account-layer bottlenecks.",
  },
  {
    title: "Decisions tied to traction",
    body: "We optimize for adoption, retention, and measurable product momentum after launch.",
  },
] as const;

const STACK_TECH = [
  { label: "Next.js", icon: siNextdotjs },
  { label: "Framer Motion", icon: siFramer },
  { label: "Stripe", icon: siStripe },
  { label: "MongoDB", icon: siMongodb },
  { label: "Zod", icon: siZod },
  { label: "React Hook Form", icon: siReacthookform },
  { label: "Socket.io", icon: siSocketdotio },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "shadcn/ui", icon: siShadcnui },
  { label: "TypeScript", icon: siTypescript },
  { label: "Vercel", icon: siVercel },
  { label: "Resend", icon: siResend },
  { label: "Sentry", icon: siSentry },
  { label: "PostHog", icon: siPosthog },
  { label: "Better Auth / NextAuth", icon: siBetterauth },
] as const;

const STACK_ICON_FILL_OVERRIDES: Partial<Record<(typeof STACK_TECH)[number]["label"], string>> = {
  "Next.js": "#FFFFFF",
  Vercel: "#FFFFFF",
  "shadcn/ui": "#FFFFFF",
};

const fadeSlide = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: EASE_CURSOR },
  },
};

const staggerSection = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    function update() {
      setPrefersReducedMotion(mq.matches);
    }
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const duration = 850;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return value;
}

function SpotlightLayer({
  mousePos,
  prefersReducedMotion,
}: {
  mousePos: { x: number; y: number };
  prefersReducedMotion: boolean;
}) {
  const spotlightX = useSpring(mousePos.x, { stiffness: 130, damping: 30, mass: 0.45 });
  const spotlightY = useSpring(mousePos.y, { stiffness: 130, damping: 30, mass: 0.45 });

  useEffect(() => {
    if (prefersReducedMotion) {
      spotlightX.jump(mousePos.x);
      spotlightY.jump(mousePos.y);
      return;
    }
    spotlightX.set(mousePos.x);
    spotlightY.set(mousePos.y);
  }, [mousePos.x, mousePos.y, prefersReducedMotion, spotlightX, spotlightY]);

  const dynamicBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(99, 102, 241, 0.1), transparent 40%)`;

  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 z-0 pointer-events-none spotlight opacity-50"
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
      style={{ background: dynamicBg }}
    />
  );
}

function MagneticWrap({
  active,
  children,
  className,
  strength = 0.13,
}: {
  active: boolean;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const max = 10;
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!active || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rawX = (e.clientX - cx) * strength;
    const rawY = (e.clientY - cy) * strength;
    setOffset({
      x: Math.max(-max, Math.min(max, rawX)),
      y: Math.max(-max, Math.min(max, rawY)),
    });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <motion.div style={{ x: offset.x, y: offset.y }}>{children}</motion.div>
    </div>
  );
}

function CardPointerGlow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [p, setP] = useState({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        setP({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseLeave={() => setP({ x: 50, y: 50 })}
      className={className}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(620px ellipse at ${p.x}% ${p.y}%, rgba(99, 102, 241, 0.16), transparent 68%)`,
        }}
      />
      {children}
    </div>
  );
}

type HeroOrbitShot = {
  src: string;
  alt: string;
  sizes: string;
};

const heroOrbitImages: HeroOrbitShot[] = [
  {
    src: "/teramotors.png",
    alt: "TeraMotors workshop dashboard",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/salasel-hero.png",
    alt: "Salasel HORECA marketplace experience",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/portfolio/araba.png",
    alt: "Araba multi-platform mobile experience",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/portfolio/teramotors-mobile.jpg",
    alt: "Gari customer iOS app",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/portfolio/water-delivery-app.jpeg",
    alt: "Aqua Marwa water delivery app",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
];

const HERO_ORBIT_TWO_PI = Math.PI * 2;

function nearestAngleEquivalence(current: number, goalEquivalent: number) {
  const T = HERO_ORBIT_TWO_PI;
  return goalEquivalent + T * Math.round((current - goalEquivalent) / T);
}

type HeroOrbitLayout = {
  BW: number;
  BH: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotateDeg: number;
  zIndex: number;
  filter: string;
};

/** Pure layout helper — SSR static layer & motion transforms must derive from this for parity */
function orbitLayoutAtTheta(
  idx: number,
  thetaRad: number,
  narrowLayout: boolean,
  reducedMotion: boolean,
  shotCount: number,
): HeroOrbitLayout {
  const BW = narrowLayout ? 300 : 364;
  const BH = narrowLayout ? 400 : 478;
  const RX = narrowLayout ? 92 : 150;
  const RY = narrowLayout ? 72 : 112;
  const yLift = narrowLayout ? -6 : -10;
  const a = thetaRad + (idx * HERO_ORBIT_TWO_PI) / shotCount;

  let scale: number;
  let opacity: number;
  let rotateDeg: number;
  let zIndex: number;
  let filter: string;

  if (reducedMotion) {
    if (idx === 0) {
      scale = 1;
      opacity = 1;
      rotateDeg = 0;
      zIndex = 22;
      filter = "brightness(1)";
    } else {
      scale = 0.001;
      opacity = 0;
      rotateDeg = 0;
      zIndex = 0;
      filter = "brightness(1)";
    }
  } else {
    const prom = Math.cos(a);
    const t = (prom + 1) / 2;
    scale = 0.34 + t * 0.66;
    opacity = 0.3 + t * 0.7;
    rotateDeg = -6.2 + prom * 12.8;
    zIndex = Math.round(7 + prom * 15);
    const b =
      prom > 0.72 ? 1.06 + (prom - 0.72) * 0.15 : 0.93 + Math.max(prom, 0) * 0.11;
    filter = `brightness(${b})`;
  }

  const x = Math.sin(a) * RX;
  const y = -Math.cos(a) * RY + yLift;

  return { BW, BH, x, y, scale, opacity, rotateDeg, zIndex, filter };
}

function roundOrbitCssNumber(n: number, fractionDigits: number) {
  return Number.parseFloat(n.toFixed(fractionDigits));
}

/** Stable inline shapes so SSR and first client pass serialize the same way (avoid static orbit hydration noise). */
function orbitStaticInlineStyle(L: HeroOrbitLayout): CSSProperties {
  const brightnessMatch = /^brightness\(((?:\d*\.)?\d+(?:e[+-]?\d+)?)\)$/i.exec(L.filter.trim());
  const filterRounded =
    brightnessMatch === null
      ? L.filter
      : `brightness(${roundOrbitCssNumber(Number.parseFloat(brightnessMatch[1]), 6)})`;

  const xPx = `${roundOrbitCssNumber(L.x, 5)}px`;
  const yPx = `${roundOrbitCssNumber(L.y, 5)}px`;
  const scl = `${roundOrbitCssNumber(L.scale, 7)}`;
  const rot = `${roundOrbitCssNumber(L.rotateDeg, 5)}deg`;

  return {
    width: `${L.BW}px`,
    height: `${L.BH}px`,
    left: `calc(50% - ${L.BW / 2}px)`,
    top: `calc(42% - ${L.BH / 2}px)`,
    transformOrigin: "50% 50%",
    transform: `translateX(${xPx}) translateY(${yPx}) scale(${scl}) rotate(${rot})`,
    opacity: roundOrbitCssNumber(L.opacity, 7),
    zIndex: L.zIndex,
    filter: filterRounded,
  };
}

function HeroOrbitStaticLayer({
  idx,
  narrow: narrowLayout,
  reduced,
  shot,
  shotCount,
}: {
  idx: number;
  narrow: boolean;
  reduced: boolean;
  shot: HeroOrbitShot;
  shotCount: number;
}) {
  const L = orbitLayoutAtTheta(idx, 0, narrowLayout, reduced, shotCount);

  return (
    <div
      suppressHydrationWarning
      className="pointer-events-none absolute will-change-transform"
      style={orbitStaticInlineStyle(L)}
    >
      <div className="relative h-full w-full overflow-visible">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={shot.sizes}
          draggable={false}
          className="object-contain object-center drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)] saturate-[1.04]"
          priority={idx <= 2}
        />
      </div>
    </div>
  );
}

function HeroOrbitLayer({
  idx,
  theta,
  reduced,
  narrow,
  shot,
  shotCount,
}: {
  idx: number;
  theta: MotionValue<number>;
  reduced: boolean;
  narrow: boolean;
  shot: HeroOrbitShot;
  shotCount: number;
}) {
  const BW = narrow ? 300 : 364;
  const BH = narrow ? 400 : 478;

  const x = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).x,
  );
  const y = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).y,
  );
  const scale = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).scale,
  );
  const opacity = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).opacity,
  );
  const rotate = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).rotateDeg,
  );
  const zIndex = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).zIndex,
  );
  const brightness = useTransform(theta, (th) =>
    orbitLayoutAtTheta(idx, th, narrow, reduced, shotCount).filter,
  );

  return (
    <motion.div
      className="pointer-events-none absolute will-change-transform"
      style={{
        width: `${BW}px`,
        height: `${BH}px`,
        left: `calc(50% - ${BW / 2}px)`,
        top: `calc(42% - ${BH / 2}px)`,
        transformOrigin: "50% 50%",
        x,
        y,
        scale,
        opacity,
        rotate,
        zIndex,
        filter: brightness,
      }}
    >
      <div className="relative h-full w-full overflow-visible">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={shot.sizes}
          draggable={false}
          className="object-contain object-center drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)] saturate-[1.04]"
          priority={idx <= 2}
        />
      </div>
    </motion.div>
  );
}

/** True only after hydrate so motion subtree matches SSR-only static markup (avoid FM hydration mismatch). */
function useHydratedMotionOrbitToggle() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function useNarrowHeroOrbit() {
  const [narrow, setNarrow] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    function sync() {
      setNarrow(mq.matches);
    }
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return narrow;
}

const ORBIT_SCROLL_BOOST_DECAY_PER_S = 5.2;
const ORBIT_SCROLL_BOOST_SENSITIVITY = 0.0055;
const ORBIT_SCROLL_BOOST_CAP = 1.2;
const ORBIT_SCROLL_MAX_SPEED_MULT = 4.75;

function wheelDeltaToPixels(ev: WheelEvent): { dx: number; dy: number } {
  let dx = ev.deltaX;
  let dy = ev.deltaY;
  // 1 = line, 2 = page — normalize roughly to px-like magnitude so boost feels consistent cross-browser.
  const mode = typeof ev.deltaMode === "number" ? ev.deltaMode : 0;
  if (mode === 1) {
    dx *= 16;
    dy *= 16;
  }
  if (mode === 2) {
    dx *= 800;
    dy *= 800;
  }
  return { dx, dy };
}

function wheelHappensInsideElement(ev: WheelEvent, root: HTMLElement): boolean {
  if (root.contains(ev.target as Node)) return true;
  const hit = typeof document.elementFromPoint === "function" ? document.elementFromPoint(ev.clientX, ev.clientY) : null;
  return !!hit && root.contains(hit);
}

function HeroOrbitCollage({ reduced }: { reduced: boolean }) {
  const narrow = useNarrowHeroOrbit();
  const n = heroOrbitImages.length;
  const theta = useMotionValue(0);
  const autoDriveRef = useRef(true);
  const dotActiveRef = useRef(0);
  const scrollBoostRef = useRef(0);
  const orbitScrollSurfaceRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const orbitMotionReady = useHydratedMotionOrbitToggle();

  useEffect(() => {
    if (!orbitMotionReady || reduced) return;

    /** Capture phase on `window`: orbit layers use `pointer-events-none`, which can reroute hits so `bubble` misses the ref node. Hit-test viewport position instead. */
    function onWheelCapture(e: WheelEvent) {
      const root = orbitScrollSurfaceRef.current;
      if (!root || !wheelHappensInsideElement(e, root)) return;

      const { dx, dy } = wheelDeltaToPixels(e);
      const mag = Math.min(220, Math.hypot(dx, dy));
      if (mag < 0.08) return;
      scrollBoostRef.current = Math.min(
        ORBIT_SCROLL_BOOST_CAP,
        scrollBoostRef.current + mag * ORBIT_SCROLL_BOOST_SENSITIVITY,
      );
    }

    window.addEventListener("wheel", onWheelCapture, { passive: true, capture: true });
    return () => window.removeEventListener("wheel", onWheelCapture, true);
  }, [orbitMotionReady, reduced]);

  useAnimationFrame((timestamp, dtMs) => {
    if (!orbitMotionReady || reduced) return;
    const dt = Math.min(dtMs / 1000, 1 / 20);
    scrollBoostRef.current *= Math.exp(-ORBIT_SCROLL_BOOST_DECAY_PER_S * dt);

    if (!autoDriveRef.current) return;

    const speedPulse = 0.48 + 0.52 * (0.5 + 0.5 * Math.sin(timestamp * 0.00062));
    const scrollMul =
      1 +
      scrollBoostRef.current *
        Math.max(0, (ORBIT_SCROLL_MAX_SPEED_MULT - 1) / ORBIT_SCROLL_BOOST_CAP);
    const omega = 0.11 * speedPulse * scrollMul;
    theta.set(theta.get() + omega * dt);

    let bestIdx = 0;
    let bestProm = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < n; i++) {
      const a = theta.get() + (i * HERO_ORBIT_TWO_PI) / n;
      const prom = Math.cos(a);
      if (prom > bestProm) {
        bestProm = prom;
        bestIdx = i;
      }
    }
    if (bestIdx !== dotActiveRef.current) {
      dotActiveRef.current = bestIdx;
      setActiveDotIndex(bestIdx);
    }
  });

  function snapThetaToShot(shotIdx: number) {
    const goalEquivalent = (-shotIdx * HERO_ORBIT_TWO_PI) / n;
    const next = nearestAngleEquivalence(theta.get(), goalEquivalent);
    autoDriveRef.current = false;
    animate(theta, next, {
      type: "spring",
      stiffness: 96,
      damping: 22,
      mass: 0.92,
      onComplete: () => {
        autoDriveRef.current = true;
      },
    });
  }

  const activeDot = reduced ? 0 : activeDotIndex;

  return (
    <div className="relative isolate mx-auto w-full max-w-lg select-none lg:max-w-none">
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { scale: [1, 1.05, 1], opacity: [0.22, 0.36, 0.22] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-8%] top-[12%] h-52 w-52 rounded-full bg-indigo-500/26 blur-[90px]"
      />
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { scale: [1.05, 1, 1.05], opacity: [0.14, 0.26, 0.14] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute bottom-[4%] right-[-6%] h-64 w-64 rounded-full bg-violet-400/22 blur-[100px]"
      />

      <div
        ref={orbitScrollSurfaceRef}
        className="relative z-[2] mx-auto h-[min(68vh,520px)] w-full touch-pan-y md:h-[540px]"
        aria-label="Sample of shipped product interfaces rotating in focus. Scroll inside this showcase to temporarily speed up the rotation."
      >
        <div className="absolute inset-x-2 top-[6%] h-[calc(100%-3.5rem)] sm:inset-x-4 md:top-[4%]">
          <div className="relative mx-auto h-full max-w-xl md:max-w-3xl lg:max-w-[46rem]">
            {heroOrbitImages.map((shot, idx) =>
              orbitMotionReady ? (
                <HeroOrbitLayer
                  key={shot.src}
                  idx={idx}
                  theta={theta}
                  reduced={reduced}
                  narrow={narrow}
                  shot={shot}
                  shotCount={n}
                />
              ) : (
                <HeroOrbitStaticLayer
                  key={shot.src}
                  idx={idx}
                  narrow={narrow}
                  reduced={reduced}
                  shot={shot}
                  shotCount={n}
                />
              ),
            )}
          </div>
        </div>

        {!reduced ? (
          <div className="pointer-events-auto absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-1 sm:gap-1.5">
            {heroOrbitImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show project ${i + 1}`}
                aria-pressed={activeDot === i}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  activeDot === i ? "w-6 bg-white sm:w-8" : "w-1.5 bg-white/30 hover:bg-white/50 sm:w-2"
                }`}
                onClick={() => snapThetaToShot(i)}
              />
            ))}
          </div>
        ) : (
          <p className="absolute bottom-0 left-0 right-0 text-center text-[10px] text-slate-600">
            Single focus — animations reduced
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [comparisonInView, setComparisonInView] = useState(false);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const heroParallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const heroOrbScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);

  useEffect(() => {
    function centerSpotlight() {
      const root = containerRef.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      setMousePos({
        x: rect.width / 2,
        y: Math.min(rect.height / 2, window.innerHeight / 2),
      });
    }
    centerSpotlight();
    window.addEventListener("resize", centerSpotlight);
    return () => window.removeEventListener("resize", centerSpotlight);
  }, []);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const magneticOn = !prefersReducedMotion;
  const ownedCount = useCountUp(2, comparisonInView);
  const clientCount = useCountUp(3, comparisonInView);
  const rhythmCount = useCountUp(7, comparisonInView);

  useEffect(() => {
    if (!comparisonInView || prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActiveWhyIndex((prev) => (prev + 1) % WHY_US_POINTS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [comparisonInView, prefersReducedMotion]);

  const heroTitleStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const heroLineReveal = prefersReducedMotion
    ? ({
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: EASE_CURSOR },
        },
      } as const)
    : ({
        hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.62, ease: EASE_CURSOR },
        },
      } as const);

  const heroSubReveal = prefersReducedMotion
    ? ({
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: EASE_CURSOR },
        },
      } as const)
    : ({
        hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.48, ease: EASE_CURSOR },
        },
      } as const);

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
      <div
        ref={containerRef}
        className="flex flex-col min-h-screen bg-obsidian text-slate-50 selection:bg-accent-indigo/30 antialiased overflow-x-hidden relative"
        style={
          prefersReducedMotion
            ? ({
                "--x": `${mousePos.x}px`,
                "--y": `${mousePos.y}px`,
              } as CSSProperties)
            : undefined
        }
      >
        <SpotlightLayer mousePos={mousePos} prefersReducedMotion={prefersReducedMotion} />

        {/* Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 noise" />
          <div className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
          <motion.div
            className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-accent-indigo/5 blur-[160px] rounded-full"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: heroParallaxOpacity,
                    scale: heroOrbScale,
                  }
            }
            aria-hidden
          />
        </div>

        <nav className="sticky top-0 w-full z-50 border-b border-white/[0.05] bg-obsidian/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: EASE_CURSOR }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-white text-obsidian rounded-xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform cursor-pointer">
                <Rocket className="w-5 h-5 fill-obsidian" />
              </div>
              <span className="type-brand-xl">VantLaunch</span>
            </motion.div>

            <div className="hidden items-center gap-10 md:flex">
              <NavLink href="#ventures">Our work</NavLink>
              <NavLink href="#comparison">Why us</NavLink>
              <NavLink href="#process">How it works</NavLink>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: EASE_CURSOR }}
              className="flex items-center gap-6"
            >
              <Link
                href="https://github.com"
                className="type-nav-link"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5" />
              </Link>
              <MagneticWrap active={magneticOn}>
                <Link
                  href="mailto:build@vantlaunch.com"
                  className="type-btn-solid inline-flex"
                >
                  Let&apos;s talk
                </Link>
              </MagneticWrap>
            </motion.div>
          </div>
        </nav>

        <main className="relative z-10 flex-1">
          <section ref={heroRef} className="relative overflow-hidden pt-20 pb-20 md:pb-28 lg:pb-36 px-6">
            <motion.div
              className="max-w-7xl mx-auto"
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: heroParallaxY,
                      opacity: heroParallaxOpacity,
                    }
              }
            >
              <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_CURSOR }}
                    className="mb-6 type-kicker-inline"
                  >
                    <Sparkles className="h-3 w-3 shrink-0 text-accent-indigo opacity-90" />
                    Venture studio · products live in market
                  </motion.div>

                  <motion.h1
                    variants={heroTitleStagger}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl text-balance sm:max-w-2xl lg:max-w-[42rem]"
                  >
                    <motion.span variants={heroLineReveal} className="type-hero-line">
                      Turn the idea in your head into something
                    </motion.span>
                    <motion.span variants={heroLineReveal} className="type-hero-line-accent">
                      <span className="type-hero-gradient">
                        real customers open every day.
                      </span>
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    variants={heroSubReveal}
                    initial="hidden"
                    animate="visible"
                    className="type-intro mt-6 max-w-xl leading-relaxed"
                  >
                    Strategy, brand-feel, and engineering together — from investor decks to the
                    first time someone taps your product.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: EASE_CURSOR }}
                    className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-center"
                  >
                    <MagneticWrap active={magneticOn}>
                      <Link
                        href="#ventures"
                        className="group/browse type-btn-ghost-prominent relative isolate inline-flex w-full sm:w-auto"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover/browse:opacity-100"
                          style={{
                            background:
                              "radial-gradient(120% 80% at 50% 120%, rgba(99,102,241,0.35), transparent 55%)",
                          }}
                        />
                        <span className="relative">Browse work</span>
                        <ArrowRight className="relative h-[15px] w-[15px] transition-transform duration-300 group-hover/browse:translate-x-0.5" />
                      </Link>
                    </MagneticWrap>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex -space-x-2">
                        {['AE', 'MS', 'JP'].map((initials) => (
                          <div
                            key={initials}
                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-obsidian bg-gradient-to-br from-indigo-500/35 to-slate-800 text-[9px] font-semibold text-white/95"
                          >
                            {initials}
                          </div>
                        ))}
                      </div>
                      <p className="type-caption-micro">
                        Product teams worldwide ship with us
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="relative lg:col-span-7">
                  <HeroOrbitCollage reduced={prefersReducedMotion} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="relative overflow-hidden border-t border-white/[0.05] px-6 py-32">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[44%] h-[520px] w-[min(100%,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/[0.08] blur-[130px]"
            />
            <motion.div
              className="relative mx-auto max-w-6xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerSection}
              onViewportEnter={() => setComparisonInView(true)}
            >
              <motion.div variants={fadeSlide} className="mb-14 text-center md:mb-16">
                <p className="type-meta-uppercase mb-4 text-accent-indigo/90">How We Operate</p>
                <h2 className="type-display-xl mb-5 text-balance">Two lanes. One product engine.</h2>
                <p className="type-intro mx-auto max-w-3xl text-center">
                  We run our own products (TeraMotors, Gari) and ship client products (Araba, Aqua
                  Marwa, Salasel) with the same operator-grade standards.
                </p>
              </motion.div>

              <motion.div
                variants={fadeSlide}
                className="relative"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_80%_at_50%_-15%,rgba(99,102,241,0.12),transparent_55%)]" />

                <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
                  <motion.div
                    variants={fadeSlide}
                    transition={{ ...fadeSlide.visible.transition, delay: prefersReducedMotion ? 0 : 0.05 }}
                    className="order-2 rounded-[2rem] border border-accent-indigo/20 bg-gradient-to-br from-accent-indigo/[0.12] via-accent-indigo/[0.05] to-transparent p-8 md:p-10 lg:order-1"
                  >
                    <p className="type-meta-uppercase text-accent-indigo/85">Why teams choose us</p>
                    <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      Built like founders, shipped like operators.
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                      We own products in market, so we build client products with the same real-world
                      urgency, quality bar, and accountability.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3 text-center">
                        <p className="type-meta-uppercase text-slate-400">Owned</p>
                        <p className="mt-1 text-2xl font-semibold text-white">{ownedCount}</p>
                      </div>
                      <div className="rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3 text-center">
                        <p className="type-meta-uppercase text-slate-400">Client builds</p>
                        <p className="mt-1 text-2xl font-semibold text-white">{clientCount}</p>
                      </div>
                      <div className="rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3 text-center">
                        <p className="type-meta-uppercase text-slate-400">Shipping rhythm</p>
                        <p className="mt-1 text-2xl font-semibold text-white">~{rhythmCount}d</p>
                      </div>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {WHY_US_POINTS.map((point, idx) => {
                        const active = idx === activeWhyIndex;
                        return (
                          <motion.li
                            key={point.title}
                            className="list-none"
                            initial={prefersReducedMotion ? false : { opacity: 0, x: -8, scale: 0.99 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                              type: "spring",
                              stiffness: 190,
                              damping: 22,
                              mass: 0.72,
                              delay: prefersReducedMotion ? 0 : idx * 0.08,
                            }}
                          >
                            <button
                              type="button"
                              onMouseEnter={() => setActiveWhyIndex(idx)}
                              onFocus={() => setActiveWhyIndex(idx)}
                              className={`w-full rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                                active
                                  ? "border-accent-indigo/45 bg-accent-indigo/[0.18] shadow-[0_0_42px_-20px_rgba(99,102,241,0.8)]"
                                  : "border-white/[0.08] bg-black/20 hover:border-accent-indigo/30"
                              }`}
                            >
                              <p className="flex items-center gap-3 text-sm font-semibold text-white md:text-base">
                                <Check className="h-4 w-4 shrink-0 text-accent-indigo" />
                                {point.title}
                              </p>
                              <p className="mt-2 pl-7 text-sm leading-relaxed text-slate-300">{point.body}</p>
                            </button>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>

                  <motion.div
                    variants={fadeSlide}
                    transition={{ ...fadeSlide.visible.transition, delay: prefersReducedMotion ? 0 : 0.2 }}
                    className="order-1 flex h-full flex-col rounded-[2rem] border border-white/[0.08] bg-black/35 p-6 md:p-8 lg:order-2"
                  >
                    <p className="type-meta-uppercase text-white/55">Product engine</p>
                    <div className="relative mx-auto mt-4 flex h-[320px] w-full max-w-[360px] items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                      <motion.div
                        aria-hidden
                        className="absolute inset-5 rounded-full border border-accent-indigo/20"
                        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                        transition={{
                          duration: [24, 20, 17, 14][activeWhyIndex],
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        aria-hidden
                        className="absolute inset-12 rounded-full border border-white/[0.1]"
                        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                        transition={{
                          duration: [17, 14, 12, 10][activeWhyIndex],
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-accent-indigo/[0.08] blur-2xl"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : {
                                scale: [0.94, 1.04 + activeWhyIndex * 0.02, 0.94],
                                opacity: [0.35, 0.62, 0.35],
                              }
                        }
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="relative z-[1] flex h-44 w-44 items-center justify-center rounded-full border border-accent-indigo/30 bg-obsidian/85 text-center shadow-[0_0_60px_-18px_rgba(99,102,241,0.7)] backdrop-blur-xl">
                        <div>
                          <p className="type-meta-uppercase text-accent-indigo/80">VantLaunch</p>
                          <p className="mt-2 text-lg font-semibold text-white">MicroSaaS Studio</p>
                          <p className="mt-2 text-xs text-slate-400">{WHY_US_POINTS[activeWhyIndex].title}</p>
                        </div>
                      </div>
                      {!prefersReducedMotion ? (
                        <>
                          <motion.div
                            className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-indigo shadow-[0_0_14px_2px_rgba(99,102,241,0.7)]"
                            animate={{ x: [0, 310, 0], y: [0, -72, 0] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute right-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-200 shadow-[0_0_14px_2px_rgba(165,180,252,0.7)]"
                            animate={{ x: [0, -300, 0], y: [0, 72, 0] }}
                            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                          />
                        </>
                      ) : null}
                    </div>
                    <p className="mt-4 text-center text-sm leading-relaxed text-slate-400">
                      Own products: TeraMotors and Gari · Client builds: Araba, Aqua Marwa, Salasel.
                    </p>

                    <div className="mt-6 flex-1">
                      <p className="type-meta-uppercase mb-3 text-center text-white/60">
                        Stack powering our builds
                      </p>
                      <div className="grid h-full auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3">
                        {STACK_TECH.map((tech, idx) => (
                          <motion.div
                            key={tech.label}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            animate={
                              prefersReducedMotion
                                ? undefined
                                : idx % 3 === 0
                                  ? { y: [0, -2.5, 0] }
                                  : idx % 3 === 1
                                    ? { y: [0, 2, 0] }
                                    : { y: [0, -1.5, 0] }
                            }
                            transition={
                              prefersReducedMotion
                                ? { delay: 0, duration: 0.01 }
                                : {
                                    delay: 0.06 * idx,
                                    duration: 3.8 + (idx % 4) * 0.35,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }
                            }
                            className={`group relative flex min-h-[56px] items-center overflow-hidden rounded-xl border bg-obsidian/55 px-3 py-2 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 ${
                              idx === activeWhyIndex
                                ? "border-accent-indigo/45 shadow-[0_0_44px_-22px_rgba(99,102,241,0.9)]"
                                : "border-white/[0.10] hover:border-accent-indigo/30 hover:shadow-[0_0_40px_-26px_rgba(99,102,241,0.7)]"
                            }`}
                          >
                            {!prefersReducedMotion ? (
                              <motion.span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                                initial={false}
                                animate={{ opacity: [0, 0.55, 0] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                  background:
                                    "linear-gradient(90deg, transparent, rgba(99,102,241,0.18), transparent)",
                                }}
                              />
                            ) : null}
                            <div className="flex items-center gap-2">
                              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                                <svg
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                                  aria-label={tech.icon.title}
                                  fill={STACK_ICON_FILL_OVERRIDES[tech.label] ?? `#${tech.icon.hex}`}
                                >
                                  <path d={tech.icon.path} />
                                </svg>
                              </span>
                              <span className="text-[11px] font-semibold leading-tight text-slate-200">
                                {tech.label}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Portfolio */}
          <section id="ventures" className="py-32 px-6 border-t border-white/[0.05]">
            <motion.div
              className="max-w-7xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerSection}
            >
              <motion.div variants={fadeSlide} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="max-w-2xl">
                  <h2 className="type-display-lg mb-5">Work you can feel</h2>
                  <p className="type-intro-wide max-w-xl">
                    Real products in market—from finance to everyday tools—with care for trust,
                    compliance, and joy in the details.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeSlide}
                className="grid auto-rows-[minmax(380px,auto)] grid-cols-1 items-start gap-6 md:auto-rows-auto md:grid-cols-12"
              >
                <CardPointerGlow className="relative isolate min-h-[380px] overflow-hidden rounded-[3rem] border border-white/[0.06] bg-white/[0.02] glass-card hover:border-accent-indigo/35 group transition-colors duration-500 md:col-span-6">
                  <div className="absolute inset-0">
                    <Image
                      src="/teramotors.png"
                      alt="TeraMotors product experience"
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  <div className="relative z-[1] flex h-full flex-col justify-end p-10 md:p-12">
                    <div className="mb-6 flex flex-wrap gap-2">
                      <Badge>Automotive</Badge>
                      <Badge>Enterprise · Compliance-ready</Badge>
                    </div>
                    <h3 className="type-portfolio-product-title">TeraMotors</h3>
                    <p className="type-portfolio-product-body">
                      Enterprise auto repair ops — bilingual UX, realtime job boards, Stripe, and
                      invoicing flows built for regulated markets and growing workshop networks.
                    </p>
                    <div className="relative z-[1] flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Link href="/work/teramotors" className="type-link-strong">
                        Full case study
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <Link href="https://app.teramotor.cc/" className="type-link-soft">
                        Live app
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </CardPointerGlow>

                <CardPointerGlow className="relative isolate min-h-[380px] overflow-hidden rounded-[3rem] border border-white/[0.06] bg-white/[0.02] glass-card hover:border-accent-indigo/35 group transition-colors duration-500 md:col-span-6">
                  <div className="absolute inset-0">
                    <Image
                      src="/salasel-hero.png"
                      alt="Salasel HORECA marketplace marketing site with chef imagery, mobile app preview, and order stats"
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className="object-cover object-[center_12%] opacity-45 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/15" />
                  <div className="relative z-[1] flex h-full flex-col justify-end p-10 md:p-12">
                    <div className="mb-6 flex flex-wrap gap-2">
                      <Badge>B2B marketplace</Badge>
                      <Badge>HORECA · Procurement</Badge>
                    </div>
                    <h3 className="type-portfolio-product-title">Salasel</h3>
                    <p className="type-portfolio-product-body">
                      Procurement for hotels, cafés, and catering crews — BNPL-ready buying, logistics
                      handoffs, supplier orchestration inside one Laravel platform.
                    </p>
                    <div className="relative z-[1] flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Link href="/work/salasel" className="type-link-strong">
                        Full case study
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://salasel.com.sa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="type-link-soft"
                      >
                        Live site
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </CardPointerGlow>

                {extraVentures.map((v) => (
                  <CardPointerGlow
                    key={v.key}
                    className="group relative isolate aspect-[9/19.5] w-full max-w-[min(100%,320px)] overflow-hidden rounded-[3rem] border border-white/[0.06] bg-obsidian glass-card transition-colors duration-500 hover:border-accent-indigo/35 sm:mx-auto md:mx-0 md:max-w-none md:col-span-4"
                  >
                    <div className="absolute inset-0 bg-obsidian">
                      <Image
                        src={v.imageSrc}
                        alt={v.imageAlt}
                        fill
                        sizes="(max-width: 768px) 320px, 33vw"
                        className={v.imgClass}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/10" />
                    <div className="relative z-[1] flex min-h-full flex-col justify-end p-8 md:p-10">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {v.badges.map((b) => (
                          <Badge key={b}>{b}</Badge>
                        ))}
                      </div>
                      <h3 className="type-portfolio-card-title">{v.title}</h3>
                      <p className="type-portfolio-card-body">
                        {v.description}
                      </p>
                      <Link
                        href={v.href}
                        className="type-link-strong relative z-[1] text-sm md:text-base"
                      >
                        Project preview
                        <ArrowUpRight className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
                      </Link>
                    </div>
                  </CardPointerGlow>
                ))}

              </motion.div>
            </motion.div>
          </section>

          <ProcessPipelineSection />

          <section className="py-48 md:py-64 px-6 text-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: EASE_CURSOR }}
              className="relative z-10 max-w-4xl mx-auto"
            >
              <h2 className="type-cta-heading">
                Ready for people to{' '}
                <span className="text-accent-indigo">experience your vision?</span>
              </h2>
              <p className="type-cta-intro">
                Send a note to{' '}
                <a
                  className="text-slate-200 underline underline-offset-4 decoration-white/25 transition-colors hover:text-white hover:decoration-white/60"
                  href="mailto:build@vantlaunch.com"
                >
                  build@vantlaunch.com
                </a>
                — we&apos;ll reply within a business day with warm, straightforward next steps.
              </p>
              <MagneticWrap active={magneticOn} className="inline-block">
                <Link
                  href="mailto:build@vantlaunch.com"
                  className="type-cta-btn group"
                >
                  Start your project
                  <Rocket className="w-7 h-7 group-hover:-rotate-6 transition-transform duration-300" />
                </Link>
              </MagneticWrap>
            </motion.div>
          </section>
        </main>

        <footer className="py-20 px-6 border-t border-white/[0.05] bg-obsidian-surface/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-8">
                <Rocket className="text-white w-7 h-7" />
                <span className="type-brand-2xl">VantLaunch</span>
              </div>
              <p className="type-footer-about">
                We design and ship standout apps for founders, brands, and teams who care how their
                product feels in someone&apos;s hands.
              </p>
            </div>
            <div className="flex gap-24">
              <div className="flex flex-col gap-6">
                <span className="type-meta-uppercase">Explore</span>
                <FooterLink href="#ventures">Our work</FooterLink>
                <FooterLink href="#comparison">Why us</FooterLink>
                <FooterLink href="#process">How it works</FooterLink>
              </div>
              <div className="flex flex-col gap-6">
                <span className="type-meta-uppercase">Connect</span>
                <FooterLink href="https://x.com">Twitter / X</FooterLink>
                <FooterLink href="https://github.com">GitHub</FooterLink>
                <FooterLink href="mailto:build@vantlaunch.com">Email</FooterLink>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-10 md:flex-row">
            <p className="type-legal-muted">© 2026 VantLaunch. All rights reserved.</p>
            <p className="type-legal-muted font-normal">Made with care for teams who ship with heart.</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="type-nav-link">
      {children}
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="type-badge-pill">{children}</span>;
}

function ProcessOrbIcon({
  phase,
  size = "lg",
  reduced,
}: {
  phase: (typeof PROCESS_PHASES)[number];
  size?: "lg" | "md";
  reduced: boolean;
}) {
  const { Icon } = phase;
  const shell = size === "lg" ? "h-28 w-28" : "h-16 w-16";
  const inner = size === "lg" ? "h-[5.35rem] w-[5.35rem]" : "h-12 w-12";
  const iconSz = size === "lg" ? "h-9 w-9" : "h-6 w-6";

  return (
    <div className={`relative flex ${shell} shrink-0 items-center justify-center`}>
      {!reduced ? (
        <>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute inset-[-3px] rounded-full border border-accent-indigo/40"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{
                duration: 2.75,
                repeat: Infinity,
                delay: i * 0.88,
                ease: "easeOut",
              }}
            />
          ))}
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 100deg, transparent 0%, rgba(99,102,241,0.45) 14%, transparent 32%, transparent 68%, rgba(165,180,252,0.35) 86%, transparent 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </>
      ) : null}
      <div
        className={`relative z-[1] flex ${inner} items-center justify-center rounded-full border border-white/[0.12] bg-obsidian/95 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] backdrop-blur-md ${reduced ? "ring-1 ring-white/10" : ""}`}
      >
        <Icon className={`${iconSz} text-accent-indigo`} strokeWidth={1.65} />
      </div>
    </div>
  );
}

function ProcessPipelineSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/[0.05] py-28 px-6 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[30%] h-[480px] w-[min(100%,880px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/[0.07] blur-[100px]"
      />
      <motion.div
        className="relative z-[1] mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-16 max-w-2xl md:mb-20">
          <p className="type-meta-uppercase mb-3 text-accent-indigo/90">How we work</p>
          <h2 className="type-display-lg text-balance">From first sketch to launch day</h2>
          <p className="type-intro mt-5 max-w-xl text-slate-400">
            One continuous pipeline—ideas become interfaces, interfaces become builds, builds become
            something people can actually use.
          </p>
        </motion.div>

        {/* Desktop: curved flow + traveling pulse */}
        <div className="relative mx-auto hidden max-w-6xl lg:block">
          <div className="relative mx-auto h-[5.5rem] w-full max-w-[56rem] px-2">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 900 84"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient id="processFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.15" />
                  <stop offset="45%" stopColor="rgb(165 180 252)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.15" />
                </linearGradient>
                <filter id="processFlowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d={PROCESS_FLOW_PATH_D}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.path
                d={PROCESS_FLOW_PATH_D}
                fill="none"
                stroke="url(#processFlowGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#processFlowGlow)"
                initial={
                  reduced
                    ? { pathLength: 1, opacity: 0.9 }
                    : { pathLength: 0, opacity: 0.35 }
                }
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: reduced ? 0.01 : 1.85, ease: EASE_CURSOR }}
              />
              {!reduced ? (
                <g>
                  <circle r="5.5" fill="rgb(99, 102, 241)" opacity="0.95">
                    <animateMotion
                      dur="5.8s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path={PROCESS_FLOW_PATH_D}
                    />
                  </circle>
                  <circle r="11" fill="rgb(99, 102, 241)" opacity="0.2">
                    <animateMotion
                      dur="5.8s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path={PROCESS_FLOW_PATH_D}
                    />
                  </circle>
                </g>
              ) : null}
            </svg>
          </div>

          <div className="relative z-10 -mt-2 grid grid-cols-3 gap-10 px-2">
            {PROCESS_PHASES.map((phase, i) => (
              <motion.div
                key={phase.num}
                variants={fadeSlide}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.85, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.55,
                    delay: reduced ? 0 : 0.15 + i * 0.12,
                    ease: EASE_CURSOR,
                  }}
                >
                  <ProcessOrbIcon phase={phase} reduced={reduced} />
                </motion.div>
                <span className="type-meta-uppercase mt-10 text-accent-indigo/80">{phase.num}</span>
                <h3 className="type-process-title mt-2 max-w-[16rem] text-balance">{phase.title}</h3>
                <p className="type-process-desc mx-auto mt-3 max-w-[18rem] text-balance">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: spine draws + steps stack */}
        <div className="relative mx-auto max-w-lg lg:hidden">
          <div className="relative pl-2">
            <motion.div
              aria-hidden
              className="absolute bottom-6 left-[1.35rem] top-14 w-px origin-top bg-gradient-to-b from-accent-indigo/50 via-white/20 to-transparent"
              initial={{ scaleY: reduced ? 1 : 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduced ? 0.01 : 1.2, ease: EASE_CURSOR }}
            />
            <div className="flex flex-col gap-14">
              {PROCESS_PHASES.map((phase, i) => (
                <motion.div
                  key={phase.num}
                  variants={fadeSlide}
                  className="relative flex gap-6"
                >
                  <div className="relative z-[1] flex shrink-0 flex-col items-center pt-1">
                    <ProcessOrbIcon phase={phase} size="md" reduced={reduced} />
                    <span className="type-meta-uppercase mt-3 text-[10px] text-accent-indigo/75">
                      {phase.num}
                    </span>
                  </div>
                  <div className="min-w-0 pt-1">
                    <motion.h3
                      className="type-process-title text-left !text-xl md:!text-2xl"
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reduced ? 0 : 0.08 + i * 0.06, duration: 0.45 }}
                    >
                      {phase.title}
                    </motion.h3>
                    <motion.p
                      className="type-process-desc mt-3 text-left !text-base !leading-relaxed"
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: reduced ? 0 : 0.14 + i * 0.06, duration: 0.45 }}
                    >
                      {phase.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="type-footer-link">
      {children}
    </Link>
  );
}
