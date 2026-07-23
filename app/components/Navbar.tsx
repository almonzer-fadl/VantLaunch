"use client";

import { motion } from "framer-motion";
import { Rocket, Globe } from "lucide-react";
import Link from "next/link";
import { EASE_CURSOR, SOCIAL_LINKS } from "@/app/lib/constants";
import { MagneticWrap } from "./UI";

export function Navbar({ activeNav }: { activeNav: string }) {
  return (
    <nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-zinc/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE_CURSOR }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-white text-black rounded-xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform cursor-pointer">
            <Rocket className="w-5 h-5 fill-black" />
          </div>
          <span className="type-brand-xl">VantLaunch</span>
        </motion.div>

        <div className="relative hidden items-center gap-10 md:flex">
          <NavLink href="#products" active={activeNav === "#products"}>
            Products
          </NavLink>
          <NavLink href="#demo" active={activeNav === "#demo"}>
            Demo
          </NavLink>
          <NavLink href="#ventures" active={activeNav === "#ventures"}>
            Product notes
          </NavLink>
          <NavLink href="#comparison" active={activeNav === "#comparison"}>
            Why us
          </NavLink>
          <NavLink href="#process" active={activeNav === "#process"}>
            How it works
          </NavLink>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE_CURSOR }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <Link
            href={SOCIAL_LINKS.github}
            className="type-nav-link hidden sm:inline-flex"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-5 h-5" />
          </Link>
          <MagneticWrap active={true}>
            <Link
              href="#contact"
              className="type-btn-solid inline-flex px-4 py-2 text-[12px] sm:px-6 sm:py-2.5 sm:text-[13px]"
            >
              Contact
            </Link>
          </MagneticWrap>
        </motion.div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`type-nav-link relative ${active ? "text-white" : ""}`}
    >
      {children}
    </Link>
  );
}
