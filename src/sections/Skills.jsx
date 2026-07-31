import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaRocket, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  FaCode: FaCode,
  FaTools: FaTools,
  FaRocket: FaRocket,
  FaChalkboardTeacher: FaChalkboardTeacher,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="glow-orb-cyan top-1/3 right-[-100px] w-[450px] h-[450px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="02."
          title="Skills & Technologies"
          subtitle="Full-stack technologies, engineering performance, and community mentorship."
        />

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || FaCode;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-7 rounded-3xl border border-white/10 space-y-6 hover:border-cyan-500/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-slate-900/50 border border-white/5 space-y-2 hover:border-cyan-500/30 hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <FaCheckCircle className="text-cyan-400 text-xs" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400">{skill.level}%</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
