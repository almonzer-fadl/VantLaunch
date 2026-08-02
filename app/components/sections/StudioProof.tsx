"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, FileCheck, Rocket, ShieldCheck } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const DELIVERABLES = [
  "Business requirements document",
  "Product flows and wireframes",
  "Responsive production UI",
  "Database and API implementation",
  "Auth, roles, billing, or integrations",
  "Deployment and handover",
];

const PRINCIPLES = [
  {
    icon: FileCheck,
    title: "Scope before speed",
    body: "We map the business logic first so the build does not turn into expensive guessing.",
  },
  {
    icon: Code2,
    title: "Real product engineering",
    body: "The work is built as software you own, not a fragile prototype that only looks good in a deck.",
  },
  {
    icon: Rocket,
    title: "Launch-oriented delivery",
    body: "Every sprint moves toward a usable staging product, production deployment, and clean handover.",
  },
  {
    icon: ShieldCheck,
    title: "Clear ownership",
    body: "Final payment means source access, product assets, and a path to maintain or extend the system.",
  },
];

export function StudioProofSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.55 }}
          >
            <span className="inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
              How we deliver
            </span>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              A lease on nothing. Full ownership of everything.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#74695B] sm:text-lg">
              TeraMotors went from a paper-based workshop to a live operating system in 5 weeks.
              SpeakBill shipped in 3. Every project follows the same pattern — requirements doc,
              wireframes, working product, source handover, monthly maintenance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.55, delay: shouldReduceMotion ? 0 : 0.05 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid md:p-8"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-[#F8F6EF] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#11100E]" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {PRINCIPLES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: shouldReduceMotion ? 0.28 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <item.icon className="h-8 w-8 text-[#11100E]" />
              <h3 className="mt-5 text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#74695B]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
