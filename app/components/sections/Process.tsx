"use client";

import { motion } from "framer-motion";
import { Search, Layers, Send, CheckCircle2 } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const STEPS = [
  {
    icon: Search,
    title: "01. Roadmapping",
    description:
      "We start with a deep dive into your operations. We deliver a comprehensive Business Requirements Document (BRD) and UI wireframes. We define the edge cases before we write a single line of code.",
    color: "blue",
  },
  {
    icon: Layers,
    title: "02. Sprint-Based Dev",
    description:
      "Your product is built in 1-week sprints with a live staging environment you can access 24/7. We include design and feature revisions in every tier because we know software evolves as it&apos;s built.",
    color: "indigo",
  },
  {
    icon: Send,
    title: "03. Launch & Scale",
    description:
      "We handle the infrastructure setup (AWS/Vercel) and automated CI/CD pipelines. On final payment, we hand over full code ownership and provide 30 days of post-launch technical support.",
    color: "green",
  },
];

const STEP_STYLES = {
  blue: {
    glow: "bg-black/[0.02]",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    bar: "bg-[#11100e]",
  },
  indigo: {
    glow: "bg-black/[0.02]",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    bar: "bg-[#11100e]",
  },
  green: {
    glow: "bg-black/[0.02]",
    iconBg: "bg-black/[0.03]",
    iconText: "text-[#11100e]",
    bar: "bg-[#11100e]",
  },
} as const;

export function ProcessSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="process" className="border-t border-black/10 bg-[#f8f6ef] px-6 py-16 text-[#11100e] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#74695b]">
            <CheckCircle2 className="h-3 w-3 text-[#004225]" />
            Our Workflow
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100e] sm:text-4xl md:text-5xl">Built for speed, engineered for scale.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5f5548] sm:text-lg">
            Our process is designed to eliminate the &apos;agency black box.&apos; 
            You always know exactly what is being built and when it will ship.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const styles = STEP_STYLES[step.color as keyof typeof STEP_STYLES];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.12 }}
                className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] sm:p-10 transition-all hover:bg-black/[0.03]"
              >
                <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${styles.glow} blur-3xl`} />
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${styles.iconBg}`}>
                  <step.icon className={`h-8 w-8 ${styles.iconText}`} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#11100e]">{step.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#5f5548]">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-black/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduceMotion ? 0.45 : 1, delay: shouldReduceMotion ? 0.1 : i * 0.2 + 0.5 }}
                    className={`h-full ${styles.bar}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
