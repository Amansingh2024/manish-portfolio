import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Award,
  Building2
} from 'lucide-react';
import { experiences, personalInfo } from '../data/portfolioData';
import IconRenderer from './IconRenderer';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          Proven Career Record
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Work <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3">
          Over 3.5+ combined years leading high-converting digital marketing campaigns, video editing production, and operations management.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8 relative">
        {/* Continuous connector line on desktop */}
        <div className="hidden lg:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-purple-500 to-cyan-500 opacity-20" />

        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-xl p-6 md:p-8 shadow-xl transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  {/* Photo / Icon Badge with Hover scale */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.iconBg} p-0.5 shadow-lg shadow-black/40 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                      <IconRenderer name={exp.iconName} className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {exp.company}
                      </h3>
                      <span className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                    </div>

                    <p className="text-sm md:text-base font-semibold text-cyan-300 mt-1">{exp.role}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="self-start md:self-center">
                  <span className="px-3.5 py-1 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    Status: <strong className="text-emerald-400">{exp.status}</strong>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="py-5">
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">{exp.summary}</p>
              </div>

              {/* Comprehensive Responsibilities / Key Deliverables */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  Key Responsibilities & Operations Executed
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-800/30 hover:bg-slate-800/60 border border-slate-800/60 hover:border-slate-700 transition-all"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-slate-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono mr-2">Key Competencies:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
