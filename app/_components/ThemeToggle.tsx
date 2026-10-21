'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from './icon';

type Theme = 'dark' | 'light';

function getTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

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
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) {
    return <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[color:var(--text-soft)] backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-[color:var(--text-strong)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Icon icon="solar:moon-stars-bold-duotone" width={16} className="text-sky-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Icon icon="solar:sun-2-bold-duotone" width={16} className="text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
