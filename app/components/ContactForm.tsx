"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Check, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Message received.</h3>
        <p className="mt-2 text-zinc-500">We&apos;ll get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-white underline underline-offset-4"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl text-left">
      <div className="grid gap-8">
        <div className="relative">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full border-b border-white/10 bg-transparent py-4 text-lg font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors"
          />
        </div>
        <div className="relative">
          <input
            required
            type="email"
            placeholder="Email address"
            className="w-full border-b border-white/10 bg-transparent py-4 text-lg font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors"
          />
        </div>
        <div className="relative">
          <textarea
            required
            rows={1}
            placeholder="What are you building?"
            className="w-full border-b border-white/10 bg-transparent py-4 text-lg font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors resize-none"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Current capacity: 3 projects
         </span>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[13px] font-bold text-black transition-all hover:gap-5 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
