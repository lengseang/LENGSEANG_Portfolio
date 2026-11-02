'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useScrollSpy } from '@/app/_components/ChapterRail';
import { ConnectModal } from '@/app/_components/connect-modal';
import { Icon } from '@/app/_components/icon';
import { ThemeToggle } from '@/app/_components/ThemeToggle';
import type { NavItem } from '@/app/_data/portfolio';

// Full-width glass nav: identity left, sections centre (wide screens), theme + Connect + CV right, scroll progress
// along the bottom edge. Phones: identity, theme and a menu button.
export function SiteHeader({ items }: { items: NavItem[] }) {
  const { active, progress } = useScrollSpy(items);
  const [open, setOpen] = useState(false);
  const [connect, setConnect] = useState(false);

  return (
    <>
      <header
        className={`glass fixed inset-x-0 top-0 z-50 rounded-none border-x-0 border-t-0 ${open ? 'bg-[color:var(--background)]' : ''}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <Link href="/#home" className="group flex shrink-0 items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-[color:var(--border-soft)]">
              <Image
                src="/portfolio/khem-profile.jpg"
                alt=""
                fill
                priority
                className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                sizes="40px"
              />
            </span>
            <span className="font-display text-xl leading-none text-[color:var(--text-strong)]">Khem Seangleng</span>
          </Link>

          <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
            {items.slice(1).map((item, i) => {
              const on = i + 1 === active;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={on ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    on
                      ? 'text-[color:var(--text-strong)]'
                      : 'text-[color:var(--text-soft)] hover:text-[color:var(--text-strong)]'
                  }`}
                >
                  {item.label}
                  {on && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[color:var(--gold)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            {/* wrappers carry the breakpoints: .button-* sets display itself */}
            <span className="hidden xl:block">
              <button
                type="button"
                onClick={() => setConnect(true)}
                className="button-secondary items-center gap-2 text-xs"
              >
                <Icon icon="solar:qr-code-bold-duotone" width={16} />
                Connect & QR
              </button>
            </span>
            <span className="hidden sm:block">
              <a href="/Khem_Seangleng_CV.pdf" download className="button-primary text-xs">
                Download CV
              </a>
            </span>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--text-strong)] hover:bg-[color:var(--accent-soft)] lg:hidden"
            >
              <Icon icon={open ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} width={22} />
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <span
          className="absolute bottom-0 left-0 h-0.5 bg-[color:var(--gold)] transition-[width] duration-200"
          style={{ width: `${progress * 100}%` }}
        />

        {/* phones and tablets: section menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-[color:var(--border-soft)] px-4 pb-4 pt-2 lg:hidden"
            >
              {items.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium ${
                    i === active
                      ? 'bg-[color:var(--accent-soft)] text-[color:var(--text-strong)]'
                      : 'text-[color:var(--text-soft)]'
                  }`}
                >
                  {item.label}
                  {i === active && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setConnect(true);
                  }}
                  className="button-secondary justify-center text-xs"
                >
                  <Icon icon="solar:qr-code-bold-duotone" width={16} />
                  Connect & QR
                </button>
                <a href="/Khem_Seangleng_CV.pdf" download className="button-primary justify-center text-xs">
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* spacer so the fixed nav doesn't cover top content */}
      <div className="h-16 w-full lg:h-[72px]" />

      <ConnectModal isOpen={connect} onClose={() => setConnect(false)} />
    </>
  );
}
