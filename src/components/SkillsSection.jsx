import React, { useState } from 'react';
import { Code, Layers, Cloud, Database, Cpu, Zap, CheckCircle, Sparkles, Wrench, ShieldCheck, Users } from 'lucide-react';

export default function SkillsSection({ skillsCategorized }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsCategorized.map((c) => c.category)];

  const getCategoryIcon = (categoryName) => {
    if (categoryName.includes('Frontend')) return <Code className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('State')) return <Layers className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('Rendering') || categoryName.includes('SEO')) return <Zap className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('Backend') || categoryName.includes('Microservices')) return <Cpu className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('Databases')) return <Database className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('Build Tools')) return <Wrench className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('CI/CD') || categoryName.includes('Cloud')) return <Cloud className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('Testing')) return <CheckCircle className="h-4 w-4 text-amber-400" />;
    if (categoryName.includes('AI') || categoryName.includes('LLM')) return <Sparkles className="h-4 w-4 text-amber-400" />;
    return <Users className="h-4 w-4 text-amber-400" />;
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillsCategorized
    : skillsCategorized.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Skills
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold shadow-md scale-105'
                : 'bg-zinc-900/60 text-zinc-300 border-zinc-800 hover:text-zinc-100 hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categorized Skills List */}
      <div className="space-y-6">
        {filteredCategories.map((group, index) => (
          <div key={index} className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-800/60">
              {getCategoryIcon(group.category)}
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-200">
                {group.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx}>
                  <span className="skill-chip">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
