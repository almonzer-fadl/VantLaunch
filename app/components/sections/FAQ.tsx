"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const FAQS = [
  {
    question: "Am I buying a fixed product or hiring you hourly?",
    answer:
      "You are buying a fixed productized build. Each product has a clear starting price, deliverables, and outcome. If you need extra scope, we quote that add-on before work starts.",
  },
  {
    question: "Do I own the final system?",
    answer:
      "Yes. For custom builds, portals, CRM systems, landing pages, and operating systems, you receive the handover details needed to run, maintain, or extend the system. It is built for your business, not rented as a generic template.",
  },
  {
    question: "What if I am not sure which product I need?",
    answer:
      "Choose the closest product and explain the situation in the request form. We will either confirm the fit, recommend a smaller build, or tell you which product matches the business need better.",
  },
  {
    question: "Can you integrate with tools I already use?",
    answer:
      "Yes, when the selected product requires it. Common examples include ad platforms, analytics, CRMs, forms, payment processors, email providers, WhatsApp, SMS, and spreadsheets.",
  },
  {
    question: "How long do these products take?",
    answer:
      "Small builds like tracking, dashboards, CRM setup, and landing pages are usually measured in days. Portal, staff workflow, and operating system builds take longer depending on access, content, integrations, and review speed.",
  },
  {
    question: "Can you customize one of the products?",
    answer:
      "Yes. The catalog gives you a starting point, not a vague conversation. Small adjustments are normal. Bigger changes are quoted as add-ons so the project stays clear.",
  },
  {
    question: "What is not included?",
    answer:
      "We do not run your ads, manage your social media, write long-form SEO content, or create full brand identities. We build the product layer: tracking, pages, dashboards, CRM, automation, portals, workflows, and operating systems.",
  },
];

export function FAQSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="faq" className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">FAQ</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">Questions before you buy a build.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            The point is clarity before payment: what you get, what can be customized, and what is outside the product.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: shouldReduceMotion ? 0.28 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.04 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-mid open:bg-black/[0.02]"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-base font-bold tracking-tight text-[#11100E] marker:hidden sm:text-lg">
                <span className="flex items-center justify-between gap-5">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#74695B] transition-colors group-open:text-[#11100E]">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#74695B]">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
