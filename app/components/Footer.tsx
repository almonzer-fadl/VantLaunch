"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-surface/50 px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Image
              src="/vantlaunch-logo.png"
              alt="VantLaunch logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-contain"
            />
            <span className="type-brand-xl !text-2xl">VantLaunch</span>
          </div>
          <p className="text-zinc-500 leading-relaxed mb-3">
            Build. Ship. Scale.
          </p>
          <p className="text-sm text-zinc-600">
            A product studio shipping focused SaaS for real businesses.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 md:w-auto md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Products</span>
            <FooterLink href="https://app.teramotor.cc/register">TeraMotors</FooterLink>
            <FooterLink href="https://speakbill.vantlaunch.com">SpeakBill</FooterLink>
            <FooterLink href="#ventures">Gari</FooterLink>
          </div>
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Social</span>
            <FooterLink href={SOCIAL_LINKS.x}>Twitter / X</FooterLink>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.instagram}>Instagram</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
          </div>
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Company</span>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-zinc-600">© 2026 VantLaunch. All rights reserved.</p>
        <p className="text-xs text-zinc-500 font-medium">Build. Ship. Scale.</p>
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
