"use client";

import { Rocket } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-zinc-surface/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Rocket className="text-white w-7 h-7" />
            <span className="type-brand-xl !text-2xl">VantLaunch</span>
          </div>
          <p className="text-zinc-500 leading-relaxed">
            We design and ship standout apps for founders, brands, and teams who care how their
            product feels in someone&apos;s hands.
          </p>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Explore</span>
            <FooterLink href="#ventures">Our work</FooterLink>
            <FooterLink href="#comparison">Why us</FooterLink>
            <FooterLink href="#process">How it works</FooterLink>
          </div>
          <div className="flex flex-col gap-6">
            <span className="type-meta-uppercase">Connect</span>
            <FooterLink href="https://x.com">Twitter / X</FooterLink>
            <FooterLink href="https://github.com">GitHub</FooterLink>
            <FooterLink href="mailto:build@vantlaunch.com">Email</FooterLink>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 md:flex-row">
        <p className="text-xs text-zinc-600">© 2026 VantLaunch. All rights reserved.</p>
        <p className="text-xs text-zinc-600 font-normal">Made with care for teams who ship with heart.</p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-bold text-zinc-500 transition-colors hover:text-white">
      {children}
    </Link>
  );
}
