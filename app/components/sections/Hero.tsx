"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { EASE_CURSOR } from "@/app/lib/constants";
import { heroTitleStagger, getHeroLineReveal, getHeroSubReveal } from "@/app/lib/motion-variants";
import { MagneticWrap } from "../UI";
import { HeroOrbitCollage } from "../HeroOrbitCollage";

export function HeroSection({ 
  prefersReducedMotion,
  onOpenProject 
}: { 
  prefersReducedMotion: boolean;
  onOpenProject: (slug: string) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  const lineReveal = getHeroLineReveal(prefersReducedMotion);
  const subReveal = getHeroSubReveal(prefersReducedMotion);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-20 pb-20 md:pb-28 lg:pb-36 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        style={prefersReducedMotion ? undefined : { y, opacity }}
      >
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_CURSOR }}
              className="mb-8 type-meta-uppercase !text-white/40"
            >
              Venture studio · products live in market
            </motion.div>

            <motion.h1
              variants={heroTitleStagger}
              initial="hidden"
              animate="visible"
              className="max-w-xl sm:max-w-2xl lg:max-w-[42rem]"
            >
              <motion.span variants={lineReveal} className="type-hero-line">
                Turn the idea in your head into
              </motion.span>
              <motion.span variants={lineReveal} className="type-hero-line-accent">
                software people use.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={subReveal}
              initial="hidden"
              animate="visible"
              className="type-intro mt-8 max-w-xl !text-zinc-500 leading-relaxed"
            >
              Strategy, brand-feel, and engineering together — from investor decks to the
              first time someone taps your product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE_CURSOR }}
              className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-center"
            >
              <MagneticWrap active={!prefersReducedMotion}>
                <Link
                  href="#ventures"
                  className="group/browse type-btn-ghost-prominent relative isolate inline-flex w-full sm:w-auto"
                >
                  <span className="relative">Browse work</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/browse:translate-x-0.5" />
                </Link>
              </MagneticWrap>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2">
                  {['AE', 'MS', 'JP'].map((initials) => (
                    <div
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc bg-zinc-surface text-[9px] font-bold text-white/80"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="type-caption-micro">
                  Product teams worldwide ship with us
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:col-span-7">
            <HeroOrbitCollage 
              reduced={prefersReducedMotion} 
              onOpenProject={onOpenProject}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
