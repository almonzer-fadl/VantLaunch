"use client";

import {
  MotionConfig,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

function HeroShowcase({ reduced }: { reduced: boolean }) {
  const floatA = reduced
    ? {}
    : {
        animate: { y: [0, -14, 0] },
        transition: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' as const },
      };
  const floatB = reduced
    ? {}
    : {
        animate: { y: [0, 16, 0] },
        transition: { duration: 7.4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.9 },
      };

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none lg:mx-0 min-h-[min(72vw,440px)] sm:min-h-[380px] lg:min-h-[480px]">
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.28, 0.45, 0.28] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-5%] top-[24%] h-52 w-52 rounded-full bg-indigo-500/30 blur-[80px]"
      />
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { scale: [1.05, 1, 1.05], opacity: [0.18, 0.32, 0.18] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute right-[-10%] top-[12%] h-64 w-64 rounded-full bg-violet-400/25 blur-[90px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 28, rotate: reduced ? 0 : -2.25 }}
        animate={{ opacity: 1, y: 0, rotate: reduced ? 0 : -2.25 }}
        transition={{ duration: 0.85, ease: EASE_CURSOR, delay: 0.06 }}
        className="relative z-[2] overflow-hidden rounded-[2rem] border border-white/10 bg-obsidian-surface shadow-[0_40px_100px_-32px_rgba(0,0,0,0.9)] md:rounded-[2.25rem]"
      >
        <div className="relative aspect-[16/11] w-full md:aspect-[16/10] lg:aspect-[16/10]">
          <Image
            src="/teramotors.png"
            alt="Interface from TeraMotors, a finance and automotive platform we shipped"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 52vw"
            className="object-cover object-[center_18%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90 md:opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent md:opacity-90" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-3 p-7 md:p-8">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-md">
            Real customers, daily
          </span>
          <span className="rounded-full bg-accent-indigo/35 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-md">
            From idea to launched app
          </span>
        </div>
      </motion.div>

      <div className="absolute -right-1 top-[8%] z-[3] hidden min-[520px]:block sm:right-[-4%] lg:-right-[2%]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: EASE_CURSOR, delay: 0.35 }}
        >
          <motion.div
            className="max-w-[200px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg shadow-black/30 backdrop-blur-xl"
            {...floatA}
          >
            <div className="mb-2 flex gap-3">
              <div className="h-14 w-[3px] rounded-full bg-accent-indigo" aria-hidden />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wide text-slate-300">In motion</p>
                <p className="mt-1 text-lg font-bold leading-snug tracking-tight text-white">
                  Live in weeks, not quarters
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -left-1 bottom-[12%] z-[3] hidden min-[520px]:block sm:left-[-3%]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: EASE_CURSOR, delay: 0.42 }}
        >
          <motion.div
            className="max-w-[218px] rounded-2xl border border-white/12 bg-gradient-to-br from-white/12 to-white/[0.04] p-4 shadow-lg shadow-black/40 backdrop-blur-xl"
            {...floatB}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-indigo/35 text-xl">
                <Sparkles className="h-6 w-6 text-white" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white leading-snug">Built to feel premium</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">
                  Details your customers feel the first time they open the app
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
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

  const heroSubStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.065, delayChildren: 0.42 },
    },
  };

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
              <span className="text-xl font-bold tracking-tighter">VantLaunch</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-10 text-sm">
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
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5" />
              </Link>
              <MagneticWrap active={magneticOn}>
                <Link
                  href="mailto:build@vantlaunch.com"
                  className="px-6 py-2.5 bg-accent-indigo text-white text-sm font-bold rounded-full hover:glow-indigo transition-shadow shadow-xl shadow-accent-indigo/20 inline-flex"
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
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.58, ease: EASE_CURSOR }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-slate-300"
                  >
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent-indigo" />
                    Apps & platforms people love using
                  </motion.div>

                  <motion.h1
                    variants={heroTitleStagger}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[18rem] text-balance sm:max-w-sm lg:max-w-md"
                  >
                    <motion.span
                      variants={heroLineReveal}
                      className="block text-[1.5625rem] font-semibold leading-[1.18] tracking-[-0.025em] text-slate-200 sm:text-[1.8125rem] lg:text-[2.0625rem]"
                    >
                      Turn the idea in your head
                    </motion.span>
                    <motion.span
                      variants={heroLineReveal}
                      className="mt-2.5 block text-[1.5625rem] font-semibold leading-[1.18] tracking-[-0.025em] sm:text-[1.8125rem] lg:text-[2.0625rem]"
                    >
                      into something{' '}
                      {prefersReducedMotion ? (
                        <span className="bg-gradient-to-r from-white via-indigo-200 to-white/75 bg-clip-text font-semibold text-transparent">
                          real customers open every day.
                        </span>
                      ) : (
                        <motion.span
                          className="inline bg-[linear-gradient(95deg,#94a3b8_0%,#f8fafc_26%,#a5b4fc_48%,#f8fafc_72%,#64748b_100%)] bg-[length:220%_100%] bg-clip-text pb-px font-semibold text-transparent"
                          initial={{ backgroundPosition: "40% 50%" }}
                          animate={{
                            backgroundPosition: ["40% 50%", "-60% 50%", "40% 50%"],
                          }}
                          transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: [0.45, 0, 0.55, 1],
                          }}
                        >
                          real customers open every day.
                        </motion.span>
                      )}
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    variants={heroSubStagger}
                    initial="hidden"
                    animate="visible"
                    className="mt-5 max-w-xs space-y-1.5 sm:max-w-sm"
                  >
                    <motion.p
                      variants={heroSubReveal}
                      className="text-[13px] font-medium leading-relaxed tracking-wide text-slate-500 sm:text-sm"
                    >
                      Strategy, brand-feel, and engineering in one lane—
                    </motion.p>
                    <motion.p variants={heroSubReveal} className="text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                      whether you&apos;re pitching investors or wowing shoppers.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.16, ease: EASE_CURSOR }}
                    className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center"
                  >
                    <MagneticWrap active={magneticOn}>
                      <Link
                        href="#ventures"
                        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-obsidian shadow-2xl shadow-white/15 transition-shadow group sm:w-auto hover:shadow-white/25"
                      >
                        See recent launches
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </MagneticWrap>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {['AE', 'MS', 'JP'].map((initials) => (
                          <div
                            key={initials}
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-obsidian bg-gradient-to-br from-indigo-500/40 to-slate-700 text-[10px] font-bold text-white shadow-inner"
                          >
                            {initials}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm leading-snug text-slate-500">
                        Loved by founders <span className="font-semibold text-slate-300">and</span>{' '}
                        the teams behind growing brands
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="relative lg:col-span-7">
                  <HeroShowcase reduced={prefersReducedMotion} />
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
              <motion.div variants={fadeSlide} className="text-center mb-20">
                <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl md:tracking-tighter">
                  A clearer way to build
                </h2>
                <p className="mx-auto max-w-xl text-lg font-medium text-slate-500">
                  The familiar agency path, next to how we work side-by-side with you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeSlide}>
                  <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 opacity-65 h-full group">
                    <h3 className="mb-8 text-xl font-bold text-slate-400">Classic agency</h3>
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
                    <h3 className="mb-8 text-xl font-bold text-accent-indigo">With VantLaunch</h3>
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
                  <h2 className="mb-5 text-5xl font-bold tracking-tight text-white md:text-7xl md:tracking-tighter">
                    Work you can feel
                  </h2>
                  <p className="text-xl font-medium text-slate-500">
                    Real products in market—from finance to everyday tools—with care for trust,
                    compliance, and joy in the details.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeSlide}
                className="grid auto-rows-[minmax(380px,auto)] grid-cols-1 gap-6 md:auto-rows-[minmax(420px,auto)] md:grid-cols-12"
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
                    <h3 className="mb-4 text-5xl font-bold tracking-tighter text-white">TeraMotors</h3>
                    <p className="mb-8 max-w-md text-lg font-medium text-slate-300">
                      Enterprise auto repair ops — bilingual UX, realtime job boards, Stripe, and
                      compliant invoicing for workshops scaling across the GCC.
                    </p>
                    <div className="relative z-[1] flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Link
                        href="/work/teramotors"
                        className="inline-flex items-center gap-2 font-bold text-white transition-all hover:gap-3"
                      >
                        Full case study
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://app.teramotor.cc/"
                        className="inline-flex items-center gap-2 text-base font-semibold text-slate-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
                      >
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
                    <h3 className="mb-4 text-5xl font-bold tracking-tighter text-white">Salasel</h3>
                    <p className="mb-8 max-w-md text-lg font-medium text-slate-300">
                      Procurement for hotels, cafés, and catering crews — BNPL-ready buying, logistics
                      handoffs, supplier orchestration inside one Laravel platform.
                    </p>
                    <div className="relative z-[1] flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Link
                        href="/work/salasel"
                        className="inline-flex items-center gap-2 font-bold text-white transition-all hover:gap-3"
                      >
                        Full case study
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://salasel.com.sa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-slate-300 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/50"
                      >
                        Live site
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </CardPointerGlow>

                <CardPointerGlow className="md:col-span-4 glass-card rounded-[3rem] p-12 flex flex-col justify-between group hover:border-white/25 transition-colors duration-500 relative isolate">
                  <div className="relative z-[1] w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent-indigo group-hover:border border-white/10 transition-all">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="relative z-[1]">
                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">Trust built in</h3>
                    <p className="font-medium leading-relaxed text-slate-500">
                      When regulations matter—like ZATCA in Saudi Arabia—we bake compliance into
                      invoices and receipts so your customers stay confident.
                    </p>
                  </div>
                </CardPointerGlow>

                <CardPointerGlow className="md:col-span-12 glass-card rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-accent-indigo/35 transition-colors duration-500 relative isolate">
                  <div className="relative z-[1] max-w-xl">
                    <h3 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Space for deep focus
                    </h3>
                    <p className="text-xl font-medium leading-relaxed text-slate-400">
                      We partner with only a handful of teams at once so yours gets the attention
                      it deserves. Tell us what you&apos;re dreaming up—we&apos;ll find the next
                      opening together.
                    </p>
                  </div>
                  <MagneticWrap active={magneticOn} className="shrink-0 relative z-[1]">
                    <Link
                      href="mailto:build@vantlaunch.com?subject=Reserve%20a%20build%20slot"
                      className="px-12 py-6 bg-white text-obsidian text-xl font-bold rounded-2xl inline-flex transition-shadow shadow-lg shadow-black/30"
                    >
                      Reserve a slot
                    </Link>
                  </MagneticWrap>
                </CardPointerGlow>
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
              <h2 className="mb-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl xl:text-8xl">
                Ready for people to{' '}
                <span className="text-accent-indigo">experience your vision?</span>
              </h2>
              <p className="mx-auto mb-12 max-w-lg text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
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
                  className="px-14 py-7 bg-white text-obsidian text-xl md:text-2xl font-bold rounded-2xl inline-flex items-center gap-4 shadow-[0_0_50px_rgba(255,255,255,0.14)] hover:shadow-[0_0_60px_rgba(99,102,241,0.2)] transition-shadow group"
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
                <span className="text-2xl font-bold tracking-tighter text-white">VantLaunch</span>
              </div>
              <p className="text-lg font-medium leading-relaxed text-slate-500">
                We design and ship standout apps for founders, brands, and teams who care how their
                product feels in someone&apos;s hands.
              </p>
            </div>
            <div className="flex gap-24">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent-indigo">
                  Explore
                </span>
                <FooterLink href="#ventures">Our work</FooterLink>
                <FooterLink href="#comparison">Why us</FooterLink>
                <FooterLink href="#process">How it works</FooterLink>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent-indigo">
                  Connect
                </span>
                <FooterLink href="https://x.com">Twitter / X</FooterLink>
                <FooterLink href="https://github.com">GitHub</FooterLink>
                <FooterLink href="mailto:build@vantlaunch.com">Email</FooterLink>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-10 md:flex-row">
            <p className="text-sm font-medium text-slate-600">© 2026 VantLaunch. All rights reserved.</p>
            <p className="text-sm text-slate-600">Made with care for teams who ship with heart.</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-slate-400 hover:text-white transition-colors duration-200 font-semibold"
    >
      {children}
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-300">
      {children}
    </span>
  );
}

function ComparisonItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-4 text-slate-300 font-medium text-lg leading-snug">
      <div className="shrink-0 mt-0.5">{icon}</div>
      {text}
    </li>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div variants={fadeSlide} className="flex flex-col gap-8 group">
      <div className="text-5xl font-bold tabular-nums text-white/[0.08] transition-colors duration-500 group-hover:text-accent-indigo/25 sm:text-6xl">
        {num}
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-lg font-bold text-slate-500 hover:text-white transition-colors">
      {children}
    </Link>
  );
}
