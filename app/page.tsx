'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { ChapterRail } from '@/app/_components/ChapterRail';
import { ConnectModal } from '@/app/_components/connect-modal';
import { ContactForm } from '@/app/_components/contact-form';
import { ExperienceSection } from '@/app/_components/ExperienceSection';
import { Icon } from '@/app/_components/icon';
import { BlurTextReveal, Magnetic, MotionItem, MotionReveal, MotionStagger } from '@/app/_components/motion';
import { ProjectsSection } from '@/app/_components/ProjectsSection';
import { ScrollFilm } from '@/app/_components/ScrollFilm';
import { SkillsRadar } from '@/app/_components/SkillsRadar';
import { SiteHeader } from '@/app/_components/site-header';

import { certifications, education, navItems, personalInfo, socialLinks } from '@/app/_data/portfolio';

export default function Home() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[color:var(--text-strong)]">
      <ScrollFilm />
      <SiteHeader items={navItems} />
      <ChapterRail items={navItems} />
      <main>
        {/* ===== HERO: the film shows his face; only the name sits at the bottom ===== */}
        <section
          id="home"
          className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden lg:min-h-[calc(100vh-72px)]"
        >
          {/* soft fade from the bottom so the name always reads, whatever frame is behind it */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, color-mix(in srgb, var(--background) 80%, transparent) 0%, transparent 45%)',
            }}
          />
          <div className="relative mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-5 pb-10 sm:px-6 lg:px-8 lg:pb-14">
            <h1 className="font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
              <BlurTextReveal text="Khem" />
              <br />
              <BlurTextReveal text="Seangleng" delay={0.1} />
            </h1>
            <a
              href="/#about"
              className="mb-2 hidden shrink-0 flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[color:var(--text-soft)] hover:text-[color:var(--text-strong)] sm:flex"
            >
              Scroll
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon icon="solar:alt-arrow-down-linear" width={20} />
              </motion.span>
            </a>
          </div>
        </section>
        {/* ===== SYSTEMS & ARCHITECTURE TENETS (opens with the intro band) ===== */}
        <section id="about" className="border-b border-black/[0.06] dark:border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            {/* intro band: role, bio, actions and proof */}
            <MotionReveal className="glass mb-16 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:p-10">
              <div className="space-y-4">
                <p className="eyebrow">Full-Stack Systems Engineer &middot; Phnom Penh</p>
                <p className="font-display text-3xl leading-tight text-[color:var(--text-strong)] sm:text-4xl">
                  {personalInfo.role} &mdash; Clean Architecture &amp; Granular RBAC
                </p>
                <p className="text-base leading-relaxed text-[color:var(--text-soft)]">{personalInfo.shortBio}</p>
                <p className="text-sm text-[color:var(--text-muted)]">
                  Available for select roles &middot; RUPP Computer Science (4th Year)
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Magnetic strength={0.35}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <Link href="/#projects" className="button-primary">
                        View my work
                      </Link>
                    </motion.div>
                  </Magnetic>

                  <Magnetic strength={0.35}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <a
                        href="/Khem_Seangleng_CV.pdf"
                        download="Khem_Seangleng_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary inline-flex items-center justify-center gap-2"
                      >
                        <Icon icon="solar:document-text-bold-duotone" width={18} />
                        Download CV
                      </a>
                    </motion.div>
                  </Magnetic>

                  <Magnetic strength={0.35}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <button
                        type="button"
                        onClick={() => setIsConnectOpen(true)}
                        className="button-secondary inline-flex items-center justify-center gap-2 cursor-pointer"
                        title="Open Social Links & QR"
                      >
                        <Icon icon="solar:link-circle-bold-duotone" width={18} />
                        Connect & QR
                      </button>
                    </motion.div>
                  </Magnetic>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[color:var(--border-soft)] pt-6">
                  {[
                    { value: '05+', label: 'Production Systems' },
                    { value: '06', label: 'RBAC Roles Architected' },
                    { value: '100%', label: 'Status Tracking Sync' },
                    { value: '<100ms', label: 'Editor Draft Latency' },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-3xl font-bold text-[color:var(--text-strong)]">{metric.value}</p>
                      <p className="mt-1 text-xs text-[color:var(--text-muted)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
            <MotionReveal className="space-y-12">
              <div className="glass max-w-3xl space-y-3 p-6 sm:p-8">
                <p className="eyebrow">Architecture &amp; Core Systems</p>
                <BlurTextReveal
                  as="h2"
                  text="Engineered from domain schema to high-speed client interface."
                  className="font-display text-4xl leading-tight sm:text-5xl"
                />
                <p className="text-base sm:text-lg leading-relaxed text-[color:var(--text-soft)]">
                  Architectural principles focused on authorization hierarchies, low-latency client interaction, and
                  deterministic logistics workflows.
                </p>
              </div>

              {/* Architectural Pillars (Clean Editorial - Zero AI Bento Clutter) */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Pillar 01 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="panel p-6 sm:p-7 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent)] tracking-wider">
                      01 / SECURITY
                    </span>
                    <h3 className="text-xl font-bold font-display text-[color:var(--text-strong)]">
                      Granular Multi-Tier RBAC
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      Structured authorization architectures with permission hierarchies and role inheritance across 6
                      distinct user tiers at Prestige Alliance. Built JWT token guards, session revocation, and dynamic
                      user routing.
                    </p>
                  </div>
                  <p className="pt-3 border-t border-black/[0.05] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]">
                    NestJS &middot; PostgreSQL &middot; JWT &middot; Guard Middleware
                  </p>
                </motion.div>

                {/* Pillar 02 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="panel p-6 sm:p-7 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent)] tracking-wider">
                      02 / INTERACTION
                    </span>
                    <h3 className="text-xl font-bold font-display text-[color:var(--text-strong)]">
                      Low-Latency Publishing
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      Architected thecoauthor.com digital writing platform with a custom Tiptap rich-text editor,
                      debounced auto-save drafts, markdown transforms, and sub-100ms editing latency.
                    </p>
                  </div>
                  <p className="pt-3 border-t border-black/[0.05] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]">
                    Next.js 16 &middot; Tiptap &middot; Auto-Save &middot; Turbopack
                  </p>
                </motion.div>

                {/* Pillar 03 */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="panel p-6 sm:p-7 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[color:var(--accent)] tracking-wider">
                      03 / WORKFLOWS
                    </span>
                    <h3 className="text-xl font-bold font-display text-[color:var(--text-strong)]">
                      Logistics State Machines
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--text-soft)]">
                      Structured 3-way operational delivery handoffs for BS Express Cambodia (Branch-to-Branch,
                      Branch-to-Customer, Customer-to-Branch) with real-time push notification triggers and instant QR
                      verification.
                    </p>
                  </div>
                  <p className="pt-3 border-t border-black/[0.05] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]">
                    State Machines &middot; QR Verification &middot; Push Triggers
                  </p>
                </motion.div>
              </div>
            </MotionReveal>
          </div>
        </section>
        {/* ===== EXPERIENCE ===== */}
        <ExperienceSection />
        {/* ===== PROJECTS ===== */}
        <ProjectsSection />
        {/* ===== TECHNICAL SKILLS & STACK ===== */}
        <SkillsRadar />
        {/* ===== EDUCATION & CERTIFICATIONS ===== */}
        <section id="education" className="border-y border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Education */}
              <MotionReveal className="space-y-8">
                <div className="glass w-fit space-y-3 px-6 py-5">
                  <p className="eyebrow">Education</p>
                  <h2 className="font-display text-3xl leading-none sm:text-4xl">Academic background</h2>
                </div>
                <MotionStagger className="space-y-6">
                  {education.map((item) => (
                    <MotionItem key={item.title}>
                      <motion.div
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                        className="space-y-2 panel p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                          {item.period}
                        </p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-[color:var(--accent)]">{item.organization}</p>
                        <p className="text-sm leading-7 text-[color:var(--text-soft)]">{item.description}</p>
                      </motion.div>
                    </MotionItem>
                  ))}
                </MotionStagger>
              </MotionReveal>

              {/* Certifications */}
              <MotionReveal className="space-y-8">
                <div className="glass w-fit space-y-3 px-6 py-5">
                  <p className="eyebrow">Certifications</p>
                  <h2 className="font-display text-3xl leading-none sm:text-4xl">Continuous learning</h2>
                </div>
                <MotionStagger className="space-y-4">
                  {certifications.slice(0, 6).map((cert) => (
                    <MotionItem key={cert.title}>
                      <motion.a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, x: 2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="block p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-200 group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-base font-medium text-[color:var(--text-strong)] group-hover:text-[color:var(--accent)] transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-[color:var(--text-muted)] mt-1">
                              {cert.issuer} &middot; {cert.year}
                            </p>
                            <p className="text-sm text-[color:var(--text-soft)] mt-1">{cert.focus}</p>
                          </div>
                          <Icon
                            icon="solar:arrow-right-up-linear"
                            width={16}
                            className="text-[color:var(--text-muted)] group-hover:text-[color:var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1"
                          />
                        </div>
                      </motion.a>
                    </MotionItem>
                  ))}
                </MotionStagger>
              </MotionReveal>
            </div>
          </div>
        </section>
        {/* ===== CONTACT ===== */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <MotionReveal className="glass space-y-6 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="eyebrow">Contact & Collaboration</p>
                <h2 className="font-display text-4xl leading-none sm:text-5xl">Let&apos;s build something solid.</h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[color:var(--text-soft)]">{personalInfo.availability}</p>

              <div className="space-y-4">
                {socialLinks.map((item) => {
                  const displayValue =
                    item.label === 'Email'
                      ? personalInfo.email
                      : item.label === 'Telegram'
                        ? '@LegendOfLeng'
                        : item.label === 'LinkedIn'
                          ? 'LinkedIn Profile'
                          : item.label === 'GitHub'
                            ? 'github.com/lengseang'
                            : personalInfo.phone;
                  return (
                    <a key={item.label} href={item.href} className="contact-link group">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[color:var(--accent)] transition-colors group-hover:bg-white/[0.08]">
                        <Icon icon={item.icon} width={18} />
                      </span>
                      <span className="text-sm text-[color:var(--text-soft)]">{displayValue}</span>
                    </a>
                  );
                })}

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="/Khem_Seangleng_CV.pdf"
                    download="Khem_Seangleng_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary inline-flex items-center gap-2 text-xs"
                  >
                    <Icon icon="solar:document-text-bold-duotone" width={16} />
                    Download Full Resume / CV (PDF)
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsConnectOpen(true)}
                    className="button-secondary inline-flex items-center gap-2 text-xs"
                  >
                    <Icon icon="solar:qr-code-bold-duotone" width={16} />
                    CV QR Code
                  </button>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal>
              <ContactForm email={personalInfo.email} />
            </MotionReveal>
          </div>
        </section>
      </main>
      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <p className="text-xs text-[color:var(--text-muted)]">
              &copy; {new Date().getFullYear()} Khem Seangleng. Built with Next.js.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[color:var(--text-muted)] hover:text-[color:var(--text-strong)] transition-colors"
                  aria-label={item.label}
                >
                  <Icon icon={item.icon} width={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Quick Connect Popup Modal */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </div>
  );
}
