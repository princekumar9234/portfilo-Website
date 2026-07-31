import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward, FaBookReader } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="glow-orb-purple top-1/3 left-[-150px] w-[450px] h-[450px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="05."
          title="Education Timeline"
          subtitle="Academic milestones, core computer science subjects, and engineering fundamentals."
        />

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pt-6">
          {/* Vertical Glowing Central Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-emerald-500 transform -translate-x-1/2 opacity-70" />

          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Central Glowing Icon Node */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/30 z-20">
                <FaGraduationCap />
              </div>

              {/* Card Container */}
              <div className="ml-16 md:ml-0 md:w-[45%] w-full">
                <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <FaCalendarAlt />
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <FaAward /> {edu.grade}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-base font-semibold text-slate-300 flex items-center gap-2">
                    <FaUniversity className="text-violet-400" />
                    {edu.institution}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Course Badges */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2">
                    {edu.badges.map((b, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-cyan-400 flex items-center gap-1"
                      >
                        <FaBookReader className="text-[10px]" /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
