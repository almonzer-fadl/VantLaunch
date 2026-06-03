"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../../actions/contact";

export function CTASection() {
  return (
    <section id="contact" className="divider px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="badge mb-4 inline-block">Contact</span>
          <h2 className="type-section-heading">Start a project.</h2>
          <p className="type-section-sub mx-auto">
            Tell us what you need. We will review and respond within 24 hours —
            usually with a few questions and a rough timeline.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="card-premium p-8 md:p-10">
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
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20">
          <Check className="h-8 w-8 text-amber-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Request received.</h3>
        <p className="mt-2 text-stone-400">
          We will review the details and follow up within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
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
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
          Your name
        </label>
        <input
          required
          name="name"
          type="text"
          placeholder="John Smith"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white placeholder:text-stone-700 focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
          Email address
        </label>
        <input
          required
          name="email"
          type="email"
          placeholder="john@company.com"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white placeholder:text-stone-700 focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Company
          </label>
          <input
            name="company"
            type="text"
            placeholder="Acme Inc."
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white placeholder:text-stone-700 focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
            Project tier
          </label>
          <select
            name="tier"
            defaultValue=""
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all"
          >
            <option value="" disabled className="bg-surface text-stone-400">
              Select tier
            </option>
            <option value="dashboard" className="bg-surface text-white">Dashboard — $1,500</option>
            <option value="portal" className="bg-surface text-white">Portal + Dashboard — $3,000</option>
            <option value="mobile" className="bg-surface text-white">Mobile Native — $5,000+</option>
            <option value="not-sure" className="bg-surface text-white">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
          Timeline
        </label>
        <select
          name="timeline"
          defaultValue=""
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all"
        >
          <option value="" disabled className="bg-surface text-stone-400">
            Expected timeline
          </option>
          <option value="asap" className="bg-surface text-white">ASAP</option>
          <option value="1m" className="bg-surface text-white">Within 1 month</option>
          <option value="quarter" className="bg-surface text-white">This quarter</option>
          <option value="exploring" className="bg-surface text-white">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-stone-500">
          Tell us about your project
        </label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What do you need built? Who will use it? Any specific features or integrations required?"
          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm font-medium text-white placeholder:text-stone-700 focus:border-amber-500/40 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {status === "submitting" ? "Sending..." : "Send inquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>

      {status === "error" && (
        <p className="text-center text-xs font-semibold text-red-400">
          {errorMessage}
        </p>
      )}

      <p className="text-center text-xs text-stone-600">
        No spam. We respond to genuine project inquiries only.
      </p>
    </form>
  );
}
