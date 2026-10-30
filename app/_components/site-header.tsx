'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ConnectModal } from '@/app/_components/connect-modal';
import { Icon } from '@/app/_components/icon';
import { Magnetic, RollingText } from '@/app/_components/motion';
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
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white/85 dark:bg-[#09090b]/80 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-2xl shadow-lg shadow-black/[0.04] dark:shadow-2xl dark:shadow-black/60 transition-colors">
          {/* Logo & Identity */}
          <Link href="/#home" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative h-9 w-9 overflow-hidden rounded-xl border border-black/[0.08] bg-black/[0.02] dark:border-white/15 dark:bg-white/5 shadow-xs"
            >
              <Image
                src="/portfolio/khem-profile.jpg"
                alt="Khem Seangleng"
                fill
                priority
                className="object-cover object-top"
                sizes="36px"
              />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-bold font-display text-[color:var(--text-strong)] leading-tight">
                  Khem Seangleng
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--text-muted)] leading-none pt-0.5">
                Full-Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links with Superconscious Dual Rolling Text */}
          <nav className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-[color:var(--text-soft)] transition-colors hover:text-[color:var(--text-strong)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
              >
                <RollingText text={item.label} />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Controls with Superconscious Magnetic Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={() => setIsConnectOpen(true)}
                className="flex items-center gap-1.5 rounded-lg border border-black/[0.08] bg-black/[0.02] px-3 py-1.5 text-xs font-semibold text-[color:var(--text-soft)] transition hover:border-black/20 hover:bg-white hover:text-[color:var(--text-strong)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/25 dark:hover:bg-white/[0.08] shadow-xs cursor-pointer active:scale-95"
                title="Social Media & CV QR Code"
              >
                <Icon icon="solar:link-circle-bold-duotone" width={15} className="text-[color:var(--accent)]" />
                <span>Connect / QR</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.35}>
              <ThemeToggle />
            </Magnetic>

            <Magnetic strength={0.3}>
              <Link
                href={ctaHref}
                className="inline-block rounded-lg bg-[color:var(--text-strong)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(--background)] transition hover:opacity-90 shadow-sm active:scale-95"
              >
                Contact
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.02] text-[color:var(--text-strong)] dark:border-white/10 dark:bg-white/[0.04] transition hover:border-black/20 dark:hover:border-white/20"
            >
              <Icon icon={isOpen ? 'solar:close-circle-bold' : 'solar:hamburger-menu-bold'} width={18} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white/95 dark:border-white/[0.1] dark:bg-[#09090b]/95 backdrop-blur-2xl shadow-xl md:hidden"
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
