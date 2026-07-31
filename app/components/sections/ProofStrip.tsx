"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const PROOF_STATS = [
  { value: "8+", label: "systems shipped" },
  { value: "3-8w", label: "typical build" },
  { value: "100%", label: "source ownership" },
  { value: "monthly", label: "maintenance included" },
];

const PRODUCT_MARKS = ["TeraMotors", "SpeakBill", "Gari", "Araba", "Salasel"];

export function ProofStripSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const marks = shouldReduceMotion ? PRODUCT_MARKS : [...PRODUCT_MARKS, ...PRODUCT_MARKS, ...PRODUCT_MARKS];

  return (
    <section className="border-y border-black/10 bg-[#fbf4e2] px-6 py-8 text-[#17140d]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 6 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.28 : 0.45 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a7657]">Proof of work</p>
          <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-[#695b45]">
            Real operating systems shipped for workshops, freelancers, and service businesses —
            replacing scattered tools with one owned platform.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.28 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              className="rounded-xl border border-black/10 bg-white px-5 py-4 shadow-[0_14px_45px_-36px_rgba(23,20,13,0.32)]"
            >
              <p className="text-2xl font-bold tracking-tight text-[#17140d]">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a7657]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl overflow-hidden border-t border-black/10 pt-6">
        <div className="mobile-scroll-reel flex animate-logo-marquee gap-10 whitespace-nowrap text-xs font-bold uppercase tracking-[0.32em] text-[#8a7657]">
          {marks.map((mark, index) => (
            <span key={`${mark}-${index}`} className="shrink-0">
              {mark}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
