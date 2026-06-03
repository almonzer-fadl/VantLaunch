"use client";

import { motion } from "framer-motion";
import { FileText, Code, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    title: "We plan it.",
    description:
      "You tell us what you need. We write a detailed Business Requirements Document — every page, every feature, every workflow. You approve it. No coding until we agree on exactly what gets built.",
  },
  {
    icon: Code,
    title: "We build it.",
    description:
      "3 weeks for dashboards. 2 months for full portals. You get regular updates and a preview environment. 2 design revisions and 2 feature revisions included — because good work needs feedback.",
  },
  {
    icon: Rocket,
    title: "We ship it.",
    description:
      "Deployed to your infrastructure or ours. Code ownership transfers to you on final payment. We stick around for support — optional retainer for ongoing maintenance and updates.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="divider px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="badge mb-4 inline-block">Process</span>
          <h2 className="type-section-heading">How we work.</h2>
          <p className="type-section-sub mx-auto">
            No ambiguity. No scope creep. Three steps from idea to launch.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-premium text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                <step.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="type-card-title">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
