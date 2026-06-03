"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f6ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/vantlaunch-logo.png"
            alt="VantLaunch logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-[#11100e]">
            VantLaunch
          </span>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#74695b] transition-colors hover:text-[#004225]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#004225] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#11100e]">
            Start a project
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
