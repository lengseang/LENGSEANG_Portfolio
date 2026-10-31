'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ConnectModal } from '@/app/_components/connect-modal';
import { ContactForm } from '@/app/_components/contact-form';
import { ExperienceSection } from '@/app/_components/ExperienceSection';
import { Icon } from '@/app/_components/icon';
import { BlurTextReveal, Magnetic, MotionItem, MotionReveal, MotionStagger } from '@/app/_components/motion';
import { ProjectsSection } from '@/app/_components/ProjectsSection';
import { SkillsRadar } from '@/app/_components/SkillsRadar';
import { SiteHeader } from '@/app/_components/site-header';

import { certifications, education, navItems, personalInfo, socialLinks } from '@/app/_data/portfolio';

export default function Home() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <SiteHeader items={navItems} ctaHref="/#contact" />
      <main>
        {/* ===== HERO SECTION (FULL-VIEWPORT ADAPTIVE WITH MOTION) ===== */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-black/[0.06] dark:border-white/8 pt-20 pb-16 lg:py-0"
        >
          {/* Subtle Architectural Grid Texture */}
          <div className="architectural-grid" />

          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] xl:grid-cols-[1.2fr_1fr] lg:items-center">
              {/* LEFT: Cinematic High-Resolution Editorial Portrait Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]">
                  {/* Atmospheric Backlight Studio Halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/15 to-transparent blur-[50px] pointer-events-none"
                  />

                  {/* The Portrait Frame: Pure High-End Editorial Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="relative z-10 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.12] bg-white/60 dark:bg-zinc-950/70 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/70 group"
                  >
                    <div className="relative aspect-[4/4.8] sm:aspect-[4/4.6] w-full overflow-hidden">
                      <Image
                        src="/portfolio/khem-profile.jpg"
                        alt="Khem Seangleng - Full-Stack Systems Engineer"
                        fill
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 490px"
                        className="object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02] select-none"
                      />

                      {/* Pure Photographic Vignette with Zero Clutter */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 dark:opacity-75 pointer-events-none" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                    </div>

                    {/* Minimalist Studio Caption Bar */}
                    <div className="px-5 py-3 border-t border-black/[0.06] dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl flex items-center justify-between">
                      <span className="text-xs font-mono font-medium text-[color:var(--text-strong)]">
                        Khem Seangleng
                      </span>
                      <span className="text-[11px] font-mono text-[color:var(--text-muted)]">
                        Phnom Penh &middot; KH
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT: Editorial Typography, Bio, Actions & Proof Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 lg:pl-2"
              >
                <div className="space-y-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-[color:var(--text-muted)]">
                    Full-Stack Systems Engineer &middot; Production Systems
                  </p>

                  <h1 className="font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl xl:text-7xl">
                    <BlurTextReveal text={personalInfo.name} />
                  </h1>

                  <p className="text-xl sm:text-2xl font-medium text-[color:var(--accent)] tracking-tight">
                    {personalInfo.role} &mdash; Clean Architecture &amp; Granular RBAC
                  </p>

                  <BlurTextReveal
                    as="p"
                    text={personalInfo.shortBio}
                    delay={0.15}
                    className="max-w-xl text-base leading-relaxed text-[color:var(--text-soft)]"
                  />

                  <p className="text-sm text-[color:var(--text-muted)] flex items-center gap-2 pt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                    Available for select roles &middot; RUPP Computer Science (4th Year)
                  </p>
                </div>

                {/* Primary Action Buttons with Superconscious Magnetic Pull & Spring Micro-Interactions */}
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

                {/* Real Proof-of-Work Metrics with Motion Springs */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: '05+', label: 'Production Systems' },
                    { value: '06', label: 'RBAC Roles Architected' },
                    { value: '100%', label: 'Status Tracking Sync' },
                    { value: '<100ms', label: 'Editor Draft Latency' },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + i * 0.08, type: 'spring', stiffness: 350, damping: 24 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="p-2 rounded-xl transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
                    >
                      <p className="text-3xl font-bold text-[color:var(--text-strong)] font-display">{metric.value}</p>
                      <p className="text-xs text-[color:var(--text-muted)] mt-1">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ===== SYSTEMS & ARCHITECTURE TENETS ===== */}
        <section id="about" className="border-b border-black/[0.06] dark:border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <MotionReveal className="space-y-12">
              <div className="max-w-3xl space-y-3">
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
                <div className="space-y-3">
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
                <div className="space-y-3">
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
            <MotionReveal className="space-y-6">
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
