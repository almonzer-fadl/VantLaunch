"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const FAQS = [
  {
    question: "What exactly does VantLaunch build?",
    answer:
      "We build custom dashboards and business systems for growing companies. Our three solutions range from a single executive dashboard that combines all your business data, to a complete business operating system with custom software, automation and reporting.",
  },
  {
    question: "Do I own the final system?",
    answer:
      "Yes. You receive full access and ownership of the system we build for your business. It is built around your operations, not rented as a generic SaaS subscription.",
  },
  {
    question: "What is the Founding Client Program?",
    answer:
      "Our Founding Client Program offers discounted pricing for the first two clients per solution. This is not a sale — we are looking for early portfolio clients who want a premium system and are willing to provide feedback during the build process. After the two spots are claimed, standard pricing applies.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Executive Dashboards typically take 1-2 weeks. Business Dashboard Pro builds take 2-3 weeks. A full Business Operating System takes 3-6 weeks depending on complexity. Timelines depend on data access, integrations, and review speed.",
  },
  {
    question: "Can you integrate with the tools I already use?",
    answer:
      "Yes. We connect with Meta Ads, Google Ads, Stripe, HubSpot, GA4, CRMs, spreadsheets, and other business tools. The integrations are configured specifically for your stack.",
  },
  {
    question: "What if I need something more custom?",
    answer:
      "Every solution can be customized. The standard package gives you a proven starting point. Additional customizations are scoped and quoted before any work starts, so there are no surprises.",
  },
  {
    question: "What is not included?",
    answer:
      "We do not run your ads, manage your social media, or provide ongoing marketing services. We build the software layer: dashboards, systems, integrations, and automation that give you visibility and control over your business.",
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
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">Questions before you get started.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Everything you need to know about how we work, what you get, and how the Founding Client Program operates.
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
