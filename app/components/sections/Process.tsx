"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Wrench, RefreshCw, CheckCircle2 } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const STEPS = [
  {
    icon: Search,
    title: "01. Map your process",
    description:
      "We dig into how your business actually runs — the tools you use, the manual steps, the spreadsheets, the WhatsApp threads. We document the workflows before we touch a line of code.",
  },
  {
    icon: PenTool,
    title: "02. Design the operating system",
    description:
      "We define the screens, data models, user roles, and integrations that turn your process into a coherent product. You get wireframes, a BRD, and a clear scope before the build starts.",
  },
  {
    icon: Wrench,
    title: "03. Build and connect the workflows",
    description:
      "Your system is built in short sprints with a live staging environment you can access daily. We connect the pieces — website, portal, CRM, invoicing, analytics — into one platform.",
  },
  {
    icon: RefreshCw,
    title: "04. Launch, maintain, and improve",
    description:
      "We handle deployment, hand over source access, and begin the monthly retainer — hosting, bug fixes, security updates, content changes, analytics reviews, and ongoing improvements.",
  },
];

export function ProcessSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="process" className="border-t border-black/10 bg-[#fbf4e2] px-6 py-16 text-[#17140d] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7657]">
            <CheckCircle2 className="h-3 w-3 text-[#00401f]" />
            How we work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#17140d] sm:text-4xl md:text-5xl">
            From scattered tools to one operating system.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#695b45] sm:text-lg">
            Four steps from your current mess to a system you own. No black box.
            You see the work at every stage.
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
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-[0_18px_55px_-42px_rgba(23,20,13,0.35)] transition-all hover:bg-black/[0.03] sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.03]">
                <step.icon className="h-6 w-6 text-[#17140d]" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-[#17140d]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#695b45]">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-black/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0.45 : 1, delay: shouldReduceMotion ? 0.1 : i * 0.2 + 0.3 }}
                  className="h-full bg-[#17140d]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
