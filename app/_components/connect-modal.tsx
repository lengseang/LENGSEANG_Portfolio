'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/app/_components/icon';
import { personalInfo } from '@/app/_data/portfolio';

type ConnectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [activeTab, setActiveTab] = useState<'links' | 'qr'>('links');
  const [copied, setCopied] = useState(false);

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

  const linkItems = [
    {
      title: 'LinkedIn',
      handle: 'khem-seangleng',
      href: personalInfo.linkedIn,
      icon: 'simple-icons:linkedin',
      color: 'hover:border-blue-500/40 hover:bg-blue-500/10 text-blue-400',
    },
    {
      title: 'GitHub',
      handle: 'github.com/lengseang',
      href: personalInfo.github,
      icon: 'simple-icons:github',
      color: 'hover:border-purple-500/40 hover:bg-purple-500/10 text-purple-400',
    },
    {
      title: 'thecoauthor.com',
      badge: 'Live SaaS',
      handle: 'thecoauthor.com',
      href: 'https://www.thecoauthor.com',
      icon: 'solar:compass-bold-duotone',
      color: 'hover:border-amber-500/40 hover:bg-amber-500/10 text-amber-400',
    },
    {
      title: 'Alauna',
      badge: 'AI App',
      handle: 'github.com/lengseang/alauna',
      href: 'https://github.com/lengseang/alauna',
      icon: 'solar:magic-stick-3-bold-duotone',
      color: 'hover:border-purple-500/40 hover:bg-purple-500/10 text-purple-400',
    },
    {
      title: 'Portfolio Website',
      handle: 'lengseang.dev',
      href: '/',
      icon: 'solar:laptop-bold-duotone',
      color: 'hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400',
    },
    {
      title: 'Telegram',
      handle: '@LegendOfLeng',
      href: personalInfo.telegram,
      icon: 'simple-icons:telegram',
      color: 'hover:border-sky-500/40 hover:bg-sky-500/10 text-sky-400',
    },
    {
      title: 'Email',
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20for%20Khem%20Seangleng`,
      icon: 'solar:letter-bold-duotone',
      color: 'hover:border-rose-500/40 hover:bg-rose-500/10 text-rose-400',
    },
    {
      title: 'Direct Call',
      handle: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      icon: 'solar:phone-calling-rounded-bold-duotone',
      color: 'hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-400',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/15 bg-[color:var(--surface)] text-[color:var(--text-strong)] shadow-2xl"
          >
            {/* Header */}
            <div className="relative border-b border-black/[0.08] dark:border-white/10 p-5">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-3.5 top-3.5 flex h-7 w-7 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] dark:border-white/10 dark:bg-white/5 text-[color:var(--text-muted)] transition hover:text-[color:var(--text-strong)]"
              >
                <Icon icon="solar:close-circle-bold" width={16} />
              </button>

              <div className="flex items-center gap-3 pr-8">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-black/[0.08] bg-black/[0.03] dark:border-white/15 dark:bg-white/5 shadow-md">
                  <Image
                    src="/portfolio/khem-cutout.png"
                    alt={personalInfo.name}
                    fill
                    className="object-contain object-top pt-1"
                    sizes="48px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="truncate text-base font-bold font-display text-[color:var(--text-strong)]">
                      {personalInfo.name}
                    </h2>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-[color:var(--accent)] font-medium">{personalInfo.role}</p>
                </div>
              </div>

              {/* Tabs Switcher */}
              <div className="mt-3.5 flex rounded-lg border border-black/[0.08] bg-black/[0.04] dark:border-white/10 dark:bg-black/30 p-1 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab('links')}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 transition-all duration-200 ${
                    activeTab === 'links'
                      ? 'bg-white shadow-sm text-slate-900 dark:bg-white/10 dark:text-[color:var(--text-strong)]'
                      : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-soft)]'
                  }`}
                >
                  <Icon icon="solar:link-circle-bold-duotone" width={14} />
                  Social Links
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('qr')}
                  className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 transition-all duration-200 ${
                    activeTab === 'qr'
                      ? 'bg-white shadow-sm text-slate-900 dark:bg-white/10 dark:text-[color:var(--text-strong)]'
                      : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-soft)]'
                  }`}
                >
                  <Icon icon="solar:qr-code-bold-duotone" width={14} />
                  CV QR Code
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 sm:p-5 space-y-3">
              {activeTab === 'links' ? (
                <>
                  <div className="space-y-2">
                    {linkItems.map((item) => {
                      const isExternal =
                        item.href.startsWith('http') || item.href.startsWith('mailto:') || item.href.startsWith('tel:');
                      const LinkComponent = isExternal ? 'a' : Link;

                      return (
                        <LinkComponent
                          key={item.title}
                          href={item.href}
                          target={
                            isExternal && !item.href.startsWith('mailto:') && !item.href.startsWith('tel:')
                              ? '_blank'
                              : undefined
                          }
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            if (!isExternal) onClose();
                          }}
                          className={`group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] p-2.5 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] ${item.color}`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:scale-105 transition-transform">
                              <Icon icon={item.icon} width={17} />
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-[color:var(--text-strong)] truncate">
                                {item.title}
                              </p>
                              <p className="truncate font-mono text-[10px] text-[color:var(--text-muted)]">
                                {item.handle}
                              </p>
                            </div>
                          </div>
                          <Icon
                            icon="solar:arrow-right-up-linear"
                            width={14}
                            className="text-[color:var(--text-muted)] group-hover:text-[color:var(--text-strong)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </LinkComponent>
                      );
                    })}
                  </div>

                  {/* Dual Action Bottom Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/8">
                    <button
                      type="button"
                      onClick={downloadVCard}
                      className="button-secondary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
                    >
                      <Icon icon="solar:user-plus-bold-duotone" width={14} />
                      Save Contact
                    </button>
                    <a
                      href="/Khem_Seangleng_CV.pdf"
                      download="Khem_Seangleng_CV.pdf"
                      className="button-primary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
                    >
                      <Icon icon="solar:document-text-bold-duotone" width={14} />
                      Download CV
                    </a>
                  </div>
                </>
              ) : (
                /* QR Code Tab */
                <div className="flex flex-col items-center text-center space-y-3 py-1">
                  <div className="relative rounded-xl bg-white p-2.5 shadow-xl border-2 border-white/90">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={qrImageUrl}
                      alt="QR Code to Khem Seangleng Links"
                      width={180}
                      height={180}
                      className="rounded-lg aspect-square"
                    />
                  </div>

                  <p className="text-xs text-[color:var(--text-muted)] max-w-xs">
                    Print this QR code on your CV to give recruiters instant access to all your profiles.
                  </p>

                  <div className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-xs">
                    <span className="truncate font-mono text-[11px] text-[color:var(--text-soft)] pl-2">{qrUrl}</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[11px] font-medium text-[color:var(--text-strong)] hover:bg-white/20 transition-colors"
                    >
                      <Icon icon={copied ? 'solar:check-circle-bold' : 'solar:copy-bold-duotone'} width={13} />
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="grid w-full grid-cols-2 gap-2">
                    <a
                      href={qrImageUrl}
                      download="Khem_Seangleng_CV_QR.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
                    >
                      <Icon icon="solar:download-bold-duotone" width={14} />
                      Save QR Image
                    </a>
                    <Link
                      href="/links"
                      onClick={onClose}
                      className="button-primary flex items-center justify-center gap-1.5 py-2 text-xs font-semibold"
                    >
                      <Icon icon="solar:arrow-right-up-linear" width={14} />
                      Open /links
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
