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
    <section ref={sectionRef} id="ventures" className="border-t border-black/[0.06] bg-[#fffaf0] px-6 py-20 text-[#11100e] md:py-32">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="type-meta-uppercase mb-4">Coming up</p>
            <h2 className="type-display-lg">What we&apos;re building next.</h2>
            <p className="type-intro mt-6 max-w-xl">
              Products in development and early access — built with the same speed and standards.
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
          <SpeakBillPreviewCard onOpen={() => onOpenProject("speakbill")} />
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
    <motion.div variants={fadeSlide} className="md:col-span-8">
      <div onClick={onOpen} className="h-full cursor-pointer group">
        <CardPointerGlow className="relative flex h-full min-h-[520px] flex-col justify-end overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:bg-black/[0.03] lg:min-h-[560px]">
          <motion.div
            className="absolute inset-0 z-0 bg-[#eef2f8]"
            style={reduced ? undefined : { y: parallax, scale }}
          >
            <div className="absolute inset-x-6 top-8 flex justify-center gap-4 sm:gap-6 md:top-10">
              {[
                { src: "/media/gari-home.webp", alt: "Gari home screen" },
                { src: "/media/gari-activity.webp", alt: "Gari active jobs screen" },
              ].map((screen, index) => (
                <div
                  key={screen.src}
                  className={`w-[34%] min-w-[128px] max-w-[210px] overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] transition-transform duration-700 group-hover:scale-[1.025] ${
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
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-transparent" />

          <div className="relative z-10 max-w-2xl p-10 md:p-12">
            <h3 className="type-portfolio-product-title">Gari</h3>
            <p className="mt-3 text-lg leading-relaxed text-[#5f5548]">
              Find workshops, track service, manage vehicles, and pay from one mobile app.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#11100e]">
              View Gari screens
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </CardPointerGlow>
      </div>
    </motion.div>
  );
}

function SpeakBillPreviewCard({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div variants={fadeSlide} className="md:col-span-4">
      <div onClick={onOpen} className="h-full cursor-pointer group">
        <CardPointerGlow className="relative flex h-full min-h-[520px] flex-col justify-end overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:bg-black/[0.03] lg:min-h-[560px]">
          <div className="absolute inset-0 z-0 bg-[#eef2f8]">
            <div className="absolute inset-0 flex items-start justify-center pt-10">
              <div className="w-[42%] min-w-[140px] max-w-[200px] overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] transition-transform duration-700 group-hover:scale-[1.025]">
                <div className="relative aspect-[9/19] w-full">
                  <Image
                    src="/media/speakbill-phone-mic.png"
                    alt="SpeakBill voice input on phone"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-transparent" />
          
          <div className="absolute left-10 top-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white">
            <Image
              src="/media/speakbill-logo.png"
              alt="SpeakBill logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          
          <div className="relative z-10 max-w-2xl p-10 md:p-12">
            <h3 className="type-portfolio-product-title">SpeakBill</h3>
            <p className="mt-3 text-lg leading-relaxed text-[#5f5548]">
              Voice-to-invoice. Speak and get a clean invoice in seconds.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#11100e] transition-colors hover:text-[#004225]">
              View details
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </CardPointerGlow>
      </div>
    </motion.div>
  );
}
