"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004225]/10">
            <AlertTriangle className="h-8 w-8 text-[#004225]" />
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Looks like this workflow broke.</h1>
          <p className="mt-4 text-base text-[#74695B]">The page you are looking for does not exist or has been moved. Let us get you back on track.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors"><Home className="h-4 w-4" /> Back Home</Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-bold text-[#11100E] hover:bg-black/[0.03] transition-colors">Book a Call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
