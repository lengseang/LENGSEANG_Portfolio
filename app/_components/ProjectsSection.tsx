'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/app/_data/portfolio';
import { Icon } from './icon';
import { MotionItem, MotionReveal, MotionStagger } from './motion';

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
      <MotionReveal className="mb-10 space-y-3">
        <p className="eyebrow">Projects</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">Selected work</h2>
        <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
          Real-world applications I&apos;ve built from concept to production
        </p>
      </MotionReveal>

      <MotionStagger className="space-y-8">
        {projects.map((project) => (
          <MotionItem key={project.title} id={`project-${project.slug}`}>
            <div className="group grid gap-6 md:grid-cols-[0.36fr_0.64fr]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-[color:var(--surface)] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_0_2rem_-0.5rem_rgba(255,255,255,0.05)]">
                <Image
                  src={project.visuals.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 22rem, 100vw"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                    {project.category}
                  </p>
                  <span className="text-xs text-[color:var(--text-muted)]">{project.timeline}</span>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-soft)]">{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/[0.04] rounded-full text-xs text-[color:var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className="p-3 bg-white/[0.03] rounded-xl">
                        <p className="text-lg font-semibold text-[color:var(--text-strong)]">{metric.value}</p>
                        <p className="text-xs text-[color:var(--text-muted)]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2">
                  {project.visuals.demo && (
                    <a
                      href={project.visuals.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition-opacity duration-300 hover:opacity-70"
                    >
                      <Icon icon="solar:arrow-right-up-outline" width={18} />
                      Live Demo
                    </a>
                  )}
                  {project.challenges.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setExpandedProject(expandedProject === project.slug ? null : project.slug)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--text-muted)] transition-opacity duration-300 hover:text-[color:var(--text-strong)]"
                    >
                      <Icon
                        icon={
                          expandedProject === project.slug
                            ? 'solar:minimize-square-outline'
                            : 'solar:info-circle-outline'
                        }
                        width={18}
                      />
                      {expandedProject === project.slug ? 'Less' : 'Details'}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {expandedProject === project.slug && (
              <div className="mt-6 p-6 panel">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Challenges</h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge) => (
                        <li key={challenge} className="flex gap-2 text-sm text-[color:var(--text-soft)]">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Outcomes</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2 text-sm text-[color:var(--text-soft)]">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {project.testimonial && (
                  <div className="mt-6 p-4 bg-white/[0.03] rounded-xl border border-white/5">
                    <p className="text-sm italic text-[color:var(--text-soft)]">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-medium text-[color:var(--text-strong)]">
                        {project.testimonial.author}
                      </span>
                      <span className="text-xs text-[color:var(--text-muted)]">&middot;</span>
                      <span className="text-xs text-[color:var(--text-muted)]">{project.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
};
