'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MotionReveal } from './motion';
import { BlurTextReveal } from './motion/BlurTextReveal';

interface ExperienceDossier {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  summary: string;
  systems: {
    name: string;
    badge: string;
    description: string;
    highlights: string[];
    tags: string[];
  }[];
  metrics: { label: string; value: string }[];
}

const experienceData: ExperienceDossier[] = [
  {
    period: 'Nov 2025 – May 2026',
    role: 'Full-Stack Systems Developer',
    organization: 'Prestige Alliance Co., Ltd.',
    location: 'Phnom Penh, Cambodia',
    type: 'Production Role',
    summary:
      'Spearheaded frontend architecture for low-latency streaming analytics and engineered enterprise RBAC administration portals.',
    systems: [
      {
        name: 'NeuralShield IVS - Real-Time Analytics Platform',
        badge: 'Frontend Owner',
        description:
          'Production analytics client managing low-latency backend socket feeds with sub-200ms rendering latency and strict enterprise route guards.',
        highlights: [
          'Sub-200ms event-stream data pipelines with payload sanitization',
          'Secure token handling, route shielding, and dynamic session revocation',
        ],
        tags: ['Next.js 16', 'React', 'TypeScript', 'Streaming APIs', 'Tailwind CSS'],
      },
      {
        name: 'Enterprise RBAC Admin Dashboard',
        badge: 'Security & Systems',
        description:
          'Granular 6-tier administrative dashboard for sensitive data evaluation and interactive geographic distribution.',
        highlights: [
          '6-tier role permission hierarchy with dynamic route shielding',
          'Custom high-performance SVG map API visualization for regional data',
        ],
        tags: ['RBAC (6 Tiers)', 'SVG Map API', 'Dynamic Routing', 'PostgreSQL'],
      },
    ],
    metrics: [
      { label: 'Authorization', value: '6 RBAC Tiers' },
      { label: 'Map API', value: 'Custom SVG' },
      { label: 'Security', value: 'Production-Gated' },
    ],
  },
  {
    period: 'May 2026 – Jul 2026',
    role: 'IT Developer Staff',
    organization: 'BS Express Cambodia',
    location: 'Phnom Penh, Cambodia',
    type: 'Operational Systems',
    summary:
      'Architected operational delivery state machines and real-time push notification pipelines for express logistics.',
    systems: [
      {
        name: 'BS Express Driver Application',
        badge: 'Mobile Architecture',
        description:
          'React Native mobile application for parcel dispatching, driver assignments, and camera QR code verification.',
        highlights: [
          'Instant camera QR scanning pipeline with offline cache for field hubs',
          'Reduced driver parcel processing time by 30% through streamlined workflows',
        ],
        tags: ['React Native', 'Android SDK', 'QR Scanning', 'Offline Cache'],
      },
      {
        name: '3-Way Logistics State Machine',
        badge: 'Workflow Architecture',
        description:
          'Deterministic operational workflows across Branch-to-Branch, Branch-to-Customer, and Customer-to-Branch distribution.',
        highlights: [
          '100% parcel status synchronization across Driver App, Dashboard, and Portals',
          'Automated push event triggers eliminating race conditions between hubs',
        ],
        tags: ['Push Triggers', 'State Machines', 'Webhooks', 'Real-Time Sync'],
      },
    ],
    metrics: [
      { label: 'Workflows', value: '3 Multi-Role Flows' },
      { label: 'Tracking Sync', value: '100% Real-Time' },
      { label: 'Mobile App', value: 'React Native' },
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeExp = experienceData[activeTab];

  return (
    <section id="experience" className="border-y border-black/[0.06] dark:border-white/8 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <MotionReveal className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] text-xs font-mono text-[color:var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            Verified Production History
          </div>
          <BlurTextReveal
            as="h2"
            text="Work Experience"
            className="font-display text-4xl leading-tight sm:text-5xl font-bold tracking-tight text-[color:var(--text-strong)]"
          />
          <p className="max-w-2xl text-base sm:text-lg text-[color:var(--text-soft)] leading-relaxed">
            Production engineering roles delivering role-gated admin dashboards, real-time analytics platforms, and
            express logistics state machines.
          </p>
        </MotionReveal>

        {/* Interactive Company Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {experienceData.map((exp, idx) => {
            const isSelected = activeTab === idx;
            return (
              <motion.button
                type="button"
                key={exp.organization}
                onClick={() => setActiveTab(idx)}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`p-5 rounded-2xl border text-left transition-colors duration-200 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'border-black/[0.2] dark:border-white/25 bg-white/95 dark:bg-white/[0.08] shadow-lg ring-1 ring-black/[0.08] dark:ring-white/15'
                    : 'border-black/[0.06] dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] hover:border-black/[0.12] dark:hover:border-white/15 hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <motion.div
                    layoutId="activeCompanyTab"
                    className="absolute top-0 inset-x-0 h-0.5 bg-[color:var(--text-strong)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--text-muted)]">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold font-display text-[color:var(--text-strong)] pt-0.5 group-hover:text-[color:var(--accent)] transition-colors">
                      {exp.organization}
                    </h3>
                    <p className="text-xs font-medium text-[color:var(--accent)]">{exp.role}</p>
                  </div>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-mono font-bold transition-all ${
                      isSelected
                        ? 'bg-[color:var(--text-strong)] text-[color:var(--background)] shadow-sm'
                        : 'bg-black/[0.04] dark:bg-white/[0.06] text-[color:var(--text-muted)]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Experience Deep-Dive Dossier */}
        <motion.div
          key={activeExp.organization}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="panel p-6 sm:p-8 space-y-8"
        >
          {/* Company Dossier Header */}
          <div className="border-b border-black/[0.06] dark:border-white/8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[color:var(--text-strong)]">
                  {activeExp.role}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                  {activeExp.type}
                </span>
              </div>
              <p className="text-sm font-medium text-[color:var(--accent)]">
                {activeExp.organization} &middot; {activeExp.location} &middot;{' '}
                <span className="font-mono text-[color:var(--text-muted)]">{activeExp.period}</span>
              </p>
              <p className="text-sm text-[color:var(--text-soft)] max-w-3xl leading-relaxed pt-1">
                {activeExp.summary}
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap md:flex-col gap-2.5 flex-shrink-0">
              {activeExp.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="px-3.5 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/8"
                >
                  <p className="text-xs font-bold font-display text-[color:var(--text-strong)]">{metric.value}</p>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[color:var(--text-muted)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Systems Engineered Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[color:var(--text-muted)]">
              Core Systems & Products Engineered
            </h4>

            <div className="grid gap-5 md:grid-cols-2">
              {activeExp.systems.map((system) => (
                <motion.div
                  key={system.name}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="rounded-2xl border border-black/[0.06] dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02] p-5 sm:p-6 space-y-4 hover:border-black/[0.15] dark:hover:border-white/15 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h5 className="text-lg font-bold font-display text-[color:var(--text-strong)] leading-snug">
                      {system.name}
                    </h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/10 text-[color:var(--accent)] flex-shrink-0">
                      {system.badge}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed text-[color:var(--text-soft)]">{system.description}</p>

                  <div className="space-y-2 border-t border-black/[0.04] dark:border-white/6 pt-3">
                    {system.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-[color:var(--text-soft)]">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <p className="pt-2.5 border-t border-black/[0.04] dark:border-white/6 text-xs font-mono text-[color:var(--text-muted)]">
                    {system.tags.join(' \u00B7 ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
