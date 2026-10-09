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

  // Robust scroll tracking algorithm that accurately updates active section even for very long sections
  useEffect(() => {
    let isManualClick = false;
    let clickTimeout;

    const handleScroll = () => {
      if (isManualClick) return;

      const sections = ['about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top - 60) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleNavClick = (e) => {
      const anchor = e.target.closest('a');
      const href = anchor?.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.slice(1);
        if (['about', 'experience', 'skills', 'education', 'contact'].includes(id)) {
          isManualClick = true;
          setActiveSection(id);
          clearTimeout(clickTimeout);
          clickTimeout = setTimeout(() => {
            isManualClick = false;
          }, 850);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleNavClick);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleNavClick);
      clearTimeout(clickTimeout);
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
              languages={portfolioData.languages}
            />

            <ContactSection personalData={portfolioData.personal} />

            {/* Footer */}
            <footer className="mt-16 pb-16 text-xs text-zinc-500 lg:mt-24 lg:pb-24 border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p>
                Built with React, Vite, and Tailwind CSS. Deployed on GitHub Pages —{' '}
                <a
                  href="https://github.com/bbaymistery/my_portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-amber-400 hover:underline focus-visible:text-amber-400 focus-visible:underline"
                >
                  view source
                </a>
                .
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
