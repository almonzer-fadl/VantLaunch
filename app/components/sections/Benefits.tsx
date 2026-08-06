"use client";

import { motion } from "framer-motion";
import { Cog, Zap, Layers } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const REASONS = [
  {
    icon: Cog,
    title: "Built Around Your Business",
    body: "Every system is designed around your existing workflow instead of forcing you into generic software. We learn how you operate and build software that fits — not the other way around.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    body: "Custom internal systems delivered in weeks, not months. We move quickly because we understand business operations — not just code. You see working software early and often.",
  },
  {
    icon: Layers,
    title: "One Connected Workspace",
    body: "Bring your tools, data, and operations together in one place. No more switching between platforms, exporting spreadsheets, or manually connecting the dots between disconnected systems.",
  },
];

export function BenefitsSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Why VantLaunch
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Custom systems that understand your business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            We are not a software agency shipping features. We are an operations studio that builds internal systems designed around how growing businesses actually work.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all duration-300 hover:shadow-lg hover:border-[#004225]/20 sm:p-8"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(400px circle at 30% 20%, rgba(0,66,37,0.04), transparent 70%)",
                }}
              />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#004225]/10 group-hover:bg-[#004225]/15 transition-colors"
                >
                  <reason.icon className="h-7 w-7 text-[#004225]" />
                </motion.div>
                <h3 className="text-lg font-bold tracking-tight text-[#11100E]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#74695B]">{reason.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
