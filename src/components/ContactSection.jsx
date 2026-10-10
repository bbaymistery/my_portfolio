import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
      value: "Elgun Ezmemmedov",
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
        Feel free to reach out directly through any of the channels below for project inquiries, collaboration opportunities, or technical discussions:
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
