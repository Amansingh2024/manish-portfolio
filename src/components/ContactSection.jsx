import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  Copy,
  Sparkles,
  ExternalLink,
  Clock,
  Check,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger confetti celebration
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    // Create mailto fallback
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          Direct Communication Hub
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Let's Build & Scale <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-3">
          Reach out for high-impact performance marketing campaigns, video editing production, or business R&D management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info Cards with Manish's Portrait Photo Card */}
        <div className="lg:col-span-5 space-y-4">
          {/* Visual Profile Contact Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl transition-all duration-300 shadow-xl flex items-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shrink-0">
              <img
                src={personalInfo.officePhoto || personalInfo.avatar}
                alt="Manish Singh Office"
                className="w-full h-full object-cover object-top rounded-[14px] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Manish Singh
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-slate-400 font-mono">Digital Marketing & R&D Lead</p>
              <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">● Ready for New Opportunities</p>
            </div>
          </motion.div>

          {/* Phone Card with Hover */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 backdrop-blur-xl transition-all duration-300 shadow-lg flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Direct Phone / Mobile</span>
                <a
                  href={`tel:${personalInfo.contact.rawPhone}`}
                  className="block text-base font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.contact.rawPhone, 'phone')}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-300 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95"
              title="Copy Phone Number"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Email Card with Hover */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 backdrop-blur-xl transition-all duration-300 shadow-lg flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-mono">Official Email</span>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="block text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors truncate"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-300 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95 shrink-0"
              title="Copy Email"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl transition-all duration-300 shadow-lg flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono">Current Base Location</span>
              <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                {personalInfo.contact.location}
              </p>
            </div>
          </motion.div>

          {/* WhatsApp Direct Action Button with Hover Lighting */}
          <a
            href={personalInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] group"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Chat on WhatsApp (+91-790 392 6741)
          </a>
        </div>

        {/* Right: Quick Direct Inquiry Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative"
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Send Direct Message to Manish
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below and it will compose a direct inquiry straight to Manish's inbox.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your mail client has been opened with your message. You can also connect immediately via WhatsApp or phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 hover:scale-105 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject / Opportunity</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Digital Marketing Lead / Video Editing Project"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Message / Project Scope *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="relative overflow-hidden flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Transmit Message Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
