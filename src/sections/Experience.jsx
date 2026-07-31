import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="glow-orb-cyan top-1/4 right-[-100px] w-[400px] h-[400px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="04."
          title="Experience & Leadership"
          subtitle="Full-stack development experience, open-source building, and student tech leadership."
        />

        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-wide flex items-center gap-2.5">
                    <FaBriefcase className="text-cyan-400 text-xl" />
                    {item.role}
                  </h3>
                  <p className="text-slate-400 font-semibold text-base">
                    {item.company} • <span className="text-cyan-400">{item.type}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10">
                    <FaCalendarAlt className="text-cyan-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10">
                    <FaMapMarkerAlt className="text-violet-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">Key Highlights:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-cyan-400 text-xs mt-1 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
