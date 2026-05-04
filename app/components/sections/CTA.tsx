"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { MagneticWrap } from "../UI";

import { ContactForm } from "../ContactForm";

export function CTASection({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-48 text-center md:py-64">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerSection}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <motion.h2 variants={fadeSlide} className="type-cta-heading">
          Ready for people to <br />
          <span className="text-white/40">experience your vision?</span>
        </motion.h2>

        <motion.div variants={fadeSlide}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
