'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/app/_data/portfolio';
import { Icon } from './icon';
import { MotionItem, MotionReveal, MotionStagger } from './motion';

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'frontend', label: 'Frontend Craft' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'database', label: 'Data & Schemas' },
  { id: 'mobile', label: 'Mobile Workflows' },
  { id: 'architecture', label: 'System Design' },
] as const;

export const SkillsRadar = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null);

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="border-y border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
        <MotionReveal className="mb-10 space-y-3">
          <p className="eyebrow">Technical Competencies</p>
          <h2 className="font-display text-4xl leading-none sm:text-5xl">Production Tech Stack</h2>
          <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
            Tools, languages, and architecture patterns proven in real shipping applications
          </p>
        </MotionReveal>

        {/* Category Filter Chips with Motion Layout Spring */}
        <MotionReveal className="mb-8">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] w-fit">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedSkill(null);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[color:var(--background)] font-semibold'
                      : 'text-[color:var(--text-soft)] hover:text-[color:var(--text-strong)]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 rounded-full bg-[color:var(--text-strong)] shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </MotionReveal>

        {/* Skills Grid */}
        <div className="relative">
          <MotionStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              const tenure =
                skill.timeline.length > 1
                  ? `${skill.timeline[0]} – ${skill.timeline[skill.timeline.length - 1]}`
                  : skill.timeline[0] || 'Active';

              return (
                <MotionItem key={skill.name}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`h-full flex flex-col justify-between text-left panel p-5 space-y-3.5 cursor-pointer transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04] group ${
                      isSelected
                        ? 'border-[color:var(--accent)] bg-white/[0.06] shadow-lg ring-1 ring-[color:var(--accent)]/30'
                        : ''
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-semibold text-[color:var(--text-strong)] group-hover:text-[color:var(--accent)] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/8 text-[color:var(--text-muted)]">
                          {skill.category}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-xs leading-relaxed text-[color:var(--text-soft)] line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/6">
                      <div className="flex items-center justify-between text-[11px] text-[color:var(--text-muted)]">
                        <span>Production tenure</span>
                        <span className="font-mono text-[color:var(--text-soft)]">{tenure}</span>
                      </div>

                      {skill.projectsUsedIn.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {skill.projectsUsedIn.slice(0, 2).map((proj) => (
                            <span
                              key={proj}
                              className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-[color:var(--text-muted)] font-mono truncate max-w-[140px]"
                            >
                              {proj.replace(/-/g, ' ')}
                            </span>
                          ))}
                          {skill.projectsUsedIn.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-[10px] text-[color:var(--text-muted)] font-mono">
                              +{skill.projectsUsedIn.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </MotionItem>
              );
            })}
          </MotionStagger>
        </div>

        {/* Selected Skill Detail Panel */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 panel p-6 sm:p-7 space-y-4 border-white/20 bg-white/[0.03]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-[color:var(--text-strong)] font-display">
                      {selectedSkill.name}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-[color:var(--accent)]">
                      {selectedSkill.category}
                    </span>
                  </div>
                  <p className="text-sm text-[color:var(--text-soft)]">{selectedSkill.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="p-1.5 rounded-full border border-white/10 text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)] hover:border-white/25 transition-colors"
                  aria-label="Close details"
                >
                  <Icon icon="solar:close-circle-bold" width={20} />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-white/8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] mb-2">
                    Shipped In Production Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projectsUsedIn.map((projectName) => (
                      <span
                        key={projectName}
                        className="px-3 py-1 bg-white/[0.06] border border-white/10 rounded-full text-xs font-mono text-[color:var(--text-strong)]"
                      >
                        {projectName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)] mb-2">
                    Active Timeline
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.timeline.map((year) => (
                      <span
                        key={year}
                        className="px-2.5 py-1 bg-white/[0.05] border border-white/8 rounded-md text-xs font-mono text-[color:var(--accent)]"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
