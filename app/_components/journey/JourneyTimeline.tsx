'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { journeyMilestones, projects } from '@/app/_data/portfolio';
import { Icon } from '../icon';
import { MotionReveal } from '../motion';
import { EmojiSticker } from '../stickers/Sticker';

interface MilestoneCardProps {
  milestone: (typeof journeyMilestones)[0];
  isActive: boolean;
  onClick: () => void;
}

const MilestoneCard = ({ milestone, isActive, onClick }: MilestoneCardProps) => {
  return (
    <button
      type="button"
      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        isActive
          ? 'border-[color:var(--accent)] bg-[color:var(--surface-soft)]'
          : 'border-transparent hover:border-white/20'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {milestone.visual && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-[color:var(--surface)]">
            {/* biome-ignore lint/performance/noImgElement: need onError fallback for milestone SVGs */}
            <img
              src={milestone.visual}
              alt={milestone.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-[color:var(--text-strong)]">{milestone.title}</h3>
            <span className="text-xs text-[color:var(--text-muted)]">{new Date(milestone.date).getFullYear()}</span>
          </div>
          <p className="mt-1 text-sm text-[color:var(--text-soft)] line-clamp-2">{milestone.description}</p>
          {milestone.metrics && (
            <div className="mt-2 flex flex-wrap gap-2">
              {milestone.metrics.map((metric) => (
                <span key={metric.label} className="text-xs px-2 py-1 bg-[color:var(--surface)] rounded-full">
                  {metric.value} {metric.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval>>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % journeyMilestones.length);
      }, 4000);
    }
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Scroll active item into view (horizontal only)
  useEffect(() => {
    if (timelineRef.current && !isMobile) {
      const container = timelineRef.current;
      const activeElement = container.children[activeIndex] as HTMLElement;
      if (activeElement) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = activeElement.getBoundingClientRect();
        const offset = elementRect.left - containerRect.left - (containerRect.width / 2 - elementRect.width / 2);
        container.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  }, [activeIndex, isMobile]);

  const activeMilestone = journeyMilestones[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoScrolling(false);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
      <MotionReveal className="mb-10 space-y-3">
        <p className="eyebrow">My Professional Journey</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">From Intern to Full-Stack Lead</h2>
        <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
          Explore my career progression, skill development, and key projects that shaped my expertise
        </p>
      </MotionReveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Timeline Navigation */}
        {/* biome-ignore lint/a11y/noStaticElementInteractions: hover detection for auto-scroll */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div
            ref={timelineRef}
            className={`flex gap-4 overflow-x-auto pb-4 ${isMobile ? 'snap-x snap-mandatory' : ''}`}
            style={{ scrollbarWidth: 'none' }}
          >
            {journeyMilestones.map((milestone, index) => (
              <div
                key={milestone.date}
                className={`flex-shrink-0 w-[90vw] sm:w-[45vw] lg:w-[300px] ${isMobile ? 'snap-start' : ''}`}
              >
                <MilestoneCard
                  milestone={milestone}
                  isActive={activeIndex === index}
                  onClick={() => handleSelect(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Details */}
        <div className="space-y-6">
          <MotionReveal>
            <div className="flex items-start gap-4">
              {activeMilestone.visual && (
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-[color:var(--surface)]">
                  {/* biome-ignore lint/performance/noImgElement: need onError fallback for milestone SVGs */}
                  <img
                    src={activeMilestone.visual}
                    alt={activeMilestone.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-[color:var(--text-strong)]">{activeMilestone.title}</h3>
                  <span className="text-sm text-[color:var(--text-muted)]">
                    {new Date(activeMilestone.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
                <p className="text-[color:var(--text-soft)] mb-4">{activeMilestone.description}</p>

                {activeMilestone.impact && (
                  <div className="mt-4 p-4 bg-[color:var(--surface-soft)] rounded-lg">
                    <p className="text-[color:var(--accent)] font-medium mb-2">Impact:</p>
                    <p className="text-[color:var(--text-strong)]">{activeMilestone.impact}</p>
                  </div>
                )}

                {/* Skills Acquired */}
                {activeMilestone.skillsAcquired && activeMilestone.skillsAcquired.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-[color:var(--text-strong)] mb-2">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeMilestone.skillsAcquired.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-[color:var(--surface)] rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Projects */}
                {activeMilestone.projects && activeMilestone.projects.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-[color:var(--text-strong)] mb-2">Related Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeMilestone.projects.map((projectSlug) => {
                        const project = projects.find((p) => p.slug === projectSlug);
                        return project ? (
                          <a
                            key={projectSlug}
                            href={`/#project-${projectSlug}`}
                            className="px-3 py-1 bg-[color:var(--surface)] rounded-full text-xs hover:bg-[color:var(--surface-soft)] transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </MotionReveal>

          {/* Navigation Arrows for Mobile */}
          {isMobile && (
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => handleSelect(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className={`p-2 rounded-full bg-[color:var(--surface)] text-[color:var(--text-strong)] ${
                  activeIndex === 0 ? 'opacity-30' : 'hover:bg-[color:var(--surface-soft)]'
                }`}
              >
                <Icon icon="solar:alt-arrow-left-bold-duotone" width={20} />
              </button>
              <button
                type="button"
                onClick={() => handleSelect(Math.min(journeyMilestones.length - 1, activeIndex + 1))}
                disabled={activeIndex === journeyMilestones.length - 1}
                className={`p-2 rounded-full bg-[color:var(--surface)] text-[color:var(--text-strong)] ${
                  activeIndex === journeyMilestones.length - 1 ? 'opacity-30' : 'hover:bg-[color:var(--surface-soft)]'
                }`}
              >
                <Icon icon="solar:alt-arrow-right-bold-duotone" width={20} />
              </button>
            </div>
          )}

          <div className="relative flex justify-end mt-4">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.2, rotate: -30, x: 40 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, -8, 6, -4, 2, 0],
                x: 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 8,
                rotate: { duration: 0.6, delay: 0.3 },
              }}
            >
              <EmojiSticker
                src="/vid/smirk-tease.mp4"
                size={56}
                mobileSize={40}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
