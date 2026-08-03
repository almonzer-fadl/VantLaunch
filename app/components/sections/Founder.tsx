"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

export function FounderSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-20 text-[#11100E] sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">
          Who builds it
        </p>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.28 : 0.45 }}
          className="rounded-2xl border border-black/10 bg-white p-8 shadow-mid sm:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image
                src="/ECD244A5-703A-489F-B35D-1C8C595E1A1E.JPG"
                alt="Almonzer Fadl"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight sm:text-2xl">Almonzer Fadl</p>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#004225]">
                Founder & Software Engineer
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-[#74695B] sm:text-base">
            VantLaunch helps businesses replace spreadsheets, WhatsApp workflows, disconnected tools,
            and repetitive admin work with custom software systems they fully own.
            Every project is built around the client&apos;s actual operations, not around software
            subscriptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
