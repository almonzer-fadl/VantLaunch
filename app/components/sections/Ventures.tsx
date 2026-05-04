"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";
import { HOME_PREVIEW_STUB_ORDER, WORK_STUBS } from "../stub-projects";
import { CardPointerGlow, TiltSpecular } from "../UI";

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

  const extraVentures = HOME_PREVIEW_STUB_ORDER.map((slug) => {
    const s = WORK_STUBS[slug as keyof typeof WORK_STUBS];
    return {
      key: slug,
      slug: s.slug,
      imageSrc: s.imageSrc,
      imageAlt: s.imageAlt,
      badges: s.badges,
      title: s.title,
      description: s.cardSummary,
      imgClass: s.previewImgClass,
    };
  });

  return (
    <section ref={sectionRef} id="ventures" className="py-32 px-6 border-t border-white/5">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="type-display-lg">Work you can feel</h2>
            <p className="type-intro mt-6 max-w-xl !text-zinc-500">
              Real products in market—from enterprise ops to everyday tools—with care for trust,
              compliance, and joy in the details.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerSection}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          {/* Main Case Studies */}
          <VentureCard 
            slug="teramotors"
            title="TeraMotors"
            description="Enterprise auto repair ops — bilingual UX, realtime job boards, Stripe, and invoicing flows."
            badges={["Automotive", "Enterprise"]}
            imageSrc="/teramotors.png"
            parallax={parallaxA}
            scale={scale}
            reduced={prefersReducedMotion}
            onOpen={onOpenProject}
            colSpan="md:col-span-6"
            liveHref="https://app.teramotor.cc/"
          />

          <VentureCard 
            slug="salasel"
            title="Salasel"
            description="Procurement for hotels, cafés, and catering crews — BNPL-ready buying and logistics orchestration."
            badges={["B2B marketplace", "HORECA"]}
            imageSrc="/salasel-hero.png"
            parallax={parallaxB}
            scale={scale}
            reduced={prefersReducedMotion}
            onOpen={onOpenProject}
            colSpan="md:col-span-6"
            liveHref="https://salasel.com.sa/"
          />

          {/* Smaller Venture Cards */}
          {extraVentures.map((v) => (
            <motion.div key={v.key} variants={fadeSlide} className="md:col-span-4">
              <div onClick={() => onOpenProject(v.slug)} className="cursor-pointer h-full group">
                <TiltSpecular disabled={prefersReducedMotion} className="h-full">
                  <CardPointerGlow className="relative h-full min-h-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-surface p-8 md:p-10 flex flex-col justify-end transition-colors hover:border-white/20">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={v.imageSrc}
                        alt={v.imageAlt}
                        fill
                        className={`object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 ${v.imgClass}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc via-zinc/60 to-transparent" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {v.badges.map((b) => (
                          <Badge key={b}>{b}</Badge>
                        ))}
                      </div>
                      <h3 className="type-portfolio-card-title">{v.title}</h3>
                      <p className="type-portfolio-card-body line-clamp-2">{v.description}</p>
                      <span className="type-link-strong text-sm">
                        View project
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardPointerGlow>
                </TiltSpecular>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function VentureCard({ 
  slug, title, description, badges, imageSrc, parallax, scale, reduced, onOpen, colSpan, liveHref 
}: any) {
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
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc via-zinc/20 to-transparent" />
          
          <div className="relative z-10 p-10 md:p-12">
            <div className="mb-6 flex flex-wrap gap-2">
              {badges.map((b: string) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
            <h3 className="type-portfolio-product-title">{title}</h3>
            <p className="type-portfolio-product-body">{description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="type-link-strong">
                Full case study
                <ArrowUpRight className="h-5 w-5" />
              </span>
              {liveHref && (
                <Link 
                  href={liveHref} 
                  target="_blank"
                  className="type-link-soft text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live site
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

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="type-badge-pill">{children}</span>;
}
