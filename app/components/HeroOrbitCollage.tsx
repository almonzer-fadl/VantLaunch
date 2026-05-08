"use client";

import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

type HeroOrbitShot = {
  slug: string;
  src: string;
  alt: string;
  sizes: string;
};

const heroOrbitImages: HeroOrbitShot[] = [
  {
    slug: "teramotors",
    src: "/teramotors.png",
    alt: "TeraMotors workshop dashboard",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    slug: "salasel",
    src: "/salasel-hero.png",
    alt: "Salasel HORECA marketplace experience",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    slug: "araba",
    src: "/portfolio/araba.png",
    alt: "Araba multi-platform mobile experience",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    slug: "gari",
    src: "/portfolio/teramotors-mobile.jpg",
    alt: "Gari customer iOS app",
    sizes: "(max-width: 640px) 90vw, 420px",
  },
  {
    slug: "aqua-marwa",
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
    const b = prom > 0.72 ? 1.06 + (prom - 0.72) * 0.15 : 0.93 + Math.max(prom, 0) * 0.11;
    filter = `brightness(${Number(b).toFixed(3)})`;
  }

  const x = Math.sin(a) * RX;
  const y = -Math.cos(a) * RY + yLift;

  return { BW, BH, x, y, scale, opacity, rotateDeg, zIndex, filter };
}

function HeroOrbitLayer({
  idx,
  theta,
  reduced,
  narrow,
  shot,
  shotCount,
  onClick,
}: {
  idx: number;
  theta: MotionValue<number>;
  reduced: boolean;
  narrow: boolean;
  shot: HeroOrbitShot;
  shotCount: number;
  onClick?: () => void;
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
      className={`absolute will-change-transform ${onClick ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
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
      onClick={onClick}
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

function HeroOrbitStaticLayer({
  idx,
  narrow: narrowLayout,
  reduced,
  shot,
  shotCount,
  onClick,
}: {
  idx: number;
  narrow: boolean;
  reduced: boolean;
  shot: HeroOrbitShot;
  shotCount: number;
  onClick?: () => void;
}) {
  const L = orbitLayoutAtTheta(idx, 0, narrowLayout, reduced, shotCount);

  return (
    <div
      suppressHydrationWarning
      className={`absolute will-change-transform ${onClick ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
      style={{
        width: `${L.BW}px`,
        height: `${L.BH}px`,
        left: `calc(50% - ${L.BW / 2}px)`,
        top: `calc(42% - ${L.BH / 2}px)`,
        transformOrigin: "50% 50%",
        transform: `translateX(${L.x}px) translateY(${L.y}px) scale(${L.scale}) rotate(${L.rotateDeg}deg)`,
        opacity: L.opacity,
        zIndex: L.zIndex,
        filter: L.filter,
      }}
      onClick={onClick}
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

export function HeroOrbitCollage({ 
  reduced,
  onOpenProject,
}: { 
  reduced: boolean;
  onOpenProject?: (slug: string) => void;
}) {
  const [narrow, setNarrow] = useState(true);
  const n = heroOrbitImages.length;
  const theta = useMotionValue(0);
  const autoDriveRef = useRef(true);
  const dotActiveRef = useRef(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const orbitMotionReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    function sync() { setNarrow(mq.matches); }
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useAnimationFrame((timestamp, dtMs) => {
    if (!orbitMotionReady || reduced || !autoDriveRef.current) return;
    const dt = Math.min(dtMs / 1000, 1 / 20);
    // Slower, more subtle rotation
    const omega = 0.08; 
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
      <div className="relative z-[2] mx-auto h-[min(68vh,520px)] w-full touch-pan-y md:h-[540px]">
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
                  onClick={onOpenProject ? () => onOpenProject(shot.slug) : undefined}
                />
              ) : (
                <HeroOrbitStaticLayer
                  key={shot.src}
                  idx={idx}
                  narrow={narrow}
                  reduced={reduced}
                  shot={shot}
                  shotCount={n}
                  onClick={onOpenProject ? () => onOpenProject(shot.slug) : undefined}
                />
              ),
            )}
          </div>
        </div>

        {!reduced && (
          <div className="pointer-events-auto absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
            {heroOrbitImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show project ${i + 1}`}
                aria-pressed={activeDot === i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === i ? "w-6 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => snapThetaToShot(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
