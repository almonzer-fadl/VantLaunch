"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight,
  Zap,
  ArrowUpRight,
  Rocket,
  Sparkles,
  ExternalLink,
  Code2,
  Lock,
  Smartphone,
  CreditCard,
  Cloud,
  Globe,
  Share2
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian text-slate-50 selection:bg-accent-indigo/30 antialiased overflow-x-hidden">
      {/* Texture & Light */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.2]" />
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-accent-indigo/5 blur-[160px] rounded-full" />
      </div>

      {/* Proof Ticker */}
      <div className="relative z-50 w-full border-b border-white/[0.03] bg-obsidian/40 backdrop-blur-md py-2 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-12 whitespace-nowrap animate-marquee md:animate-none justify-center">
          <TickerItem label="Latest Ship" value="Mwendo v2.1" />
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
          <TickerItem label="Uptime" value="99.98%" />
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
          <TickerItem label="Avg. Build Time" value="14 Days" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 border-b border-white/[0.05] bg-obsidian/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-obsidian rounded-lg flex items-center justify-center shadow-lg">
              <Rocket className="w-4 h-4 fill-obsidian" />
            </div>
            <span className="text-lg font-bold tracking-tighter">VantLaunch</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#ventures">Ventures</NavLink>
            <NavLink href="#stack">Stack</NavLink>
            <NavLink href="#founder">About</NavLink>
          </div>

          <div className="flex items-center gap-4">
             <Link href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
               <Globe className="w-5 h-5" />
             </Link>
             <Link 
              href="#" 
              className="px-5 py-1.5 bg-white text-obsidian text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
            >
              Start Building
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1">
        {/* HERO */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-slate-400 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-indigo" />
              MICRO-SAAS FOUNDRY
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[7rem] font-bold tracking-tighter text-white mb-8 leading-[0.9]"
            >
              I build and ship <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white/20 italic">at the speed of light.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-medium"
            >
              VantLaunch is my personal studio for engineering high-performance digital tools. 
              No bloat, no delays—just pure, production-ready code.
            </motion.p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link 
                  href="#ventures" 
                  className="w-full md:w-auto px-8 py-4 bg-accent-indigo text-white text-base font-bold rounded-xl hover:glow-indigo transition-all flex items-center justify-center gap-2 group"
                >
                  Inspect My Ships <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="https://x.com" 
                  className="w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Follow the Build <Share2 className="w-5 h-5" />
                </Link>
              </div>
          </div>
        </section>

        {/* VENTURES LOG */}
        <section id="ventures" className="py-24 px-6 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter text-white mb-2 uppercase">Venture Log</h2>
                <p className="text-slate-500 font-medium text-lg">Actual products engineered from zero to launch.</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                  Active Systems: 03
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                title="TeraMotors"
                desc="Enterprise-grade auto repair management system with ZATCA e-invoicing, real-time job tracking, and multi-language support (EN/AR)."
                tag="ENTERPRISE / FINTECH"
                href="https://app.teramotor.cc/"
                image="/teramotors.png"
              />
              <ProjectCard 
                title="Next Project"
                desc="Waiting for your next high-velocity build details. Ready to ship in record time."
                tag="UPCOMING"
                href="#"
                image="/mockup-2.jpg"
              />
            </div>
          </div>
        </section>

        {/* THE STACK */}
        <section id="stack" className="py-24 px-6 bg-white/[0.02] border-y border-white/[0.05]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-4 uppercase">The Battle-Tested Stack</h2>
              <p className="text-slate-500 font-medium">I don&apos;t experiment with your time. I use what works.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StackItem icon={<Code2 />} title="Next.js" subtitle="App Router" />
              <StackItem icon={<Cloud />} title="Supabase" subtitle="Database & Auth" />
              <StackItem icon={<CreditCard />} title="Polar / Stripe" subtitle="Monetization" />
              <StackItem icon={<Smartphone />} title="Tailwind" subtitle="Premium Design" />
            </div>
          </div>
        </section>

        {/* THE FOUNDER (YOU) */}
        <section id="founder" className="py-32 px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <Rocket className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-accent-indigo rounded-3xl mb-8 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-white mb-6">Built by a Founder, <br/> for Founders.</h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-8">
                I spent years dealing with slow agencies and bloated codebases. VantLaunch is the answer. 
                I build apps that are fast, secure, and ready to scale from the first commit. 
                My goal is simple: **Ship value, ignore the noise.**
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-white font-bold">Your Name</div>
                  <div className="text-slate-500 text-sm">Founder, VantLaunch</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex gap-4">
                  <Link href="#" className="text-slate-400 hover:text-white"><Share2 className="w-5 h-5" /></Link>
                  <Link href="#" className="text-slate-400 hover:text-white"><Globe className="w-5 h-5" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CALL */}
        <section className="py-48 px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10">
            Ready to stop talking <br/> and start shipping?
          </h2>
          <Link 
            href="mailto:build@vantlaunch.com" 
            className="px-12 py-5 bg-white text-obsidian text-lg font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-white/20 inline-flex items-center gap-3"
          >
            Deploy Your Vision <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            <span>© 2026 VantLaunch Studio</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Polar.sh</Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            SYSTEM_OPERATIONAL
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-tight uppercase"
    >
      {children}
    </Link>
  );
}

function TickerItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
      <span className="text-slate-600">{label}:</span>
      <span className="text-accent-indigo font-bold">{value}</span>
    </div>
  );
}

function ProjectCard({ title, desc, tag, href, image }: { title: string; desc: string; tag: string; href: string; image: string }) {
  return (
    <div className="group relative glass-card rounded-[2.5rem] overflow-hidden hover:border-accent-indigo/30 transition-all duration-500">
      <div className="aspect-[16/10] bg-white/[0.02] relative overflow-hidden flex items-center justify-center">
        {image && image.startsWith("/") ? (
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          />
        ) : (
          <div className="text-slate-800 font-bold text-8xl tracking-tighter select-none opacity-20 group-hover:scale-110 transition-transform duration-700">
            {title}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
        <div className="absolute top-6 right-6 p-3 bg-obsidian/60 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-8 relative z-10">
        <div className="text-[10px] font-bold text-accent-indigo mb-2 tracking-[0.2em] uppercase">{tag}</div>
        <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed mb-6">{desc}</p>
        <Link href={href} className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
          View Project <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function StackItem({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-white/10 transition-all">
      <div className="text-accent-indigo">{icon}</div>
      <div>
        <div className="text-white font-bold text-sm">{title}</div>
        <div className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">{subtitle}</div>
      </div>
    </div>
  );
}
