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
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black/[0.04] text-[#11100E]">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#11100E]">Request received.</h3>
        <p className="mt-2 text-[#74695B]">We&apos;ll review the details and follow up shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-[#004225] underline underline-offset-4"
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

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
            Your name
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Name"
            className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
            Email address
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
              Company / shop name
            </label>
            <input
              required
              name="company"
              type="text"
              placeholder="Company / shop name"
              className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
              I am a...
            </label>
            <select
              name="role"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
              required
            >
              <option value="" disabled className="bg-white text-[#74695B]">I am a...</option>
              <option value="owner-founder" className="bg-white text-[#11100E]">Owner / founder</option>
              <option value="operations" className="bg-white text-[#11100E]">Operations lead</option>
              <option value="service-advisor" className="bg-white text-[#11100E]">Service advisor</option>
              <option value="investor-partner" className="bg-white text-[#11100E]">Investor / partner</option>
              <option value="other" className="bg-white text-[#11100E]">Other</option>
            </select>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
              Product interest
            </label>
            <select
              name="product_interest"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
              required
            >
              <option value="" disabled className="bg-white text-[#74695B]">Product interest</option>
              <option value="teramotors" className="bg-white text-[#11100E]">TeraMotors</option>
              <option value="gari" className="bg-white text-[#11100E]">Gari preview</option>
              <option value="general" className="bg-white text-[#11100E]">General VantLaunch inquiry</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
              Expected timeline
            </label>
            <select
              name="timeline"
              defaultValue=""
              className="h-12 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
              required
            >
              <option value="" disabled className="bg-white text-[#74695B]">Expected timeline</option>
              <option value="asap" className="bg-white text-[#11100E]">ASAP</option>
              <option value="1m" className="bg-white text-[#11100E]">Within 1 month</option>
              <option value="quarter" className="bg-white text-[#11100E]">This quarter</option>
              <option value="exploring" className="bg-white text-[#11100E]">Exploring only</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
            Tell us about your project
          </label>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell us about your shop and what you want to organize"
            className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center sm:justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#004225] px-8 py-4 text-[13px] font-bold text-white transition-all hover:bg-[#11100E] disabled:opacity-50 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send inquiry"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      
      {status === "error" && (
        <p className="mt-4 text-center text-xs font-bold text-red-500 uppercase tracking-widest">
          {errorMessage}
        </p>
      )}
      <p className="mt-4 text-center text-xs text-[#74695B] sm:text-right">No spam. Product inquiries and relevant replies only.</p>
    </form>
  );
}
