"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const FAQS = [
  {
    question: "How custom is the system?",
    answer:
      "Every system is built specifically for your business. We learn your workflows, your tools, and how your team operates before writing a single line of code. You are not adapting to a template — the system adapts to you.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most systems are delivered in 2–6 weeks depending on scope. A Starter engagement typically takes 1–2 weeks, Pro takes 2–4 weeks, and Mobile takes 3–6 weeks. Enterprise timelines are scoped individually. We show you working software early and iterate quickly.",
  },
  {
    question: "What happens after payment?",
    answer:
      "Once you choose an engagement option and complete checkout, we begin the Discovery phase. We learn your business, map your workflows, and confirm the scope. You see progress throughout the build — not just at the end. Each engagement includes post-launch support.",
  },
  {
    question: "Can it integrate with our existing software?",
    answer:
      "Yes. We connect with CRMs, accounting platforms, payment processors, analytics tools, spreadsheets, and other business software. If your tools have an API or export data, we can integrate them. Custom integrations are built specifically for your stack.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes — full source code ownership. Every system we build is yours. No vendor lock-in, no ongoing licensing fees for the core system, no subscription to access your own data. You receive the complete codebase and documentation at launch.",
  },
  {
    question: "Can it grow with our business?",
    answer:
      "Yes. Our systems are designed to scale. As your business grows — new team members, new workflows, new tools — the system grows with you. Post-launch, we offer ongoing optimization to keep your system aligned with how your business evolves.",
  },
  {
    question: "What if we need something beyond the engagement options?",
    answer:
      "The engagement options are common starting points, not rigid boxes. If you need something more custom or comprehensive, book a discovery call. We will scope your requirements and provide a transparent quote before any commitment.",
  },
];

function FaqItem({ item, isOpen, onToggle }: { item: (typeof FAQS)[number]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-black/10 bg-white shadow-mid overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 p-6 text-left"
      >
        <span className="text-base font-bold tracking-tight text-[#11100E] sm:text-lg">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
          style={{
            borderColor: isOpen ? "rgba(0,66,37,0.3)" : "rgba(0,0,0,0.1)",
            backgroundColor: isOpen ? "rgba(0,66,37,0.05)" : "transparent",
          }}
        >
          <motion.span
            className="text-lg font-light leading-none"
            style={{ color: isOpen ? "#004225" : "#74695B" }}
          >
            +
          </motion.span>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <motion.div
                initial={{ y: 8 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="h-px w-full bg-black/5 mb-4"
              />
              <p className="text-sm font-medium leading-relaxed text-[#74695B]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const { shouldReduceMotion } = useMobileMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">FAQ</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">Questions you might be asking.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            From ownership to timelines to integrations — everything you need to know before starting.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
