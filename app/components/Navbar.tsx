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
    <nav className="sticky top-0 z-50 border-b border-white/[0.04] bg-canvas/70 backdrop-blur-xl">
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
          <span className="text-lg font-bold tracking-tight text-white">
            VantLaunch
          </span>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
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
          <Link href="#contact" className="btn-primary !py-2 !px-4 text-xs">
            Start a project
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
