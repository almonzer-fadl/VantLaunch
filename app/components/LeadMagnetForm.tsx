"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitLeadMagnet } from "@/app/actions/submit-lead-magnet";
import posthog from "posthog-js";

export function LeadMagnetForm({ resource, resourceName }: { resource: string; resourceName: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData();
    fd.set("email", email);
    fd.set("resource", resource);
    const result = await submitLeadMagnet(fd);
    if (result.success) {
      posthog.capture("lead_magnet_requested", { resource });
    }
    setStatus(result.success ? "done" : "idle");
  };

  if (status === "done") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-[#004225]/20 bg-white p-8 shadow-mid text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#004225]/10"><Check className="h-6 w-6 text-[#004225]" /></div>
        <h3 className="text-lg font-bold">Check your inbox</h3>
        <p className="mt-2 text-sm text-[#74695B]">We sent the {resourceName} to {email}. Check spam if you do not see it.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#004225]/20 bg-white p-8 shadow-mid text-center">
      <h3 className="text-lg font-bold">Download this resource</h3>
      <p className="mt-2 text-sm text-[#74695B]">Enter your email and we will send it immediately.</p>
      <div className="mt-4 flex gap-2">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm" />
        <button type="submit" disabled={status === "loading"} className="rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors disabled:opacity-60">
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Send it <ArrowRight className="inline h-4 w-4" /></>}
        </button>
      </div>
      <p className="mt-3 text-[10px] text-[#74695B]">No spam. One email with the download link.</p>
    </form>
  );
}
