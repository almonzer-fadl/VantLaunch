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
          Let's build <br />
          <span className="text-white/40">something.</span>
        </motion.h2>

        <motion.p variants={fadeSlide} className="mx-auto mt-6 max-w-xl text-base text-zinc-400">
          Whether you need a product built, want early access to SpeakBill, or just want to talk shop — reach out.
        </motion.p>

        <motion.div variants={fadeSlide} className="mt-10">
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
