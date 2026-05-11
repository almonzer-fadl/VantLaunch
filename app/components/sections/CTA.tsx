"use client";

import { motion } from "framer-motion";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

import { ContactForm } from "../ContactForm";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-zinc-surface/50 to-transparent px-6 py-24 pb-36 text-center md:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerSection}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.h2 variants={fadeSlide} className="type-cta-heading">
          Want to talk about <br />
          <span className="text-white/40">TeraMotors or Gari?</span>
        </motion.h2>

        <motion.div variants={fadeSlide}>
          <ContactForm />
        </motion.div>
        <motion.p variants={fadeSlide} className="mx-auto mt-8 max-w-xl text-sm text-zinc-400">
          Contact us at build@vantlaunch.com or use the form. We reply to relevant product inquiries directly.
        </motion.p>
      </motion.div>
    </section>
  );
}
