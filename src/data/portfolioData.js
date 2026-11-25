export const portfolioData = {
  personal: {
    name: "Elgun Ezmemmedov",
    title: "Frontend Engineer",
    subtitle: "Sakarya University Alumnus",
    tagline: "5+ years building booking and payment systems with React and Next.js. Now growing into full-stack with Node.js and NestJS.",
    avatar: "/avatarr.jpeg",
    location: "Azerbaijan",
    aboutParagraphs: [
      "I'm a frontend engineer with 5+ years of experience building production web apps with React, Next.js and TypeScript.",
      "For over four years, I worked remotely for Airport Pickups London (aplcars.com), an international airport-transfer platform, where I grew from Junior Next.js Developer to Frontend Engineer. I owned the booking and payment flows, from quote search to checkout with Stripe, PayPal and American Express.",
      "Some things I'm proud of: a Manage Booking widget that now runs on 7 company websites, live flight tracking that keeps drivers and passengers in sync during delays, raising Lighthouse scores from 77 to 90+, and MCP integrations that let Claude, ChatGPT and Gemini fetch real transfer quotes.",
      "I care about the people using what I build. A one-hour time zone bug in pickup times taught me that small mistakes have real costs, so I test real-world cases, not just the happy path.",
      "I'm now growing my full-stack skills with Node.js, NestJS and PostgreSQL. I'm based in Baku (UTC+4), open to remote roles and flexible with time zones."
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
      whatsappDisplay: "+994 50 633 01 35",
      telegram: "https://t.me/baymistery",
      telegramDisplay: "@baymistery"
    }
  },

  experiences: [
    {
      period: "04/2024 — 09/2026",
      role: "Frontend Engineer",
      company: "Airport Pickups London",
      location: "London (Remote)",
      companyUrl: "https://aplcars.com",
      description: "Promoted from Junior Next.js Developer. Owned the booking and payment flows of an international airport-transfer platform (aplcars.com), from quote search to checkout.",
      bullets: [
        "Owned the end-to-end 5-step booking funnel in Next.js and TypeScript: quote search, vehicle results, transfer details, payment and confirmation, with backend-driven redirects and booking state preserved across every step.",
        "Expanded checkout to 3 payment providers by adding PayPal and American Express to Stripe, and fixed critical production checkout issues, including a PayPal pop-up failure on newer iOS versions and undelivered booking-confirmation emails.",
        "Built a self-service Manage Booking widget used across 7 company websites: customers view, edit, pay for and cancel bookings themselves, with live re-quoting, Stripe surcharge payments and 24-hour amendment rules.",
        "Implemented live flight tracking that recalculates pickup times from actual and estimated landing data in the arrival airport's timezone, keeping drivers and passengers in sync during delays.",
        "Led front-end delivery of a secure B2B agency portal with authentication and data-heavy tables that update in near real time.",
        "Raised Lighthouse scores from 77 to 90+ on a 7-language site (translations loaded dynamically from the backend API) using SSR/SSG/ISR, React Server Components, code splitting and Redux Toolkit/Zustand; implemented technical SEO (JSON-LD structured data, canonical URLs, semantic HTML) and GEO for AI-driven search.",
        "Built MCP integrations connecting 3 LLMs (Claude, ChatGPT, Gemini) to booking workflows, powering a conversational assistant for real-time customer support.",
        "Turned Figma designs into pixel-perfect, reusable components (Tailwind CSS, SCSS); wrote Jest, Playwright and Cypress tests, reviewed teammates' code and shipped via CI/CD to Vercel and Netlify."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "SSR / SSG / ISR / RSC",
        "Redux Toolkit",
        "Zustand",
        "Stripe",
        "PayPal",
        "American Express",
        "REST APIs",
        "Technical SEO / GEO",
        "Core Web Vitals",
        "MCP (Model Context Protocol)",
        "LLM Integration",
        "Tailwind CSS",
        "Sass / SCSS",
        "Figma",
        "Jest",
        "Playwright",
        "Cypress",
        "CI/CD",
        "Vercel",
        "Netlify"
      ]
    },
    {
      period: "04/2022 — 03/2024",
      role: "Junior Next.js Developer",
      company: "Airport Pickups London",
      location: "London (Remote)",
      companyUrl: "https://aplcars.com",
      description: "Since 2007, Airport Pickups London (APL) has been providing executive transfer service from all London airports.",
      bullets: [
        "Independently designed and built the UI of one of the company's websites, from layout to responsive, mobile-first components (React, Next.js, SCSS).",
        "Implemented Stripe payments in the booking checkout.",
        "Built multi-step passenger-detail forms with client-side validation, reducing incomplete and incorrect booking data.",
        "Audited an inherited codebase and refactored its Redux state structure, eliminating excessive re-renders and making the app noticeably faster.",
        "Developed parts of the booking flow and integrated REST APIs from Node.js services.",
        "Fixed cross-browser and iOS-specific issues such as scrolling and viewport bugs.",
        "Wrote tests with Jest and took part in code reviews."
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "Sass / SCSS",
        "Redux",
        "Stripe",
        "REST APIs",
        "Node.js",
        "Form Validation",
        "Responsive / Mobile-first",
        "Jest",
        "Code Review"
      ]
    },
    {
      period: "04/2021 — 11/2021",
      role: "Junior React Developer",
      company: "Deirvlon Technologies",
      location: "Baku",
      companyUrl: "https://deirvlon.com/",
      description: "Deirvlon Technologies delivers custom software solutions, saving business time and money by ensuring a perfect fit for enterprise needs.",
      bullets: [
        "Built the frontend of a scalable e-commerce application with React, TypeScript and Redux, translating Figma designs into pixel-perfect, responsive interfaces.",
        "Optimised performance with a focus on Core Web Vitals, improving page load speed and rendering efficiency without compromising visual quality.",
        "Integrated frontend components with REST and GraphQL APIs for real-time product data and a secure checkout flow.",
        "Wrote unit and component tests with Jest and React Testing Library, and followed a structured Git workflow across the team.",
        "Took part in Agile/Scrum ceremonies and backlog refinement, and reviewed teammates' code to keep quality consistent."
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Figma",
        "Core Web Vitals",
        "REST APIs",
        "GraphQL",
        "Jest",
        "React Testing Library",
        "Git",
        "Agile / Scrum"
      ]
    }
  ],

  projects: [
    {
      title: "Flipkart Clone — Full-Stack E-Commerce Enterprise Platform",
      stackType: "MERN Stack",
      subtitle: "Enterprise E-Commerce Ecosystem",
      githubUrl: "https://github.com/bbaymistery/mernprojects_/tree/main/2_flipcard",
      description: "A production-grade, full-stack e-commerce enterprise ecosystem built with Node.js, Express, MongoDB, React 18, and Redux Toolkit. Features multi-tier recursive category tree management, multi-image product uploading, custom admin page layout builders, atomic shopping cart synchronization, 4-step guided checkout, and real-time order tracking.",
      highlights: [
        "Recursive Category Hierarchy: Dynamic parent-child tree generator supporting unlimited nesting depth and dynamic top navigation.",
        "Admin Control Dashboard: Single-request initial data hydration, interactive category tree with modal batch updates, and visual order pipeline manager.",
        "Customer Storefront App: Price-segmented product grouping, guest cart auto-merging with MongoDB upon login, and 4-step guided checkout.",
        "Robust File Pipeline: Multer storage engine handling product images, category icons, and promotional banners with disk and cloud storage options."
      ],
      technologies: [
        "React 18",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Redux Toolkit",
        "JWT",
        "Multer",
        "RESTful APIs"
      ]
    },
    {
      title: "V-Network — Full-Featured Social Media Platform",
      stackType: "MERN Stack",
      subtitle: "Real-Time Social Networking & WebRTC Calling",
      githubUrl: "https://github.com/bbaymistery/mernprojects_/tree/main/1_social_media",
      description: "A production-ready, full-stack MERN social networking application inspired by Instagram, featuring real-time messaging, WebRTC peer-to-peer video/audio calling, instant notifications, interactive social feeds with Cloudinary multi-image uploads, and dark mode support.",
      highlights: [
        "Real-Time Messaging & Calling: Low-latency 1-on-1 direct chat with Socket.io and high-definition P2P audio/video calling via PeerJS (WebRTC).",
        "Authentication & Security: Dual-token system with JWT access tokens and secure HTTP-only Refresh Token cookies, backed by bcrypt encryption.",
        "Interactive Social Feeds: Dynamic home feed, nested comment replies, instant like/unlike, bookmarking, and trending discover feed.",
        "Cloudinary Media Pipeline: Multi-image media uploads with secure URL and public_id persistence across user posts and profiles."
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "WebRTC (PeerJS)",
        "Redux Thunk",
        "Cloudinary",
        "JWT",
        "Bootstrap 5"
      ]
    },
    {
      title: "NestJS E-Commerce Backend REST API",
      stackType: "NestJS & PostgreSQL",
      subtitle: "High-Performance Cloud Database RESTful Architecture",
      githubUrl: "https://github.com/bbaymistery/nest_Ecommerce/tree/main",
      description: "An enterprise-grade, high-performance e-commerce backend application developed with NestJS, TypeORM, and PostgreSQL (Neon Cloud Database). Implements Role-Based Access Control (RBAC), complex SQL query aggregations, circular dependency resolution, and automated inventory reconciliation.",
      highlights: [
        "Complex QueryBuilder Operations: Dynamic product filtering, pagination, and SQL aggregations for review counts and average ratings.",
        "Automated Inventory Reconciliation: Automated stock updates when order states change to delivered or cancelled.",
        "Modular Security & RBAC: Custom JWT AuthenticationGuard, AuthorizeGuard (ADMIN / USER), and @CurrentUser decorator.",
        "Response Serialization Interceptors: RxJS pipe and map serialization interceptors stripping extraneous database columns for clean payloads."
      ],
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL (Neon DB)",
        "TypeORM",
        "JWT",
        "Bcrypt",
        "RxJS",
        "Class Validator",
        "RESTful APIs"
      ]
    }
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
      institution: "Turkish High School",
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
