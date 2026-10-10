import React from 'react';
import { GraduationCap, Globe } from 'lucide-react';

export default function EducationSection({ education, languages }) {
  return (
    <section
      id="education"
      aria-label="Education and credentials"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Education & Languages
        </h2>
      </div>

      {/* Degrees List */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-4 w-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
            Education
          </h3>
        </div>

        <ul className="space-y-4">
          {education.map((edu, index) => (
            <li key={index} className="glass-card p-5 sm:p-6">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h4 className="font-bold text-zinc-100 text-base sm:text-lg">
                    {edu.degree}
                  </h4>
                  <span className="block text-sm sm:text-base text-amber-400 font-semibold mt-0.5">
                    {edu.institution}
                  </span>
                  
                  {/* Single line details or multi bullet points */}
                  {edu.bullets && edu.bullets.length > 0 ? (
                    <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          <span className="leading-relaxed text-zinc-200">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : edu.details ? (
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                      {edu.details}
                    </p>
                  ) : null}
                </div>

                <span className="font-mono text-xs sm:text-sm font-bold tracking-wide text-zinc-400 mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages Block */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-4 w-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
            Languages
          </h3>
        </div>

        <div className="glass-card p-5">
          <ul className="flex flex-wrap gap-4 text-xs md:text-sm text-zinc-300">
            {languages.map((lang, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="font-medium text-zinc-200">{lang.name}</span>
                <span className="text-xs text-amber-400/90 font-mono">({lang.level})</span>
                {index < languages.length - 1 && (
                  <span aria-hidden="true" className="text-zinc-700 ml-2">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
