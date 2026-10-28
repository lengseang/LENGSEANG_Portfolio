'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { journeyMilestones, projects } from '@/app/_data/portfolio';
import { Icon } from '../icon';
import { MotionReveal } from '../motion';

export const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMilestone = journeyMilestones[activeIndex] || journeyMilestones[0];

  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
      <MotionReveal className="mb-10 space-y-3">
        <p className="eyebrow">Engineering Progression</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">Milestones & Growth</h2>
        <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
          The educational foundation and production engineering roles that built my skillset
        </p>
      </MotionReveal>

      <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:gap-10 items-start">
        {/* Left Column: Interactive Milestone Step Selector */}
        <div className="space-y-3">
          {journeyMilestones.map((milestone, index) => {
            const isActive = activeIndex === index;
            const year = milestone.date.split('-')[0];
            const month = milestone.date.split('-')[1];

            return (
              <motion.button
                type="button"
                key={milestone.title}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`w-full text-left p-4 rounded-2xl border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                  isActive
                    ? 'border-[color:var(--accent)] bg-white/[0.06] shadow-md ring-1 ring-[color:var(--accent)]/30'
                    : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-colors ${
                      isActive
                        ? 'bg-[color:var(--text-strong)] text-[color:var(--background)]'
                        : 'bg-white/5 text-[color:var(--text-muted)] border border-white/8'
                    }`}
                  >
                    {year}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold truncate ${isActive ? 'text-[color:var(--text-strong)]' : 'text-[color:var(--text-soft)]'}`}
                    >
                      {milestone.title}
                    </p>
                    <p className="text-xs text-[color:var(--text-muted)] capitalize">
                      {milestone.type} &middot; {month ? `${month}/${year}` : year}
                    </p>
                  </div>
                </div>

                <Icon
                  icon="solar:arrow-right-linear"
                  width={16}
                  className={`flex-shrink-0 transition-transform ${
                    isActive ? 'translate-x-1 text-[color:var(--accent)]' : 'text-white/20'
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Active Milestone Deep Dive with Motion */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.title}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="panel p-6 sm:p-8 space-y-6 border-white/15 bg-white/[0.03]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[color:var(--accent)]">
                    {activeMilestone.type} milestone
                  </span>
                  <span className="text-xs font-mono text-[color:var(--text-muted)]">{activeMilestone.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-[color:var(--text-strong)] pt-1">
                  {activeMilestone.title}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">{activeMilestone.description}</p>
              </div>

              {/* Impact Callout */}
              {activeMilestone.impact && (
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Measurable Result
                  </p>
                  <p className="text-sm text-[color:var(--text-strong)] font-medium">{activeMilestone.impact}</p>
                </div>
              )}

              {/* Metrics Grid */}
              {activeMilestone.metrics && activeMilestone.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {activeMilestone.metrics.map((metric) => (
                    <div key={metric.label} className="p-3.5 rounded-xl border border-white/8 bg-white/[0.02]">
                      <p className="text-lg font-bold font-display text-[color:var(--text-strong)]">{metric.value}</p>
                      <p className="text-xs text-[color:var(--text-muted)] mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Acquired */}
              {activeMilestone.skillsAcquired && activeMilestone.skillsAcquired.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                    Skills & Competencies Gained
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded-md text-xs font-mono text-[color:var(--text-soft)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Projects */}
              {activeMilestone.projects && activeMilestone.projects.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                    Related Project Case Studies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.projects.map((projectSlug) => {
                      const project = projects.find((p) => p.slug === projectSlug);
                      return project ? (
                        <a
                          key={projectSlug}
                          href={`/#project-${projectSlug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-full text-xs font-medium text-[color:var(--text-strong)] transition-colors"
                        >
                          <Icon icon="solar:arrow-right-up-linear" width={14} />
                          <span>{project.title}</span>
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
