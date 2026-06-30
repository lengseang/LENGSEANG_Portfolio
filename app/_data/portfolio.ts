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
  role: 'Frontend-Focused Full-Stack Developer',
  tagline: 'Building secure admin systems and multi-role SaaS platforms with clean architecture',
  location: 'Phnom Penh, Cambodia',
  email: 'khemseangleng@gmail.com',
  phone: '+855 99 602 647',
  website: 'https://lengseang.vercel.app',
  linkedIn: 'https://www.linkedin.com/in/khem-seangleng-18810a306/',
  telegram: 'https://t.me/LegendOfLeng',
  shortBio:
    'Frontend-first full-stack developer with production experience building secure admin systems, multi-role SaaS platforms, and logistics workflows. Proven track record of owning frontend architecture from prototype to production.',
  longBio:
    "I specialize in creating secure, scalable web applications with a focus on frontend architecture and clean backend integration. My expertise spans Next.js, NestJS, React, and PostgreSQL, with a particular strength in RBAC systems and RESTful API design. I've successfully led projects from concept to production, implementing robust authentication systems and role-based access control for complex SaaS platforms.",
  professionalSummary: [
    'Promoted from intern to full-time developer in 3 months at Prestige Alliance',
    'Transformed an incomplete prototype into a production admin system in 4 weeks',
    'Leading full-stack development of a multi-role real-estate SaaS platform',
    'Built secure backend foundations with JWT authentication and role-scoped APIs',
    'Specialized in frontend architecture for complex admin systems and marketplaces',
  ],
  availability: 'Open to full-time opportunities, freelance projects, and technical collaborations',
  resumeHref: 'mailto:khemseangleng@gmail.com?subject=Resume%20Request',
  cvHeadline:
    'Frontend-first full-stack developer with expertise in secure admin systems, RBAC implementation, and SaaS product development. Proven ability to deliver high-quality solutions from prototype to production.',
};

export const navItems: NavItem[] = [
  { href: '/#home', label: 'Home' },
  { href: '/#journey', label: 'My Journey' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
];

export const stats = [
  { value: '04 wks', label: 'Prototype to production admin frontend' },
  { value: '06', label: 'RBAC roles implemented' },
  { value: '03', label: 'Major SaaS platforms developed' },
  { value: '2023-2026', label: 'Years of professional experience' },
];

export const highlights = [
  'Full-Stack Development',
  'Secure Admin Systems',
  'RBAC Implementation',
  'SaaS Platforms',
  'Next.js & NestJS',
  'Clean Architecture',
];

// Journey milestones for the interactive timeline
export const journeyMilestones: JourneyMilestone[] = [
  {
    date: '2023-01',
    title: 'Began Computer Science Degree',
    type: 'education',
    description:
      'Started formal computer science education at Royal University of Phnom Penh while beginning practical training.',
    visual: '/portfolio/education-icon.svg',
    skillsAcquired: ['Programming Fundamentals', 'Data Structures', 'Algorithms'],
  },
  {
    date: '2023-05',
    title: 'Full-Stack Bootcamp',
    type: 'education',
    description:
      'Completed intensive full-stack bootcamp at Instinct Institute, gaining hands-on experience with React, Vue.js, and Laravel.',
    visual: '/portfolio/bootcamp-icon.svg',
    skillsAcquired: ['React', 'Vue.js', 'Laravel', 'MySQL'],
    projects: ['bootcamp-final-project'],
  },
  {
    date: '2023-11',
    title: 'Joined Prestige Alliance as Intern',
    type: 'career',
    description:
      'Started internship at Prestige Alliance, working on backend services and gaining exposure to enterprise systems.',
    visual: '/portfolio/prestige-logo.svg',
    skillsAcquired: ['Node.js', 'Express', 'TypeORM', 'JWT Authentication'],
    impact: 'Gained real-world experience in secure backend development',
  },
  {
    date: '2024-02',
    title: 'Promoted to Full-Time Developer',
    type: 'career',
    description:
      'Promoted from intern to full-time developer in just 3 months, taking ownership of the NeuralShield IVS admin frontend.',
    visual: '/portfolio/neuralshield-logo.svg',
    skillsAcquired: ['Next.js', 'RBAC Implementation', 'Frontend Architecture'],
    projects: ['neuralshield-ivs'],
    impact: 'Transformed prototype to production system in 4 weeks',
    metrics: [
      { label: 'Development Time', value: '4 weeks' },
      { label: 'RBAC Roles', value: '6 implemented' },
      { label: 'Permissions', value: '20+ defined' },
    ],
  },
  {
    date: '2024-06',
    title: 'Completed Flutter Training',
    type: 'education',
    description: 'Expanded skills into mobile development with Flutter and Dart at Instinct Institute.',
    visual: '/portfolio/flutter-icon.svg',
    skillsAcquired: ['Flutter', 'Dart', 'Mobile UI Design'],
  },
  {
    date: '2024-09',
    title: 'Led Atlas Property SaaS',
    type: 'career',
    description:
      'Became project lead for Atlas Property, a multi-role real-estate SaaS platform built with Next.js and NestJS.',
    visual: '/portfolio/atlas-logo.svg',
    skillsAcquired: ['NestJS', 'JWT Authentication', 'Role-Scoped APIs', 'Marketplace Architecture'],
    projects: ['atlas-property'],
    impact: 'Designed secure backend with RBAC and role-scoped APIs',
    metrics: [
      { label: 'Team Size', value: '5 developers' },
      { label: 'API Endpoints', value: '50+' },
      { label: 'User Roles', value: '6' },
    ],
  },
  {
    date: '2025-01',
    title: 'Built REEDAR Car Rental Platform',
    type: 'project',
    description:
      'Developed a full-stack rental platform with Next.js and NestJS, implementing JWT authentication and real-time availability tracking.',
    visual: '/portfolio/reedar-logo.svg',
    skillsAcquired: ['Clean Architecture', 'Booking Systems', 'Real-Time Data'],
    projects: ['reedar'],
    impact: 'Delivered end-to-end solution with seamless user experience',
    metrics: [
      { label: 'Development Time', value: '3 months' },
      { label: 'User Growth', value: '200% in 6 months' },
    ],
  },
  {
    date: '2025-06',
    title: 'Designed BS Express Logistics',
    type: 'project',
    description: 'Architected multi-role logistics workflows with branch-to-branch and customer-to-branch operations.',
    visual: '/portfolio/bs-express-logo.svg',
    skillsAcquired: ['Workflow Architecture', 'QR Scanning', 'Push Notifications'],
    projects: ['bs-express'],
    impact: 'Streamlined parcel tracking and driver assignment systems',
  },
  {
    date: '2026-01',
    title: 'Developed ArtiSea Publishing',
    type: 'project',
    description:
      'Built a full-stack publishing platform with social discovery features and rich-text editing capabilities.',
    visual: '/portfolio/artisea-logo.svg',
    skillsAcquired: ['Tiptap Editor', 'Social Feeds', 'Content Moderation'],
    projects: ['artisea'],
    impact: 'Created engaging platform for writers and readers',
    metrics: [
      { label: 'Content Types', value: '4 (Articles, Stories, Poems, Essays)' },
      { label: 'User Engagement', value: '40% increase' },
    ],
  },
  {
    date: '2026-06',
    title: 'Current Focus',
    type: 'career',
    description:
      'Leading frontend architecture for secure admin systems and collaborating on backend services with a focus on clean architecture.',
    visual: '/portfolio/current-focus.svg',
    skillsAcquired: ['Advanced RBAC', 'Microservices', 'System Design'],
    impact: 'Building scalable, secure systems with modern frontend frameworks',
  },
];

// Enhanced skills with progression data
export const skills: SkillProgression[] = [
  {
    name: 'Next.js',
    timeline: ['2024', '2025', '2026'],
    proficiency: 95,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Production experience building complex admin systems and SaaS platforms',
  },
  {
    name: 'React',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 92,
    category: 'frontend',
    projectsUsedIn: ['bootcamp-final-project', 'neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Core frontend framework for all major projects',
  },
  {
    name: 'NestJS',
    timeline: ['2024', '2025', '2026'],
    proficiency: 88,
    category: 'backend',
    projectsUsedIn: ['atlas-property', 'reedar', 'artisea'],
    description: 'Backend framework for secure API development and RBAC implementation',
  },
  {
    name: 'TypeScript',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 90,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Strong typing for robust frontend and backend development',
  },
  {
    name: 'RBAC Implementation',
    timeline: ['2024', '2025', '2026'],
    proficiency: 92,
    category: 'backend',
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property'],
    description: 'Role-Based Access Control for secure admin systems',
  },
  {
    name: 'PostgreSQL',
    timeline: ['2024', '2025', '2026'],
    proficiency: 85,
    category: 'database',
    projectsUsedIn: ['atlas-property', 'reedar', 'artisea'],
    description: 'Relational database design and optimization',
  },
  {
    name: 'Tailwind CSS',
    timeline: ['2023', '2024', '2025', '2026'],
    proficiency: 88,
    category: 'frontend',
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    name: 'Flutter',
    timeline: ['2024', '2025'],
    proficiency: 75,
    category: 'mobile',
    projectsUsedIn: [],
    description: 'Cross-platform mobile development skills',
  },
  {
    name: 'JWT Authentication',
    timeline: ['2024', '2025', '2026'],
    proficiency: 88,
    category: 'backend',
    projectsUsedIn: ['atlas-property', 'reedar'],
    description: 'Secure authentication for web applications',
  },
  {
    name: 'Clean Architecture',
    timeline: ['2025', '2026'],
    proficiency: 85,
    category: 'architecture',
    projectsUsedIn: ['reedar', 'artisea'],
    description: 'Separation of concerns and maintainable code structure',
  },
];

export const services: Service[] = [
  {
    id: '01',
    title: 'Secure Admin Systems',
    description:
      'Designing and developing robust admin interfaces with role-based access control, secure authentication, and comprehensive data management capabilities.',
    icon: 'solar:shield-check-bold-duotone',
    category: 'development',
  },
  {
    id: '02',
    title: 'Full-Stack SaaS Development',
    description:
      'Building scalable Software-as-a-Service platforms with Next.js and NestJS, featuring multi-role architectures, secure APIs, and comprehensive business workflows.',
    icon: 'solar:server-bold-duotone',
    category: 'development',
  },
  {
    id: '03',
    title: 'RBAC Implementation',
    description:
      'Designing and implementing Role-Based Access Control systems with granular permissions, role inheritance, and secure API endpoints.',
    icon: 'solar:key-square-bold-duotone',
    category: 'development',
  },
  {
    id: '04',
    title: 'Frontend Architecture',
    description:
      'Creating maintainable, scalable frontend architectures with clean component hierarchies, state management strategies, and performance optimizations.',
    icon: 'solar:layers-minimalistic-bold-duotone',
    category: 'development',
  },
  {
    id: '05',
    title: 'System Design Consulting',
    description:
      'Providing technical guidance on system architecture, database design, and workflow optimization for complex web applications.',
    icon: 'solar:settings-bold-duotone',
    category: 'consulting',
  },
  {
    id: '06',
    title: 'Technical Training',
    description:
      'Offering workshops and mentorship on modern web development technologies including Next.js, NestJS, and secure backend practices.',
    icon: 'solar:graduation-cap-bold-duotone',
    category: 'training',
  },
];

export const projects: ProjectImpact[] = [
  {
    title: 'NeuralShield IVS Admin Frontend',
    slug: 'neuralshield-ivs',
    category: 'Production Ownership',
    timeline: '2024',
    summary:
      'Took ownership of the frontend and transformed an incomplete prototype into a production admin system in four weeks, including secure role-based interface flows.',
    detailedDescription:
      'As the frontend owner for NeuralShield IVS, I was responsible for architecting a secure admin system with complex RBAC requirements. Starting from an incomplete prototype, I delivered a production-ready system in just 4 weeks, implementing 6 distinct user roles with over 20 permissions. The system features a streaming chatbot interface that improved perceived response speed during phishing assessments.',
    role: 'Frontend Developer → Frontend Owner',
    technologies: ['Next.js', 'React', 'TypeScript', 'RBAC', 'Tailwind CSS'],
    challenges: [
      'Transforming prototype to production in tight timeline',
      'Implementing complex RBAC with 6 roles and 20+ permissions',
      'Designing real-time chatbot interface for phishing assessments',
    ],
    outcomes: [
      'Delivered production system in 4 weeks',
      'Implemented secure role-based access control',
      'Improved response speed perception with streaming UI',
      'Refactored codebase for better maintainability using SonarQube',
    ],
    metrics: [
      { label: 'Development Time', value: '4 weeks', description: 'From prototype to production' },
      { label: 'RBAC Roles', value: '6', description: 'Distinct user roles implemented' },
      { label: 'Permissions', value: '20+', description: 'Granular access control' },
      { label: 'Response Speed', value: 'Improved', description: 'Perceived latency reduction' },
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
    testimonial: {
      quote:
        'Khem transformed our admin frontend from a prototype to a robust production system in record time. His attention to security and user experience was exceptional.',
      author: 'Project Manager',
      role: 'Product Lead, NeuralShield',
      project: 'NeuralShield IVS',
    },
  },
  {
    title: 'Atlas Property - Real-Estate SaaS',
    slug: 'atlas-property',
    category: 'Project Lead',
    timeline: '2024-2026',
    summary:
      'Leading full-stack development of a multi-role real-estate SaaS platform with Next.js and NestJS, featuring JWT authentication and role-scoped APIs.',
    detailedDescription:
      "As project lead for Atlas Property, I'm directing the development of a comprehensive real-estate SaaS platform. The system includes property listings, availability calendars, agent lead management, and secure payment processing. I designed the backend architecture with JWT authentication and RBAC, ensuring role-scoped API endpoints for different user types (admins, agents, customers).",
    role: 'Project Lead',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'JWT', 'RBAC', 'Stripe API'],
    challenges: [
      'Designing scalable architecture for multi-role marketplace',
      'Implementing complex RBAC with property ownership rules',
      'Integrating real-time availability tracking',
      'Balancing agent and customer workflows',
    ],
    outcomes: [
      'Architected full-stack solution with clean separation of concerns',
      'Implemented secure authentication with role-based access control',
      'Developed real-time availability system for property bookings',
      'Created agent dashboard with lead management features',
    ],
    metrics: [
      { label: 'Team Size', value: '5 developers', description: 'Cross-functional team' },
      { label: 'API Endpoints', value: '50+', description: 'Role-scoped RESTful APIs' },
      { label: 'User Roles', value: '6', description: 'Admin, Agent, Customer, etc.' },
      { label: 'Properties', value: '1000+', description: 'Managed in system' },
    ],
    visuals: {
      thumbnail: '/portfolio/atlas-thumb.png',
      gallery: ['/portfolio/atlas-thumb.png', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
      video: 'https://www.youtube.com/embed/atlas-demo',
      demo: 'https://atlasproperty.vercel.app/',
    },
  },
  {
    title: 'REEDAR - Car Rental Platform',
    slug: 'reedar',
    category: 'Full-Stack Development',
    timeline: '2025',
    summary:
      'Built a full-stack rental platform with Next.js and NestJS, implementing JWT authentication, booking flows, and real-time vehicle availability tracking.',
    detailedDescription:
      'REEDAR is a comprehensive car rental platform that I developed from concept to production. The system features user authentication, vehicle browsing with real-time availability, booking management, and payment processing. I implemented clean architecture across controllers, services, and repositories, ensuring maintainability and scalability.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'JWT', 'Stripe', 'Mapbox'],
    challenges: [
      'Designing intuitive booking workflow',
      'Implementing real-time availability tracking',
      'Integrating payment processing securely',
      'Creating responsive vehicle browsing experience',
    ],
    outcomes: [
      'Delivered end-to-end rental platform',
      'Implemented secure authentication and authorization',
      'Created real-time availability system',
      'Developed admin dashboard for fleet management',
    ],
    metrics: [
      { label: 'Development Time', value: '3 months', description: 'From concept to launch' },
      { label: 'Vehicles', value: '50+', description: 'Managed in system' },
      { label: 'User Growth', value: '200% in 6 months', description: 'Post-launch adoption' },
      { label: 'Booking Conversion', value: '15% increase', description: 'After UI improvements' },
    ],
    visuals: {
      thumbnail: '/portfolio/reedar-thumb.png',
      gallery: ['/portfolio/reedar-thumb.png', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
      video: 'https://www.youtube.com/embed/reedar-demo',
      demo: 'https://reedar.vercel.app/',
    },
  },
  {
    title: 'BS Express - Logistics Management',
    slug: 'bs-express',
    category: 'System Design',
    timeline: '2025',
    summary:
      'Designed multi-role operational workflows for a logistics platform, including driver assignment, QR-based parcel scanning, and real-time status tracking.',
    detailedDescription:
      'BS Express is a logistics management system where I designed the operational workflows and system architecture. The platform supports branch-to-branch, branch-to-customer, and customer-to-branch shipping with real-time tracking. I mapped out driver assignment processes, QR-based parcel scanning, delivery confirmation, and exception handling with mandatory reason capture.',
    role: 'System Architect',
    technologies: ['Workflow Design', 'System Architecture', 'QR Scanning', 'Push Notifications'],
    challenges: [
      'Designing multi-role operational workflows',
      'Mapping complex parcel tracking system',
      'Integrating real-time status updates',
      'Ensuring data accuracy across branches',
    ],
    outcomes: [
      'Created comprehensive workflow documentation',
      'Designed QR-based scanning system',
      'Implemented real-time status tracking',
      'Developed exception handling processes',
    ],
    metrics: [
      { label: 'Workflow Types', value: '3', description: 'Branch-to-Branch, Branch-to-Customer, Customer-to-Branch' },
      { label: 'Status Updates', value: 'Real-time', description: 'End-to-end tracking' },
      { label: 'Exception Handling', value: '100%', description: 'All scenarios covered' },
      { label: 'QR Integration', value: 'Full', description: 'Parcel scanning system' },
    ],
    visuals: {
      thumbnail: '/portfolio/bs-express-thumb.jpg',
      gallery: ['/portfolio/bs-express-thumb.jpg', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
    },
  },
  {
    title: 'ArtiSea - Digital Publishing Platform',
    slug: 'artisea',
    category: 'Full-Stack Development',
    timeline: '2026',
    summary:
      'Developed a full-stack publishing platform with social discovery features, rich-text editing, and content classification system.',
    detailedDescription:
      'ArtiSea is a digital publishing platform that combines writing, reading, and social discovery. I built the full-stack solution with Next.js and NestJS, featuring a distraction-free rich-text editor with auto-save, social interaction features (likes, comments, shares), and a content classification system. The platform uses PostgreSQL with JSONB for flexible content storage.',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Tiptap', 'JSONB', 'Social Features'],
    challenges: [
      'Designing social discovery algorithms',
      'Implementing real-time rich-text collaboration',
      'Optimizing content storage with JSONB',
      'Balancing performance with flexible content types',
    ],
    outcomes: [
      'Created engaging platform for writers and readers',
      'Implemented real-time rich-text editing',
      'Developed social interaction features',
      'Optimized content delivery with denormalized counters',
    ],
    metrics: [
      { label: 'Content Types', value: '4', description: 'Articles, Stories, Poems, Essays' },
      { label: 'User Engagement', value: '40% increase', description: 'After social features launch' },
      { label: 'Editor Performance', value: '<100ms', description: 'Auto-save latency' },
      { label: 'Content Flexibility', value: 'High', description: 'JSONB storage' },
    ],
    visuals: {
      thumbnail: '/portfolio/artisea-thumb.png',
      gallery: ['/portfolio/artisea-thumb.png', '/portfolio/project-cover.jpg', '/portfolio/project-cover.jpg'],
      video: 'https://www.youtube.com/embed/artisea-demo',
      demo: 'https://artisea.vercel.app/',
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
    href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    icon: 'solar:phone-calling-rounded-bold-duotone',
  },
];

export const experience: TimelineItem[] = [
  {
    period: '2024-02 - Present',
    title: 'Frontend Developer → Frontend Owner - NeuralShield IVS',
    organization: 'Prestige Alliance Co. Ltd, Phnom Penh',
    description:
      'Promoted from intern to full-time and trusted to own the NeuralShield IVS admin frontend, transforming a prototype into a production system.',
    points: [
      'Turned an incomplete prototype into a production admin system in four weeks.',
      'Architected an RBAC dashboard supporting 6 roles and 20+ permissions.',
      'Refactored frontend into a modular architecture with improved maintainability.',
      'Designed a streaming chatbot interface that reduced perceived response latency.',
      'Implemented secure authentication and role-based access control.',
    ],
    skillsAcquired: ['Next.js', 'RBAC Implementation', 'Frontend Architecture', 'SonarQube'],
    projects: ['neuralshield-ivs'],
  },
  {
    period: '2024-09 - Present',
    title: 'Project Lead - Atlas Property SaaS',
    organization: 'Prestige Alliance Co. Ltd, Phnom Penh',
    description:
      'Leading full-stack development of a multi-role real-estate SaaS platform with secure backend foundations and comprehensive marketplace features.',
    points: [
      'Directing development of a property marketplace with Next.js and NestJS.',
      'Designed JWT authentication system with role-based access control.',
      'Modeled database schemas for listings, availability, and agent lead management.',
      'Implemented role-scoped API endpoints for different user types.',
      'Created admin dashboard for property and user management.',
    ],
    skillsAcquired: ['NestJS', 'JWT Authentication', 'Marketplace Architecture', 'PostgreSQL'],
    projects: ['atlas-property'],
  },
  {
    period: '2025-01 - 2025-06',
    title: 'Full-Stack Developer - REEDAR Car Rental',
    organization: 'Independent Project',
    description:
      'Built a comprehensive car rental platform with Next.js and NestJS, featuring booking flows and real-time availability tracking.',
    points: [
      'Developed full-stack rental platform from concept to production.',
      'Implemented JWT authentication and secure payment processing.',
      'Created real-time vehicle availability system.',
      'Designed responsive UI for vehicle browsing and booking.',
      'Built admin dashboard for fleet and reservation management.',
    ],
    skillsAcquired: ['Clean Architecture', 'Stripe Integration', 'Real-time Data', 'Mapbox API'],
    projects: ['reedar'],
  },
  {
    period: '2025-06 - 2025-12',
    title: 'System Architect - BS Express Logistics',
    organization: 'Independent Project',
    description:
      'Designed operational workflows and system architecture for a multi-role logistics management platform.',
    points: [
      'Mapped branch-to-branch, branch-to-customer, and customer-to-branch workflows.',
      'Designed QR-based parcel scanning and tracking system.',
      'Implemented driver assignment and delivery confirmation processes.',
      'Created exception handling with mandatory reason capture.',
      'Structured push notification system for status updates.',
    ],
    skillsAcquired: ['Workflow Design', 'System Architecture', 'QR Implementation', 'Real-time Tracking'],
    projects: ['bs-express'],
  },
  {
    period: '2026-01 - Present',
    title: 'Full-Stack Developer - ArtiSea Publishing',
    organization: 'Independent Project',
    description:
      'Developed a digital publishing platform with social discovery features and rich-text editing capabilities.',
    points: [
      'Built full-stack publishing platform with Next.js and NestJS.',
      'Implemented Tiptap rich-text editor with auto-save functionality.',
      'Created social interaction features (likes, comments, shares).',
      'Designed content classification system with flexible storage.',
      'Optimized performance with denormalized counters and JSONB storage.',
    ],
    skillsAcquired: ['Tiptap Editor', 'Social Features', 'PostgreSQL JSONB', 'Content Moderation'],
    projects: ['artisea'],
  },
];

export const education: TimelineItem[] = [
  {
    period: 'Expected Dec 2026',
    title: 'Bachelor of Computer Science',
    organization: 'Royal University of Phnom Penh',
    description: 'Formal computer science study alongside hands-on product work.',
    points: [],
  },
  {
    period: '2023 - 2024',
    title: 'Full-Stack Bootcamp - React, Vue.js, Laravel',
    organization: 'Instinct Institute, Phnom Penh',
    description: 'Practical full-stack training across modern frontend and backend tools.',
    points: [],
  },
  {
    period: 'Completed',
    title: 'Flutter & Dart: Cross-Platform Mobile Development',
    organization: 'Instinct Institute, Phnom Penh',
    description: 'Expanded into mobile product development and cross-platform thinking.',
    points: [],
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

// Testimonials section
export const testimonials: Testimonial[] = [
  {
    quote:
      'Khem transformed our admin frontend from a prototype to a robust production system in record time. His attention to security and user experience was exceptional.',
    author: 'Sokha Lim',
    role: 'Product Lead',
    organization: 'NeuralShield',
    project: 'NeuralShield IVS',
    avatar: '/portfolio/testimonial-sokha.svg',
  },
  {
    quote:
      'Working with Khem on the Atlas Property platform was a game-changer. His ability to design secure, scalable architectures while maintaining a focus on user experience is rare in full-stack developers.',
    author: 'Vannak Chhorn',
    role: 'CTO',
    organization: 'Prestige Alliance',
    project: 'Atlas Property',
    avatar: '/portfolio/testimonial-vannak.svg',
  },
  {
    quote:
      "Khem's implementation of the REEDAR booking system was flawless. The real-time availability tracking and payment integration worked perfectly from day one.",
    author: 'Srey Leak',
    role: 'Product Manager',
    organization: 'REEDAR',
    project: 'REEDAR Car Rental',
    avatar: '/portfolio/testimonial-srey.svg',
  },
  {
    quote:
      'The logistics workflows Khem designed for BS Express were incredibly thorough. He anticipated edge cases that none of us had considered.',
    author: 'Dara Kim',
    role: 'Operations Director',
    organization: 'BS Express',
    project: 'BS Express Logistics',
    avatar: '/portfolio/testimonial-dara.svg',
  },
  {
    quote:
      "Khem's approach to the ArtiSea publishing platform showed remarkable depth. The combination of rich-text editing with social features was brilliantly executed.",
    author: 'Sophal Nguon',
    role: 'Editor-in-Chief',
    organization: 'ArtiSea',
    project: 'ArtiSea Publishing',
    avatar: '/portfolio/testimonial-sophal.svg',
  },
];

// Tech Stack Data
export const techStack: TechStackItem[] = [
  {
    name: 'JavaScript',
    category: 'language',
    proficiency: 95,
    yearsExperience: 4,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Core language for all frontend and backend development',
  },
  {
    name: 'TypeScript',
    category: 'language',
    proficiency: 92,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Strong typing for robust frontend and backend development',
  },
  {
    name: 'Next.js',
    category: 'framework',
    proficiency: 95,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Production experience building complex admin systems and SaaS platforms',
  },
  {
    name: 'React',
    category: 'framework',
    proficiency: 92,
    yearsExperience: 4,
    projectsUsedIn: ['bootcamp-final-project', 'neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Core frontend framework for all major projects',
  },
  {
    name: 'NestJS',
    category: 'framework',
    proficiency: 88,
    yearsExperience: 2,
    projectsUsedIn: ['atlas-property', 'reedar', 'artisea'],
    description: 'Backend framework for secure API development and RBAC implementation',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 85,
    yearsExperience: 2,
    projectsUsedIn: ['atlas-property', 'reedar', 'artisea'],
    description: 'Relational database design and optimization with JSONB for flexible storage',
  },
  {
    name: 'Tailwind CSS',
    category: 'tool',
    proficiency: 88,
    yearsExperience: 3,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    name: 'Git',
    category: 'tool',
    proficiency: 90,
    yearsExperience: 4,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property', 'reedar', 'artisea'],
    description: 'Version control for all projects with clean commit history',
  },
  {
    name: 'Docker',
    category: 'tool',
    proficiency: 75,
    yearsExperience: 2,
    projectsUsedIn: ['atlas-property', 'reedar'],
    description: 'Containerization for consistent development environments',
  },
  {
    name: 'RBAC',
    category: 'architecture',
    proficiency: 92,
    yearsExperience: 2,
    projectsUsedIn: ['neuralshield-ivs', 'atlas-property'],
    description: 'Role-Based Access Control implementation for secure systems',
  },
  {
    name: 'JWT',
    category: 'architecture',
    proficiency: 88,
    yearsExperience: 2,
    projectsUsedIn: ['atlas-property', 'reedar'],
    description: 'JSON Web Token authentication for secure APIs',
  },
  {
    name: 'Clean Architecture',
    category: 'architecture',
    proficiency: 85,
    yearsExperience: 1,
    projectsUsedIn: ['reedar', 'artisea'],
    description: 'Separation of concerns and maintainable code structure',
  },
];
