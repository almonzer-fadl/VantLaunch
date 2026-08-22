"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LocaleProvider, useLocaleFromCookie, useT } from "../lib/LocaleContext";
import { sendContactEmail } from "../actions/contact";

export default function ContactPage() {
  const locale = useLocaleFromCookie();
  return (
    <LocaleProvider locale={locale}>
      <ContactContent />
    </LocaleProvider>
  );
}

function ContactContent() {
  const t = useT().t;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF]">
      <Navbar />
      <main className="flex-1 px-6 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
              {t.cta.button}
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">
              {t.hero.cta1}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#74695B]">
              {t.cta.sub}
            </p>
            <p className="mt-3 text-sm text-[#74695B]">
              Or email us at{" "}
              <a href="mailto:vantlaunch@gmail.com" className="font-bold text-[#004225] hover:text-[#11100E] transition-colors">
                vantlaunch@gmail.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid sm:p-8 md:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
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
      Starter: "starter", Pro: "pro", Mobile: "mobile", Enterprise: "enterprise",
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
    if (result.success) { setStatus("success"); }
    else { setStatus("error"); setErrorMessage(result.error || "Something went wrong."); setTimeout(() => setStatus("idle"), 4000); }
  };

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-8 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004225]/10">
          <Check className="h-8 w-8 text-[#004225]" />
        </div>
        <h3 className="text-2xl font-bold text-[#11100E]">Request received.</h3>
        <p className="mt-2 text-[#74695B]">We will review the details and follow up within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 text-sm font-semibold text-[#004225] transition-colors hover:text-[#11100E]">Send another request</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="role" value="Lead" />
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Your name</label>
        <input required name="name" type="text" placeholder="John Smith" className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20" />
      </div>
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Email address</label>
        <input required name="email" type="email" placeholder="john@company.com" className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Company</label><input required name="company" type="text" placeholder="Acme Inc." className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20" /></div>
        <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Engagement</label><select name="product_interest" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"><option value="" disabled>Select engagement</option><option value="starter">Starter</option><option value="pro">Pro</option><option value="mobile">Mobile</option><option value="enterprise">Enterprise</option><option value="not-sure">Not sure yet</option></select></div>
      </div>
      <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Timeline</label><select name="timeline" defaultValue="" required className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"><option value="" disabled>Expected timeline</option><option value="asap">ASAP</option><option value="1m">Within 1 month</option><option value="quarter">This quarter</option><option value="exploring">Just exploring</option></select></div>
      <div><label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#74695B]">Tell us about your business and what you need</label><textarea required name="message" rows={4} placeholder="What does your business do? What operational challenges are you facing?" className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] transition-all focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20" /></div>
      <button type="submit" disabled={status === "submitting"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#11100E] disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? "Sending..." : "Send inquiry"}<ArrowRight className="h-4 w-4" /></button>
      {status === "error" && <p className="text-center text-xs font-semibold text-red-600">{errorMessage}</p>}
      <p className="text-center text-xs text-[#74695B]">No spam. Business inquiries only. We respond within 24 hours.</p>
    </form>
  );
}
