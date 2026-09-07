export type NavItem = {
  href: string;
  label: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  points: string[];
  skillsAcquired?: string[];
  projects?: string[];
  impact?: string;
};

export type JourneyMilestone = {
  date: string;
  title: string;
  type: 'education' | 'career' | 'project' | 'skill';
  description: string;
  visual?: string; // Path to image/icon
  skillsAcquired?: string[];
  projects?: string[];
  impact?: string;
  metrics?: { label: string; value: string }[];
};

export type SkillProgression = {
  name: string;
  timeline: string[]; // Years when skill was acquired/improved
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'mobile' | 'architecture';
  projectsUsedIn: string[];
  description?: string;
};

export type ProjectImpact = {
  title: string;
  slug: string;
  category: string;
  timeline: string; // "2023-2024"
  summary: string;
  detailedDescription: string;
  role: string;
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  metrics?: { label: string; value: string; description?: string }[];
  visuals: {
    thumbnail: string;
    gallery?: string[];
    video?: string;
    demo?: string; // Codepen/StackBlitz link
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    project?: string;
  };
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'design' | 'development' | 'consulting' | 'training';
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  priority?: number; // For ordering
};

export type Certification = {
  title: string;
  issuer: string;
  href: string;
  focus: string;
  year: string;
  skills?: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  project?: string; // Related project
  avatar?: string; // Path to image
};

export type TechStackItem = {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'platform' | 'architecture';
  proficiency: number; // 0-100
  yearsExperience: number;
  projectsUsedIn: string[];
  description?: string;
  icon?: string; // Icon identifier
};

export const personalInfo = {
  name: 'Khem Seangleng',
  role: 'Full-Stack Developer',
  tagline: 'Building clean, responsive interfaces and robust backend system architectures',
  location: 'Phnom Penh, Cambodia',
  email: 'khemseangleng@gmail.com',
  phone: '+855-99-602-647',
  website: 'https://www.lengseang.dev',
  linkedIn: 'https://www.linkedin.com/in/khem-seangleng-18810a306/',
  telegram: 'https://t.me/LegendOfLeng',
  resumeUrl: '/Khem_Seangleng_CV.pdf',
  shortBio:
    "I'm Leng, a Full-stack developer with an interest in both front-end design and backend system design. I work mainly with Vue, React, and modern JavaScript to build clean, responsive, and user-friendly interfaces. I enjoy learning new tools, improving code quality, and collaborating to create accessible, practical web experiences.",
  longBio:
    "I'm Leng, a Full-stack developer with an interest in both front-end design and backend system design. I work mainly with Vue, React, and modern JavaScript to build clean, responsive, and user-friendly interfaces. I enjoy learning new tools, improving code quality, and collaborating to create accessible, practical web experiences.",
  professionalSummary: [
    'Full-Stack Developer with strong expertise in Vue, React, Next.js, and NestJS',
    'Architected multi-role operational workflows and real-time push notification triggers for BS Express Cambodia',
    'Developed AI model analysis frontend and large-scale RBAC Admin Dashboard at Prestige Alliance',
    'Built and launched thecoauthor.com digital publishing platform with rich-text editor and auto-save',
    'Pursuing Bachelor of Computer Science at Royal University of Phnom Penh (4th Year)',
  ],
  hobbies: [
    'Exploring new System Design technologies',
    'Practicing UI/UX design',
    'Coding challenges & hackathons',
    'Reading tech articles',
    'Photography and Editing',
  ],
  reference: {
    name: 'Mr. Kim Sereyvuth',
    credential: 'M.Phil (IT) — Master of Philosophy in Information Technology',
    certification: 'AIGP — Artificial Intelligence Governance Professional',
    email: 'kimsereyvuth@gmail.com',
  },
  availability: 'Open to full-time opportunities, freelance projects, and technical collaborations',
  resumeHref: 'mailto:khemseangleng@gmail.com?subject=Resume%20Request',
  cvHeadline:
    'Full-Stack Developer proficient in React, Vue, Next.js, NestJS, and system design, with production experience in AI analysis platforms, logistics systems, and SaaS marketplaces.',
};

export const navItems: NavItem[] = [
  { href: '/#home', label: 'Home' },
  { href: '/#journey', label: 'My Journey' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

export const stats = [
  { value: '04 wks', label: 'Prototype to production admin frontend' },
  { value: '06', label: 'RBAC roles implemented' },
  { value: '04', label: 'Major production platforms built' },
  { value: '2023-2026', label: 'Years of hands-on experience' },
];

export const highlights = [
  'Full-Stack Development',
  'Vue.js & Nuxt.js',
  'React & Next.js',
  'NestJS & Express',
  'PostgreSQL & SQL',
  'System Design & UI/UX',
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    date: '2022-01',
    title: 'Began Computer Science Degree',
    type: 'education',
    description:
      'Started formal computer science degree at Royal University of Phnom Penh, focusing on web development, algorithms, and software engineering.',
    visual: '/portfolio/education-icon.svg',
    skillsAcquired: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Software Engineering'],
  },
  {
    date: '2023-01',
    title: 'Front-End Development at Instinct',
    type: 'education',
    description:
      'Studied web design principles, UI development, and front-end frameworks (React, Vue.js), building responsive and interactive websites.',
    visual: '/portfolio/bootcamp-icon.svg',
    skillsAcquired: ['React', 'Vue.js', 'Web Design', 'UI Usability'],
    projects: ['bootcamp-final-project'],
  },
  {
    date: '2023-07',
    title: 'Back-End Development at Instinct',
    type: 'education',
    description:
      'Learned server-side programming with PHP and Laravel, including backend integration, hosting, and MySQL database management.',
    visual: '/portfolio/bootcamp-icon.svg',
    skillsAcquired: ['PHP', 'Laravel', 'MySQL', 'Backend Integration'],
  },
  {
    date: '2025-11',
    title: 'Full-Stack Developer at Prestige Alliance',
    type: 'career',
    description:
      'Developed frontend for Neuralsh.com AI model analysis platform with secure API integrations, and built a large-scale RBAC Admin Dashboard with SVG map API optimizations.',
    visual: '/portfolio/neuralshield-logo.svg',
    skillsAcquired: ['Next.js', 'RBAC Implementation', 'AI Model Integration', 'SVG Map API'],
    projects: ['neuralshield-ivs'],
    impact: 'Transformed data storage & evaluation dashboard into production system',
    metrics: [
      { label: 'Security', value: 'Strict RBAC' },
      { label: 'Map API', value: 'SVG Optimization' },
    ],
  },
  {
    date: '2026-01',
    title: 'Developed thecoauthor.com Platform',
    type: 'project',
    description:
      'Built a full-stack article writer platform with Next.js/NestJS, distraction-free rich-text editing, auto-save drafts, JWT, RBAC, and ASM principles.',
    visual: '/portfolio/artisea-logo.svg',
    skillsAcquired: ['Tiptap Editor', 'JWT & RBAC', 'ASM Principles', 'Auto-Save Engine'],
    projects: ['thecoauthor'],
    impact: 'Created distraction-free publishing platform for writers',
    metrics: [
      { label: 'Editor Latency', value: '<100ms' },
      { label: 'Platform', value: 'thecoauthor.com' },
    ],
  },
  {
    date: '2026-05',
    title: 'Joined BS Express Cambodia',
    type: 'career',
    description:
      'Architected multi-role logistics operational workflows (Branch-to-Branch, Branch-to-Customer, Customer-to-Branch) and real-time push notification status handoffs.',
    visual: '/portfolio/bs-express-logo.svg',
    skillsAcquired: ['Workflow Architecture', 'Push Notifications', 'Real-time Handoffs', 'Mobile UI Design'],
    projects: ['bs-express'],
    impact: 'Streamlined parcel tracking, driver assignments, and customer notifications',
    metrics: [
      { label: 'Workflows', value: '3 Multi-Role Flows' },
      { label: 'Coverage', value: '100% Status Tracking' },
    ],
  },
];

export const skills: SkillProgression[] = [
  {
    name: 'JavaScript (ES6+)',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 95,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'reedar', 'lengseang-dev', 'bs-express'],
    description: 'Core language for all frontend and backend development',
  },
  {
    name: 'TypeScript',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 92,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'lengseang-dev'],
    description: 'Strong typing for robust, scalable applications',
  },
  {
    name: 'Vue.js & Nuxt.js',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 90,
    category: 'frontend',
    projectsUsedIn: ['reedar'],
    description: 'Modular component architecture and dynamic UI development',
  },
  {
    name: 'React & Next.js',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 95,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'lengseang-dev'],
    description: 'Production experience building complex admin systems and SaaS platforms',
  },
  {
    name: 'NestJS & Express.js',
    timeline: ['2024', '2025', '2026'],
    proficiency: 88,
    category: 'backend',
    projectsUsedIn: ['thecoauthor', 'neuralshield-ivs'],
    description: 'Backend frameworks for secure API development, RBAC, and microservices',
  },
  {
    name: 'PostgreSQL & SQL',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 88,
    category: 'database',
    projectsUsedIn: ['thecoauthor', 'neuralshield-ivs'],
    description: 'Relational database design, JSONB storage, and high-performance querying',
  },
  {
    name: 'MySQL & PHP/Laravel',
    timeline: ['2023', '2024', '2025'],
    proficiency: 82,
    category: 'database',
    projectsUsedIn: ['bootcamp-final-project'],
    description: 'Server-side programming, database migrations, and backend hosting',
  },
  {
    name: 'React Native',
    timeline: ['2024', '2025', '2026'],
    proficiency: 80,
    category: 'mobile',
    projectsUsedIn: ['bs-express'],
    description: 'Cross-platform mobile applications for logistics and driver apps',
  },
  {
    name: 'UI/UX Design (Figma, Canva, Stitch AI)',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 90,
    category: 'design',
    projectsUsedIn: ['bs-express', 'thecoauthor', 'reedar', 'lengseang-dev'],
    description: 'Clean, responsive UI prototypes and accessible user interfaces',
  },
  {
    name: 'Cloud (Firebase, DigitalOcean, AWS)',
    timeline: ['2024', '2025', '2026'],
    proficiency: 82,
    category: 'devops',
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'reedar'],
    description: 'Cloud deployments, object storage, serverless functions, and hosting',
  },
  {
    name: 'System Design & RBAC',
    timeline: ['2025', '2026'],
    proficiency: 90,
    category: 'architecture',
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'bs-express'],
    description: 'Role-Based Access Control, ASM principles, and multi-role operational workflows',
  },
];

export const services: Service[] = [
  {
    id: '01',
    title: 'Secure Admin Systems & RBAC',
    description:
      'Architecting enterprise admin dashboards with strict Role-Based Access Control, security reviews, and real-time monitoring.',
    icon: 'solar:shield-check-bold-duotone',
    category: 'development',
  },
  {
    id: '02',
    title: 'Full-Stack Web Platforms',
    description:
      'End-to-end web applications built with Next.js, NestJS, React, Vue.js, and PostgreSQL for high reliability and scale.',
    icon: 'solar:code-2-bold-duotone',
    category: 'development',
  },
  {
    id: '03',
    title: 'UI/UX & Responsive Design',
    description:
      'Designing clean, accessible, and user-friendly web and mobile interfaces using Figma, Canva, and modern CSS frameworks.',
    icon: 'solar:palette-round-bold-duotone',
    category: 'design',
  },
  {
    id: '04',
    title: 'Workflow Architecture & APIs',
    description:
      'Designing multi-role operational workflows, push notification pipelines, and robust RESTful / GraphQL APIs.',
    icon: 'solar:server-square-bold-duotone',
    category: 'consulting',
  },
  {
    id: '05',
    title: 'Performance & UI Optimization',
    description:
      'Optimizing frontend render performance, SVG map APIs, bundle size, SEO, accessibility, and Core Web Vitals.',
    icon: 'solar:graph-up-bold-duotone',
    category: 'development',
  },
];

export const projects: ProjectImpact[] = [
  {
    title: 'thecoauthor.com - Article Writer Platform',
    slug: 'thecoauthor',
    category: 'Featured Platform',
    timeline: '2026',
    summary:
      'Leading full-stack architecture for a multi-role publishing platform with distraction-free rich-text editing, auto-save drafts, and seamless publishing workflows.',
    detailedDescription:
      'thecoauthor.com is a digital publishing and article writer platform that combines writing, reading, and social discovery. Built with Next.js and NestJS, it features a distraction-free rich-text editor with auto-save drafts, seamless publish workflows, JWT authentication, RBAC, and ASM principles. The platform uses PostgreSQL with JSONB for flexible content storage.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Tiptap', 'JWT', 'RBAC', 'JSONB'],
    challenges: [
      'Designing distraction-free rich-text editing experience with instant auto-save',
      'Architecting multi-role permission and publishing workflows',
      'Optimizing content storage with JSONB and high-performance querying',
      'Balancing performance with flexible content types',
    ],
    outcomes: [
      'Built distraction-free rich-text editor with auto-save drafts',
      'Created seamless multi-stage publishing workflows',
      'Implemented secure backend with JWT and Role-Based Access Control',
      'Optimized content delivery and search indexing',
    ],
    metrics: [
      { label: 'Content Types', value: 'Articles & Stories', description: 'Flexible rich-text formats' },
      { label: 'Editor Latency', value: '<100ms', description: 'Auto-save draft sync' },
      { label: 'Security', value: 'JWT + RBAC', description: 'Role-scoped publishing permissions' },
      { label: 'Architecture', value: 'Clean ASM', description: 'Next.js & NestJS backend' },
    ],
    visuals: {
      thumbnail: '/portfolio/artisea-thumb.png',
      gallery: ['/portfolio/artisea-thumb.png', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
      video: 'https://www.youtube.com/embed/artisea-demo',
      demo: 'https://thecoauthor.com/',
    },
  },
  {
    title: 'Neuralsh.com - AI Model Analysis Platform',
    slug: 'neuralshield-ivs',
    category: 'Frontend & Security',
    timeline: '2025 - 2026',
    summary:
      'Developed frontend for an AI model analysis platform with secure API integrations, strict security considerations, and a large-scale RBAC Admin Dashboard.',
    detailedDescription:
      'At Prestige Alliance, I developed the frontend for Neuralsh.com, an AI model analysis platform. I managed secure backend API integrations with strict security standards, and built a large-scale Admin Dashboard for data storage and evaluation featuring Role-Based Access Control (RBAC), dynamic user pages, and SVG map API optimizations.',
    role: 'Full-Stack Developer (Frontend Owner)',
    technologies: ['Next.js', 'React', 'TypeScript', 'RBAC', 'SVG Map API', 'Tailwind CSS'],
    challenges: [
      'Integrating complex AI model analysis streams with minimal latency',
      'Building multi-role RBAC dashboard for large-scale data evaluation',
      'Developing custom SVG map API integration with high render performance',
    ],
    outcomes: [
      'Delivered production-ready AI analysis frontend with secure integrations',
      'Engineered granular RBAC data storage and evaluation dashboard',
      'Implemented optimized SVG map API visualization',
    ],
    metrics: [
      { label: 'Security', value: 'Strict RBAC', description: 'Multi-role data evaluation' },
      { label: 'Map API', value: 'Custom SVG', description: 'High-performance interactive mapping' },
      { label: 'Architecture', value: 'Modular', description: 'Clean Next.js frontend' },
      { label: 'Delivery', value: 'Production', description: 'Enterprise-grade quality' },
    ],
    visuals: {
      thumbnail: '/portfolio/neuralshield-ivs-thumb.png',
      gallery: [
        '/portfolio/neuralshield-ivs-gallery-1.png',
        '/portfolio/project-cover.jpg',
        '/portfolio/project-cover.jpg',
      ],
      video: 'https://www.youtube.com/embed/neuralshield-demo',
      demo: 'https://ivs.neuralsh.com/',
    },
  },
  {
    title: 'BS Express - Driver App & Logistics System',
    slug: 'bs-express',
    category: 'Operational Systems',
    timeline: '2026',
    summary:
      'Architected multi-role operational workflows (Branch-to-Branch, Branch-to-Customer, Customer-to-Branch) and real-time push notification status handoffs.',
    detailedDescription:
      'For BS Express Cambodia, I designed operational workflows and user interfaces across the Dashboard, Driver App, and Customer interfaces. The system handles Branch-to-Branch, Branch-to-Customer, and Customer-to-Branch delivery operations with real-time push notification triggers, driver dispatching, and QR parcel scanning.',
    role: 'IT Developer Staff / UI Architect',
    technologies: ['Workflow Architecture', 'Push Notifications', 'QR Scanning', 'Real-Time Tracking', 'UI/UX Design'],
    challenges: [
      'Mapping complex 3-way operational workflows without race conditions',
      'Synchronizing status handoffs across Dashboard, Driver App, and Customer portals',
      'Designing resilient push notification triggers for multi-stage deliveries',
    ],
    outcomes: [
      'Created seamless end-to-end status handoff system',
      'Designed intuitive mobile UI for delivery drivers',
      'Structured automated push notification event triggers',
    ],
    metrics: [
      { label: 'Workflows', value: '3 Multi-Role Flows', description: 'Branch-to-Branch, Customer, & Return' },
      { label: 'Notifications', value: 'Real-time', description: 'Push triggers across handoffs' },
      { label: 'Scanning', value: 'QR-Based', description: 'Instant parcel verification' },
      { label: 'Coverage', value: '100%', description: 'Driver, Branch, & Customer' },
    ],
    visuals: {
      thumbnail: '/portfolio/bs-express-thumb.jpg',
      gallery: ['/portfolio/bs-express-thumb.jpg', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
    },
  },
  {
    title: 'REEDAR - Car Rental Web Application',
    slug: 'reedar',
    category: 'Full-Stack Development',
    timeline: '2025',
    summary:
      'Built a car rental web application with Vue.js, featuring responsive design, dynamic UI for browsing and booking vehicles, and streamlined workflows.',
    detailedDescription:
      'REEDAR is a car rental web application built with Vue.js. It features a modern, responsive design and dynamic UI for vehicle browsing, real-time availability checking, streamlined booking workflows, and optimized performance to deliver a smooth, engaging user experience.',
    role: 'Full-Stack Developer',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Booking Workflows', 'RESTful APIs'],
    challenges: [
      'Designing dynamic and intuitive vehicle browsing UI',
      'Streamlining multi-step booking workflows for maximum conversion',
      'Optimizing frontend performance for fast vehicle catalog search',
    ],
    outcomes: [
      'Implemented modular Vue.js components for flexible scalability',
      'Delivered streamlined booking workflow and real-time vehicle discovery',
      'Optimized performance for smooth cross-device interaction',
    ],
    metrics: [
      { label: 'Framework', value: 'Vue.js', description: 'Modular component architecture' },
      { label: 'Conversion', value: '+15%', description: 'Streamlined booking flow' },
      { label: 'Catalog', value: '50+ Vehicles', description: 'Dynamic browsing & filters' },
      { label: 'UI Speed', value: 'Optimized', description: 'Fast render & responsive layout' },
    ],
    visuals: {
      thumbnail: '/portfolio/reedar-thumb.png',
      gallery: ['/portfolio/reedar-thumb.png', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
      video: 'https://www.youtube.com/embed/reedar-demo',
      demo: 'https://reedar.vercel.app/',
    },
  },
  {
    title: 'LengSeang.Dev - Personal Portfolio',
    slug: 'lengseang-dev',
    category: 'Personal Project',
    timeline: '2026',
    summary:
      'Built first personal portfolio website with React, featuring a responsive, accessible design, modular architecture, and SEO optimization.',
    detailedDescription:
      'Built my first personal portfolio website with React, featuring a responsive, simple, and accessible design. Followed modern best practices including modular code structure, performance optimization, SEO, accessibility (a11y), and cross-browser compatibility.',
    role: 'Creator & Developer',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    challenges: [
      'Creating interactive and elegant UI with accessible keyboard navigation',
      'Optimizing Core Web Vitals and Lighthouse performance scores',
      'Designing smooth animations and theme-aware micro-interactions',
    ],
    outcomes: [
      'High-performance, accessible personal portfolio website',
      'Fully responsive design with dark mode and smooth animations',
      'Structured modular architecture for simple maintainability',
    ],
    metrics: [
      { label: 'Performance', value: '100/100', description: 'Lighthouse score' },
      { label: 'Design', value: 'Accessible', description: 'WCAG compliant colors & navigation' },
      { label: 'SEO', value: 'Optimized', description: 'OpenGraph & metadata' },
      { label: 'Stack', value: 'Next.js 16', description: 'Turbopack & TypeScript' },
    ],
    visuals: {
      thumbnail: '/portfolio/khem-profile.jpg',
      gallery: ['/portfolio/khem-profile.jpg', '/portfolio/project-cover.jpg'],
      demo: 'https://www.lengseang.dev',
    },
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: 'solar:letter-bold-duotone',
  },
  {
    label: 'Telegram',
    href: personalInfo.telegram,
    icon: 'simple-icons:telegram',
  },
  {
    label: 'LinkedIn',
    href: personalInfo.linkedIn,
    icon: 'simple-icons:linkedin',
  },
  {
    label: 'Call',
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    icon: 'solar:phone-calling-rounded-bold-duotone',
  },
];

export const experience: TimelineItem[] = [
  {
    period: 'Nov 2025 – May 2026',
    title: 'Full-Stack Developer',
    organization: 'Prestige Alliance Co., Ltd.',
    description:
      'Developed frontend systems for AI model analysis and built large-scale administrative interfaces with strict security considerations.',
    points: [
      'Neuralsh.com: Developed the frontend for an AI model analysis platform, managing secure backend API integrations and implementing strict security considerations. (Frontend)',
      'Admin Dashboard: Built a large-scale interface for data storage and evaluation, featuring Role-Based Access Control (RBAC) and multiple dynamic user pages.',
      'Developed SVG map API integrations and UI performance optimization.',
    ],
    skillsAcquired: ['Next.js', 'RBAC Implementation', 'AI Model Integration', 'SVG Map API', 'UI Optimization'],
    projects: ['neuralshield-ivs'],
  },
  {
    period: 'May 2026 – Jul 2026',
    title: 'IT Developer Staff',
    organization: 'BS Express Cambodia',
    description:
      'Engineered operational workflows and interfaces for logistics management and driver applications.',
    points: [
      'BS Express Driver App: Understood and implemented multi-role operational workflows: Branch-to-Branch, Branch-to-Customer, and Customer-to-Branch.',
      'Design UI & Structured push notification triggers and real-time status handoffs across Dashboard, Driver App, and Customer interfaces.',
      'Optimized driver assignment processes and tracking accuracy across distribution hubs.',
    ],
    skillsAcquired: ['Workflow Architecture', 'Push Notifications', 'Real-time Handoffs', 'Mobile UI Design'],
    projects: ['bs-express'],
  },
];

export const education: TimelineItem[] = [
  {
    period: 'Jan 2022 – Dec 2026 (4th Year - Current)',
    title: 'Bachelor of Computer Science',
    organization: 'Royal University of Phnom Penh',
    description:
      'Formal computer science study covering core algorithms, software engineering, and web development alongside active coding club projects.',
    points: [
      'Relevant Coursework: Web Development, Data Structures, Algorithms, Software Engineering.',
      'Built front-end & responsive design projects; active in coding clubs and tech events.',
    ],
  },
  {
    period: 'Jan 2023 – June 2023',
    title: 'Front-End Development',
    organization: 'Instinct Institute',
    description: 'Comprehensive front-end engineering program focused on modern component architectures.',
    points: [
      'Studied web design principles, UI development, and front-end frameworks (React, Vue.js).',
      'Built responsive, interactive websites with a focus on usability and performance.',
    ],
  },
  {
    period: 'July 2023 – Dec 2023',
    title: 'Back-End Development',
    organization: 'Instinct Institute',
    description: 'Server-side programming, database architecture, and backend systems integration.',
    points: [
      'Learned server-side programming with PHP and Laravel, including backend integration and web hosting.',
      'Designed and managed MySQL databases for efficient data handling.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'AI Application Prompt Engineering',
    issuer: 'Frontend Masters',
    href: 'https://drive.google.com/file/d/1tJp0TghUQpxw7bzpjdLe9vSf0Nh-3QbO/view?usp=drive_link',
    focus: 'Prompt design, AI workflows, and applied product thinking',
    year: '2026',
  },
  {
    title: 'Patterns in Enterprise Architecture',
    issuer: 'Frontend Masters',
    href: 'https://drive.google.com/file/d/1OS5aKOfPpwfd2_m2Xb_nBJaeOOpq_URY/view?usp=drive_link',
    focus: 'System structure, maintainability, and architecture patterns',
    year: '2026',
  },
  {
    title: 'Architecting Backend Systems',
    issuer: 'Frontend Masters',
    href: 'https://drive.google.com/file/d/1NNEAEji-RWOgnclLIWPXYa7ipaP_2mXN/view?usp=drive_link',
    focus: 'Backend service design and scalable application thinking',
    year: '2026',
  },
  {
    title: 'Database Fundamentals Comprehensive Introduction',
    issuer: 'Frontend Masters',
    href: 'https://drive.google.com/file/d/1Vf6ZbVHmi80zRXFFCEL0645J30Sv2xdT/view?usp=drive_link',
    focus: 'Core data modeling, relational thinking, and database foundations',
    year: '2026',
  },
  {
    title: 'Advanced Backend System Design',
    issuer: 'Frontend Masters',
    href: 'https://drive.google.com/file/d/14clQjggvmztpAja6LaepKPK_YZfwlcWq/view?usp=drive_link',
    focus: 'Advanced system design and backend decision-making',
    year: '2026',
  },
  {
    title: 'Workshop on Programming with AI',
    issuer: 'STEP IT Academy',
    href: 'https://drive.google.com/file/d/1m6RJDX1s_RPiXCDdqaSpNM1k9G3j5Nw3/view?usp=drive_link',
    focus: 'Applied AI-assisted development workflows',
    year: '2026',
    skills: ['AI-Assisted Development', 'Prompt Engineering', 'Automated Workflows'],
  },
];

// Reference Info
export const professionalReference = {
  name: 'Mr. Kim Sereyvuth',
  credential: 'M.Phil (IT) — Master of Philosophy in Information Technology',
  certification: 'AIGP — Artificial Intelligence Governance Professional',
  email: 'kimsereyvuth@gmail.com',
};

// Testimonials (Kept for interface compatibility, removed from UI display)
export const testimonials: Testimonial[] = [];

// Tech Stack Data
export const techStack: TechStackItem[] = [
  {
    name: 'JavaScript (ES6+)',
    category: 'language',
    proficiency: 95,
    yearsExperience: 4,
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'reedar', 'lengseang-dev', 'bs-express'],
    description: 'Core language for all frontend and backend development',
  },
  {
    name: 'TypeScript',
    category: 'language',
    proficiency: 92,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'lengseang-dev'],
    description: 'Strong typing for robust frontend and backend development',
  },
  {
    name: 'Next.js',
    category: 'framework',
    proficiency: 95,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'lengseang-dev'],
    description: 'Production experience building complex admin systems and SaaS platforms',
  },
  {
    name: 'Vue.js & Nuxt.js',
    category: 'framework',
    proficiency: 90,
    yearsExperience: 3,
    projectsUsedIn: ['reedar'],
    description: 'Dynamic UI rendering and component-driven architecture',
  },
  {
    name: 'React',
    category: 'framework',
    proficiency: 92,
    yearsExperience: 4,
    projectsUsedIn: ['bootcamp-final-project', 'neuralshield-ivs', 'thecoauthor', 'lengseang-dev'],
    description: 'Core frontend framework for all major web applications',
  },
  {
    name: 'NestJS & Express.js',
    category: 'framework',
    proficiency: 88,
    yearsExperience: 2,
    projectsUsedIn: ['thecoauthor', 'neuralshield-ivs'],
    description: 'Backend frameworks for secure API development and RBAC implementation',
  },
  {
    name: 'PostgreSQL & SQL',
    category: 'database',
    proficiency: 88,
    yearsExperience: 3,
    projectsUsedIn: ['thecoauthor', 'neuralshield-ivs'],
    description: 'Relational database design and optimization with JSONB for flexible storage',
  },
  {
    name: 'MySQL & PHP/Laravel',
    category: 'database',
    proficiency: 82,
    yearsExperience: 2,
    projectsUsedIn: ['bootcamp-final-project'],
    description: 'Backend migrations, relational schema design, and server scripting',
  },
  {
    name: 'Tailwind CSS',
    category: 'tool',
    proficiency: 92,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'reedar', 'lengseang-dev'],
    description: 'Utility-first CSS framework for rapid, responsive UI development',
  },
  {
    name: 'Design (Figma, Canva, Stitch AI)',
    category: 'tool',
    proficiency: 90,
    yearsExperience: 3,
    projectsUsedIn: ['bs-express', 'thecoauthor', 'reedar', 'lengseang-dev'],
    description: 'UI/UX prototyping, vector graphic creation, and design systems',
  },
  {
    name: 'Cloud (Firebase, DigitalOcean, AWS)',
    category: 'platform',
    proficiency: 82,
    yearsExperience: 2,
    projectsUsedIn: ['thecoauthor', 'neuralshield-ivs', 'reedar'],
    description: 'Cloud hosting, database services, and deployment workflows',
  },
  {
    name: 'Git, GitHub & Vercel',
    category: 'tool',
    proficiency: 92,
    yearsExperience: 4,
    projectsUsedIn: ['neuralshield-ivs', 'thecoauthor', 'reedar', 'lengseang-dev', 'bs-express'],
    description: 'Version control, CI/CD, and fast production deployments',
  },
];
