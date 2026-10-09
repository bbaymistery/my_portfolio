import React from 'react';

export default function AboutSection({ personalData }) {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      {/* Sticky Header for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          About
        </h2>
      </div>

      <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
        {personalData.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Highlights / Key Stats Grid */}
      <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-8 sm:gap-6">
        {personalData.stats.map((stat, index) => (
          <div key={index} className="glass-card p-4 text-center sm:text-left">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-xs">
              {stat.label}
            </dt>
            <dd className="mt-2 font-mono text-3xl font-extrabold text-amber-400 sm:text-4xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
