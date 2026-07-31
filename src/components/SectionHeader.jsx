import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ number, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left mb-12 space-y-3"
    >
      <div className="flex items-center justify-center md:justify-start gap-3">
        <span className="font-mono text-cyan-400 font-bold text-lg tracking-wider">
          {number}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent rounded-full mx-auto md:mx-0 mt-2" />
    </motion.div>
  );
}
