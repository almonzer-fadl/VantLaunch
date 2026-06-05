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
    <section id="pricing" className="border-t border-black/[0.06] bg-[#F8F6EF] px-6 py-20 text-[#11100E] md:py-28">
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
          <p className="type-intro">
            We turn ideas into products — fast. Whether it&apos;s a workshop management system, voice-to-invoice tool,
            or a mobile service platform, the process stays the same.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={fadeSlide}
              className="rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:bg-black/[0.03]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] text-[#11100E]">
                <pillar.Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#11100E]">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-[#74695B]">{pillar.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeSlide} className="mt-12">
          <section className="rounded-2xl border border-black/10 bg-white p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-[#11100E] md:text-3xl">Have a product idea?</h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#74695B]">
              We take on select projects — from MVPs to full product builds. If you have a real business problem
              that needs a focused SaaS solution, let&apos;s talk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAILS.product}`}
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-transparent px-8 py-3.5 text-sm font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]"
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
