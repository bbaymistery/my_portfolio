import React from 'react';
import { User, Briefcase, Wrench, GraduationCap, Mail } from 'lucide-react';

export default function MobileNav({ activeSection, onNavClick }) {
  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills', icon: <Wrench className="h-4 w-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> }
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden max-w-[92vw] sm:max-w-md"
    >
      <div className="flex items-center justify-between gap-1 p-1.5 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-slate-950/90 backdrop-blur-xl border border-zinc-800/90 shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onNavClick && onNavClick(item.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm scale-105'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              {item.icon}
              <span className={`text-[11px] sm:text-xs ${isActive ? 'inline' : 'hidden sm:inline'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
