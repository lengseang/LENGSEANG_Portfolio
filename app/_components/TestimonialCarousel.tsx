'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { testimonials } from '@/app/_data/portfolio';
import { Icon } from './icon';
import { MotionItem, MotionReveal, MotionStagger } from './motion';
import { EmojiSticker } from './stickers/Sticker';

export const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
      <MotionReveal className="mb-10 space-y-3">
        <p className="eyebrow">Testimonials</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">What people say</h2>
      </MotionReveal>

      <MotionStagger className="space-y-6">
        <MotionItem
          className="panel p-8 lg:p-10 space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-1 text-[color:var(--accent)]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <motion.div
              className="ml-2"
              key={activeIndex}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{
                scale: [1, 1.25, 0.9, 1.15, 1],
                opacity: 1,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.18, 1, 1.12, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <EmojiSticker src="/vid/heart-glow.mp4" size={44} mobileSize={32} />
              </motion.div>
            </motion.div>
          </div>

          <blockquote className="text-lg leading-relaxed text-[color:var(--text-soft)] italic">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 pt-4 border-t border-white/8">
            {active.avatar && (
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[color:var(--surface)] border border-white/10">
                {/* biome-ignore lint/performance/noImgElement: need onError fallback for SVG avatars */}
                <img
                  src={active.avatar}
                  alt={active.author}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <div>
              <p className="font-medium text-[color:var(--text-strong)]">{active.author}</p>
              <p className="text-sm text-[color:var(--text-muted)]">
                {active.role}
                {active.organization ? `, ${active.organization}` : ''}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.author}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-[color:var(--text-strong)] w-6' : 'bg-white/[0.15] hover:bg-white/[0.25]'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="p-2 rounded-full bg-white/[0.06] text-[color:var(--text-soft)] hover:bg-white/[0.12] transition-colors"
              >
                <Icon icon="solar:alt-arrow-left-bold-duotone" width={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="p-2 rounded-full bg-white/[0.06] text-[color:var(--text-soft)] hover:bg-white/[0.12] transition-colors"
              >
                <Icon icon="solar:alt-arrow-right-bold-duotone" width={18} />
              </button>
            </div>
          </div>
        </MotionItem>
      </MotionStagger>
    </section>
  );
};
