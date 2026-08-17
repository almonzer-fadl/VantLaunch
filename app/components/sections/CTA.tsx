"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { sendContactEmail } from "../../actions/contact";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

export function CTASection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="contact" className="scroll-mt-20 border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Contact</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">Ready to build your internal business system?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Tell us about your business and we will confirm fit and timeline before you pay anything. No sales calls. No vague proposals.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#74695B]">
            Or email us directly:{' '}
            <a href="mailto:vantlaunch@gmail.com" className="font-bold text-[#004225] hover:text-[#11100E] transition-colors">
              vantlaunch@gmail.com
            </a>
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-mid sm:p-8 md:p-10">
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
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (!product) return;

    const productToValue: Record<string, string> = {
      "Starter": "starter",
      "Pro": "pro",
      "Mobile": "mobile",
      "Enterprise": "enterprise",
    };

    const timeout = window.setTimeout(() => {
      setSelectedProduct(productToValue[product] ?? "");
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

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
        <h3 className="text-2xl font-bold text-[#11100E]">Request received.</h3>
        <p className="mt-2 text-[#74695B]">
          We will review the details and follow up within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-[#004225] transition-colors hover:text-[#11100E]"
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
      <input type="hidden" name="role" value="Lead" />

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
          Your name
        </label>
        <input
          required
          name="name"
          type="text"
          placeholder="John Smith"
          className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
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
          placeholder="john@company.com"
          className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
            Company
          </label>
          <input
            required
            name="company"
            type="text"
            placeholder="Acme Inc."
            className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
            Engagement
          </label>
          <select
            name="product_interest"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
            className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
          >
            <option value="" disabled className="bg-white text-[#74695B]">
              Select engagement
            </option>
            <option value="starter" className="bg-white text-[#11100E]">Starter</option>
            <option value="pro" className="bg-white text-[#11100E]">Pro</option>
            <option value="mobile" className="bg-white text-[#11100E]">Mobile</option>
            <option value="enterprise" className="bg-white text-[#11100E]">Enterprise</option>
            <option value="not-sure" className="bg-white text-[#11100E]">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
          Timeline
        </label>
        <select
          name="timeline"
          defaultValue=""
          required
          className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        >
          <option value="" disabled className="bg-white text-[#74695B]">
            Expected timeline
          </option>
          <option value="asap" className="bg-white text-[#11100E]">ASAP</option>
          <option value="1m" className="bg-white text-[#11100E]">Within 1 month</option>
          <option value="quarter" className="bg-white text-[#11100E]">This quarter</option>
          <option value="exploring" className="bg-white text-[#11100E]">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">
          Tell us about your business and what you need
        </label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="What does your business do? What operational challenges are you facing? What tools, data, or workflows need to be connected?"
          className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#11100E] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send inquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>

      {status === "error" && (
        <p className="text-center text-xs font-semibold text-red-600">
          {errorMessage}
        </p>
      )}

      <p className="text-center text-xs text-[#74695B]">
        No spam. Business inquiries only. We respond within 24 hours.
      </p>
    </form>
  );
}
