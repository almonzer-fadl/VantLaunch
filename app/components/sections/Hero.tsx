"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, FileSpreadsheet, MessageCircle, FileText, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";
import { BeforeAfterSlider } from "../BeforeAfterSlider";
import { VideoModal } from "../VideoModal";

function BeforeState() {
  return (
    <div className="relative h-full w-full">
      <img
        src="/premium_photo-1664300632138-8ef0c79a2187.avif"
        alt="Messy desk with scattered papers"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-bold text-white/85 backdrop-blur-sm">
            <FileSpreadsheet className="h-3.5 w-3.5" /> Excel
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-bold text-white/85 backdrop-blur-sm">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-bold text-white/85 backdrop-blur-sm">
            <FileText className="h-3.5 w-3.5" /> Paper
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-bold text-white/85 backdrop-blur-sm">
            <AlertCircle className="h-3.5 w-3.5" /> Manual
          </span>
        </div>
        <p className="mt-4 text-sm font-bold text-white/90 sm:text-base">Scattered tools. No system.</p>
        <p className="mt-1 text-xs text-white/55 sm:text-sm">Job cards, invoicing, tracking — all manual.</p>
      </div>
    </div>
  );
}

function AfterState() {
  return (
    <div className="relative h-full w-full bg-[#efe2c7]">
      <Image
        src="/media/teramotors-dashboard.webp"
        alt="TeraMotors Dashboard"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain p-4"
      />
    </div>
  );
}

export function HeroSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  const { shouldReduceMotion } = useMobileMotion();
  const [demoOpen, setDemoOpen] = useState(false);
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
              Your business runs on too many tools.{' '}
              <span className="sm:mt-2 sm:block">We build you one. That you own.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#74695B] sm:text-base">
              Trusted by workshops, service businesses, and operational teams to replace scattered
              tools with one system they own.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#74695B] sm:mt-6 sm:text-lg">
              We built TeraMotors for a 3-location workshop — job cards, invoicing, customer records,
              and reports in one dashboard. We built SpeakBill so freelancers invoice by voice.
              We build one system around how you actually work. You own it. We maintain it.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mt-8 sm:gap-x-6 sm:text-[11px]">
              <span>8+ Systems Shipped</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>18 Hours Saved Weekly</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>100% Source Ownership</span>
              <span className="text-black/15 hidden sm:inline">|</span>
              <span>Monthly Maintenance Included</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 6 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0.05 : 0.4, duration: shouldReduceMotion ? 0.3 : 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5"
            >
              <Link href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100E] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#004225] sm:w-auto sm:px-8">
                Build my system
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#portfolio" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-6 py-3.5 text-sm font-bold text-[#11100E] transition-colors hover:bg-black/[0.03] sm:w-auto sm:px-8">
                See proof
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
              beforeLabel="Manual chaos"
              afterLabel="TeraMotors"
              className="aspect-[16/10] w-full"
            />

            <button
              onClick={() => setDemoOpen(true)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
            >
              <Play className="h-4 w-4" />
              Watch full demo
              <span className="ml-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px]">2 min</span>
            </button>

            <div className="absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-black/[0.03] blur-[80px] sm:block" />
          </motion.div>
        </div>
      </div>

      <VideoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        src="/media/teramotors-demo.mp4"
        poster="/media/teramotors-demo-poster.jpg"
        title="TeraMotors Demo"
      />
    </section>
  );
}
