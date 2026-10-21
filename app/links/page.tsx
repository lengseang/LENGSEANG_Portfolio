'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/app/_components/icon';
import { ThemeToggle } from '@/app/_components/ThemeToggle';
import { personalInfo } from '@/app/_data/portfolio';

export default function LinksPage() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const qrUrl = 'https://www.lengseang.dev/links';
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(qrUrl)}&color=000000&bgcolor=ffffff&margin=12`;

  function handleCopy() {
    navigator.clipboard.writeText(qrUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadVCard() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Khem;Seangleng;;;',
      'FN:Khem Seangleng',
      'TITLE:Full-Stack Developer',
      'ORG:Software Engineering',
      `TEL;TYPE=CELL,VOICE:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      `EMAIL;TYPE=PREF,INTERNET:${personalInfo.email}`,
      `URL:${personalInfo.website}`,
      `URL;TYPE=LinkedIn:${personalInfo.linkedIn}`,
      `URL;TYPE=GitHub:${personalInfo.github}`,
      `URL;TYPE=Telegram:${personalInfo.telegram}`,
      'NOTE:Full-Stack Developer proficient in React, Vue, Next.js, and NestJS.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Khem_Seangleng.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const primaryLinks = [
    {
      label: 'LinkedIn',
      value: 'khem-seangleng',
      href: personalInfo.linkedIn,
      icon: 'simple-icons:linkedin',
      accent: 'hover:border-blue-500/40 hover:bg-blue-500/10 text-blue-400',
    },
    {
      label: 'GitHub',
      value: 'github.com/lengseang',
      href: personalInfo.github,
      icon: 'simple-icons:github',
      accent: 'hover:border-purple-500/40 hover:bg-purple-500/10 text-purple-400',
    },
    {
      label: 'thecoauthor.com',
      badge: 'Featured App',
      value: 'Live Article Platform',
      href: 'https://www.thecoauthor.com',
      icon: 'solar:compass-bold-duotone',
      accent: 'hover:border-amber-500/40 hover:bg-amber-500/10 text-amber-400',
    },
    {
      label: 'Alauna',
      badge: 'AI Companion',
      value: 'AI Roleplay App & Local LLM',
      href: 'https://github.com/lengseang/alauna',
      icon: 'solar:magic-stick-3-bold-duotone',
      accent: 'hover:border-purple-500/40 hover:bg-purple-500/10 text-purple-400',
    },
    {
      label: 'Portfolio Website',
      value: 'www.lengseang.dev',
      href: '/',
      icon: 'solar:laptop-bold-duotone',
      accent: 'hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400',
    },
    {
      label: 'Telegram',
      value: '@LegendOfLeng',
      href: personalInfo.telegram,
      icon: 'simple-icons:telegram',
      accent: 'hover:border-sky-500/40 hover:bg-sky-500/10 text-sky-400',
    },
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20for%20Khem%20Seangleng`,
      icon: 'solar:letter-bold-duotone',
      accent: 'hover:border-rose-500/40 hover:bg-rose-500/10 text-rose-400',
    },
    {
      label: 'Phone Call',
      value: '+855-99-602-647',
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      icon: 'solar:phone-calling-rounded-bold-duotone',
      accent: 'hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)] flex flex-col justify-between">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-white/75 backdrop-blur-xl dark:border-white/[0.08] dark:bg-black/40 transition-colors">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-2.5">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-medium text-[color:var(--text-soft)] hover:text-[color:var(--text-strong)] transition-colors group"
          >
            <Icon
              icon="solar:arrow-left-linear"
              width={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            <span>Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowQR((prev) => !prev)}
              className="flex items-center gap-1 rounded-lg border border-black/[0.08] bg-white/70 px-2.5 py-1 text-xs font-medium text-[color:var(--text-soft)] hover:border-black/20 hover:text-[color:var(--text-strong)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none"
            >
              <Icon icon="solar:qr-code-bold-duotone" width={14} className="text-[color:var(--accent)]" />
              <span>{showQR ? 'Hide QR' : 'CV QR'}</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-md px-4 py-6 flex-1 space-y-4">
        {/* Profile Card */}
        <section className="panel p-5 text-center space-y-3">
          <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] dark:border-white/15 dark:bg-white/5 shadow-md">
            <Image
              src="/portfolio/khem-cutout.png"
              alt={personalInfo.name}
              fill
              priority
              className="object-contain object-top pt-1"
              sizes="80px"
            />
          </div>

          <div className="space-y-1.5">
            <h1 className="font-display text-2xl font-bold tracking-tight text-[color:var(--text-strong)]">
              {personalInfo.name}
            </h1>
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-[color:var(--accent)]">{personalInfo.role}</span>
              <span className="text-[color:var(--text-muted)]">&middot;</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-emerald-600/20 bg-emerald-500/10 text-[11px] font-mono text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
            <p className="text-[11px] text-[color:var(--text-muted)]">Phnom Penh &middot; RUPP Computer Science</p>
          </div>

          {/* Quick Dual Actions */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/8">
            <button
              type="button"
              onClick={downloadVCard}
              className="button-secondary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
            >
              <Icon icon="solar:user-plus-bold-duotone" width={15} />
              Save Contact
            </button>
            <a
              href="/Khem_Seangleng_CV.pdf"
              download="Khem_Seangleng_CV.pdf"
              className="button-primary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
            >
              <Icon icon="solar:document-text-bold-duotone" width={15} />
              Download CV
            </a>
          </div>
        </section>

        {/* QR Code Card (Smooth Accordion) */}
        <AnimatePresence>
          {showQR && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="panel p-5 text-center space-y-3.5 border-emerald-500/30 bg-emerald-500/[0.03]">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-[color:var(--text-strong)]">Scan to Open Direct Links</p>
                  <p className="text-[11px] text-[color:var(--text-muted)]">
                    Download and print on your CV document for instant recruiter access.
                  </p>
                </div>

                <div className="relative inline-block rounded-xl bg-white p-2.5 shadow-xl border-2 border-white/90">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrImageUrl}
                    alt="QR Code to Khem Seangleng Links"
                    width={180}
                    height={180}
                    className="rounded-lg aspect-square mx-auto"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-1.5 text-xs">
                  <span className="truncate font-mono text-[11px] text-[color:var(--text-soft)] pl-2">{qrUrl}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[11px] font-medium text-[color:var(--text-strong)] hover:bg-white/20 transition-colors"
                  >
                    <Icon icon={copied ? 'solar:check-circle-bold' : 'solar:copy-bold-duotone'} width={13} />
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <a
                  href={qrImageUrl}
                  download="Khem_Seangleng_CV_QR.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold"
                >
                  <Icon icon="solar:download-bold-duotone" width={15} />
                  Save QR Image (PNG)
                </a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Clean, High-Contrast Link Stack */}
        <section className="space-y-2">
          {primaryLinks.map((link) => {
            const isExternal =
              link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:');
            const Component = isExternal ? 'a' : Link;

            return (
              <Component
                key={link.label}
                href={link.href}
                target={
                  isExternal && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:') ? '_blank' : undefined
                }
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5 ${link.accent}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[color:var(--text-strong)] group-hover:scale-105 transition-transform">
                    <Icon icon={link.icon} width={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[color:var(--text-strong)] truncate">{link.label}</p>
                      {link.badge && (
                        <span className="rounded-full bg-amber-500/15 border border-amber-500/25 px-2 py-0.2 text-[10px] text-amber-300 font-mono">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-mono text-[color:var(--text-muted)] truncate">{link.value}</p>
                  </div>
                </div>

                <Icon
                  icon="solar:arrow-right-up-linear"
                  width={16}
                  className="text-[color:var(--text-muted)] flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--text-strong)]"
                />
              </Component>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-4 text-center text-[11px] text-[color:var(--text-muted)]">
        <p>
          &copy; {new Date().getFullYear()} Khem Seangleng &middot;{' '}
          <Link href="/" className="hover:text-[color:var(--accent)] underline">
            www.lengseang.dev
          </Link>
        </p>
      </footer>
    </div>
  );
}
