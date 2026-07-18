"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { MagneticWrap } from "../UI";

export function CTASection({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <section className="relative overflow-hidden px-6 py-48 text-center md:py-64">
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

        <motion.p variants={fadeSlide} className="type-intro mx-auto mt-8 max-w-xl">
          Send a note to{" "}
          <a
            className="text-white underline underline-offset-4 decoration-white/20 transition-colors hover:decoration-white/50"
            href="mailto:build@vantlaunch.com"
          >
            build@vantlaunch.com
          </a>
          — we&apos;ll reply within a business day with warm, straightforward next steps.
        </motion.p>

        <motion.div variants={fadeSlide} className="mt-12">
          <MagneticWrap active={!prefersReducedMotion} className="inline-block">
            <Link href="mailto:build@vantlaunch.com" className="type-email-cta-solid">
              <span className="relative z-[1] flex items-center gap-3">
                Start your project
                <Rocket className="h-6 w-6" />
              </span>
            </Link>
          </MagneticWrap>
        </motion.div>
      </motion.div>
    </section>
  );
}
