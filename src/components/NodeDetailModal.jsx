import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, MapPin, Tag, ExternalLink, Sparkles } from 'lucide-react';
import IconRenderer from './IconRenderer';

export default function NodeDetailModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* 3D Glass Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900/95 border border-cyan-500/30 p-6 md:p-8 shadow-2xl shadow-cyan-500/10 z-10 custom-scrollbar text-slate-100"
        >
          {/* Top glowing ambient pill */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_15px_#06b6d4]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700/60"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header with Icon Badge */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="p-4 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: data.color
                  ? `linear-gradient(135deg, ${data.color}33, ${data.color}88)`
                  : 'linear-gradient(135deg, #06b6d433, #3b82f688)',
                border: `1px solid ${data.color || '#06b6d4'}55`
              }}
            >
              <IconRenderer name={data.icon || 'Sparkles'} className="w-8 h-8 text-white" />
            </div>

            <div className="flex-1">
              {data.tag && (
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2">
                  <Sparkles className="w-3 h-3" />
                  {data.tag}
                </span>
              )}
              <h3 className="text-2xl font-bold text-white tracking-tight">{data.title || data.name}</h3>
              {data.role && <p className="text-cyan-300 font-medium text-sm mt-0.5">{data.role}</p>}
              {data.period && (
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {data.period}
                </p>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4">
            {data.summary && (
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <p className="text-sm text-slate-300 leading-relaxed">{data.summary}</p>
              </div>
            )}

            {data.points && data.points.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-cyan-400" />
                  Key Highlights & Execution
                </h4>
                <ul className="space-y-2.5">
                  {data.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.skills && (
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">Manish Singh • Interactive 3D Tree Node</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-cyan-500/20"
            >
              Close View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
