import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle,
  Eye,
  Layers,
  Zap,
  Briefcase,
  Target,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Compass
} from 'lucide-react';
import { singleLineTreeNodes, personalInfo } from '../data/portfolioData';
import IconRenderer from './IconRenderer';
import NodeDetailModal from './NodeDetailModal';

export default function InteractiveTree() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [viewMode, setViewMode] = useState('linear'); // 'linear' (Single Horizontal Rail) or 'spine' (Single Vertical Spine)
  const railRef = useRef(null);

  const filteredNodes = singleLineTreeNodes.filter((node) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'origin') return node.category === 'origin';
    if (activeCategory === 'exp') return node.category === 'experience';
    if (activeCategory === 'skills') return node.category === 'skills';
    if (activeCategory === 'edu') return node.category === 'education';
    return true;
  });

  const scrollRail = (direction) => {
    if (railRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNodeClick = (node, index) => {
    setActiveNodeIndex(index);
    setSelectedNode(node);
  };

  return (
    <section id="career-tree" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 3D Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          Single-Line Connected Tree Circuit
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight"
        >
          Interactive <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Single-Line Tree</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-slate-400 mt-3"
        >
          Everything connected in one continuous line. Hover over buttons, cards, and photos to inspect full details & live highlights.
        </motion.p>

        {/* Filter Toolbar & Layout Switcher */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center p-1 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              All Nodes ({singleLineTreeNodes.length})
            </button>
            <button
              onClick={() => setActiveCategory('exp')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeCategory === 'exp'
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              💼 Experience
            </button>
            <button
              onClick={() => setActiveCategory('skills')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeCategory === 'skills'
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              ⚡ Skills & Tech
            </button>
            <button
              onClick={() => setActiveCategory('edu')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeCategory === 'edu'
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30 scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              🎓 Education
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setViewMode('linear')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                viewMode === 'linear'
                  ? 'bg-slate-700 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Horizontal Rail
            </button>
            <button
              onClick={() => setViewMode('spine')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                viewMode === 'spine'
                  ? 'bg-slate-700 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Vertical Spine
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HORIZONTAL SINGLE-LINE CIRCUIT PIPELINE                                 */}
      {/* ========================================================================= */}
      {viewMode === 'linear' && (
        <div className="relative rounded-3xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
          {/* Cyber Grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none rounded-3xl" />

          {/* Rail Navigation Buttons with Hover Animations */}
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                SINGLE CONNECTED CIRCUIT LINE
              </span>
              <span className="text-xs text-slate-500">|</span>
              <span className="text-xs text-slate-400 font-mono">
                {filteredNodes.length} Interconnected Nodes
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollRail('left')}
                className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-black/40 group"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollRail('right')}
                className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-black/40 group"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Horizontal Line Rail Container */}
          <div className="relative">
            {/* The Continuous Glowing Energy Pipe running across all nodes */}
            <div className="absolute top-[82px] left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-0 opacity-80" />

            {/* Scrollable Track */}
            <div
              ref={railRef}
              className="flex items-start gap-6 overflow-x-auto pb-6 pt-2 px-2 scroll-smooth custom-scrollbar relative z-10 select-none"
              style={{ scrollbarWidth: 'thin' }}
            >
              {filteredNodes.map((node, index) => {
                const isOrigin = node.category === 'origin';
                const isExp = node.category === 'experience';
                const isSkills = node.category === 'skills';
                const isEdu = node.category === 'education';

                return (
                  <div
                    key={node.id}
                    className="flex-shrink-0 w-80 md:w-[330px] flex flex-col items-center group"
                  >
                    {/* Node Junction Point On The Single Line */}
                    <div className="relative mb-6 flex flex-col items-center">
                      {/* Photo or Icon Lens Badge */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNodeClick(node, index)}
                        className={`relative cursor-pointer w-16 h-16 rounded-2xl p-1 shadow-xl transition-all duration-500 ${
                          isOrigin
                            ? 'bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-600 shadow-cyan-500/40 hover:shadow-[0_0_30px_#06b6d4]'
                            : isExp
                            ? 'bg-gradient-to-tr from-emerald-400 to-teal-600 shadow-emerald-500/30 hover:shadow-[0_0_30px_#10b981]'
                            : isSkills
                            ? 'bg-gradient-to-tr from-purple-400 to-pink-600 shadow-purple-500/30 hover:shadow-[0_0_30px_#8b5cf6]'
                            : 'bg-gradient-to-tr from-amber-400 to-orange-600 shadow-amber-500/30 hover:shadow-[0_0_30px_#f59e0b]'
                        }`}
                      >
                        <div className="w-full h-full rounded-[12px] bg-slate-950 flex items-center justify-center overflow-hidden relative">
                          {node.photo ? (
                            <img
                              src={node.photo}
                              alt={node.title}
                              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <IconRenderer name={node.icon} className="w-7 h-7 text-white" color={node.color} />
                          )}
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                        </div>

                        {/* Node Number Badge */}
                        <div className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-md bg-slate-900 text-[10px] font-mono font-bold text-white border border-slate-700 shadow-md">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                      </motion.div>

                      {/* Junction line down to card */}
                      <div
                        className="w-0.5 h-6 transition-all duration-300 group-hover:h-8"
                        style={{ backgroundColor: node.color || '#06b6d4' }}
                      />
                    </div>

                    {/* Node Interactive 3D Card with Hover Lift & Glow */}
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="w-full rounded-3xl bg-slate-900/80 hover:bg-slate-900/95 border border-slate-800/90 hover:border-slate-600 backdrop-blur-xl p-5 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
                      onClick={() => handleNodeClick(node, index)}
                      style={{
                        boxShadow: `0 10px 30px -10px ${node.color}15`
                      }}
                    >
                      {/* Top Glowing Ambient Line on Card */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: node.color }}
                      />

                      {/* Card Content */}
                      <div>
                        {/* Header Stage & Tag */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            {node.stage}
                          </span>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full border shadow-sm"
                            style={{
                              backgroundColor: `${node.color}15`,
                              color: node.color,
                              borderColor: `${node.color}40`
                            }}
                          >
                            {node.badgeText || node.tag}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight line-clamp-1">
                          {node.title}
                        </h4>
                        <p className="text-xs text-slate-300 font-medium mt-0.5 line-clamp-1">{node.role}</p>

                        {node.period && (
                          <p className="text-[10px] text-slate-400 font-mono mt-1">{node.period}</p>
                        )}

                        {/* Summary / Highlights Preview */}
                        <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5">
                          {node.points?.slice(0, 2).map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                style={{ backgroundColor: node.color }}
                              />
                              <span className="line-clamp-2 leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Inspect Node Hover Button with Shine & Click Action */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                          <Eye className="w-3 h-3 text-cyan-400" />
                          Live Node
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNodeClick(node, index);
                          }}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-400 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 group/btn"
                        >
                          <span>Inspect Node</span>
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. VERTICAL SINGLE-SPINE FLOW TIMELINE                                     */}
      {/* ========================================================================= */}
      {viewMode === 'spine' && (
        <div className="relative py-8">
          {/* Continuous Center Glowing Spine */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

          <div className="space-y-8 relative">
            {filteredNodes.map((node, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={node.id}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-[calc(50%-40px)] pl-16 md:pl-0">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      onClick={() => handleNodeClick(node, index)}
                      className="rounded-3xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-600 backdrop-blur-xl p-5 md:p-6 shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          {node.stage}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                          style={{
                            backgroundColor: `${node.color}15`,
                            color: node.color,
                            borderColor: `${node.color}40`
                          }}
                        >
                          {node.badgeText || node.tag}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {node.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">{node.role}</p>
                      {node.period && <p className="text-[11px] text-slate-400 font-mono mt-1">{node.period}</p>}

                      <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5">
                        {node.points?.slice(0, 3).map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-mono">Node #{index + 1}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNodeClick(node, index);
                          }}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 flex items-center gap-1"
                        >
                          <span>Inspect Node</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Lens on Spine */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.25, rotate: 5 }}
                      onClick={() => handleNodeClick(node, index)}
                      className="w-12 h-12 rounded-2xl p-0.5 shadow-xl cursor-pointer"
                      style={{
                        backgroundColor: node.color,
                        boxShadow: `0 0 20px ${node.color}`
                      }}
                    >
                      <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center overflow-hidden">
                        {node.photo ? (
                          <img src={node.photo} alt={node.title} className="w-full h-full object-cover object-top" />
                        ) : (
                          <IconRenderer name={node.icon} className="w-5 h-5 text-white" color={node.color} />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer side for grid alignment on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Deep Inspection Modal */}
      <NodeDetailModal
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        data={selectedNode}
      />
    </section>
  );
}
