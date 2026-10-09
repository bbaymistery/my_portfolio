import React from 'react';
import { Mail, Sun, Moon } from 'lucide-react';

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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalData.social.email)}`;

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
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Gmail"
              className="text-zinc-400 hover:text-amber-400 transition-colors p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 block"
              title="Send Gmail"
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
