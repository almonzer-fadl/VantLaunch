"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const DATA_SOURCES = [
  "Meta Ads",
  "Google Ads",
  "Stripe",
  "HubSpot",
  "GA4",
  "Excel",
  "Slack",
  "Email",
];

export function SpreadsheetsSection() {
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
            The Problem
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Businesses Outgrow Spreadsheets
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            As your business grows, your data scatters across more tools. Every new platform adds another place to check. Before you know it, your team is spending hours switching between tabs instead of making decisions.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#74695B] mb-5">
              Your data is scattered across
            </p>
            <div className="flex flex-wrap gap-2.5">
              {DATA_SOURCES.map((source) => (
                <span
                  key={source}
                  className="rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-bold text-[#11100E] shadow-mid"
                >
                  {source}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="rounded-2xl border border-[#004225]/20 bg-white p-6 shadow-mid sm:p-8"
          >
            <h3 className="text-lg font-bold tracking-tight text-[#004225]">The Result</h3>
            <ul className="mt-5 space-y-4">
              {[
                "Employees switch between 8+ tools daily just to get a full picture",
                "Manual reporting takes hours instead of being instant",
                "Data lives in silos — no one sees the full story",
                "Decisions get delayed because numbers aren't accessible",
                "Growth makes the problem worse, not better",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#004225]/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-[#11100E]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl bg-[#F8F6EF] p-4">
              <p className="text-base font-bold text-[#11100E]">
                VantLaunch replaces that with custom software built around your business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
