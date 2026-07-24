"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { CardPointerGlow } from "../UI";

export function VenturesSection({ 
  prefersReducedMotion,
  onOpenProject 
}: { 
  prefersReducedMotion: boolean;
  onOpenProject: (slug: string) => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxB = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section ref={sectionRef} id="ventures" className="border-t border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent px-6 py-20 md:py-32">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="type-meta-uppercase mb-4">Gari preview</p>
            <h2 className="type-display-lg">Auto service, built around trust.</h2>
            <p className="type-intro mt-6 max-w-xl !text-zinc-300">
              Gari previews a smoother way for drivers to find workshops, manage vehicles, track jobs, and pay with confidence.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerSection}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          <GariVentureCard
            parallax={parallaxB}
            scale={scale}
            reduced={prefersReducedMotion}
            onOpen={() => onOpenProject("gari")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function GariVentureCard({
  parallax,
  scale,
  reduced,
  onOpen,
}: {
  parallax: import("framer-motion").MotionValue<number>;
  scale: import("framer-motion").MotionValue<number>;
  reduced: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div variants={fadeSlide} className="md:col-span-12">
      <div onClick={onOpen} className="h-full cursor-pointer group">
        <CardPointerGlow className="relative flex h-full min-h-[520px] flex-col justify-end overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-surface transition-colors hover:border-white/20 lg:min-h-[560px]">
          <motion.div
            className="absolute inset-0 z-0 bg-[#070b14]"
            style={reduced ? undefined : { y: parallax, scale }}
          >
            <div className="absolute inset-x-6 top-8 flex justify-center gap-4 sm:gap-6 md:top-10">
              {[
                { src: "/media/gari-home.webp", alt: "Gari home screen" },
                { src: "/media/gari-activity.webp", alt: "Gari active jobs screen" },
              ].map((screen, index) => (
                <div
                  key={screen.src}
                  className={`w-[34%] min-w-[128px] max-w-[210px] overflow-hidden rounded-[1.6rem] border border-white/12 bg-white shadow-[0_26px_90px_-42px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:scale-[1.025] ${
                    index === 1 ? "mt-10" : ""
                  }`}
                >
                  <div className="relative aspect-[9/19] w-full">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="190px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc via-zinc/35 to-transparent" />

          <div className="relative z-10 max-w-2xl p-10 md:p-12">
            <h3 className="type-portfolio-product-title">Gari</h3>
            <p className="type-portfolio-product-body text-zinc-200">
              Find workshops, track service, manage vehicles, and pay from one mobile app.
            </p>
            <span className="type-link-strong">
              View Gari screens
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </CardPointerGlow>
      </div>
    </motion.div>
  );
}
