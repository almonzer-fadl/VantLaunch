"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const TESTIMONIALS = [
  {
    quote: "VantLaunch transformed how we see our business. Instead of jumping between 7 different platforms, we now have one dashboard that tells us everything we need to know.",
    name: "Founding client",
    role: "Coming soon",
  },
  {
    quote: "The automation alone saves our team 15+ hours per week. Reports that used to take days are now generated automatically every morning.",
    name: "Early partner",
    role: "Coming soon",
  },
  {
    quote: "We went from spreadsheets and guesswork to a real business system in weeks. The team actually uses it because it was built around our workflow.",
    name: "Portfolio client",
    role: "Coming soon",
  },
];

export function TestimonialsSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by growing businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            We are currently building for our first founding clients. These testimonials will be updated as each project is delivered.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.quote}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-mid sm:p-8"
            >
              <Quote className="h-8 w-8 text-[#004225]/30" />
              <p className="mt-4 text-sm leading-relaxed text-[#74695B] flex-1">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-black/[0.06] pt-4">
                <p className="text-sm font-bold text-[#11100E]">{testimonial.name}</p>
                <p className="text-xs text-[#74695B]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
