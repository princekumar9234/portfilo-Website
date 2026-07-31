import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCode, FaFileDownload, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typewriterText = useTypewriter(personalInfo.typewriterWords, 90, 45, 1800);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Radial Orbs */}
      <div className="glow-orb-cyan top-1/4 left-[-100px] w-[450px] h-[450px] pointer-events-none" />
      <div className="glow-orb-purple bottom-10 right-[-100px] w-[500px] h-[500px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left Column: Headline & Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-7 text-center lg:text-left"
          >
            {/* Status pill */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Available for Full-Stack & Gen AI Roles</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm <br />
              <span className="gradient-text-cyan">Prince Chauhan</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-xl sm:text-2xl text-cyan-300 font-semibold">
                {typewriterText}
              </span>
              <span className="font-mono text-xl sm:text-2xl text-cyan-400 animate-pulse ml-0.5">|</span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <FaPaperPlane className="text-sm" />
                <span>Hire Me</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white glass-card hover:border-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <FaCode className="text-sm text-cyan-400" />
                <span>View Projects</span>
              </a>

              <a
                href="https://github.com/princekumar9234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3.5 text-sm font-medium text-slate-300 glass-card hover:text-white hover:scale-105 active:scale-95 transition-all"
              >
                <FaFileDownload className="text-sm text-violet-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-5 text-slate-400 pt-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              {[
                { href: personalInfo.socialLinks.github,    icon: <FaGithub />,    hover: 'hover:text-white' },
                { href: personalInfo.socialLinks.linkedin,  icon: <FaLinkedin />,  hover: 'hover:text-cyan-400' },
                { href: personalInfo.socialLinks.instagram, icon: <FaInstagram />, hover: 'hover:text-pink-400' },
                { href: personalInfo.socialLinks.facebook,  icon: <FaFacebook />,  hover: 'hover:text-blue-400' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`text-xl transition-colors ${s.hover} hover:scale-110 active:scale-95`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Profile Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500 via-violet-600 to-emerald-500 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse-glow" />

              {/* Photo Card */}
              <div className="relative w-[320px] sm:w-[370px] lg:w-[400px] rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl shadow-cyan-500/20 glass-panel">
                <img
                  src="/prince-profile.jpg"
                  alt="Prince Chauhan - Computer Science Engineer"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                />

                {/* Bottom overlay with info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-6 py-5">
                  <p className="text-xl font-extrabold text-white tracking-wide">Prince Chauhan</p>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">CS Engineer • MERN Dev • Gen AI</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt className="text-violet-400 text-[10px]" />
                    Aurangabad, India
                  </p>
                </div>

                {/* Top-right status dot */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-emerald-500/30 text-[11px] text-emerald-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Open to Work
                </div>
              </div>

              {/* Floating Skill Chips */}
              <div className="absolute -left-6 top-1/4 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-lg animate-float">
                ⚡ React 19
              </div>
              <div className="absolute -right-6 top-1/2 px-3 py-1.5 rounded-xl glass-panel border border-violet-500/30 text-[11px] font-mono text-violet-300 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                🧠 Gen AI
              </div>
              <div className="absolute -left-5 bottom-1/4 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                🗄 MERN
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
