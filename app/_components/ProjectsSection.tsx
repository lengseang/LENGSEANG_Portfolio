'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/app/_data/portfolio';
import { Icon } from './icon';
import { MotionItem, MotionReveal, MotionStagger } from './motion';

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
      <MotionReveal className="mb-10 space-y-3">
        <p className="eyebrow">Production Portfolio</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">Selected Work</h2>
        <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
          Real-world applications engineered from domain schema to high-speed client interface
        </p>
      </MotionReveal>

      <MotionStagger className="space-y-8">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.slug;

          return (
            <MotionItem key={project.title} id={`project-${project.slug}`}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group panel p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="grid gap-6 md:grid-cols-[0.38fr_0.62fr] items-center">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[color:var(--surface)] border border-white/8 shadow-md">
                    <Image
                      src={project.visuals.thumbnail}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        project.slug === 'alauna' ? 'object-cover object-top' : 'object-cover'
                      }`}
                      sizes="(min-width: 768px) 24rem, 100vw"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-mono tracking-wider text-[color:var(--accent)]">
                          {project.category}
                        </span>
                        {project.slug === 'thecoauthor' && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                            Live SaaS
                          </span>
                        )}
                        {project.slug === 'alauna' && (
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-400">
                            AI Companion
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-[color:var(--text-muted)]">{project.timeline}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-[color:var(--text-strong)]">{project.title}</h3>

                    <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--text-soft)]">{project.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/[0.04] border border-white/8 rounded-md text-xs font-mono text-[color:var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        {project.metrics.slice(0, 2).map((metric) => (
                          <div
                            key={metric.label}
                            className="p-3 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.04] dark:to-transparent border border-black/[0.06] dark:border-white/8 rounded-xl shadow-xs"
                          >
                            <p className="text-base font-bold font-display text-[color:var(--text-strong)]">
                              {metric.value}
                            </p>
                            <p className="text-[11px] text-[color:var(--text-muted)]">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {project.visuals.github && (
                        <a
                          href={project.visuals.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--text-strong)] hover:text-[color:var(--accent)] hover:underline"
                        >
                          <Icon icon="simple-icons:github" width={14} />
                          <span>View on GitHub</span>
                        </a>
                      )}

                      {project.visuals.demo && project.visuals.demo !== project.visuals.github && (
                        <a
                          href={project.visuals.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--accent)] hover:underline"
                        >
                          <Icon icon="solar:arrow-right-up-outline" width={16} />
                          <span>Visit Live App</span>
                        </a>
                      )}

                      {project.challenges.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setExpandedProject(isExpanded ? null : project.slug)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)] transition-colors"
                        >
                          <Icon
                            icon={isExpanded ? 'solar:minimize-square-outline' : 'solar:info-circle-outline'}
                            width={16}
                          />
                          <span>{isExpanded ? 'Hide Architecture Notes' : 'Architecture & Challenges'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Animated Deep Dive Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-white/8 space-y-6">
                        <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                          {project.detailedDescription}
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[color:var(--text-muted)]">
                              Engineering Challenges Solved
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge) => (
                                <li
                                  key={challenge}
                                  className="flex items-start gap-2 text-xs leading-relaxed text-[color:var(--text-soft)]"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-[color:var(--text-muted)]">
                              Key Outcomes & Architecture
                            </h4>
                            <ul className="space-y-2">
                              {project.outcomes.map((outcome) => (
                                <li
                                  key={outcome}
                                  className="flex items-start gap-2 text-xs leading-relaxed text-[color:var(--text-soft)]"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </MotionItem>
          );
        })}
      </MotionStagger>
    </section>
  );
};
