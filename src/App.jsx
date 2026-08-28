import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveTree from './components/InteractiveTree';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import EducationCertificates from './components/EducationCertificates';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Interactive 3D Particle Background */}
      <ParticleBackground />

      {/* Main Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <InteractiveTree />
          <ExperienceTimeline />
          <SkillsGrid />
          <EducationCertificates />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
