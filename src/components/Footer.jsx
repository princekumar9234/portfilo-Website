import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowUp, FaHeart, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04050b] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <FaCode className="text-lg" />
              </div>
              <span className="font-mono text-white tracking-wider">
                THE_<span className="gradient-text-cyan">PRINCE</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Computer Science Engineer & Full Stack MERN Developer from Govt. Polytechnic Aurangabad. Passionate about modern 3D UI, Gen AI solutions, and empowering developers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-pink-400 hover:scale-110 transition-all"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={personalInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:scale-110 transition-all"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education Timeline</a></li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base tracking-wider uppercase">Built With</h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded-md glass-card border border-cyan-500/20 text-cyan-300">React 19</span>
              <span className="px-2.5 py-1 rounded-md glass-card border border-violet-500/20 text-violet-300">Vite</span>
              <span className="px-2.5 py-1 rounded-md glass-card border border-emerald-500/20 text-emerald-300">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md glass-card border border-cyan-500/20 text-cyan-300">Three.js</span>
              <span className="px-2.5 py-1 rounded-md glass-card border border-pink-500/20 text-pink-300">Framer Motion</span>
              <span className="px-2.5 py-1 rounded-md glass-card border border-amber-500/20 text-amber-300">Lenis Scroll</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} Prince Chauhan (ThePrince). Designed & built with
            <FaHeart className="text-rose-500 mx-1 animate-pulse" />
            for performance.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-105 transition-all group"
          >
            <span>Back to Top</span>
            <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
