"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { WORK_STUBS } from "./stub-projects";
import { TeraMotorsContent } from "../work/teramotors/TeraMotorsContent";
import { GariPhonePreview, GariScreenGallery } from "./GariPhonePreview";
import { useMobileMotion } from "../hooks/use-mobile-motion";

type ProjectOverlayProps = {
  activeSlug: string | null;
  onClose: () => void;
};

export function ProjectOverlay({ activeSlug, onClose }: ProjectOverlayProps) {
  const { shouldReduceMotion } = useMobileMotion();

  useEffect(() => {
    if (activeSlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeSlug]);

  function renderContent(slug: string) {
    if (slug === "teramotors") return <TeraMotorsContent onClose={onClose} />;
    
    const config = WORK_STUBS[slug as keyof typeof WORK_STUBS];
    if (!config) return null;

    const isGari = slug === "gari";
    const isSpeakBill = slug === "speakbill";

    return (
      <div className="space-y-16">
        <section>
          <div className="mb-8 flex flex-wrap gap-2">
            {config.badges.map((b) => (
              <span key={b} className="type-chip">
                {b}
              </span>
            ))}
          </div>

          <h1 className="type-case-h1">{config.title}</h1>
          <p className="type-case-lede max-w-3xl">{config.lede}</p>
          
          {config.detail && (
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#5f5548]">{config.detail}</p>
          )}

          {config.capabilities.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2">
              {config.capabilities.map((cap) => (
                <li key={cap}>
                  <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-bold text-[#5f5548]">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        {isGari ? (
          <div className="space-y-12">
            <GariPhonePreview />
            <GariScreenGallery />
          </div>
        ) : isSpeakBill ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { src: "/media/speakbill-dashboard.png", alt: "SpeakBill dashboard" },
              { src: "/media/speakbill-mic.png", alt: "SpeakBill voice input" },
              { src: "/media/speakbill-invoice-preview.png", alt: "SpeakBill invoice preview" },
              { src: "/media/speakbill-invoice-review.png", alt: "SpeakBill invoice review" },
            ].map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_70px_-45px_rgba(0,0,0,0.7)]">
                <div className="relative aspect-[16/10] w-full bg-[#eef2f8]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-contain object-center"
                  />
                </div>
              </figure>
            ))}
          </div>
        ) : (
          <figure className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)]">
            <div className="relative mx-auto aspect-[780/2232] w-full max-w-sm bg-white sm:max-w-md">
              <Image
                src={config.imageSrc}
                alt={config.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-contain object-top"
              />
            </div>
          </figure>
        )}

        <ul className="max-w-3xl space-y-4">
          {config.bullets.map((item) => (
            <li key={item} className="flex gap-4 text-lg text-[#5f5548]">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11100e]/30" />
              {item}
            </li>
          ))}
        </ul>

        <section className="rounded-2xl border border-black/10 bg-white p-10 shadow-[0_14px_45px_-36px_rgba(17,16,14,0.3)] md:p-14">
          {isSpeakBill ? (
            <div>
              <h3 className="text-2xl font-bold text-[#11100e]">Ready to try SpeakBill?</h3>
              <p className="mt-4 max-w-2xl text-lg text-[#5f5548]">
                Live now. Start creating invoices by voice in seconds.
              </p>
              <a
                href="https://speakbill.vantlaunch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="type-email-cta-solid mt-10 inline-flex"
              >
                Visit SpeakBill
                <ArrowUpRight className="h-5 w-5 opacity-70" />
              </a>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-[#11100e]">Want updates on Gari?</h3>
              <p className="mt-4 max-w-2xl text-lg text-[#5f5548]">
                Send a note if you want to follow the product, discuss pilot interest, or talk about
                automotive workflows.
              </p>
              <button
                onClick={() => {
                  onClose();
                  window.location.hash = "contact";
                }}
                className="type-email-cta-solid mt-10"
              >
                <Mail className="h-5 w-5" />
                Contact VantLaunch
                <ArrowUpRight className="h-5 w-5 opacity-50" />
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {activeSlug && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.25 }}
            className="absolute inset-0 bg-[#11100e]/35 sm:backdrop-blur-lg"
          />
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 16 : 40, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 16 : 40, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                : { type: "spring", stiffness: 200, damping: 25 }
            }
            className="relative h-full w-full max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-[#f8f6ef] text-[#11100e] shadow-[0_28px_90px_-60px_rgba(17,16,14,0.42)]"
          >
            <div className="absolute right-8 top-8 z-50">
              <button
                onClick={onClose}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-[#74695b] shadow-[0_10px_30px_-22px_rgba(17,16,14,0.45)] transition-all hover:bg-black/[0.03] hover:text-[#11100e] sm:backdrop-blur-md"
                aria-label="Close overlay"
              >
                <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            <div className="h-full overflow-y-auto scroll-smooth px-8 py-16 md:px-20 md:py-24">
              <div className="relative z-10 mx-auto max-w-4xl">
                {renderContent(activeSlug)}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
