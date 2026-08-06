"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PencilRuler, Code2, Rocket, Repeat } from "lucide-react";

const STEPS = [
  { icon: ClipboardCheck, title: "Discovery", num: "01" },
  { icon: PencilRuler, title: "Design", num: "02" },
  { icon: Code2, title: "Build", num: "03" },
  { icon: Rocket, title: "Launch", num: "04" },
  { icon: Repeat, title: "Improve", num: "05" },
];

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Our Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From discovery to continuous improvement
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal connector line — desktop */}
          <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-px bg-black/[0.06]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#004225] origin-left"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-black/10 shadow-mid mb-4 transition-shadow hover:shadow-lg"
                >
                  <step.icon className="h-7 w-7 text-[#004225]" />
                </motion.div>

                {/* Number */}
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#74695B]">
                  {step.num}
                </span>

                {/* Title */}
                <h3 className="mt-1 text-base font-bold tracking-tight text-[#11100E]">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
