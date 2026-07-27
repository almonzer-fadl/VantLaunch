"use client";

import { motion } from "framer-motion";

const FAQS = [
  {
    question: "What kind of projects fit VantLaunch best?",
    answer:
      "Internal dashboards, client portals, marketplace flows, mobile apps, invoicing tools, operations systems, and micro-SaaS products with clear business logic.",
  },
  {
    question: "How do fixed prices work?",
    answer:
      "We define the scope, core views, integrations, and edge cases before development starts. If the product direction changes, we price the new scope clearly instead of drifting into hourly ambiguity.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. After final payment, you receive source access and the production handover details needed to run, maintain, or extend the product.",
  },
  {
    question: "Can you improve an existing product?",
    answer:
      "Yes, as long as the codebase is healthy enough to build on. We can redesign flows, add dashboards, improve onboarding, wire payments, or rebuild weak areas.",
  },
];

export function FAQSection() {
  return (
    <section className="border-t border-black/10 bg-[#fffaf0] px-6 py-24 text-[#11100e] md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#74695b]">FAQ</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100e] sm:text-4xl md:text-5xl">Questions buyers ask before trusting a studio.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f5548] sm:text-lg">
            The goal is to remove uncertainty before someone reaches the contact form.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_45px_-36px_rgba(17,16,14,0.28)] open:bg-black/[0.02]"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-bold tracking-tight text-[#11100e] marker:hidden">
                <span className="flex items-center justify-between gap-5">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#74695b] transition-colors group-open:text-[#11100e]">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#5f5548]">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
