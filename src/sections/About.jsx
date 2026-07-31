import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCodeBranch, FaUsers, FaAward, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="glow-orb-purple top-1/2 left-[-150px] w-[500px] h-[500px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="01."
          title="About Me"
          subtitle="Engineering foundation, problem-solving mindset, and community involvement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* Left: Photo Frame Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow Pulse */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-violet-500 to-emerald-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse-glow" />

              {/* Inner Card Frame */}
              <div className="relative glass-panel rounded-3xl p-2 border border-white/15 shadow-2xl shadow-cyan-500/20">
                {/* Photo */}
                <img
                  src="/prince-profile.jpg"
                  alt="Prince Chauhan - Computer Science Engineer"
                  className="w-72 h-[400px] sm:w-80 sm:h-[460px] object-cover object-top rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Emoji Fallback */}
                <div
                  className="w-72 h-[400px] sm:w-80 sm:h-[460px] rounded-2xl items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-400 flex-col gap-3"
                  style={{ display: 'none' }}
                >
                  <div className="text-7xl">👨‍💻</div>
                  <p className="text-sm text-slate-400 font-mono">prince-profile.jpg</p>
                </div>

                {/* Name Badge Overlay */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 rounded-xl glass-panel border border-cyan-500/40 shadow-xl shadow-cyan-500/20 text-center">
                  <span className="font-bold text-white text-sm">Prince Chauhan</span>
                  <span className="block text-[11px] font-mono text-cyan-400">@ThePrince • CS Engineer</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl glass-panel border border-violet-500/30 text-xs font-mono text-violet-300 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-violet-400 text-[10px]" />
                  <span>Aurangabad, India</span>
                </div>
              </div>

              {/* Decorative Corner Dots */}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
              <div className="absolute top-1/2 -right-3 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            </div>
          </motion.div>

          {/* Right: Bio & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
          >
            <p className="glass-card p-6 rounded-2xl border-l-4 border-l-cyan-500 text-slate-200 text-[15px]">
              "I am a 3rd-year Diploma student at <strong className="text-cyan-400 font-semibold">Govt. Polytechnic Aurangabad</strong> with a strong interest in software development and modern web technologies. I am skilled in Java, Python, Web Development, and the MERN Stack, actively strengthening my problem-solving abilities through Data Structures & Algorithms (DSA) with Java."
            </p>

            <p className="glass-card p-6 rounded-2xl border-l-4 border-l-violet-500 text-slate-200 text-[15px]">
              "I enjoy building web projects, learning new tools, and exploring real-world applications of AI. My focus is on improving both frontend and backend development skills while gaining a deeper understanding of programming fundamentals and scalable software systems."
            </p>

            {/* Key Focus Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { icon: <FaGraduationCap />, label: "CS Diploma", sub: "Govt. Poly Aurangabad", color: "text-cyan-400" },
                { icon: <FaCodeBranch />, label: "Full Stack", sub: "MERN & Next.js", color: "text-violet-400" },
                { icon: <FaUsers />, label: "Mentorship", sub: "100+ Peers", color: "text-emerald-400" },
                { icon: <FaAward />, label: "Open Source", sub: "50+ Repos", color: "text-amber-400" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl glass-card text-center space-y-1.5 hover:border-white/20 transition-colors">
                  <div className={`text-2xl ${item.color} mx-auto`}>{item.icon}</div>
                  <span className="text-xs font-semibold text-white block">{item.label}</span>
                  <span className="text-[11px] text-slate-400">{item.sub}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass-card text-center space-y-1 hover:border-cyan-500/30 transition-colors">
                  <div className="text-2xl font-extrabold font-mono gradient-text-cyan">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
