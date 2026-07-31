import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCube, FaBrain, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaCube: FaCube,
  FaBrain: FaBrain,
  FaGraduationCap: FaGraduationCap
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="glow-orb-cyan top-1/4 left-[-100px] w-[450px] h-[450px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="06."
          title="Services & Capabilities"
          subtitle="Custom web development, 3D interactive user interfaces, Gen AI integrations, and technical education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || FaLaptopCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <IconComponent />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-400 flex items-center gap-1"
                    >
                      <FaCheckCircle className="text-[10px]" /> {tag}
                    </span>
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
