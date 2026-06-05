"use client";

import { motion } from "framer-motion";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const FAQS = [
  {
    question: "Do I own the code?",
    answer:
      "Yes. After the build is complete, you receive full source access and the production handover details needed to run, maintain, or extend the system however you want. It's yours.",
  },
  {
    question: "What happens if I stop the retainer?",
    answer:
      "You keep the system and the code. We stop providing hosting support, maintenance, updates, and fixes. If you have your own team or want to self-manage, you can. Most clients stay on retainer because we keep everything running and improving month to month.",
  },
  {
    question: "Can this replace my current tools?",
    answer:
      "In most cases, yes. We've replaced combinations of websites, CRMs, invoicing apps, spreadsheets, WhatsApp workflows, analytics dashboards, and file-sharing tools with one owned system. During scoping, we map what you currently use and show what gets replaced.",
  },
  {
    question: "Can you integrate with tools I already use?",
    answer:
      "Yes. If there's a tool you can't or don't want to replace — accounting software, payment processors, email providers — we build the integrations so your system talks to them.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Foundation projects typically take 2-4 weeks. Portal builds run 4-8 weeks. Command and OS engagements are scoped per project — usually 8-16 weeks depending on complexity. Every project starts with a roadmap so you know the timeline before we start.",
  },
  {
    question: "Do you build mobile apps too?",
    answer:
      "Yes. We build responsive web apps that work on every device, and native iOS and Android apps when the project needs them. If your clients need to log in from their phones, we design for that from day one.",
  },
  {
    question: "What is not included?",
    answer:
      "We don't do branding or logo design. We don't run your social media or manage ad campaigns. We don't do SEO content writing (though we build the technical SEO structure). We build the operating system — the product layer your business runs on.",
  },
];

export function FAQSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">FAQ</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">Questions smart buyers ask before committing.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Clear answers so there are no surprises — before you even reach the contact form.
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
