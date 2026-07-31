import { useState, useEffect } from 'react';
import { projectHostLinks, fallbackProjects } from '../data/portfolioData';

function getCuratedProject(repoName) {
  if (!repoName) return null;
  const name = repoName.toLowerCase().replace(/[-_\s]/g, '');

  if (
    name.includes('linkdln') ||
    name.includes('linkedln') ||
    name.includes('linkedin') ||
    name.includes('linkd') ||
    name.includes('linked')
  ) {
    return fallbackProjects.find((p) => p.id === 'Linkedln-app');
  }
  if (name.includes('darkbot')) {
    return fallbackProjects.find((p) => p.id === 'DarkBot');
  }
  if (name.includes('learnapp') || name.includes('learnplatform')) {
    return fallbackProjects.find((p) => p.id === 'Learn-app');
  }
  if (name.includes('scanapp') || name.includes('scanner')) {
    return fallbackProjects.find((p) => p.id === 'Scan-app');
  }
  if (name === 'ems' || name.includes('ems')) {
    return fallbackProjects.find((p) => p.id === 'Ems');
  }
  if (name.includes('webdevelopment')) {
    return fallbackProjects.find((p) => p.id === 'web-development');
  }
  if (name.includes('daytrip') || name.includes('tripbook')) {
    return fallbackProjects.find((p) => p.id === 'daytripbook-shop');
  }
  if (name.includes('pdf')) {
    return fallbackProjects.find((p) => p.id === 'pdf-convertor');
  }
  if (name.includes('simplechatbot') || name.includes('chatbot')) {
    return fallbackProjects.find((p) => p.id === 'simple-chatbot');
  }
  if (name.includes('jobapp') || name.includes('jobapplication')) {
    return fallbackProjects.find((p) => p.id === 'job-application');
  }
  if (name.includes('spotify')) {
    return fallbackProjects.find((p) => p.id === 'Spotify-clone');
  }
  if (name.includes('studentresult') || name.includes('resultmanagement')) {
    return fallbackProjects.find((p) => p.id === 'Student-Result-Management-System');
  }
  if (name.includes('attendance')) {
    return fallbackProjects.find((p) => p.id === 'Attendance-Management-System');
  }
  if (name.includes('solarsystem')) {
    return fallbackProjects.find((p) => p.id === 'solar-system');
  }
  if (name.includes('coffeeshop')) {
    return fallbackProjects.find((p) => p.id === 'coffee-shop');
  }

  return fallbackProjects.find((p) => p.id.toLowerCase() === repoName.toLowerCase());
}

export function useGitHubProjects(username = 'princekumar9234') {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!res.ok) throw new Error('Failed to fetch repos from GitHub API');

        const repos = await res.json();
        const nonForked = repos.filter((r) => !r.fork);

        const mappedProjects = nonForked.map((repo) => {
          const curated = getCuratedProject(repo.name);

          const liveUrl = curated?.liveUrl || projectHostLinks[repo.name] || projectHostLinks[repo.name.toLowerCase()] || repo.homepage || null;

          const defaultTags = [];
          if (repo.language) defaultTags.push(repo.language);
          if (repo.topics && Array.isArray(repo.topics)) {
            defaultTags.push(...repo.topics.slice(0, 3));
          }
          if (defaultTags.length === 0) defaultTags.push('Frontend', 'Web App');

          return {
            id: repo.id || repo.name,
            name: curated?.name || repo.name.replace(/-/g, ' '),
            rawName: repo.name,
            description: curated?.description || repo.description || 'A web application built with clean code and modern standards.',
            techStack: curated?.techStack || defaultTags,
            githubUrl: repo.html_url,
            liveUrl: liveUrl,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            featured: curated?.featured ?? (repo.stargazers_count > 0),
            category: curated?.category || 'Frontend'
          };
        });

        // Add any curated projects that were not present in the returned GitHub API repos
        const matchedCuratedIds = new Set(
          nonForked.map((r) => getCuratedProject(r.name)?.id).filter(Boolean)
        );
        const missingCurated = fallbackProjects.filter((p) => !matchedCuratedIds.has(p.id));

        const finalProjects = [...mappedProjects, ...missingCurated];

        if (finalProjects.length > 0) {
          setProjects(finalProjects);
        }
      } catch (err) {
        console.warn('Using fallback project data due to API restriction:', err);
        setError(err.message);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  return { projects, loading, error };
}

