'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ConnectModal } from '@/app/_components/connect-modal';
import { Icon } from '@/app/_components/icon';
import { ThemeToggle } from '@/app/_components/ThemeToggle';
import type { NavItem } from '@/app/_data/portfolio';

type SiteHeaderProps = {
  items: NavItem[];
  ctaHref: string;
};

export function SiteHeader({ items, ctaHref }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-100%', opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 border-b border-black/[0.06] bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65 dark:border-white/[0.08] dark:bg-black/40 dark:supports-[backdrop-filter]:bg-black/30 transition-colors duration-300 shadow-sm dark:shadow-none"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Logo & Identity */}
          <Link href="/#home" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-black/[0.08] bg-black/[0.03] dark:border-white/15 dark:bg-white/5 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/portfolio/khem-cutout.png"
                alt="Khem Seangleng"
                fill
                priority
                className="object-contain object-top pt-0.5"
                sizes="36px"
              />
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[color:var(--text-muted)] leading-none">
                Portfolio
              </p>
              <p className="text-sm font-semibold text-[color:var(--text-strong)] leading-tight pt-0.5">
                Khem Seangleng
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-[color:var(--text-soft)] transition-colors hover:text-[color:var(--text-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Controls (Sleek Glass Buttons) */}
          <div className="hidden items-center gap-2.5 md:flex">
            <button
              type="button"
              onClick={() => setIsConnectOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-black/[0.08] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--text-soft)] transition hover:border-black/20 hover:bg-white hover:text-[color:var(--text-strong)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/25 dark:hover:bg-white/[0.08] shadow-sm dark:shadow-none"
              title="Social Media & CV QR Code"
            >
              <Icon icon="solar:link-circle-bold-duotone" width={15} className="text-[color:var(--accent)]" />
              <span>Connect / QR</span>
            </button>

            <ThemeToggle />

            <Link
              href={ctaHref}
              className="rounded-lg bg-[color:var(--text-strong)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(--background)] transition hover:opacity-90 shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.08] bg-white/70 text-[color:var(--text-strong)] dark:border-white/10 dark:bg-white/[0.04] transition hover:border-black/20 dark:hover:border-white/20"
            >
              <Icon icon={isOpen ? 'solar:close-circle-bold' : 'solar:hamburger-menu-bold'} width={18} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-black/[0.08] bg-white/95 dark:border-white/[0.08] dark:bg-black/90 backdrop-blur-2xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs font-medium text-[color:var(--text-soft)] transition hover:border-white/15 hover:text-[color:var(--text-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsConnectOpen(true);
                  }}
                  className="mt-1 flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 text-xs font-semibold text-emerald-400"
                >
                  <span className="flex items-center gap-2">
                    <Icon icon="solar:link-circle-bold-duotone" width={16} />
                    Social Media & CV QR Hub
                  </span>
                  <Icon icon="solar:arrow-right-up-linear" width={14} />
                </button>

                <Link
                  href={ctaHref}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-[color:var(--text-strong)] py-2.5 text-center text-xs font-semibold text-[color:var(--background)] transition hover:opacity-90"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacing spacer so fixed header doesn't cover top content */}
      <div className="h-14 w-full" />

      {/* Connect & QR Popup Modal */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </>
  );
}
