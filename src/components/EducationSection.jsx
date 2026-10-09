import React from 'react';
import { GraduationCap, Award, Globe, ExternalLink } from 'lucide-react';

export default function EducationSection({ education, certifications, languages, linkedinUrl }) {
  return (
    <section
      id="education"
      aria-label="Education and credentials"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Education & Credentials
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
            <li key={index} className="glass-card p-5">
              <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h4 className="font-semibold text-zinc-200 text-sm md:text-base">
                    {edu.degree}
                  </h4>
                  <span className="block text-xs md:text-sm text-amber-400 font-medium mt-0.5">
                    {edu.institution}
                  </span>
                  {edu.details && (
                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed italic">
                      {edu.details}
                    </p>
                  )}
                </div>
                <span className="font-mono text-xs uppercase tracking-wide text-zinc-500 mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Block */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-4 w-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">
            Certifications
          </h3>
        </div>

        <div className="glass-card p-5">
          <ul className="divide-y divide-zinc-800/60">
            {certifications.map((cert, index) => (
              <li key={index} className="py-3 first:pt-0 last:pb-0 grid gap-1 sm:grid-cols-[1fr_auto] sm:items-center">
                <span className="text-xs md:text-sm text-zinc-300 font-medium">
                  {cert.title}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={linkedinUrl ? `${linkedinUrl}/details/certifications/` : "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300 focus-visible:text-amber-300 pt-3 border-t border-zinc-800/80 w-full"
          >
            <span>View all certifications on LinkedIn</span>
            <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
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
