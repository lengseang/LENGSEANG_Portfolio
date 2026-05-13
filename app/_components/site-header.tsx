"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Icon } from "@/app/_components/icon";
import type { NavItem } from "@/app/_data/portfolio";

type SiteHeaderProps = {
  items: NavItem[];
  ctaHref: string;
};

export function SiteHeader({ items, ctaHref }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-soft)]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-lg font-semibold text-[color:var(--text-strong)]">
            LS
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
              Portfolio
            </p>
            <p className="text-base font-semibold text-[color:var(--text-strong)]">
              Khem Seangleng
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--text-soft)] transition hover:text-[color:var(--text-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href={ctaHref} className="button-primary">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[color:var(--text-strong)] transition hover:border-white/20 md:hidden"
        >
          <Icon icon={isOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} width={22} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:px-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm font-medium text-[color:var(--text-soft)] transition hover:text-[color:var(--text-strong)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                onClick={() => setIsOpen(false)}
                className="button-primary mt-2 justify-center"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
