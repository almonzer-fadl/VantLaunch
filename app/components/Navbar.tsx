"use client";

import { motion, useScroll } from "framer-motion";
import { Rocket, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { EASE_CURSOR } from "@/app/lib/constants";
import { MagneticWrap } from "./UI";

export function Navbar({ activeNav }: { activeNav: string }) {
  const { scrollYProgress } = useScroll();
  const navLinksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [navUnderline, setNavUnderline] = useState<{ x: number; w: number } | null>(null);

  useEffect(() => {
    function measure() {
      const el = navLinksRef.current[activeNav];
      if (!el) return;
      const nav = el.closest("nav");
      const navRect = nav?.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const x = navRect ? r.left - navRect.left : r.left;
      setNavUnderline({ x, w: r.width });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeNav]);

  return (
    <nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-zinc/40 backdrop-blur-xl">
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full bg-white/20"
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
      />
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
          {navUnderline ? (
            <motion.div
              aria-hidden
              className="absolute -bottom-2 h-[2px] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              initial={false}
              animate={{ x: navUnderline.x, width: navUnderline.w }}
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.7 }}
            />
          ) : null}
          <NavLink href="#ventures" active={activeNav === "#ventures"} navLinksRef={navLinksRef}>
            Our work
          </NavLink>
          <NavLink href="#comparison" active={activeNav === "#comparison"} navLinksRef={navLinksRef}>
            Why us
          </NavLink>
          <NavLink href="#process" active={activeNav === "#process"} navLinksRef={navLinksRef}>
            How it works
          </NavLink>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE_CURSOR }}
          className="flex items-center gap-6"
        >
          <Link
            href="https://github.com"
            className="type-nav-link"
            aria-label="GitHub"
          >
            <Globe className="w-5 h-5" />
          </Link>
          <MagneticWrap active={true}>
            <Link
              href="mailto:build@vantlaunch.com"
              className="type-btn-solid inline-flex"
            >
              Let&apos;s talk
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
  navLinksRef,
  children,
}: {
  href: string;
  active: boolean;
  navLinksRef: React.MutableRefObject<Record<string, HTMLAnchorElement | null>>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      ref={(el) => {
        navLinksRef.current[href] = el;
      }}
      className={`type-nav-link relative ${active ? "text-white" : ""}`}
    >
      {children}
    </Link>
  );
}
