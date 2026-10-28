'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ConnectModal } from '@/app/_components/connect-modal';
import { ContactForm } from '@/app/_components/contact-form';
import { ExperienceSection } from '@/app/_components/ExperienceSection';
import { Icon } from '@/app/_components/icon';
import { JourneyTimeline } from '@/app/_components/journey/JourneyTimeline';
import { BlurTextReveal, Magnetic, MotionItem, MotionReveal, MotionStagger } from '@/app/_components/motion';
import { ProjectsSection } from '@/app/_components/ProjectsSection';
import { SkillsRadar } from '@/app/_components/SkillsRadar';
import { SiteHeader } from '@/app/_components/site-header';

import { certifications, education, navItems, personalInfo, services, socialLinks } from '@/app/_data/portfolio';

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
          {/* Subtle Ambient Backlight Floats */}
          <div className="soft-glow soft-glow-left" />
          <div className="soft-glow soft-glow-right" />

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
                  {/* Atmospheric Backlight Glow - Reactive to Theme */}
                  <motion.div
                    animate={{
                      scale: [1, 1.06, 1],
                      opacity: [0.35, 0.6, 0.35],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-sky-500/20 to-amber-500/10 dark:from-emerald-500/15 dark:via-sky-500/10 dark:to-transparent blur-[60px] pointer-events-none"
                  />

                  {/* The Portrait Frame: High-End Glass Editorial Card with Smooth Hover Depth */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="relative z-10 overflow-hidden rounded-[2rem] border border-black/[0.08] dark:border-white/[0.12] bg-white/60 dark:bg-zinc-950/70 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/70 group"
                  >
                    <div className="relative aspect-[4/4.6] sm:aspect-[4/4.5] w-full overflow-hidden">
                      <Image
                        src="/portfolio/khem-profile.jpg"
                        alt="Khem Seangleng - Full-Stack Developer"
                        fill
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 490px"
                        className="object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none"
                      />

                      {/* Elegant Inner Shadow & Bottom Gradient for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 dark:opacity-80 pointer-events-none" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                    </div>

                    {/* Floating Status Pill on Top-Left */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 dark:border-white/15 bg-black/40 dark:bg-black/60 px-3.5 py-1.5 backdrop-blur-xl shadow-lg text-white"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-mono tracking-tight font-semibold">Available for Work</span>
                    </motion.div>

                    {/* Floating Badges on Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-2">
                      <div className="rounded-xl border border-white/20 dark:border-white/15 bg-black/40 dark:bg-black/60 px-3 py-1.5 backdrop-blur-xl text-white">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-white/70">Focus</p>
                        <p className="text-xs font-bold">Full-Stack &amp; Clean Architecture</p>
                      </div>

                      <div className="rounded-xl border border-white/20 dark:border-white/15 bg-black/40 dark:bg-black/60 px-3 py-1.5 backdrop-blur-xl text-white text-right">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Verified</p>
                        <p className="text-xs font-bold">05+ Systems Built</p>
                      </div>
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
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] text-xs font-mono text-[color:var(--text-soft)] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Clean Architecture &middot; RBAC &middot; System Design
                  </div>

                  <h1 className="font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl xl:text-7xl">
                    <BlurTextReveal text={personalInfo.name} />
                  </h1>

                  <div className="flex flex-wrap items-center gap-3 pt-0.5">
                    <p className="text-xl sm:text-2xl font-semibold text-[color:var(--accent)] tracking-tight">
                      {personalInfo.role}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-emerald-600/20 bg-emerald-500/10 text-xs font-mono text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      Available for Opportunities
                    </span>
                  </div>

                  <BlurTextReveal
                    as="p"
                    text={personalInfo.shortBio}
                    delay={0.15}
                    className="max-w-xl text-base leading-relaxed text-[color:var(--text-soft)]"
                  />

                  <p className="text-sm text-[color:var(--text-muted)] flex items-center gap-2 pt-0.5">
                    <Icon icon="solar:map-point-bold-duotone" width={16} className="text-[color:var(--accent)]" />
                    Based in {personalInfo.location} &middot; RUPP Computer Science (4th Year)
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
        {/* ===== ABOUT / ENGINEERING ARCHITECTURE BENTO ===== */}
        <section id="about" className="border-b border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <MotionReveal className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">Architecture & Philosophy</p>
                <BlurTextReveal
                  as="h2"
                  text="Building dependable software from front-end craft to backend domain logic."
                  className="font-display text-4xl leading-tight sm:text-5xl"
                />
                <p className="text-lg leading-8 text-[color:var(--text-soft)]">{personalInfo.longBio}</p>
              </div>

              {/* Asymmetrical Bento Grid */}
              {/* Asymmetrical Bento Grid with Motion Springs */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Bento 1: Large Feature (Spans 2 cols on lg) */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className="panel p-6 sm:p-8 space-y-4 lg:col-span-2 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-[color:var(--accent)] group-hover:scale-105 transition-transform shadow-xs">
                    <Icon icon="solar:shield-check-bold-duotone" width={26} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">
                        Secure Multi-Role RBAC Systems
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                        Enterprise Grade
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">
                      Engineered authorization architectures with granular permission hierarchies and role inheritance
                      across 6 distinct user tiers at Prestige Alliance. Built token guards, session revocation, and
                      dynamic user routing to secure sensitive operational data.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['NestJS', 'JWT & Guard Middleware', 'PostgreSQL', '6 Role Tiers', 'Audit Logs'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Bento 2: Rich-Text & Frontend */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className="panel p-6 sm:p-8 space-y-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-[color:var(--accent)] group-hover:scale-105 transition-transform shadow-xs">
                    <Icon icon="solar:code-2-bold-duotone" width={26} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">thecoauthor.com Engine</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">
                      Architected a full-stack digital article writing platform with a custom Tiptap rich-text editor,
                      debounced auto-save drafts, markdown transforms, and sub-100ms editing latency.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Next.js 16', 'Tiptap Editor', 'Auto-Save', 'Turbopack'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Bento 3: Operational Logistics */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className="panel p-6 sm:p-8 space-y-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-[color:var(--accent)] group-hover:scale-105 transition-transform shadow-xs">
                    <Icon icon="solar:routing-2-bold-duotone" width={26} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">Logistics State Machines</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">
                      Structured 3-way operational delivery handoffs for BS Express Cambodia (Branch-to-Branch,
                      Branch-to-Customer, Customer-to-Branch) with real-time push notification triggers and QR scanning.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Push Triggers', 'QR Verification', 'Mobile UI', 'Dispatching'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/8 text-xs font-mono text-[color:var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Bento 4: Philosophy & Background (Spans 2 cols on lg) */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                  className="panel p-6 sm:p-8 space-y-4 lg:col-span-2 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-[color:var(--accent)] group-hover:scale-105 transition-transform shadow-xs">
                    <Icon icon="solar:server-bold-duotone" width={26} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">
                      Core Engineering Principles
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2 pt-1">
                      {personalInfo.professionalSummary.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-[color:var(--text-soft)]">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </MotionReveal>
          </div>
        </section>
        ;{/* ===== JOURNEY TIMELINE ===== */}
        <JourneyTimeline />;{/* ===== TECHNICAL SKILLS ===== */}
        <SkillsRadar />;{/* ===== EXPERIENCE ===== */}
        <ExperienceSection />;{/* ===== PROJECTS ===== */}
        <ProjectsSection />;{/* ===== SERVICES ===== */}
        <section id="services" className="border-t border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <MotionReveal className="mb-10 space-y-3">
              <p className="eyebrow">Engineering Services</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">What I deliver</h2>
              <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
                From concept and database modeling to high-speed, accessible web applications
              </p>
            </MotionReveal>

            <MotionStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <MotionItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    className="panel p-6 space-y-4 transition-colors duration-200 hover:bg-white/[0.04] hover:border-white/20 h-full group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[color:var(--accent)] transition-all duration-300 group-hover:border-[color:var(--accent)]/40 group-hover:bg-[color:var(--accent)]/10">
                      <Icon icon={service.icon} width={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">{service.title}</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">{service.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/[0.04] rounded-full text-xs text-[color:var(--text-muted)] capitalize">
                      {service.category}
                    </span>
                  </motion.div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>
        ;{/* ===== EDUCATION & CERTIFICATIONS ===== */}
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
        ;{/* ===== CONTACT ===== */}
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
        ;
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
