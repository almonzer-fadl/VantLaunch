"use client";

import { motion } from "framer-motion";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { STACK_TECH } from "@/app/lib/constants";

const PRINCIPLES = [
  {
    title: "Fast feedback loops",
    body: "You see product movement every week, not slide decks every month.",
  },
  {
    title: "Direct builder access",
    body: "You work with the people shipping the product, design to production.",
  },
  {
    title: "Launch with intent",
    body: "Every decision is tied to adoption, retention, or revenue motion.",
  },
] as const;

const STATS = ["2 ventures live", "3 client builds shipped", "~7 day release rhythm"] as const;

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden border-t border-white/5 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.06),transparent_45%)] px-6 py-24 md:py-28"
    >
      <motion.div
        className="relative mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mx-auto max-w-3xl text-center">
          <p className="type-meta-uppercase mb-4">Why teams choose us</p>
          <h2 className="type-display-xl mb-5 text-balance">Built like founders, shipped like operators.</h2>
          <p className="type-intro text-zinc-300">
            Product strategy, interface systems, and engineering execution in one team so your launch
            does not stall between discovery and delivery.
          </p>
        </motion.div>

        <motion.ul
          variants={fadeSlide}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm"
        >
          {STATS.map((item) => (
            <li key={item} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-zinc-200">
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeSlide}
          className="mt-10 grid gap-3 sm:grid-cols-3"
        >
          {PRINCIPLES.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-zinc-surface/70 p-5"
            >
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeSlide} className="mt-10 border-t border-white/10 pt-6">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            Stack we ship with
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc to-transparent" />

            <motion.ul
              className="flex min-w-max items-center gap-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {[...STACK_TECH, ...STACK_TECH].map((tech, idx) => (
                <li
                  key={`${tech.label}-${idx}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
                  aria-label={tech.label}
                  title={tech.label}
                >
                  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
                    <path d={tech.icon.path} />
                  </svg>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
