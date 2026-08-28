import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Video,
  Target,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  CheckCircle2,
  Play,
  Share2,
  Briefcase,
  Eye
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import IconRenderer from './IconRenderer';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 3D Ambient Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition-all duration-300 group cursor-default"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent group-hover:text-cyan-200">
              AVAILABLE FOR HIGH-IMPACT MARKETING & R&D ROLES
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-black text-white tracking-tight leading-none">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Manish Singh</span>
            </h1>

            {/* Dynamic Rotating Tagline */}
            <div className="h-10 flex items-center">
              <span className="text-base sm:text-xl md:text-2xl font-bold text-slate-300 font-mono flex items-center gap-2">
                <span className="text-cyan-400">❯</span>
                <span className="text-cyan-300">
                  {personalInfo.taglines[taglineIndex]}
                </span>
              </span>
            </div>
          </motion.div>

          {/* Overview text from prompt */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            {personalInfo.overview}
          </motion.p>

          {/* Quick Metrics Cards with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            {personalInfo.stats.map((st, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/60 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default"
              >
                <div className={`text-xl md:text-2xl font-black bg-gradient-to-r ${st.color} bg-clip-text text-transparent font-heading group-hover:scale-105 transition-transform`}>
                  {st.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight group-hover:text-slate-300">
                  {st.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons with rich hover animations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#career-tree"
              className="relative overflow-hidden flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
              <Zap className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              Explore Single-Line 3D Tree
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Holographic Core Card with Manish's Portrait Photo */}
        <div className="lg:col-span-5 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ rotateY: 4, rotateX: -4, scale: 1.02 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative w-full max-w-md preserve-3d group cursor-pointer"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-indigo-500/30 rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Cyber 3D Card */}
            <div className="relative rounded-[32px] bg-slate-900/85 border border-cyan-500/40 p-6 md:p-7 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
              {/* Card Hover Shine Sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Bar with Status */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs text-slate-400 font-mono ml-2">manish.profile.3d</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
                  VERIFIED PROFILE
                </span>
              </div>

              {/* Avatar Center Graphic with Photo & Hover Zoom */}
              <div className="my-5 relative flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 shadow-2xl shadow-cyan-500/40 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-500">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Active online pulse dot */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    Manish Singh
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5 font-semibold">
                    Digital Marketing Executive & R&D Lead
                  </p>
                </div>
              </div>

              {/* Core Skill Pills with Hover Lighting */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-purple-500/60 hover:bg-slate-800/90 transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300">
                      <IconRenderer name="PremierePro" className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Adobe Premiere Pro Video</span>
                  </div>
                  <span className="text-[11px] font-bold text-purple-400 font-mono">Expert</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Meta & Google Paid Ads</span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 font-mono">95% ROAS</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200">R&D & Floor Management</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 font-mono">1.5 Yrs Exp</span>
                </div>
              </div>

              {/* Floating Interactive Micro-Badge 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-2xl bg-slate-900/95 border border-emerald-500/50 backdrop-blur-xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-300">Present: Kanha Furniture</span>
              </motion.div>

              {/* Floating Interactive Micro-Badge 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-2xl bg-slate-900/95 border border-cyan-500/50 backdrop-blur-xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <IconRenderer name="Shopify" className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-bold text-cyan-300">Shopify & Web Systems</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
