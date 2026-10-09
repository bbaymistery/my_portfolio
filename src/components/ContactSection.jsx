import React from 'react';
import { Mail, MessageCircle, ExternalLink, Phone } from 'lucide-react';

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

export default function ContactSection({ personalData }) {
  const contactOptions = [
    {
      title: "Email",
      value: personalData.social.email,
      href: `mailto:${personalData.social.email}`,
      icon: <Mail className="h-5 w-5 text-amber-400" />,
      badge: "Send Email",
      hoverBorder: "hover:border-amber-500/50"
    },
    {
      title: "WhatsApp",
      value: personalData.social.whatsappDisplay,
      href: personalData.social.whatsapp,
      icon: <WhatsappIcon className="h-5 w-5 text-emerald-400" />,
      badge: "Open WhatsApp",
      hoverBorder: "hover:border-emerald-500/50",
      external: true
    },
    {
      title: "LinkedIn",
      value: "Elgün Əzməmmədov",
      href: personalData.social.linkedin,
      icon: <LinkedinIcon className="h-5 w-5 text-blue-400" />,
      badge: "View Profile",
      hoverBorder: "hover:border-blue-500/50",
      external: true
    },
    {
      title: "GitHub",
      value: "bbaymistery",
      href: personalData.social.github,
      icon: <GithubIcon className="h-5 w-5 text-purple-400" />,
      badge: "View Repositories",
      hoverBorder: "hover:border-purple-500/50",
      external: true
    }
  ];

  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-950/75 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Contact
        </h2>
      </div>

      <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
        Projeleriniz, iş birliği fırsatları veya teknik sohbetler için doğrudan aşağıdaki kanallardan ulaşabilirsiniz:
      </p>

      {/* Grid of Direct Contact Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {contactOptions.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`glass-card p-5 block group ${item.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-zinc-200 text-sm">
                  {item.title}
                </h3>
              </div>
              <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
            </div>

            <p className="text-xs font-mono text-zinc-400 truncate mb-4">
              {item.value}
            </p>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              {item.badge} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
