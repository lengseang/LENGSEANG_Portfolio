'use client';

import { motion } from 'framer-motion';
import { MotionItem, MotionReveal, MotionStagger } from './motion';

interface StackGroup {
  domain: string;
  badge: string;
  technologies: {
    name: string;
    level: string;
    shippedIn: string;
  }[];
}

const stackGroups: StackGroup[] = [
  {
    domain: 'Frontend & Client Architecture',
    badge: 'Core Focus',
    technologies: [
      { name: 'Next.js 16 (App Router, Turbopack)', level: '3+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'React 19 & TypeScript', level: '4+ yrs', shippedIn: 'thecoauthor, neuralshield, portfolio' },
      { name: 'Vue.js & Nuxt.js', level: '3+ yrs', shippedIn: 'reedar' },
      { name: 'Tailwind CSS v4', level: '3+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'Tiptap Rich-Text Engine', level: '2+ yrs', shippedIn: 'thecoauthor' },
      { name: 'Framer Motion & Lenis Scroll', level: '2+ yrs', shippedIn: 'thecoauthor, portfolio' },
    ],
  },
  {
    domain: 'Backend & System Design',
    badge: 'Enterprise',
    technologies: [
      { name: 'NestJS & Express.js', level: '2+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'Granular Multi-Tier RBAC', level: '2+ yrs', shippedIn: 'prestige alliance' },
      { name: 'REST & Low-Latency Streaming APIs', level: '2+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'JWT & Route Guard Middleware', level: '2+ yrs', shippedIn: 'thecoauthor, prestige alliance' },
      { name: 'Logistics State Machines & Webhooks', level: '1+ yrs', shippedIn: 'bs express' },
      { name: 'Clean Architecture & Modular Patterns', level: '3+ yrs', shippedIn: 'thecoauthor, prestige alliance' },
    ],
  },
  {
    domain: 'Data Architecture & Storage',
    badge: 'Production Data',
    technologies: [
      { name: 'PostgreSQL (JSONB & Indexing)', level: '3+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'MySQL & Relational Modeling', level: '2+ yrs', shippedIn: 'reedar' },
      { name: 'Schema Migrations & Integrity', level: '3+ yrs', shippedIn: 'thecoauthor, reedar' },
      { name: 'Real-Time Event Streams & Sockets', level: '2+ yrs', shippedIn: 'neuralshield, thecoauthor' },
    ],
  },
  {
    domain: 'Mobile, Edge & Infrastructure',
    badge: 'Distributed',
    technologies: [
      { name: 'React Native & Android SDK', level: '2+ yrs', shippedIn: 'bs express, alauna' },
      { name: 'On-Device LLM Runtime (Qwen 2.5)', level: '1+ yr', shippedIn: 'alauna' },
      { name: 'Instant QR Scanning & Offline Cache', level: '1+ yr', shippedIn: 'bs express' },
      { name: 'Docker, Git & GitHub Actions', level: '4+ yrs', shippedIn: 'thecoauthor, neuralshield' },
      { name: 'Vercel & Linux Server Hosting', level: '3+ yrs', shippedIn: 'thecoauthor, portfolio' },
    ],
  },
];

export const SkillsRadar = () => {
  return (
    <section id="stack" className="border-y border-black/[0.06] dark:border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
        <MotionReveal className="mb-12 space-y-3">
          <p className="eyebrow">Technical Arsenal</p>
          <h2 className="font-display text-4xl leading-none sm:text-5xl">Production Tech Stack</h2>
          <p className="max-w-2xl text-base sm:text-lg text-[color:var(--text-soft)]">
            Verified technologies, runtimes, and architectural patterns proven across shipping applications.
          </p>
        </MotionReveal>

        <MotionStagger className="grid gap-6 md:grid-cols-2">
          {stackGroups.map((group) => (
            <MotionItem key={group.domain}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="panel p-6 sm:p-7 space-y-5 h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 border-b border-black/[0.05] dark:border-white/8 pb-3">
                    <h3 className="text-lg font-bold font-display text-[color:var(--text-strong)]">{group.domain}</h3>
                    <span className="text-[11px] font-mono text-[color:var(--text-muted)]">{group.badge}</span>
                  </div>

                  <div className="space-y-2.5">
                    {group.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-baseline justify-between gap-3 text-xs">
                        <div className="min-w-0">
                          <span className="font-medium text-[color:var(--text-strong)]">{tech.name}</span>
                          <span className="text-[11px] font-mono text-[color:var(--text-muted)] block sm:inline sm:ml-2">
                            ({tech.shippedIn})
                          </span>
                        </div>
                        <span className="font-mono text-[color:var(--accent)] font-semibold flex-shrink-0">
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};
