"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PackageCheck, Settings2, Rocket, CheckCircle2 } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const STEPS = [
  {
    icon: PackageCheck,
    title: "01. Pick the product",
    description:
      "Choose the exact build from the catalog: tracking, dashboard, landing page, nurture system, CRM, portal, staff workflow, or operating system.",
  },
  {
    icon: ClipboardCheck,
    title: "02. Confirm the inputs",
    description:
      "We collect only what that product needs: brand assets, tool access, examples, fields, workflow notes, and the target outcome.",
  },
  {
    icon: Settings2,
    title: "03. Configure and build",
    description:
      "We build the selected product, connect the required tools, and send review links or screenshots as the system comes together.",
  },
  {
    icon: Rocket,
    title: "04. Launch and hand over",
    description:
      "You get the launched build, access details, handover notes, and optional maintenance if you want us to keep improving it.",
  },
];

export function ProcessSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="process" className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#74695B]">
            <CheckCircle2 className="h-3 w-3 text-[#004225]" />
            How we work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">
            A clear path from product to launch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            You do not need to invent the scope from scratch. Pick the product, send the inputs,
            review the build, and launch with a system you own.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-mid transition-all hover:bg-black/[0.03] sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.03]">
                <step.icon className="h-6 w-6 text-[#11100E]" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-[#11100E]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#74695B]">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-black/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0.45 : 1, delay: shouldReduceMotion ? 0.1 : i * 0.2 + 0.3 }}
                  className="h-full bg-[#11100E]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
