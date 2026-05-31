"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Rocket, Repeat, Users } from "lucide-react";
import { CONTACT_EMAILS } from "@/app/lib/constants";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const PILLARS = [
  {
    title: "We build fast",
    body: "Zero to live in weeks, not months. Tight scope, clean execution, real users from day one.",
    Icon: Code,
  },
  {
    title: "We ship for scale",
    body: "Every product is engineered to handle growth — from the first user to the hundred thousandth.",
    Icon: Rocket,
  },
  {
    title: "We iterate on traction",
    body: "No vanity metrics. We measure adoption, retention, and revenue — then double down on what works.",
    Icon: Repeat,
  },
  {
    title: "We work directly",
    body: "You talk to the builders — no account managers, no handoffs, no fluff.",
    Icon: Users,
  },
] as const;

export function TeraMotorsPricingSection() {
  return (
    <section id="pricing" className="border-t border-white/5 bg-zinc-surface/30 px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <p className="type-meta-uppercase mb-4">How we work</p>
          <h2 className="type-display-xl mb-5 text-balance">Build. Ship. Scale.</h2>
          <p className="type-intro text-zinc-300">
            We turn ideas into products — fast. Whether it's a workshop management system, voice-to-invoice tool,
            or a mobile service platform, the process stays the same.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={fadeSlide}
              className="rounded-2xl border border-white/10 bg-zinc-surface/70 p-6 transition-colors hover:border-white/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                <pillar.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{pillar.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeSlide} className="mt-12">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Have a product idea?</h3>
            <p className="mt-4 mx-auto max-w-xl text-base text-zinc-400 leading-relaxed">
              We take on select projects — from MVPs to full product builds. If you have a real business problem
              that needs a focused SaaS solution, let's talk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(255,255,255,0.5)]"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAILS.product}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {CONTACT_EMAILS.product}
              </a>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
}
