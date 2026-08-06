"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";
import { useT } from "../lib/LocaleContext";

export function Footer() {
  const t = useT().t;
  return (
    <footer className="border-t border-black/10 bg-[#F8F6EF] px-6 py-12 text-[#11100E] sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <Link href="/" className="mb-6 flex items-center gap-0">
            <Image
              src="/brand/icon.PNG"
              alt="VantLaunch logo"
              width={49}
              height={49}
              className="h-10 w-10 rounded-lg object-contain sm:h-14 sm:w-14"
            />
            <span className="text-lg font-bold tracking-tight text-[#11100E]">
              VantLaunch
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-[#74695B]">
            {t.footer.tagline}
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-4 md:w-auto md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Engagements</span>
            <FooterLink href="/#engagement-options">Starter</FooterLink>
            <FooterLink href="/#engagement-options">Pro</FooterLink>
            <FooterLink href="/#engagement-options">Mobile</FooterLink>
            <FooterLink href="/#engagement-options">Enterprise</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Company</span>
            <FooterLink href="/#process">Process</FooterLink>
            <FooterLink href="/work">Our Work</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Connect</span>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={SOCIAL_LINKS.x}>X</FooterLink>
            <a href="mailto:vantlaunch@gmail.com" className="text-sm font-bold text-[#74695B] transition-colors hover:text-[#004225]">
              Email
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Built With</span>
            <span className="text-sm font-medium text-[#74695B]">React</span>
            <span className="text-sm font-medium text-[#74695B]">Next.js</span>
            <span className="text-sm font-medium text-[#74695B]">Supabase</span>
            <span className="text-sm font-medium text-[#74695B]">AI & Integrations</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/10 pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-[#74695B]">
          &copy; 2026 VantLaunch. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
            Terms
          </Link>
          <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
            LinkedIn
          </Link>
          <a href="mailto:vantlaunch@gmail.com" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
            vantlaunch@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-sm font-bold text-[#74695B] transition-colors hover:text-[#004225]"
    >
      {children}
    </Link>
  );
}
