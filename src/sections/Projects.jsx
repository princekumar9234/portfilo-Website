import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaSpinner } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { personalInfo } from '../data/portfolioData';

export default function Projects() {
  const { projects, loading } = useGitHubProjects('princekumar9234');
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Featured', '3D & Graphics', 'Full Stack', 'Frontend', 'Web Apps'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured || p.stars > 0;
    if (filter === 'Web Apps') return p.category === 'Web Apps' || p.category === 'Full Stack';
    return p.category === filter || p.techStack?.includes(filter);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="glow-orb-purple bottom-1/4 left-[-150px] w-[500px] h-[500px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="03."
          title="Featured Projects"
          subtitle="Real-world full-stack web applications, 3D WebGL graphics, and open-source software."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                filter === opt
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-cyan-400 gap-3 font-mono text-base">
            <FaSpinner className="animate-spin text-2xl" />
            <span>Fetching live projects from GitHub API...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center pt-14">
          <a
            href={`${personalInfo.socialLinks.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white glass-card hover:border-cyan-500/50 hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            <FaGithub className="text-xl text-cyan-400" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
