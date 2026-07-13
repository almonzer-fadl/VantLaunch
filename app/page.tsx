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
  Rocket,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

const extraVentures = [
  {
    key: "araba",
    href: "/work/araba",
    imageSrc: "/portfolio/araba.png",
    imageAlt:
      "Araba — Hajj and Umrah wheelchair assistance app with map tracking and request cart",
    badges: ["Mobility", "Hajj · KSA"],
    title: "Araba",
    description:
      "Pilgrim mobility — book pushers, watch the map, and pay with confidence during Hajj & Umrah.",
    imgClass: "object-contain object-center opacity-50 sm:opacity-[0.48]",
  },
  {
    key: "teramotors-mobile",
    href: "/work/teramotors-mobile",
    imageSrc: "/portfolio/teramotors-mobile.jpg",
    imageAlt:
      "TeraMotors consumer app home with service categories, My Garage, and search",
    badges: ["Automotive", "Consumer app"],
    title: "TeraMotors mobile",
    description:
      "Driver-side garage and services hub — browse maintenance, accessories, and your vehicles in one glow-up UI.",
    imgClass:
      "object-contain object-center opacity-42 transition-transform duration-700 group-hover:scale-[1.03]",
  },
  {
    key: "water-delivery",
    href: "/work/water-delivery",
    imageSrc: "/portfolio/water-delivery-app.jpeg",
    imageAlt:
      "Water delivery storefront with seasonal promo, shortcuts, and featured bottles",
    badges: ["E-commerce", "KSA"],
    title: "Water delivery",
    description:
      "Bottled water commerce with promos, featured SKUs, and delivery setup built for Saudi households.",
    imgClass:
      "object-contain object-top opacity-45 transition-transform duration-700 group-hover:scale-[1.03]",
  },
] as const;

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
    alt: "Araba Hajj and Umrah mobility app",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/portfolio/teramotors-mobile.jpg",
    alt: "TeraMotors consumer mobile app",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    src: "/portfolio/water-delivery-app.jpeg",
    alt: "Water delivery storefront app",
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
                        Teams across the GCC ship with us
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
          <section id="comparison" className="py-32 px-6 border-t border-white/[0.05]">
            <motion.div
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerSection}
            >
              <motion.div variants={fadeSlide} className="mb-20 text-center">
                <h2 className="type-display-xl mb-5">A clearer way to build</h2>
                <p className="type-intro mx-auto max-w-xl text-center">
                  The familiar agency path, next to how we work side-by-side with you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeSlide}>
                  <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 opacity-65 h-full group">
                    <h3 className="type-heading-comparison-col text-slate-400">Classic agency</h3>
                    <ul className="space-y-6">
                      <ComparisonItem icon={<X className="text-red-500/50" />} text="Many months before anyone outside your team can use the product" />
                      <ComparisonItem icon={<X className="text-red-500/50" />} text="Big upfront budget before you prove the idea in the market" />
                      <ComparisonItem icon={<X className="text-red-500/50" />} text="Updates filtered through layers—you rarely talk to the makers" />
                      <ComparisonItem icon={<X className="text-red-500/50" />} text="Hand-off can feel like starting over with a black box" />
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeSlide}>
                  <div className="p-10 rounded-[2.5rem] bg-accent-indigo/5 border-2 border-accent-indigo/20 relative overflow-hidden h-full group hover:border-accent-indigo/35 transition-colors duration-300">
                    <div className="absolute top-6 right-8 text-accent-indigo opacity-70">
                      <Zap className="w-8 h-8 fill-accent-indigo" />
                    </div>
                    <h3 className="type-heading-comparison-col text-accent-indigo">With VantLaunch</h3>
                    <ul className="space-y-6">
                      <ComparisonItem icon={<Check className="text-accent-indigo" />} text="A realistic launch window so customers can experience your product soon" />
                      <ComparisonItem icon={<Check className="text-accent-indigo" />} text="Clear pricing before we start—extras only when you explicitly choose them" />
                      <ComparisonItem icon={<Check className="text-accent-indigo" />} text="Modern, fast apps that feel polished on phones and desktops" />
                      <ComparisonItem icon={<Check className="text-accent-indigo" />} text="You collaborate directly with the designers and engineers shaping the work" />
                    </ul>
                  </div>
                </motion.div>
              </div>
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
                      <Badge>Saudi Arabia · ZATCA</Badge>
                    </div>
                    <h3 className="type-portfolio-product-title">TeraMotors</h3>
                    <p className="type-portfolio-product-body">
                      Enterprise auto repair ops — bilingual UX, realtime job boards, Stripe, and
                      compliant invoicing for workshops scaling across the GCC.
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
                      <Badge>HORECA · KSA</Badge>
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

          {/* Process */}
          <section id="process" className="py-32 px-6 border-t border-white/[0.05]">
            <motion.div
              className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerSection}
            >
              <ProcessStep
                num="01"
                title="Dream it together"
                desc="We shape the story, the screens, and the must-have moments—until you are excited to show it off."
              />
              <ProcessStep
                num="02"
                title="Craft it in the open"
                desc="Early previews land fast so stakeholders and customers see real progress every week—not slides."
              />
              <ProcessStep
                num="03"
                title="Launch and lift off"
                desc="Payments, onboarding, polish, and analytics—then we celebrate the release and coach your team on what is next."
              />
            </motion.div>
          </section>

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

function ComparisonItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="type-body-list-relaxed">
      <div className="shrink-0 mt-0.5">{icon}</div>
      {text}
    </li>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div variants={fadeSlide} className="group flex flex-col gap-8">
      <div className="type-process-num">{num}</div>
      <div>
        <h3 className="type-process-title">{title}</h3>
        <p className="type-process-desc">{desc}</p>
      </div>
    </motion.div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="type-footer-link">
      {children}
    </Link>
  );
}
