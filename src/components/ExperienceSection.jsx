import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function ExperienceSection({ experiences }) {
  const [showAll, setShowAll] = useState(false);
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

      <ol className="group/list space-y-8">
        {displayedExperiences.map((exp, index) => (
          <li key={index}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 sm:p-6 hover:!opacity-100 lg:group-hover/list:opacity-60">
              {/* Date Column */}
              <header
                className="z-10 mb-2 mt-1 text-xs font-mono font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label={exp.period}
              >
                {exp.period}
              </header>

              {/* Main Info Column */}
              <div className="z-10 sm:col-span-6">
                <h3 className="font-semibold leading-snug text-zinc-200">
                  <a
                    href={exp.companyUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 hover:text-amber-400 focus-visible:text-amber-400 group/link transition-colors"
                  >
                    <span>
                      {exp.role}{' '}
                      <span className="inline-block">
                        · {exp.company}
                        {exp.via && <span className="text-zinc-400 font-normal"> (via {exp.via})</span>}
                        {exp.companyUrl && (
                          <ExternalLink className="ml-1.5 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-amber-400" />
                        )}
                      </span>
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {exp.description}
                </p>

                {/* Technology Chips */}
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {exp.technologies.map((tech, tIdx) => (
                    <li key={tIdx}>
                      <span className="tech-chip">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
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
