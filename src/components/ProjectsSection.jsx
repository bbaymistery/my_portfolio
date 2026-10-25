import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);
const showProjects = false
export default function ProjectsSection({ projects }) {
  const [expandedMap, setExpandedMap] = useState({});

  const toggleExpand = (idx) => {
    setExpandedMap((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {/* Sticky Header for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Projects
        </h2>
      </div>

      <div className="space-y-6">
        {showProjects && projects.map((project, index) => {
          const isExpanded = !!expandedMap[index];

          return (
            <div
              key={index}
              className="group relative glass-card p-5 sm:p-6 transition-all border border-zinc-800 hover:border-amber-500/40"
            >
              {/* Top Header Row: Title, Stack Badge, and GitHub link */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Layers className="h-3 w-3" />
                      {project.stackType}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold leading-snug text-zinc-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline font-bold leading-tight text-zinc-100 hover:text-amber-400 focus-visible:text-amber-400 group/link transition-colors"
                    >
                      <span>
                        {project.title}{' '}
                        <ExternalLink className="ml-1.5 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-amber-400" />
                      </span>
                    </a>
                  </h3>
                </div>

                {/* Direct GitHub Repository Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-all shadow-sm w-fit"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-zinc-400 group-hover:text-amber-400" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Project Description */}
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Accordion Toggle for Architectural Highlights */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(index)}
                  className="exp-accordion-btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all cursor-pointer shadow-sm"
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "Hide Highlights" : "View Architecture & Features"}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              {/* Collapsible Architecture Details */}
              {isExpanded && (
                <div className="mt-5 pt-4 border-t border-zinc-800/80 animate-fade-in space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Key Architectural Highlights
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-amber-400" />
                        <span className="leading-relaxed text-zinc-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Chips */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60">
                <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.technologies.map((tech, tIdx) => (
                    <li key={tIdx}>
                      <span className="tech-chip">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
