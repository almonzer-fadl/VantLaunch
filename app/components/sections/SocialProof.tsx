"use client";

import { motion } from "framer-motion";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const QUOTES = [
  {
    quote:
      "The team shipped a usable build in week one, then improved it every sprint with real operator feedback.",
    byline: "Operations Lead · Logistics SaaS pilot",
  },
  {
    quote:
      "What stood out was execution speed without chaos. Product decisions were practical and measurable.",
    byline: "Founder · B2B workflow startup",
  },
  {
    quote:
      "Communication stayed clear, and every release moved adoption forward instead of adding noise.",
    byline: "Product Manager · Marketplace platform",
  },
] as const;

export function SocialProofSection() {
  return (
    <section id="proof" className="border-t border-white/5 bg-zinc-surface/35 px-6 py-20 md:py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-10 text-center md:mb-12">
          <p className="type-meta-uppercase mb-4">Social proof</p>
          <h2 className="type-display-xl mb-5 text-balance">What teams say after shipping with us.</h2>
          <p className="type-intro mx-auto max-w-2xl text-center text-zinc-300">
            Placeholder reviews below are layout-ready and will be replaced with verified client quotes.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-4 md:grid-cols-3">
          {QUOTES.map((item) => (
            <motion.blockquote
              key={item.byline}
              variants={fadeSlide}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm leading-relaxed text-zinc-200">“{item.quote}”</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {item.byline}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
