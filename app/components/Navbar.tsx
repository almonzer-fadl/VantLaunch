"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMobileMotion } from "../hooks/use-mobile-motion";

const NAV_LINKS = [
  { href: "#services", label: "Tiers" },
  { href: "#portfolio", label: "Proof" },
  { href: "#process", label: "Process" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { shouldReduceMotion } = useMobileMotion();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf4e2]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-18">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <Image
              src="/brand/icon.PNG"
              alt="VantLaunch logo"
              width={36}
              height={36}
              priority
              className="h-8 w-8 rounded-lg object-contain sm:h-9 sm:w-9"
            />
            <span className="text-base font-bold tracking-tight text-[#17140d] sm:text-lg">
              VantLaunch
            </span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-[#8a7657] transition-colors hover:text-[#00401f]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden sm:block"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#00401f] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#17140d]"
              >
                Start a project
              </Link>
            </motion.div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5 text-[#17140d]" /> : <Menu className="h-5 w-5 text-[#17140d]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.12 : 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden sm:backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-0 right-0 top-0 z-50 w-[280px] max-w-[85vw] bg-[#fbf4e2] shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-6 pt-20">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3.5 text-lg font-bold text-[#17140d] transition-colors hover:bg-black/[0.04]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0.04 : 0.35 }}
                  className="mt-8"
                >
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00401f] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#17140d]"
                  >
                    Start a project
                  </Link>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: shouldReduceMotion ? 0.08 : 0.45 }}
                  className="mt-8 text-center text-xs font-medium text-[#8a7657]"
                >
                  One system. Built for you. Owned by you.
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
