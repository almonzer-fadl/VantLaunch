"use client";

import { motion } from "framer-motion";
import {
  siMeta,
  siGoogleads,
  siStripe,
  siHubspot,
  siGoogleanalytics,
  siGooglesheets,
  siWhatsapp,
  siGmail,
} from "simple-icons";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const DATA_SOURCES = [
  { name: "Meta Ads", icon: siMeta, color: "#1877F2" },
  { name: "Google Ads", icon: siGoogleads, color: "#4285F4" },
  { name: "Stripe", icon: siStripe, color: "#635BFF" },
  { name: "HubSpot", icon: siHubspot, color: "#FF7A59" },
  { name: "GA4", icon: siGoogleanalytics, color: "#E37400" },
  { name: "Sheets", icon: siGooglesheets, color: "#34A853" },
  { name: "WhatsApp", icon: siWhatsapp, color: "#25D366" },
  { name: "Email", icon: siGmail, color: "#EA4335" },
];

const STATS = [
  { value: "6+", label: "Platforms checked per decision", sub: "on average" },
  { value: "5-10h", label: "Lost to manual reporting", sub: "per manager per week" },
  { value: "3-5d", label: "Delay on decisions", sub: "because data isn't ready" },
];

function BrandIcon({ icon, color }: { icon: typeof siMeta; color: string }) {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
      style={{ color }}
      dangerouslySetInnerHTML={{
        __html: icon.svg.replace(/<svg /, '<svg width="20" height="20" ').replace(/fill="[^"]*"/g, 'fill="currentColor"'),
      }}
      aria-hidden
    />
  );
}

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
            As your business grows, your data scatters across more tools. Every new platform adds another place to check. Your team spends hours switching between tabs instead of making decisions.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: 0.05 }}
          className="mb-12 grid gap-4 sm:grid-cols-3"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.28 : 0.45, delay: shouldReduceMotion ? 0 : i * 0.06 }}
              className="rounded-xl border border-black/10 bg-white px-5 py-4 shadow-mid text-center"
            >
              <p className="text-2xl font-bold tracking-tight text-[#004225]">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#74695B]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-[10px] text-[#74695B]/60">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Brand logos grid */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#74695B] mb-5">
              Your data is scattered across
            </p>
            <div className="grid grid-cols-4 gap-3">
              {DATA_SOURCES.map((source, i) => (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: shouldReduceMotion ? 0.2 : 0.35, delay: shouldReduceMotion ? 0 : i * 0.04 }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-black/10 bg-white p-4 shadow-mid hover:border-black/20 transition-colors"
                >
                  <BrandIcon icon={source.icon} color={source.color} />
                  <span className="text-[10px] font-bold text-[#74695B]">{source.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The cost */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="rounded-2xl border border-[#004225]/20 bg-white p-6 shadow-mid sm:p-8"
          >
            <h3 className="text-lg font-bold tracking-tight text-[#004225]">The Cost of Disconnected Data</h3>
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
