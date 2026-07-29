"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

export function HeroSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  const { shouldReduceMotion } = useMobileMotion();
  const enterX = shouldReduceMotion ? 0 : -30;
  const mediaScale = shouldReduceMotion ? 1 : 0.95;
  const mediaY = shouldReduceMotion ? 8 : 20;

  return (
    <section className="relative overflow-hidden bg-[#f8f6ef] px-4 pb-16 pt-20 text-[#11100e] sm:px-6 sm:pb-20 sm:pt-24 md:pb-32 md:pt-32 lg:pb-40 lg:pt-40">
      {/* Dynamic Background */}
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
            <h1 className="text-balance text-3xl font-bold leading-[1.04] tracking-tight text-[#11100e] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Turn your business operations into{" "}
              <span className="sm:mt-2 sm:block">profitable software.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5f5548] sm:mt-8 sm:text-lg md:text-xl">
              We don&apos;t just build apps. We build automation, visibility, and control. 
              From workshop management to voice-powered billing, we transform 
              manual work into digital assets.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-[11px] font-bold uppercase tracking-widest text-[#74695b] sm:mt-8 sm:gap-x-8 sm:gap-y-4 sm:text-[13px]">
              <span className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#11100e]" />
                Fixed Pricing
              </span>
              <span className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#11100e]" />
                Rapid Delivery
              </span>
              <span className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#11100e]" />
                Lifetime Ownership
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 6 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0.05 : 0.4, duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
            >
              <Link href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100e] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#004225] sm:w-auto sm:px-8">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#portfolio" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-bold text-[#11100e] transition-colors hover:bg-black/[0.03] sm:w-auto sm:px-8">
                Browse Solutions
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: mediaScale, y: mediaY }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0.08 : 0.3, duration: shouldReduceMotion ? 0.4 : 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:block"
          >
            <div 
              onClick={() => onOpenProject("teramotors")}
              className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_28px_80px_-56px_rgba(17,16,14,0.5)] transition-all hover:bg-black/[0.02]"
            >
               <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#eef2f8]">
                 <Image
                  src="/media/teramotors-dashboard.webp"
                  alt="TeraMotors Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
               </div>
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/95 p-3 shadow-[0_18px_50px_-35px_rgba(17,16,14,0.45)] transition-all sm:gap-5 sm:bg-white/90 sm:p-5 sm:backdrop-blur-xl">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#11100e] sm:h-12 sm:w-12">
                    <PlayCircle className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold tracking-tight text-[#11100e] sm:text-lg">Watch TeraMotors Demo</p>
                    <p className="text-xs font-medium text-[#5f5548] sm:text-sm">Click to see it in action</p>
                  </div>
                  <div className="ml-auto hidden shrink-0 sm:block">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:border-[#004225]/30">
                        <ArrowRight className="h-5 w-5 text-[#11100e]" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-black/[0.03] blur-[80px] sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
