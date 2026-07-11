"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Globe, 
  Layers, 
  Code2, 
  Cpu, 
  Network, 
  Zap, 
  Terminal, 
  Database,
  Search,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-vanta text-white selection:bg-vanta-indigo/30">
      {/* Background Infrastructure */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-vanta-indigo/10 to-transparent blur-[120px] opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-vanta/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-vanta-indigo rounded flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              <Layers className="text-white w-4 h-4" />
            </div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase font-mono">
              Vant<span className="text-vanta-indigo">Launch</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#projects">Deployments</NavLink>
            <NavLink href="#stack">Infrastructure</NavLink>
            <NavLink href="#about">Systems</NavLink>
          </div>

          <Link 
            href="https://github.com" 
            className="group flex items-center gap-2 px-4 py-1.5 bg-white text-vanta text-[11px] font-bold uppercase tracking-widest rounded hover:bg-slate-200 transition-all active:scale-95"
          >
            <Globe className="w-3.5 h-3.5" />
            Connect
          </Link>
        </div>
      </nav>

      <main className="relative flex-1">
        {/* HERO SECTION */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-vanta-indigo/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-vanta-indigo font-mono">
                System Initialized // Build v1.0.4
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.95] mb-10"
            >
              Forging ideas into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-vanta-indigo/50">production-ready</span> software.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mb-14"
            >
              <p className="text-lg text-slate-400 leading-relaxed font-sans mb-6">
                Computer Science student building high-performance digital infrastructure. 
                I build in public, focus on systems architecture, and ship with technical elite standards.
              </p>
              <div className="flex gap-4">
                <Link href="#projects" className="px-8 py-4 bg-vanta-indigo text-white text-[12px] font-bold uppercase tracking-[0.2em] rounded hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  Execute Protocol
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID PROJECTS */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-8 bg-vanta-indigo" />
                <h2 className="text-4xl font-bold tracking-tight uppercase font-mono">Project Grid</h2>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 border border-white/5">
                Sort: Recency / Priority
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 auto-rows-[280px]">
              {/* Main Project: Mwendo */}
              <div className="md:col-span-4 md:row-span-2 p-10 bg-vanta-surface border border-white/5 rounded-lg flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-vanta-indigo/10 rounded-full blur-[100px] group-hover:bg-vanta-indigo/20 transition-colors" />
                <div className="relative z-10">
                  <div className="flex gap-2 mb-8">
                    <StatusTag>Next.js 15</StatusTag>
                    <StatusTag>TypeScript</StatusTag>
                    <StatusTag>PostgreSQL</StatusTag>
                  </div>
                  <h3 className="text-5xl font-bold mb-4 tracking-tighter uppercase font-mono">Mwendo</h3>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    Real-time transportation logistics and fleet optimization infrastructure.
                  </p>
                </div>
                <div className="relative z-10 flex gap-4">
                  <ProjectLink href="#">Source_Code</ProjectLink>
                  <ProjectLink href="#" outline>Live_Deployment</ProjectLink>
                </div>
              </div>

              {/* Memory Sim */}
              <div className="md:col-span-2 md:row-span-1 p-8 bg-vanta-surface border border-white/5 rounded-lg flex flex-col justify-between hover:border-vanta-indigo/30 transition-colors group">
                <div className="flex justify-between items-start">
                  <Cpu className="text-vanta-indigo w-6 h-6" />
                  <StatusTag>C++ / Systems</StatusTag>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-mono uppercase tracking-tight mb-2">Memory Sim</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">OS Allocation Algorithms</p>
                </div>
              </div>

              {/* Networking */}
              <div className="md:col-span-2 md:row-span-1 p-8 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col justify-between hover:border-vanta-indigo/30 transition-colors group">
                <div className="flex justify-between items-start">
                  <Network className="text-vanta-indigo w-6 h-6" />
                  <StatusTag>Python</StatusTag>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-mono uppercase tracking-tight mb-2">Network Lab</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Distributed Systems</p>
                </div>
              </div>

              {/* Technical Docs */}
              <div className="md:col-span-3 p-8 bg-white/[0.01] border border-white/5 rounded-lg flex items-center justify-between group hover:bg-white/[0.03] transition-all">
                <div className="flex items-center gap-6">
                  <Terminal className="w-8 h-8 text-slate-600 group-hover:text-vanta-indigo transition-colors" />
                  <div>
                    <h3 className="text-lg font-bold font-mono uppercase">Technical Documentation</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">System architecture & specs</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-700 group-hover:translate-x-1 transition-all" />
              </div>

              {/* GitHub Feed Placeholder */}
              <div className="md:col-span-3 p-8 bg-white/[0.01] border border-white/5 rounded-lg flex items-center justify-between group hover:bg-white/[0.03] transition-all">
                <div className="flex items-center gap-6">
                  <Globe className="w-8 h-8 text-slate-600 group-hover:text-vanta-indigo transition-colors" />
                  <div>
                    <h3 className="text-lg font-bold font-mono uppercase">Global Contributions</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Active open source commit feed</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-700 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* STACK MARQUEE / GRID */}
        <section id="stack" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-bold text-vanta-indigo uppercase tracking-[0.5em] font-mono">Infrastructure</span>
              <h2 className="text-3xl font-bold mt-4 tracking-tighter uppercase font-mono">Current Technology Stack</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/5">
              <StackBox icon={<Code2 />} label="TypeScript" />
              <StackBox icon={<Layers />} label="React 19" />
              <StackBox icon={<Zap />} label="Next.js 15" />
              <StackBox icon={<Database />} label="PostgreSQL" />
              <StackBox icon={<Terminal />} label="Rust / C++" />
              <StackBox icon={<Search />} label="Algorithms" />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-vanta">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-vanta-indigo rounded-sm" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">VantLaunch Protocol © 2026</span>
          </div>
          <div className="flex gap-8">
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            Lat: 34.0522 // Lon: -118.2437
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
      className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors font-mono"
    >
      {children}
    </Link>
  );
}

function StatusTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">
      {children}
    </span>
  );
}

function ProjectLink({ href, children, outline = false }: { href: string; children: React.ReactNode; outline?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest font-mono rounded transition-all flex items-center gap-2 ${
        outline 
          ? 'border border-white/10 text-white hover:bg-white/5' 
          : 'bg-white text-vanta hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
      }`}
    >
      {children}
    </Link>
  );
}

function StackBox({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-vanta p-10 flex flex-col items-center justify-center gap-4 hover:bg-vanta-surface transition-colors cursor-default group">
      <div className="text-slate-600 group-hover:text-vanta-indigo transition-colors scale-125">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">{label}</span>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-vanta-indigo transition-colors font-mono">
      {children}
    </Link>
  );
}
