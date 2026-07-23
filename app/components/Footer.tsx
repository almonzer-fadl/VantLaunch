"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-surface/50 px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Rocket className="text-white w-7 h-7" />
            <span className="type-brand-xl !text-2xl">VantLaunch</span>
          </div>
          <p className="text-zinc-500 leading-relaxed">
            We build and operate focused micro SaaS products for teams that need reliable,
            practical software in real operations.
          </p>
        </div>
        <div className="flex w-full flex-col gap-10 sm:w-auto sm:flex-row sm:gap-20 md:gap-24">
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Explore</span>
            <FooterLink href="#products">Products</FooterLink>
            <FooterLink href="#ventures">Our work</FooterLink>
            <FooterLink href="#comparison">Why us</FooterLink>
            <FooterLink href="#process">How it works</FooterLink>
          </div>
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Connect</span>
            <FooterLink href={SOCIAL_LINKS.x}>Twitter / X</FooterLink>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.instagram}>Instagram</FooterLink>
            <FooterLink href={SOCIAL_LINKS.facebook}>Facebook</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
            <FooterLink href="#contact">Inquiry</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-zinc-600">© 2026 VantLaunch. All rights reserved.</p>
        <p className="text-xs text-zinc-600 font-normal">Made with care for teams who ship with heart.</p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-sm font-bold text-zinc-500 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
