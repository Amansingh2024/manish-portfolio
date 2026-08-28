import React from 'react';
import { ArrowUp, Sparkles, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center font-heading font-black text-cyan-400 text-base">
                  MS
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{personalInfo.name}</h3>
                <p className="text-xs text-slate-400 font-mono">Digital Marketing & R&D Management Professional</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed">
              Specialized in high-ROI Paid Advertising campaigns, Adobe Premiere Pro creative video editing, and full-scale business operations & R&D management.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#career-tree" className="hover:text-cyan-400 transition-colors">
                  ❯ Interactive 3D Tree
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  ❯ Work Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  ❯ Skills & Tech
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  ❯ Education & Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  ❯ Contact Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Direct Coordinates
            </h4>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+91-790 392 6741</span>
              </p>
              <p className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">manishsinghbr790@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Gardanibagh, Patna (Bihar)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Manish Singh. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
