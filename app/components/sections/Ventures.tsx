"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  const parallaxA = useTransform(scrollYProgress, [0, 1], [20, -20]);
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
            <h2 className="type-display-lg">Product profile</h2>
            <p className="type-intro mt-6 max-w-xl !text-zinc-300">
              Two owned automotive software products: one live workshop platform and one trust-first service product in development.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerSection}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          <VentureCard 
            slug="teramotors"
            title="TeraMotors"
            description="Live workshop management SaaS for Saudi Arabia with job cards, ZATCA-ready invoicing, SAR reporting, and customer communication workflows."
            imageSrc="/media/teramotors-dashboard.webp"
            parallax={parallaxA}
            scale={scale}
            reduced={prefersReducedMotion}
            onOpen={onOpenProject}
            colSpan="md:col-span-6"
            liveHref="https://app.teramotor.cc/"
            liveLabel="Live app"
            detailLabel="Product case study"
          />

          <VentureCard 
            slug="gari"
            title="Gari"
            description="Coming soon: a transparent auto-service experience with workshop discovery, active job tracking, payments, and secure handover controls."
            imageSrc="/media/gari-home.webp"
            parallax={parallaxB}
            scale={scale}
            reduced={prefersReducedMotion}
            onOpen={onOpenProject}
            colSpan="md:col-span-6"
            imageClassName="object-contain object-center opacity-55"
            detailLabel="Product direction"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function VentureCard({
  slug,
  title,
  description,
  imageSrc,
  parallax,
  scale,
  reduced,
  onOpen,
  colSpan,
  liveHref,
  liveLabel = "Live site",
  imageClassName = "object-cover opacity-40",
  detailLabel = "Product details",
}: {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  parallax: import("framer-motion").MotionValue<number>;
  scale: import("framer-motion").MotionValue<number>;
  reduced: boolean;
  onOpen: (slug: string) => void;
  colSpan: string;
  liveHref?: string;
  liveLabel?: string;
  imageClassName?: string;
  detailLabel?: string;
}) {
  return (
    <motion.div variants={fadeSlide} className={colSpan}>
      <div onClick={() => onOpen(slug)} className="cursor-pointer h-full group">
        <CardPointerGlow className="relative min-h-[520px] overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-surface flex flex-col justify-end transition-colors hover:border-white/20 h-full">
          <motion.div
            className="absolute inset-0 z-0"
            style={reduced ? undefined : { y: parallax, scale }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className={`${imageClassName} transition-transform duration-700 group-hover:scale-105`}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc via-zinc/20 to-transparent" />
          
          <div className="relative z-10 p-10 md:p-12">
            <h3 className="type-portfolio-product-title">{title}</h3>
            <p className="type-portfolio-product-body text-zinc-200">{description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="type-link-strong">
                {detailLabel}
                <ArrowUpRight className="h-5 w-5" />
              </span>
              {liveHref && (
                <Link 
                  href={liveHref} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-link-soft text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  {liveLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </CardPointerGlow>
      </div>
    </motion.div>
  );
}
