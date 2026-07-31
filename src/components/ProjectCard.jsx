import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaStar, FaCodeBranch } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-3xl p-6 flex flex-col justify-between h-full border border-white/10 hover:border-cyan-500/40 transition-all group"
    >
      <div>
        {/* Top Folder Icon & Direct Links */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl shadow-inner group-hover:bg-cyan-500 group-hover:text-black transition-colors">
            <FaFolder />
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:scale-110 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Hosted Demo"
                className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Category */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white tracking-wide capitalize group-hover:text-cyan-300 transition-colors">
              {project.name}
            </h3>
            {project.category && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300">
                {project.category}
              </span>
            )}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 space-y-4 mt-4">
        {/* Stars and Forks if available */}
        {(project.stars > 0 || project.forks > 0) && (
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            {project.stars > 0 && (
              <span className="flex items-center gap-1">
                <FaStar className="text-amber-400 text-xs" /> {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-cyan-400 text-xs" /> {project.forks}
              </span>
            )}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.techStack?.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
