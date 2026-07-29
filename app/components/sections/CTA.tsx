"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../../actions/contact";

export function CTASection() {
  return (
    <section id="contact" className="border-t border-black/10 bg-[#f8f6ef] px-6 py-16 text-[#11100e] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#74695b]">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100e] sm:text-4xl md:text-5xl">Start a project.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5f5548] sm:text-lg">
            Tell us what you need. We will review and respond within 24 hours —
            usually with a few questions and a rough timeline.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] sm:p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
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
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-8 text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004225]/10">
          <Check className="h-8 w-8 text-[#004225]" />
        </div>
        <h3 className="text-2xl font-bold text-[#11100e]">Request received.</h3>
        <p className="mt-2 text-[#5f5548]">
          We will review the details and follow up within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-[#004225] transition-colors hover:text-[#11100e]"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
          Your name
        </label>
        <input
          required
          name="name"
          type="text"
          placeholder="John Smith"
          className="w-full rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] placeholder:text-[#9b9182] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
          Email address
        </label>
        <input
          required
          name="email"
          type="email"
          placeholder="john@company.com"
          className="w-full rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] placeholder:text-[#9b9182] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
            Company
          </label>
          <input
            name="company"
            type="text"
            placeholder="Acme Inc."
            className="w-full rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] placeholder:text-[#9b9182] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
            Project tier
          </label>
          <select
            name="tier"
            defaultValue=""
            className="w-full rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          >
            <option value="" disabled className="bg-white text-[#74695b]">
              Select tier
            </option>
            <option value="dashboard" className="bg-white text-[#11100e]">Dashboard — $1,500</option>
            <option value="portal" className="bg-white text-[#11100e]">Portal + Dashboard — $3,000</option>
            <option value="mobile" className="bg-white text-[#11100e]">Mobile Native — $5,000+</option>
            <option value="not-sure" className="bg-white text-[#11100e]">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
          Timeline
        </label>
        <select
          name="timeline"
          defaultValue=""
          className="w-full rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        >
          <option value="" disabled className="bg-white text-[#74695b]">
            Expected timeline
          </option>
          <option value="asap" className="bg-white text-[#11100e]">ASAP</option>
          <option value="1m" className="bg-white text-[#11100e]">Within 1 month</option>
          <option value="quarter" className="bg-white text-[#11100e]">This quarter</option>
          <option value="exploring" className="bg-white text-[#11100e]">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695b]">
          Tell us about your project
        </label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What do you need built? Who will use it? Any specific features or integrations required?"
          className="w-full resize-none rounded-xl border border-black/10 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#11100e] placeholder:text-[#9b9182] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#11100e] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send inquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>

      {status === "error" && (
        <p className="text-center text-xs font-semibold text-red-600">
          {errorMessage}
        </p>
      )}

      <p className="text-center text-xs text-[#74695b]">
        No spam. We respond to genuine project inquiries only.
      </p>
    </form>
  );
}
