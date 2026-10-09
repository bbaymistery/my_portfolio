import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import MouseSpotlight from './components/MouseSpotlight';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('about');

  // Toggle Dark / Light Theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  // Set initial theme class on HTML element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // IntersectionObserver to automatically detect active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Interactive Cursor Ambient Glow */}
      <MouseSpotlight />

      {/* Main Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {/* Skip to Content for Accessibility */}
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-y-full rounded bg-amber-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 ring-amber-300 transition-transform focus-visible:translate-y-0 focus-visible:outline-none z-50"
        >
          Skip to Content
        </a>

        {/* Two-Column Responsive Layout */}
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Left Column (Sticky Sidebar) */}
          <Sidebar
            activeSection={activeSection}
            theme={theme}
            toggleTheme={toggleTheme}
            personalData={portfolioData.personal}
          />

          {/* Right Column (Scrollable Main Content) */}
          <main id="content" className="pt-16 lg:w-7/12 lg:py-24">
            <AboutSection personalData={portfolioData.personal} />
            
            <ExperienceSection experiences={portfolioData.experiences} />

            <SkillsSection skillsCategorized={portfolioData.skillsCategorized} />

            <EducationSection
              education={portfolioData.education}
              certifications={portfolioData.certifications}
              languages={portfolioData.languages}
              linkedinUrl={portfolioData.personal.social.linkedin}
            />

            <ContactSection personalData={portfolioData.personal} />

            {/* Footer */}
            <footer className="mt-16 pb-16 text-xs text-zinc-500 lg:mt-24 lg:pb-24 border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>
                Built with React & Vite. Designed for performance and elegance.
              </p>
              <a
                href="#about"
                className="font-semibold text-amber-400 hover:text-amber-300 hover:underline text-xs"
              >
                Back to top ↑
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
