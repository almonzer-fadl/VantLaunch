"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  return (
    <section className="relative overflow-hidden bg-[#f8f6ef] px-6 pb-20 pt-24 text-[#11100e] md:pb-32 md:pt-32 lg:pb-40 lg:pt-40">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.06]" />
        <div className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#f59e0b]/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695b]">
                <Sparkles className="h-3.5 w-3.5 text-blue-700" />
                Now Shipping Micro-SaaS
              </span>
            </motion.div>

            <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-tight text-[#11100e] sm:text-5xl md:text-6xl lg:text-7xl">
              Turn your business operations into 
              <span className="mt-2 block">profitable software.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5f5548] sm:text-xl">
              We don&apos;t just build apps. We build automation, visibility, and control. 
              From workshop management to voice-powered billing, we transform 
              manual work into digital assets.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-bold uppercase tracking-widest text-[#74695b]">
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-start"
            >
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#11100e]">
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-8 py-3.5 text-sm font-bold text-[#11100e] transition-colors hover:bg-black/[0.03]">
                Browse Solutions
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-[0_18px_50px_-35px_rgba(17,16,14,0.45)] backdrop-blur-xl transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700">
                    <PlayCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight text-[#11100e]">Watch TeraMotors Demo</p>
                    <p className="text-sm font-medium text-[#5f5548]">Click to see it in action</p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:border-blue-700/30">
                        <ArrowRight className="h-5 w-5 text-[#11100e]" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Accents */}
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-black/[0.03] blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
