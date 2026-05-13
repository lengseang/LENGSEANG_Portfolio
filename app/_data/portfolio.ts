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
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Certification = {
  title: string;
  issuer: string;
  href: string;
  focus: string;
  year: string;
};

export const personalInfo = {
  name: "Khem Seangleng",
  role: "Frontend-First Full-Stack Developer",
  location: "Phnom Penh, Cambodia",
  email: "khemseangleng@gmail.com",
  telegram: "https://t.me/LegendOfLeng",
  phone: "+855 99 602 647",
  linkedIn: "https://www.linkedin.com/in/khem-seangleng-18810a306/",
  shortBio:
    "I build secure admin systems and clean product interfaces with a frontend-first mindset.",
  longBio:
    "Frontend-first full-stack developer working across Next.js, NestJS, RBAC-driven UI, and backend collaboration.",
  availability: "Available for freelance work, product collaborations, and frontend-focused engineering opportunities.",
  resumeHref: "mailto:khemseangleng@gmail.com?subject=Resume%20Request",
  cvHeadline:
    "Owned the NeuralShield IVS frontend from prototype to production and now lead product work across secure SaaS systems.",
};

export const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export const stats = [
  { value: "04 wks", label: "Prototype to production admin frontend" },
  { value: "06 roles", label: "RBAC dashboard roles implemented" },
  { value: "24h", label: "Typical response time" },
];

export const highlights = [
  "Next.js",
  "TypeScript",
  "NestJS",
  "RBAC UI",
  "Admin Systems",
  "Product Frontend",
];

export const skills = [
  { label: "Next.js & React", level: "90%" },
  { label: "TypeScript & JavaScript", level: "88%" },
  { label: "RBAC UI & Frontend Architecture", level: "86%" },
  { label: "NestJS & API Collaboration", level: "82%" },
  { label: "Tailwind CSS & Interface Systems", level: "89%" },
];

export const services: Service[] = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Designing high-clarity interfaces with stronger hierarchy, sharper typography, and more distinctive visual direction.",
    icon: "solar:palette-round-bold-duotone",
  },
  {
    id: "02",
    title: "Frontend Development",
    description:
      "Building fast, responsive websites in React and Next.js with scalable structure and reusable components.",
    icon: "solar:code-square-bold-duotone",
  },
  {
    id: "03",
    title: "UI Animation",
    description:
      "Adding motion that supports the story of the page, from subtle reveals to stronger section transitions.",
    icon: "solar:star-fall-bold-duotone",
  },
  {
    id: "04",
    title: "Landing Pages",
    description:
      "Crafting conversion-focused pages that balance brand personality, readability, and smooth user flow.",
    icon: "solar:window-frame-bold-duotone",
  },
];

export const projects: Project[] = [
  {
    title: "NeuralShield IVS Admin Frontend",
    category: "Production Ownership",
    summary:
      "Took ownership of the frontend and transformed an incomplete prototype into a production admin system in four weeks, including secure role-based interface flows.",
    image: "/portfolio/project-cover.jpg",
    href: "/#contact",
  },
  {
    title: "Atlas Property",
    category: "Project Lead",
    summary:
      "Leading a multi-role real-estate SaaS built with Next.js and NestJS, with JWT authentication, RBAC, and role-scoped APIs.",
    image: "/portfolio/project-cover.jpg",
    href: "/#services",
  },
  {
    title: "REEDAR Car Rental Platform",
    category: "Full-Stack Build",
    summary:
      "Built a full-stack rental platform with Next.js and NestJS, including JWT authentication, booking flows, and real-time availability logic.",
    image: "/portfolio/project-cover.jpg",
    href: "/#about",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "solar:letter-bold-duotone",
  },
  {
    label: "Telegram",
    href: personalInfo.telegram,
    icon: "simple-icons:telegram",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedIn,
    icon: "simple-icons:linkedin",
  },
  {
    label: "Call",
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    icon: "solar:phone-calling-rounded-bold-duotone",
  },
];

export const experience: TimelineItem[] = [
  {
    period: "Nov 2024 - Present",
    title: "Frontend Developer - NeuralShield IVS Admin Frontend",
    organization: "Prestige Alliance Co. Ltd",
    description:
      "Promoted from intern to full-time and trusted to own a security-focused admin frontend.",
    points: [
      "Turned an incomplete prototype into a production admin system in four weeks.",
      "Built an RBAC dashboard for 6 roles and around 20 permissions.",
      "Refactored the frontend into a cleaner architecture and improved maintainability with SonarQube.",
      "Designed a streaming chatbot interface that improved perceived response speed during phishing assessments.",
    ],
  },
  {
    period: "2026 - Present",
    title: "Project Lead - Atlas Property",
    organization: "Prestige Alliance Co. Ltd",
    description:
      "Leading a multi-role real-estate SaaS with secure backend foundations.",
    points: [
      "Directing a marketplace product built with Next.js and NestJS.",
      "Designing JWT authentication, RBAC, and role-scoped APIs.",
      "Modeling listings, availability, and agent lead management flows.",
    ],
  },
  {
    period: "2025",
    title: "Backend Developer - SMS Call Blocker Project",
    organization: "Prestige Alliance Co. Ltd",
    description:
      "Built backend authentication and data services for an SMS call blocker product.",
    points: [
      "Worked with Node.js, Express, TypeORM, and TypeScript.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "Expected Dec 2026",
    title: "Bachelor of Computer Science",
    organization: "Royal University of Phnom Penh",
    description: "Formal computer science study alongside hands-on product work.",
    points: [],
  },
  {
    period: "2023 - 2024",
    title: "Full-Stack Bootcamp - React, Vue.js, Laravel",
    organization: "Instinct Institute, Phnom Penh",
    description: "Practical full-stack training across modern frontend and backend tools.",
    points: [],
  },
  {
    period: "Completed",
    title: "Flutter & Dart: Cross-Platform Mobile Development",
    organization: "Instinct Institute, Phnom Penh",
    description: "Expanded into mobile product development and cross-platform thinking.",
    points: [],
  },
];

export const certifications: Certification[] = [
  {
    title: "AI Application Prompt Engineering",
    issuer: "Frontend Masters",
    href: "https://drive.google.com/file/d/1tJp0TghUQpxw7bzpjdLe9vSf0Nh-3QbO/view?usp=drive_link",
    focus: "Prompt design, AI workflows, and applied product thinking",
    year: "2026",
  },
  {
    title: "Patterns in Enterprise Architecture",
    issuer: "Frontend Masters",
    href: "https://drive.google.com/file/d/1OS5aKOfPpwfd2_m2Xb_nBJaeOOpq_URY/view?usp=drive_link",
    focus: "System structure, maintainability, and architecture patterns",
    year: "2026",
  },
  {
    title: "Architecting Backend Systems",
    issuer: "Frontend Masters",
    href: "https://drive.google.com/file/d/1NNEAEji-RWOgnclLIWPXYa7ipaP_2mXN/view?usp=drive_link",
    focus: "Backend service design and scalable application thinking",
    year: "2026",
  },
  {
    title: "Database Fundamentals Comprehensive Introduction",
    issuer: "Frontend Masters",
    href: "https://drive.google.com/file/d/1Vf6ZbVHmi80zRXFFCEL0645J30Sv2xdT/view?usp=drive_link",
    focus: "Core data modeling, relational thinking, and database foundations",
    year: "2026",
  },
  {
    title: "Advanced Backend System Design",
    issuer: "Frontend Masters",
    href: "https://drive.google.com/file/d/14clQjggvmztpAja6LaepKPK_YZfwlcWq/view?usp=drive_link",
    focus: "Advanced system design and backend decision-making",
    year: "2026",
  },
  {
    title: "Workshop on Programming with AI",
    issuer: "STEP IT Academy",
    href: "https://drive.google.com/file/d/1m6RJDX1s_RPiXCDdqaSpNM1k9G3j5Nw3/view?usp=drive_link",
    focus: "Applied AI-assisted development workflows",
    year: "2026",
  },
];
