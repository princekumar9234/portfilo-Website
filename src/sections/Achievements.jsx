import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaUsers, FaRocket } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  FaGithub: FaGithub,
  FaUsers: FaUsers,
  FaRocket: FaRocket,
};

export default function Achievements() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="glow-orb-purple bottom-10 right-[-100px] w-[400px] h-[400px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="07."
          title="Key Achievements"
          subtitle="Milestones reached across open source building, community impact, and deployments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaRocket;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 text-center hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <IconComponent />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
