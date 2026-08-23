"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useT } from "../lib/LocaleContext";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const t = useT().t;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop floating */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 hidden sm:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#004225] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#11100E] hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.navbar.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Mobile bottom bar */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t border-black/10 bg-[#F8F6EF]/95 backdrop-blur-xl px-4 py-3"
          >
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
            >
              {t.navbar.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
