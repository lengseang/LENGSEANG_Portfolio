'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/app/_data/portfolio';
import { MotionItem, MotionReveal, MotionStagger } from './motion';
import { EmojiSticker } from './stickers/Sticker';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'architecture', label: 'Architecture' },
] as const;

export const SkillsRadar = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<(typeof skills)[0] | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="border-y border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
        <MotionReveal className="mb-10 space-y-3">
          <p className="eyebrow">Technical Skills</p>
          <h2 className="font-display text-4xl leading-none sm:text-5xl">What I work with</h2>
          <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
            Proficiencies built through production experience across the full stack
          </p>
        </MotionReveal>

        {/* Category Filter */}
        <MotionReveal className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[color:var(--text-strong)] text-[color:var(--background)]'
                    : 'bg-white/[0.04] text-[color:var(--text-soft)] hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* Skills Grid */}
        <div className="relative">
          <motion.div
            className="absolute -top-2 right-0 z-10"
            animate={
              hoveredSkill
                ? {
                    scale: [1, 1.15, 0.95, 1.1, 1],
                    rotate: [0, -8, 12, -6, 4, 0],
                    y: [0, -4, 2, -6, 0],
                  }
                : { scale: 1, rotate: 0, y: 0 }
            }
            transition={hoveredSkill ? { duration: 0.5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
          >
            <EmojiSticker
              src="/vid/cow-moo.mp4"
              size={68}
              mobileSize={48}
              visible={hoveredSkill !== null}
              variants={{
                hidden: { opacity: 0, scale: 0.2 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 300, damping: 10 },
                },
              }}
            />
          </motion.div>
          <MotionStagger className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredSkills.map((skill) => (
              <MotionItem key={skill.name}>
                <button
                  type="button"
                  className="w-full text-left panel p-5 space-y-3 cursor-pointer transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 group"
                  onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[color:var(--text-strong)]">{skill.name}</span>
                    <span className="text-xs text-[color:var(--text-muted)]">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent)] to-white transition-all duration-700"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                  {skill.projectsUsedIn.length > 0 && (
                    <p className="text-xs text-[color:var(--text-muted)]">
                      {skill.projectsUsedIn.length} project{skill.projectsUsedIn.length !== 1 ? 's' : ''}
                    </p>
                  )}
                </button>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <MotionReveal className="mt-8">
            <div className="panel p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--text-strong)]">{selectedSkill.name}</h3>
                  <p className="text-sm text-[color:var(--text-soft)] mt-1">{selectedSkill.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.projectsUsedIn.map((projectName) => (
                  <span
                    key={projectName}
                    className="px-3 py-1 bg-white/[0.06] rounded-full text-xs text-[color:var(--text-muted)]"
                  >
                    {projectName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                ))}
              </div>
              {selectedSkill.timeline.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-[color:var(--text-muted)]">Experience timeline</p>
                  <div className="flex items-center gap-2">
                    {selectedSkill.timeline.map((year) => (
                      <span
                        key={year}
                        className="px-2 py-1 bg-white/[0.06] rounded text-xs text-[color:var(--text-soft)]"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </MotionReveal>
        )}
      </div>
    </section>
  );
};
