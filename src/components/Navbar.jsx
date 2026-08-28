import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Briefcase,
  Target,
  GraduationCap,
  Mail,
  Phone,
  Menu,
  X,
  Zap,
  Globe
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '3D Tree View', href: '#career-tree', icon: Zap, highlight: true },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills & Tech', href: '#skills', icon: Target },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo with 3D Hologram Glow */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 text-base">
                MS
              </span>
            </div>
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-xl blur-sm group-hover:bg-cyan-500/40 transition-all" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Manish Singh
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Digital Marketer & R&D Lead</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  link.highlight
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all shadow-sm shadow-emerald-500/10"
          >
            <Phone className="w-3.5 h-3.5" />
            Quick Connect
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href={`tel:${personalInfo.contact.rawPhone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20"
                >
                  <Phone className="w-4 h-4" />
                  Call: +91-790 392 6741
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
