"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";
import { BeforeAfterSlider } from "../BeforeAfterSlider";
import { useT } from "@/app/lib/LocaleContext";

function BeforeState() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/media/before-state.png"
        alt="Disconnected tools and spreadsheets"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

function AfterState() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/media/after-state.png"
        alt="Unified business system with VantLaunch"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export function HeroSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const t = useT().t;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sliderScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const sliderY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sliderOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.9, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 0.8, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.06, 0.12, 0]);

  const enterX = shouldReduceMotion ? 0 : -30;
  const mediaScale = shouldReduceMotion ? 1 : 0.95;
  const mediaY = shouldReduceMotion ? 8 : 20;

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#F8F6EF] px-4 pb-20 pt-20 text-[#11100E] sm:px-6 sm:pb-24 sm:pt-24 md:pb-36 md:pt-32 lg:pb-44 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.06]" />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute bottom-[-18rem] left-1/2 hidden h-[34rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#004225]/[0.06] blur-[120px] sm:block"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, x: enterX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.35 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-balance text-2xl font-bold leading-[1.06] tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.hero.heading1}
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-[#004225]"
              >
                {t.hero.heading2}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-[#74695B] sm:text-base"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mt-8 sm:gap-x-6 sm:text-[11px]"
            >
              {["Custom-Built Systems", "Transparent Engagements", "Delivered in Weeks", "Full Source Ownership"].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                >
                  {item}
                  {i < 3 && <span className="text-black/15 hidden sm:inline">{" | "}</span>}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100E] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#004225] hover:shadow-lg sm:w-auto sm:px-8">
                  {t.hero.cta1}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="#engagement-options" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-6 py-3.5 text-sm font-bold text-[#11100E] transition-all hover:bg-black/[0.03] hover:border-black/20 sm:w-auto sm:px-8">
                  {t.hero.cta2}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ scale: sliderScale, y: sliderY, opacity: sliderOpacity }}
            initial={{ opacity: 0, scale: mediaScale, y: mediaY }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0.08 : 0.3, duration: shouldReduceMotion ? 0.4 : 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:block"
          >
            <BeforeAfterSlider
              before={<BeforeState />}
              after={<AfterState />}
              beforeLabel="Before"
              afterLabel="With VantLaunch"
              className="aspect-[16/10] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
