export const portfolioData = {
  personal: {
    name: "Elgun Ezmemmedov",
    title: "Frontend Engineer",
    subtitle: "Sakarya University Alumnus",
    tagline: "5+ years of building scalable UIs, currently expanding into cloud-driven full-stack architectures.",
    avatar: "/avatarr.jpeg",
    location: "Azerbaijan",
    aboutParagraphs: [
      "I am a frontend engineer with 5 years of professional experience building modern, scalable web applications using React, Next.js, and TypeScript.",
      "I focus on writing clean, maintainable code, developing reliable user interfaces, and creating performant web experiences aligned with business goals. My experience includes building and maintaining production web applications, particularly booking and reservation systems and e-commerce platforms.",
      "I am currently expanding my expertise into backend engineering with Node.js, NestJS, PostgreSQL, and modern cloud technologies, with the goal of building a stronger full-stack engineering skill set.",
      "I value continuous learning, ownership, and thoughtful problem-solving. I am open to new challenges across diverse industries and enjoy building impactful digital products where technical quality and user experience go hand in hand."
    ],
    stats: [
      { label: "Years of experience", value: "5+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Core Stacks", value: "React, Next.js, TypeScript, Nest" }
    ],
    social: {
      github: "https://github.com/bbaymistery",
      linkedin: "https://www.linkedin.com/in/elgun-ezmemmedov-1628a51b4/",
      email: "elgun.ezmemmedov@gmail.com",
      whatsapp: "https://wa.me/994506330135",
      whatsappDisplay: "+994 50 633 01 35"
    }
  },

  experiences: [
    {
      period: "04/2021 — 11/2021",
      role: "Junior React Developer",
      company: "Deirvlon Technologies",
      location: "Baku",
      companyUrl: "https://deirvlon.com/",
      description: "Deirvlon Technologies delivers custom software solutions, saving business time and money by ensuring a perfect fit for enterprise needs.",
      bullets: [
        "Engineered a scalable e-commerce application utilizing React, TypeScript, and Redux, translating complex Figma designs into pixel-perfect interfaces and establishing a robust frontend architecture."
        ,
        "Spearheaded frontend performance optimizations with a strict focus on Core Web Vitals, significantly improving page load speeds, rendering efficiency, and overall user experience without compromising visual quality.",
        "Enforced high code quality standards by integrating comprehensive testing strategies (Jest, React Testing Library) and maintaining structured version control (Git) workflows across the development lifecycle.",
        "Integrated dynamic frontend components with RESTful APIs and GraphQL endpoints, enabling real-time data fetching and ensuring a highly secure checkout pipeline.",
        "Actively engaged in Agile/Scrum processes, contributing to requirements and backlog refinement, while providing peer mentorship and conducting code reviews to elevate team engineering standards."
        ,
        "Engineered a scalable e-commerce application utilizing React, TypeScript, and Redux, translating complex Figma designs into pixel-perfect interfaces and establishing a robust frontend architecture."

      ],
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Agile / Scrum",
        "HTML5 / CSS3",

        "Jest",
        "Integration Testing",
        "RESTful APIs",
        "GraphQL",
        "Accessibility (WCAG)",

        "Context API",
        "Sass / SCSS",

        "Figma",
        "Backlog Refinement",

        "Cross-functional Collaboration",
        "Performance Optimization",

      ]
    },
    {
      period: "04/2022 — 07/2026",
      role: "Next.js Developer ",
      company: "Airport Pickups London",
      location: "London (Remote)",
      companyUrl: "https://aplcars.com",
      description: "Since 2007, Airport Pickups London (APL) has been providing executive transfer service from all London airports.",
      bullets: [
        "Architected a production-grade Next.js booking engine integrated with secure online payment gateways (Stripe, PayPal, Amex) and flexible workflows, leveraging advanced rendering strategies (SSR, SSG, ISR, and React Server Components) alongside partial hydration for optimal performance.",
        "Bridged frontend and backend architectures by integrating robust RESTful APIs, implementing efficient data polling mechanisms for live UI table updates, and actively contributing to backend endpoint development using Node.js",

        "Spearheaded Technical and GEO SEO initiatives by engineering a fully localized, multi-language web architecture, rigorously optimizing Core Web Vitals to consistently achieve 90+ Lighthouse performance scores and maximize global organic visibility.",
        "Led end-to-end UI/UX execution for both the core booking platform and a dedicated B2B agency portal (implementing secure authentication interfaces). Independently conceptualized intuitive designs and developed them into highly polished, mobile-responsive interfaces using modern SCSS architectures.",
        "Pioneered AI-native booking experiences by implementing the Model Context Protocol (MCP) to develop an intelligent conversational agent for instant transfer quotes and real-time support. Configured robust system architectures (including .well-known integrations) to seamlessly interface with major LLMs (Claude, ChatGPT, Gemini) while accelerating development cycles with AI-assisted tools like Cursor.",
      ],
      technologies: [
        // Çekirdek Frontend (Zaten vardı, kalıyor)
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",

        // State Yönetimi & Veri Çekme (Eskiler ve Eklenenler)
        "Redux Toolkit", // Sadece Redux yerine Toolkit yazmak daha moderndir
        "Context API",
        "RESTful APIs",
        "WebSockets/Socket.io", // Yeni eklendi (Real-time data senkronizasyonu için)

        // Mimari, Performans ve SEO (Yeni metni destekleyenler)
        "SSR / SSG / ISR / RSC", // Sadece SSR yerine bunu yazmak Next.js uzmanlığını kanıtlar
        "Node.js",               // Yeni eklendi
        "CI/CD",

        "Technical SEO / GEO",   // Yeni eklendi
        "Core Web Vitals",       // Yeni eklendi (Lighthouse 90+ skorunu destekler)
        // UI / UX & Ops (Tasarım ve süreçler)
        "Figma",
        // Backend & AI (Sistemin gücünü gösterenler)
        "MCP (Model Context Protocol)", // Sadece OpenAI yerine bu çok daha teknik ve havalı
        "LLM Integration",       // Yeni eklendi (Claude, Gemini, ChatGPT genel adı)
        "Antigravity",                // Yeni eklendi (AI destekli tool kullanımı)


        "Sass / SCSS",           // Yeni eklendi (Tasarımı koda dökerken kullandığın yapı)
        "Debugging and Troubleshooting",
        "Accessibility (WCAG 2.1)",
      ]
    },

  ],

  skillsCategorized: [
    {
      category: "Frontend & UI Engineering",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "Micro Frontends (MFE)",
        "Module Federation",
        "HTML5 / CSS3",
        "Sass / SCSS",
        "Tailwind CSS",
        "Shadcn UI / Radix Primitives",
        "Storybook",
        "Material UI (MUI)",
        "Ant Design",
        "Styled Components",
        "Figma",
        "Accessibility (WCAG 2.1)"
      ]
    },
    {
      category: "State Management & Data Fetching",
      skills: [
        "TanStack Query (React Query)",
        "RTK Query",
        "Context API",
        "Redux Toolkit",
        "Redux Thunk",
        "Zustand"
      ]
    },
    {
      category: "Rendering, SEO & Performance",
      skills: [
        "SSR / SSG / ISR / RSC",
        "Streaming SSR",
        "Partial Hydration",
        "Technical SEO / GEO",
        "Performance Optimization",
        "Core Web Vitals",
        "Debugging & Troubleshooting"
      ]
    },
    {
      category: "Backend & Microservices Architecture",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Microservices Architecture",
        "API Gateway",
        "JWT / OAuth2 / Auth0",
        "Message Queues",
        "WebSockets / Socket.io",
        "GraphQL"
      ]
    },
    {
      category: "Databases, BaaS & ORMs",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "NoSQL",
        "Supabase",
        "Redis",
        "Prisma",
        "TypeORM",
        "Neon DB"
      ]
    },
    {
      category: "Build Tools & Monorepo",
      skills: [
        "Turborepo / Nx",
        "Webpack",
        "Vite",
        "Babel"
      ]
    },
    {
      category: "CI/CD, Infrastructure & Cloud",
      skills: [
        "CI/CD",
        "Version Control Systems (Git / GitHub)",
        "Docker",
        "AWS",
        "Cloudinary"
      ]
    },
    {
      category: "Testing & Quality Assurance",
      skills: [
        "Jest",
        "Cypress",
        "Playwright",
        "Unit Testing",
        "Integration Testing",
        "End-to-End (E2E) Testing"
      ]
    },
    {
      category: "AI Integration",
      skills: [
        "LLM Integration",
        "Large Language Model Operations (LLMOps)",
        "MCP (Model Context Protocol)",
        "Antigravity",
        "Cursor",
        "Claude"
      ]
    },
    {
      category: "Agile, Mentorship & Collaboration",
      skills: [
        "Agile / Scrum",
        "Backlog Refinement",
        "Mentorship / Code Review",
        "Cross-functional Collaboration",
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor in Public Finance",
      institution: "Sakarya University, Turkey",
      period: "Sept 2016 – Jun 2020",
      bullets: [
        "Graduated with a Cumulative GPA of 3.2/4.0.",
        "Twice awarded the Honor Certificate for outstanding academic excellence.",
        "Utilized core university foundations in quantitative analysis, economics, and structured logic to build strong data-driven problem-solving skills that directly enhance complex frontend system architecture."
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Agdash & Mingachevir Private Turkish High School",
      period: "2013",
      details: "High School Graduation"
    }
  ],

  languages: [
    { name: "Azerbaijani", level: "C2" },
    { name: "Turkish", level: "C2" },
    { name: "English", level: "C1" },
    { name: "Russian", level: "B2" }
  ]
};
