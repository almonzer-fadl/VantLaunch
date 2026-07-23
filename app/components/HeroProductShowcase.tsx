"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { EASE_CURSOR } from "../lib/constants";

export function HeroProductShowcase({
  onOpenProject,
}: {
  onOpenProject: (slug: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: EASE_CURSOR }}
      className="relative mx-auto min-h-[430px] w-full max-w-[46rem] lg:min-h-[540px]"
    >
      <div className="absolute inset-x-0 top-8 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-surface shadow-[0_32px_120px_-52px_rgba(0,0,0,0.95)] lg:top-12">
        <button
          type="button"
          onClick={() => onOpenProject("teramotors")}
          className="group block w-full text-left"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/media/teramotors-dashboard.webp"
              alt="TeraMotors dashboard with job cards, workshop KPIs, and app shortcuts"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 720px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-zinc/90 px-5 py-4">
            <div>
              <p className="text-sm font-bold text-white">TeraMotors</p>
              <p className="text-xs text-zinc-500">Live workshop management SaaS</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/70" />
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={() => onOpenProject("gari")}
        className="group absolute -bottom-2 right-3 w-[38%] min-w-[150px] max-w-[230px] overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_28px_100px_-36px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:-translate-y-1 sm:right-8 lg:bottom-4"
      >
        <div className="relative aspect-[9/19] w-full">
          <Image
            src="/media/gari-home.webp"
            alt="Gari mobile home screen showing garage and service categories"
            fill
            priority
            sizes="220px"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-left">
          <p className="text-sm font-bold text-white">Gari</p>
          <p className="text-[11px] font-medium text-white/75">Coming soon</p>
        </div>
      </button>

      <a
        href="#demo"
        className="absolute left-3 top-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc/85 px-4 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-md transition-colors hover:bg-zinc-surface sm:left-8"
      >
        <PlayCircle className="h-4 w-4 text-orange-400" />
        Watch TeraMotors demo
      </a>

      <div className="absolute bottom-10 left-1 grid gap-2 rounded-2xl border border-white/10 bg-zinc/85 p-3 shadow-2xl backdrop-blur-md sm:left-6 lg:bottom-20">
        {["ZATCA invoices", "SAR reports", "Job cards"].map((item) => (
          <span key={item} className="rounded-xl bg-white/[0.06] px-3 py-2 text-[11px] font-bold text-zinc-200">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
