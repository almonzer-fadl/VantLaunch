"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { sendContactEmail } from "../actions/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
      setTimeout(() => setStatus("idle"), 3000);
    }
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
        <p className="mt-2 text-zinc-500">You&apos;re on our SaaS updates list. We&apos;ll follow up shortly.</p>
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
    <form onSubmit={handleSubmit} className="mx-auto mt-12 w-full max-w-xl text-left sm:mt-16">
      <div className="grid gap-6 sm:gap-8">
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="relative">
          <input
            required
            name="name"
            type="text"
            placeholder="Name"
            className="w-full border-b border-white/10 bg-transparent py-4 text-base font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors sm:text-lg"
          />
        </div>
        <div className="relative">
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full border-b border-white/10 bg-transparent py-4 text-base font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors sm:text-lg"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <select
            name="product_interest"
            defaultValue=""
            className="w-full border-b border-white/10 bg-transparent py-4 text-base font-medium text-zinc-200 focus:border-white focus:outline-none transition-colors"
            required
          >
            <option value="" disabled className="bg-zinc text-zinc-400">Product interest</option>
            <option value="teramotors" className="bg-zinc text-zinc-200">TeraMotors</option>
            <option value="salasel" className="bg-zinc text-zinc-200">Salasel</option>
            <option value="araba" className="bg-zinc text-zinc-200">Araba</option>
            <option value="gari" className="bg-zinc text-zinc-200">Gari</option>
            <option value="general" className="bg-zinc text-zinc-200">General updates</option>
          </select>

          <select
            name="timeline"
            defaultValue=""
            className="w-full border-b border-white/10 bg-transparent py-4 text-base font-medium text-zinc-200 focus:border-white focus:outline-none transition-colors"
            required
          >
            <option value="" disabled className="bg-zinc text-zinc-400">Expected timeline</option>
            <option value="asap" className="bg-zinc text-zinc-200">ASAP</option>
            <option value="1m" className="bg-zinc text-zinc-200">Within 1 month</option>
            <option value="quarter" className="bg-zinc text-zinc-200">This quarter</option>
            <option value="exploring" className="bg-zinc text-zinc-200">Exploring only</option>
          </select>
        </div>

        <div className="relative">
          <textarea
            required
            name="message"
            rows={1}
            placeholder="Tell us your use case in one paragraph"
            className="w-full border-b border-white/10 bg-transparent py-4 text-base font-medium text-white placeholder:text-zinc-700 focus:border-white focus:outline-none transition-colors resize-none sm:text-lg"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center sm:justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[13px] font-bold text-black transition-all hover:gap-5 disabled:opacity-50 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      
      {status === "error" && (
        <p className="mt-4 text-center text-xs font-bold text-red-500 uppercase tracking-widest">
          {errorMessage}
        </p>
      )}
      <p className="mt-4 text-center text-xs text-zinc-500 sm:text-right">No spam. Only product updates and relevant replies.</p>
    </form>
  );
}
