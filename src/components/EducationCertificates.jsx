import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle2,
  MapPin,
  Building
} from 'lucide-react';
import { educationList, coursesList } from '../data/portfolioData';
import IconRenderer from './IconRenderer';

export default function EducationCertificates() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic & Professional Certifications
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Education & <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">Training</span>
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3">
          Formal academic foundations coupled with advanced specialized digital marketing training.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Professional Certification Feature */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Specialized Professional Masterclass
          </h3>

          {coursesList.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-b from-amber-500/10 via-slate-900/80 to-slate-900/90 border border-amber-500/30 p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-amber-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 p-0.5 shadow-lg shadow-amber-500/20 shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                    <IconRenderer name="Award" className="w-7 h-7 text-amber-400" />
                  </div>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    CERTIFIED TRAINING
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight mt-1">{course.title}</h4>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 font-mono mb-4">
                <p className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  Year of Completion: <strong>{course.year}</strong>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Location: <strong>{course.location}</strong>
                </p>
              </div>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                {course.description}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Practical Ad & Funnel Trained
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Academic History Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            Academic Education History
          </h3>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 backdrop-blur-xl p-5 md:p-6 shadow-xl transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.color} p-0.5 shadow-md shrink-0`}
                    >
                      <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                        <IconRenderer name={edu.icon} className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">{edu.degree}</h4>
                      <p className="text-xs text-cyan-300 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Score: {edu.score}
                    </span>
                    <span className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {edu.year}
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    Board / University: <strong className="text-slate-300">{edu.boardUniversity}</strong>
                  </span>
                  <span className="text-emerald-400 font-medium">Completed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
