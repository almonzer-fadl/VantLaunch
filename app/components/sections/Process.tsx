"use client";

import { motion } from "framer-motion";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { PROCESS_PHASES, PROCESS_FLOW_PATH_D, EASE_CURSOR } from "@/app/lib/constants";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/5 bg-zinc-surface/[0.34] py-28 px-6 md:py-36"
    >
      <motion.div
        className="relative z-[1] mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-24 max-w-2xl">
          <p className="type-meta-uppercase mb-4">How we work</p>
          <h2 className="type-display-lg">From first sketch to launch day</h2>
          <p className="type-intro mt-6 max-w-xl text-zinc-300">
            One continuous pipeline—ideas become interfaces, interfaces become builds, builds become
            something people can actually use.
          </p>
        </motion.div>

        {/* Desktop Process Flow */}
        <div className="relative mx-auto hidden max-w-6xl lg:block">
          <div className="relative mx-auto h-[5.5rem] w-full max-w-[56rem] px-2 mb-12">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 900 84"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <path
                d={PROCESS_FLOW_PATH_D}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.path
                d={PROCESS_FLOW_PATH_D}
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: EASE_CURSOR }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {PROCESS_PHASES.map((phase) => (
              <motion.div
                key={phase.num}
                variants={fadeSlide}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-10 h-24 w-24 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <phase.Icon className="h-8 w-8" />
                  <span className="absolute -top-3 -right-3 h-8 w-8 rounded-full border border-white/10 bg-zinc flex items-center justify-center text-[10px] font-bold">
                    {phase.num}
                  </span>
                </div>
                <h3 className="type-process-title">{phase.title}</h3>
                <p className="type-process-desc max-w-[18rem]">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="flex flex-col gap-12 lg:hidden">
          {PROCESS_PHASES.map((phase) => (
            <motion.div
              key={phase.num}
              variants={fadeSlide}
              className="flex gap-6"
            >
              <div className="h-16 w-16 shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                <phase.Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="type-meta-uppercase opacity-50">{phase.num}</span>
                <h3 className="text-xl font-bold text-white mt-1">{phase.title}</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
