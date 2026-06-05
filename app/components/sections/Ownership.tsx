"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const SAAS_ITEMS = [
  "Multiple subscriptions",
  "Data spread across tools",
  "Vendor lock-in",
  "Monthly costs increase over time",
  "Limited customization",
  "Workflow adapts to software",
];

const VL_ITEMS = [
  "One unified platform",
  "Centralized business data",
  "Full source ownership",
  "Predictable maintenance retainer",
  "Built around your operation",
  "Software adapts to workflow",
];

export function OwnershipSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Ownership
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why businesses choose ownership over subscriptions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Most growing businesses end up stitching together multiple SaaS tools.
            We build one system around your workflow that you fully own.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* SaaS Stack */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid sm:p-8"
          >
            <h3 className="text-lg font-bold tracking-tight text-[#74695B]">Typical SaaS Stack</h3>
            <ul className="mt-6 space-y-3">
              {SAAS_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-black/20" />
                  <span className="text-sm text-[#74695B]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VantLaunch System */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="rounded-2xl border border-[#004225]/20 bg-white p-6 shadow-mid sm:p-8"
          >
            <h3 className="text-lg font-bold tracking-tight text-[#004225]">VantLaunch System</h3>
            <ul className="mt-6 space-y-3">
              {VL_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />
                  <span className="text-sm font-medium text-[#11100E]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
