import React from 'react';
import { Mail, Sun, Moon, PhoneCall } from 'lucide-react';

const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Sidebar({ activeSection, theme, toggleTheme, personalData }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Top Header Row with Theme Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative group">
            <img
              src={personalData.avatar}
              alt={personalData.name}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 transition-all duration-300 shadow-lg"
            />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-zinc-900" title="Available for opportunities"></span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-zinc-700/50 bg-zinc-800/40 text-amber-400 hover:text-amber-300 hover:bg-zinc-800 hover:border-amber-500/40 transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2 text-xs font-medium"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 text-zinc-700" />
                <span className="hidden sm:inline text-zinc-700">Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Title & Bio */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 sm:text-5xl">
          {personalData.name}
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-amber-500 dark:text-amber-400 light:text-amber-600 sm:text-xl">
          {personalData.title}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-sm">
          {personalData.tagline}
        </p>

        {/* In-page jump navigation */}
        <nav className="nav mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul className="w-max space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center py-2.5"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                        isActive
                          ? 'w-16 bg-amber-400'
                          : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-200'
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? 'text-amber-400'
                          : 'text-zinc-500 group-hover:text-zinc-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Icons & Contact Links */}
      <div className="mt-12 lg:mt-0">
        <ul className="flex items-center gap-4 flex-wrap" aria-label="Social media">
          <li>
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-400 hover:text-amber-400 transition-colors p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 block"
              title="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-zinc-400 hover:text-amber-400 transition-colors p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 block"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${personalData.social.email}`}
              aria-label="Send email"
              className="text-zinc-400 hover:text-amber-400 transition-colors p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 block"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={personalData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="text-zinc-400 hover:text-emerald-400 transition-colors p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/40 block"
              title="WhatsApp"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
