import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

// Azerbaijan Flag SVG Component
const AzerbaijanFlag = ({ className = "h-6 w-9" }) => (
  <svg
    viewBox="0 0 1200 600"
    className={`${className} overflow-hidden rounded-[3px] shadow-md ring-1 ring-white/20`}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Azerbaijan Flag"
  >
    <rect width="1200" height="200" fill="#0092bc" />
    <rect y="200" width="1200" height="200" fill="#e4002b" />
    <rect y="400" width="1200" height="200" fill="#00af66" />
    <circle cx="560" cy="300" r="95" fill="#ffffff" />
    <circle cx="590" cy="300" r="76" fill="#e4002b" />
    <g transform="translate(680, 300) scale(42)" fill="#ffffff">
      <polygon points="0,-1 0.28,-0.38 0.71,-0.71 0.38,-0.28 1,0 0.38,0.28 0.71,0.71 0.28,0.38 0,1 -0.28,0.38 -0.71,0.71 -0.38,0.28 -1,0 -0.38,-0.28 -0.71,-0.71 -0.28,-0.28" />
    </g>
  </svg>
);

// United Kingdom Flag SVG Component
const UKFlag = ({ className = "h-6 w-9" }) => (
  <svg
    viewBox="0 0 60 30"
    className={`${className} overflow-hidden rounded-[3px] shadow-md ring-1 ring-white/20`}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Kingdom Flag"
  >
    <clipPath id="uk-flag-clip">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <path d="M0 0h60v30H0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#c8102e" strokeWidth="2" />
      <path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </g>
  </svg>
);

const renderFlagBadge = (location) => {
  if (!location) return null;
  const loc = location.toLowerCase();

  let flag = null;
  let title = "";

  if (loc.includes('baku') || loc.includes('azerbaijan')) {
    flag = <AzerbaijanFlag className="h-6 w-9 sm:h-7 sm:w-10.5 shrink-0" />;
    title = "Baku, Azerbaijan";
  } else if (loc.includes('london') || loc.includes('uk') || loc.includes('united kingdom')) {
    flag = <UKFlag className="h-6 w-9 sm:h-7 sm:w-10.5 shrink-0" />;
    title = "London, United Kingdom";
  }

  if (!flag) return null;

  return (
    <div
      className="flex items-center gap-2 p-1 rounded-md bg-zinc-900/80 border border-zinc-800 shadow-sm transition-all hover:border-amber-500/40 hover:scale-105 cursor-default"
      title={title}
    >
      {flag}
    </div>
  );
};

export default function ExperienceSection({ experiences }) {
  const [showAll, setShowAll] = useState(false);
  const [expandedMap, setExpandedMap] = useState({});

  const toggleExpand = (idx) => {
    setExpandedMap((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 5);

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Experience
        </h2>
      </div>

      <ol className="group/list space-y-6">
        {displayedExperiences.map((exp, index) => {
          const isExpanded = !!expandedMap[index];

          return (
            <li key={index}>
              <div className="group relative glass-card p-5 sm:p-6 transition-all border border-zinc-800 hover:border-amber-500/40">
                {/* Header Row / Summary Info */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 ">
                  {/* Date & Location Column */}
                  <header
                    className="z-10 shrink-0 sm:w-36 font-mono"
                    aria-label={exp.period}
                  >
                    <div className="text-xs font-bold tracking-wide text-zinc-200">
                      {exp.period}
                    </div>
                    {exp.location && (
                      <div className="mt-1 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-400/95 font-sans">
                        📍 {exp.location}
                      </div>
                    )}
                  </header>

                  {/* Main Role & Description Column */}
                  <div className="z-10 grow">
                    <h3 className="text-base sm:text-md font-bold leading-snug text-zinc-100">
                      <a
                        href={exp.companyUrl || "#"}
                        target={exp.companyUrl && exp.companyUrl !== "#" ? "_blank" : undefined}
                        rel={exp.companyUrl && exp.companyUrl !== "#" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-baseline font-bold leading-tight text-zinc-100 hover:text-amber-400 focus-visible:text-amber-400 group/link transition-colors"
                      >
                        <span>
                          {exp.role}{' '}
                          <span className="inline-block font-medium text-amber-400/90">
                            · {exp.company}
                            {exp.via && <span className="text-zinc-400 font-normal"> (via {exp.via})</span>}
                            {exp.companyUrl && exp.companyUrl !== "#" && (
                              <ExternalLink className="ml-1.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-amber-400" />
                            )}
                          </span>
                        </span>
                      </a>
                    </h3>

                    {exp.description && (
                      <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {exp.description}
                      </p>
                    )}

                    {/* Accordion Toggle Trigger Button & Location Flag */}
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="exp-accordion-btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all cursor-pointer shadow-sm"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Details" : "View Achievements & Tech"}</span>
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>

                      {/* Location Flag (Bottom Right) */}
                      {renderFlagBadge(exp.location)}
                    </div>
                  </div>
                </div>

                {/* Collapsible Accordion Body */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-zinc-800/80 animate-fade-in space-y-5">
                    {/* Bullet Points / Achievements */}
                    {exp.bullets && exp.bullets.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                          Key Achievements & Responsibilities
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                              <span className="leading-relaxed text-zinc-200">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies & Skills Chips */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                          Technologies & Skills Used
                        </h4>
                        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                          {exp.technologies.map((tech, tIdx) => (
                            <li key={tIdx}>
                              <span className="tech-chip">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Show More / Show Less Toggle Button */}
      {experiences.length > 5 && (
        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700/60 bg-zinc-900/60 text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-zinc-800 hover:border-amber-400/50 transition-all cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Less Experience</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show All ({experiences.length}) Experiences</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
