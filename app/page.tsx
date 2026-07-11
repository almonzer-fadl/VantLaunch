"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Globe, MessageSquare, Layers, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-blue">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-industrial-blue/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-glow rounded flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              Vant<span className="text-accent-glow">Launch</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#ecosystem">Ecosystem</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/start" 
              className="px-5 py-2 bg-white text-industrial-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-accent-glow mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow"></span>
            </span>
            Now shipping: VantLaunch V1.0
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
          >
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-glow to-blue-400">Future</span> of Micro SaaS.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-sans"
          >
            VantLaunch is the premium ecosystem for high-performance digital tools. 
            Built for speed, designed for scale, and optimized for conversion.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-2 px-8 py-4 bg-accent-glow text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Explore the Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/docs" 
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              <Terminal className="w-4 h-4" />
              View Documentation
            </Link>
          </motion.div>

          {/* Bento Grid Preview Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 w-full max-w-5xl aspect-video rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <ChevronRight className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Preview Dashboard</span>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-mono">
            © 2026 VANTLAUNCH INDUSTRIES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="https://github.com" className="text-slate-500 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="text-slate-500 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </Link>
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
      className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
