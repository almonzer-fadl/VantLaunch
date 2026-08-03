"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, ShieldCheck, RefreshCw } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const BENEFITS = [
  {
    icon: BarChart3,
    title: "Complete visibility",
    body: "See all of your business data in one dashboard. No more switching between 8 different tools just to understand how your company is performing.",
  },
  {
    icon: Zap,
    title: "Stop wasting time on manual reports",
    body: "Your team spends hours pulling data from different platforms. Automate reporting so they can focus on what actually moves the business forward.",
  },
  {
    icon: ShieldCheck,
    title: "You own the system",
    body: "Unlike SaaS subscriptions that lock you in and increase prices, our systems are built for your business with full source ownership. No vendor lock-in.",
  },
  {
    icon: RefreshCw,
    title: "Automated, always-on reporting",
    body: "Real-time dashboards that update automatically. Integrations that work without manual intervention. Reports that arrive in your inbox, not your to-do list.",
  },
];

export function BenefitsSection() {
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
            Benefits
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why growing companies choose VantLaunch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            We build software that fits around your business — not subscriptions that force your business to fit around software.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.08 }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.03]">
                <benefit.icon className="h-6 w-6 text-[#11100E]" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#11100E]">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#74695B]">{benefit.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
