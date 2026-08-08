"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F6EF] px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg"
      >
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#004225]/10">
          <CheckCircle className="h-10 w-10 text-[#004225]" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl">
          Project Brief Received
        </h1>
        <p className="mt-3 text-lg font-medium text-[#11100E]">Thank you.</p>
        <p className="mt-2 text-base leading-relaxed text-[#74695B]">
          We have received everything we need to review your project. Our team will personally review your request and contact you within 12 hours.
        </p>
        <p className="mt-4 text-sm font-medium text-[#74695B]">
          In the meantime please monitor your email for your confirmation.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#004225] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
