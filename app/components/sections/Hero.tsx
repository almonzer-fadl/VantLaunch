"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";
import { BeforeAfterSlider } from "../BeforeAfterSlider";

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
        alt="Unified dashboard with VantLaunch"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export function HeroSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const enterX = shouldReduceMotion ? 0 : -30;
  const mediaScale = shouldReduceMotion ? 1 : 0.95;
  const mediaY = shouldReduceMotion ? 8 : 20;

  return (
    <section className="relative overflow-hidden bg-[#F8F6EF] px-4 pb-16 pt-20 text-[#11100E] sm:px-6 sm:pb-20 sm:pt-24 md:pb-32 md:pt-32 lg:pb-40 lg:pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.06]" />
        <div className="absolute bottom-[-18rem] left-1/2 hidden h-[34rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#004225]/[0.06] blur-[120px] sm:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: enterX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.35 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <h1 className="font-display text-balance text-2xl font-bold leading-[1.06] tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Custom Dashboards & Business Systems for Growing Companies
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#74695B] sm:text-base">
              Replace spreadsheets, disconnected software and manual reporting with custom dashboards built specifically for your business.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#74695B] sm:mt-6 sm:text-lg">
              We build software around your business. Not the other way around. Connect your tools, automate your reports, and see everything in one place.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mt-8 sm:gap-x-6 sm:text-[11px]">
              <span>3 Productized Solutions</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>Fixed Starting Prices</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>Clear Deliverables</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>Source Ownership</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 6 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0.05 : 0.4, duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
            >
              <Link href="#solutions" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100E] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#004225] sm:w-auto sm:px-8">
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-6 py-3.5 text-sm font-bold text-[#11100E] transition-colors hover:bg-black/[0.03] sm:w-auto sm:px-8">
                Book a Discovery Call
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
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
