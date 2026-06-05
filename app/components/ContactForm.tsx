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
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black/[0.04] text-[#17140d]">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#17140d]">Request received.</h3>
        <p className="mt-2 text-[#8a7657]">We&apos;ll review the details and follow up shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-[#00401f] underline underline-offset-4"
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
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] placeholder:text-[#a89472] transition-colors focus:border-[#00401f] focus:outline-none sm:text-lg"
          />
        </div>
        <div className="relative">
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] placeholder:text-[#a89472] transition-colors focus:border-[#00401f] focus:outline-none sm:text-lg"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <input
            required
            name="company"
            type="text"
            placeholder="Company / shop name"
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] placeholder:text-[#a89472] transition-colors focus:border-[#00401f] focus:outline-none"
          />
          <select
            name="role"
            defaultValue=""
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] transition-colors focus:border-[#00401f] focus:outline-none"
            required
          >
            <option value="" disabled className="bg-white text-[#8a7657]">I am a...</option>
            <option value="owner-founder" className="bg-white text-[#17140d]">Owner / founder</option>
            <option value="operations" className="bg-white text-[#17140d]">Operations lead</option>
            <option value="service-advisor" className="bg-white text-[#17140d]">Service advisor</option>
            <option value="investor-partner" className="bg-white text-[#17140d]">Investor / partner</option>
            <option value="other" className="bg-white text-[#17140d]">Other</option>
          </select>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <select
            name="product_interest"
            defaultValue=""
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] transition-colors focus:border-[#00401f] focus:outline-none"
            required
          >
            <option value="" disabled className="bg-white text-[#8a7657]">Product interest</option>
            <option value="teramotors" className="bg-white text-[#17140d]">TeraMotors</option>
            <option value="gari" className="bg-white text-[#17140d]">Gari preview</option>
            <option value="general" className="bg-white text-[#17140d]">General VantLaunch inquiry</option>
          </select>

          <select
            name="timeline"
            defaultValue=""
            className="w-full border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] transition-colors focus:border-[#00401f] focus:outline-none"
            required
          >
            <option value="" disabled className="bg-white text-[#8a7657]">Expected timeline</option>
            <option value="asap" className="bg-white text-[#17140d]">ASAP</option>
            <option value="1m" className="bg-white text-[#17140d]">Within 1 month</option>
            <option value="quarter" className="bg-white text-[#17140d]">This quarter</option>
            <option value="exploring" className="bg-white text-[#17140d]">Exploring only</option>
          </select>
        </div>

        <div className="relative">
          <textarea
            required
            name="message"
            rows={1}
            placeholder="Tell us about your shop and what you want to organize"
            className="w-full resize-none border-b border-black/10 bg-transparent py-4 text-base font-medium text-[#17140d] placeholder:text-[#a89472] transition-colors focus:border-[#00401f] focus:outline-none sm:text-lg"
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
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#00401f] px-8 py-4 text-[13px] font-bold text-white transition-all hover:bg-[#17140d] disabled:opacity-50 sm:w-auto"
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
      <p className="mt-4 text-center text-xs text-[#8a7657] sm:text-right">No spam. Product inquiries and relevant replies only.</p>
    </form>
  );
}
