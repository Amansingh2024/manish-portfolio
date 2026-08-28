import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Target,
  Video,
  Share2,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import IconRenderer from './IconRenderer';

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Cpu className="w-3.5 h-3.5" />
          Technical & Strategic Mastery
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Skills & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3">
          Proven blend of performance marketing, creative video production on Adobe Premiere Pro, and ground-level R&D & inventory management.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsList.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-xl p-6 md:p-8 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} p-0.5 shadow-md shadow-black/30 shrink-0`}
                >
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                    <IconRenderer name={cat.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                  <span className="text-xs text-slate-400 font-mono">{cat.items.length} Core Competencies</span>
                </div>
              </div>

              {/* Skills Items with Progress Bars & Icon Badges */}
              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs md:text-sm font-medium">
                      <div className="flex items-center gap-2 text-slate-200">
                        <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">
                          <IconRenderer name={item.icon || 'CheckCircle2'} className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <span className="font-mono text-cyan-400 text-xs">{item.level}%</span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: itemIdx * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-mono">Industry Standard Proficiency</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Execution
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
