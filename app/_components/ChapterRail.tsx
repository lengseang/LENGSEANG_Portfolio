'use client';

import { useEffect, useState } from 'react';

import type { NavItem } from '@/app/_data/portfolio';

// Scroll position shared by the top nav (active link, progress bar) and the side rail.
// A section is current once its top passes 45% of the screen.
export function useScrollSpy(items: NavItem[]) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const ids = items.map((item) => item.href.split('#')[1]);
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.45;
      let current = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);
  return { active, progress };
}

// Side rail, wide screens only: scroll progress and one dot per section, no text (navigation lives in the top nav).
export function ChapterRail({ items }: { items: NavItem[] }) {
  const { active, progress } = useScrollSpy(items);
  return (
    <nav
      aria-label="Section progress"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block 2xl:right-10"
    >
      <div className="relative flex flex-col items-center gap-5 py-1">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[color:var(--border-soft)]" />
        <span
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-[color:var(--gold)] transition-[height] duration-300"
          style={{ height: `${progress * 100}%` }}
        />
        {items.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={i === active ? 'true' : undefined}
            title={item.label}
            className={`relative z-10 block rounded-full border transition-all duration-300 ${
              i === active
                ? 'h-3.5 w-3.5 border-[color:var(--gold)] bg-[color:var(--gold)] shadow-[0_0_14px_var(--gold)]'
                : 'h-2.5 w-2.5 border-[color:var(--text-muted)] bg-[color:var(--background)] hover:border-[color:var(--text-strong)]'
            }`}
          >
            <span className="sr-only">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
