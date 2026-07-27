"use client";

import { motion } from "framer-motion";

const PROOF_STATS = [
  { value: "8+", label: "shipped products" },
  { value: "3-8w", label: "typical delivery" },
  { value: "$1.5k+", label: "fixed-price builds" },
  { value: "100%", label: "source ownership" },
];

const PRODUCT_MARKS = ["TeraMotors", "SpeakBill", "Gari", "Araba", "Salasel"];

export function ProofStripSection() {
  return (
    <section className="border-y border-black/10 bg-[#f8f6ef] px-6 py-8 text-[#11100e]">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695b]">Proof of shipping</p>
          <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-[#5f5548]">
            VantLaunch is built around real product work: dashboards, portals, mobile flows,
            invoicing, workshop operations, and marketplace experiences.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-xl border border-black/10 bg-white px-5 py-4 shadow-[0_14px_45px_-36px_rgba(17,16,14,0.32)]"
            >
              <p className="text-2xl font-bold tracking-tight text-[#11100e]">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695b]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl overflow-hidden border-t border-black/10 pt-6">
        <div className="flex animate-logo-marquee gap-10 whitespace-nowrap text-xs font-bold uppercase tracking-[0.32em] text-[#74695b]">
          {[...PRODUCT_MARKS, ...PRODUCT_MARKS, ...PRODUCT_MARKS].map((mark, index) => (
            <span key={`${mark}-${index}`} className="shrink-0">
              {mark}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
