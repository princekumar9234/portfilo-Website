import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Algorithms', 'AI & Web3'];

  const filteredCerts = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="glow-orb-cyan top-1/3 left-[-100px] w-[400px] h-[400px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="08."
          title="Certificates & Credentials"
          subtitle="Verified technical credentials and practical skill certifications."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 rounded-3xl border border-white/10 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <FaCertificate className="text-xl" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-white/10">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <FaAward className="text-amber-400" /> {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
