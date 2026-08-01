"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { EASE_CURSOR } from "../lib/constants";

export function HeroProductShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: EASE_CURSOR }}
      className="relative mx-auto min-h-[430px] w-full max-w-[46rem] lg:min-h-[540px]"
    >
      <div className="absolute inset-x-0 top-8 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid lg:top-12">
        <Link href="/work/teramotors" className="group block w-full text-left">
          <div className="relative aspect-[1800/944] w-full bg-[#efe2c7]">
            <Image
              src="/media/teramotors-dashboard.webp"
              alt="TeraMotors dashboard with job cards, workshop KPIs, and app shortcuts"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 720px"
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-black/10 bg-white px-5 py-4">
            <div>
              <p className="text-sm font-bold text-[#11100E]">TeraMotors</p>
              <p className="text-xs text-[#74695B]">Workshop management software</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[#74695B]" />
          </div>
        </Link>
      </div>

      <a
        href="#demo"
        className="absolute left-3 top-0 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold text-[#11100E] shadow-low backdrop-blur-md transition-colors hover:bg-black/[0.03] sm:left-8"
      >
        <Play className="h-4 w-4 text-[#11100E]" />
        Watch TeraMotors demo
      </a>

      <div className="absolute bottom-8 right-2 grid gap-2 rounded-2xl border border-black/10 bg-white/90 p-3 shadow-low backdrop-blur-md sm:right-6 lg:bottom-16">
        {["Invoices", "Reports", "Job cards", "Customer updates"].map((item) => (
          <span key={item} className="rounded-xl bg-black/[0.03] px-3 py-2 text-[11px] font-bold text-[#74695B]">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
