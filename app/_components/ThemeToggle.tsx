'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STARS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 60,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 3,
  duration: 1.5 + Math.random() * 2,
}));

const SPARKLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 60,
  size: 1.5 + Math.random() * 2.5,
  delay: Math.random() * 2,
}));

function getTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    setTheme(getTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggle = () => {
    setBurst((n) => n + 1);
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) return <div className="w-[72px] h-[40px]" />;

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-[72px] h-[40px] rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-shadow duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(145deg, #0a0a1a 0%, #141428 35%, #1a1040 70%, #0d0d2b 100%)'
          : 'linear-gradient(145deg, #ffd6a5 0%, #fdba74 35%, #fbbf24 70%, #fcd34d 100%)',
        boxShadow: isDark
          ? 'inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -1px 2px rgba(0,0,0,0.4), 0 4px 12px rgba(100,50,200,0.15)'
          : 'inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.06), 0 4px 12px rgba(251,191,36,0.2)',
      }}
    >
      {/* Stars / Sparkles layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          {isDark
            ? STARS.map((star) => (
                <motion.div
                  key={`star-${star.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.9, 0.3, 0.8, 0],
                    scale: [0, 1, 0.6, 1, 0],
                    x: [`${star.x}%`, `${star.x + 4}%`],
                    y: [`${star.y}%`, `${star.y - 3}%`],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: 'easeInOut',
                  }}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: star.size,
                    height: star.size,
                    left: 0,
                    top: 0,
                    filter: 'blur(0.3px)',
                  }}
                />
              ))
            : SPARKLES.map((s) => (
                <motion.div
                  key={`sparkle-${s.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0.5, 1, 0],
                    scale: [0, 1, 0.7, 1, 0],
                    rotate: [0, 45, 90],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 1.5 + s.delay * 0.5,
                    repeat: Infinity,
                    delay: s.delay,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                >
                  <svg
                    aria-hidden="true"
                    width={s.size * 3}
                    height={s.size * 3}
                    viewBox="0 0 10 10"
                    fill="#fffbeb"
                    opacity={0.8}
                  >
                    <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" />
                  </svg>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>

      {/* Knob */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.8,
        }}
        className="absolute top-[5px] w-[30px] h-[30px] rounded-full z-10 flex items-center justify-center"
        style={{
          left: isDark ? '5px' : '37px',
          background: isDark
            ? 'linear-gradient(145deg, #2a2a50, #1a1a38)'
            : 'linear-gradient(145deg, #fff8e7, #ffffff)',
          boxShadow: isDark
            ? '0 2px 6px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.3)'
            : '0 2px 6px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.04)',
        }}
      >
        {/* Knob inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark ? 'inset 0 0 8px rgba(160, 130, 255, 0.15)' : 'inset 0 0 8px rgba(255, 200, 50, 0.2)',
          }}
        />

        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ rotate: -120, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 120, scale: 0 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <motion.path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="#a78bfa"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ stroke: '#a78bfa' }}
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ rotate: 120, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -120, scale: 0 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <motion.circle cx="12" cy="12" r="5" stroke="#d97706" strokeWidth="1.8" animate={{ stroke: '#d97706' }} />
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="#d97706"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </motion.g>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Burst particles on toggle — counter guarantees unique keys */}
      <AnimatePresence>
        {burst > 0 &&
          Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`burst-${burst}-${i}`}
              initial={{
                opacity: 1,
                scale: 1,
                x: isDark ? 20 : 52,
                y: 20,
              }}
              animate={{
                opacity: 0,
                scale: 0,
                x: isDark ? 20 + Math.cos((i / 6) * Math.PI * 2) * 40 : 52 + Math.cos((i / 6) * Math.PI * 2) * 40,
                y: 20 + Math.sin((i / 6) * Math.PI * 2) * 40,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, #c4b5fd, #818cf8)'
                  : 'radial-gradient(circle, #fde68a, #f59e0b)',
                filter: 'blur(0.5px)',
              }}
            />
          ))}
      </AnimatePresence>
    </button>
  );
}
