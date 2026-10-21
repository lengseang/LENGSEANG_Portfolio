'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ConnectModal } from '@/app/_components/connect-modal';
import { ContactForm } from '@/app/_components/contact-form';
import { Icon } from '@/app/_components/icon';
import { JourneyTimeline } from '@/app/_components/journey/JourneyTimeline';
import { MotionItem, MotionReveal, MotionStagger } from '@/app/_components/motion';
import { ProjectsSection } from '@/app/_components/ProjectsSection';
import { SkillsRadar } from '@/app/_components/SkillsRadar';
import { SiteHeader } from '@/app/_components/site-header';

import {
  certifications,
  education,
  experience,
  navItems,
  personalInfo,
  services,
  socialLinks,
} from '@/app/_data/portfolio';

export default function Home() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <SiteHeader items={navItems} ctaHref="/#contact" />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-black/[0.06] dark:border-white/8 pt-4 pb-16 sm:pb-20 lg:pt-8 lg:pb-20"
        >
          {/* Subtle Ambient Backlight Floats */}
          <div className="soft-glow soft-glow-left" />
          <div className="soft-glow soft-glow-right" />

          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
              {/* LEFT: Cinematic Cutout Portrait with Soft White Studio Lighting */}
              <MotionReveal className="relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[590px] flex items-end justify-center">
                  {/* Layer 1: Atmospheric Studio Backlight Halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.45, 0.65, 0.45],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 m-auto h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] rounded-full bg-gradient-to-tr from-white via-amber-100/40 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent blur-[75px] pointer-events-none"
                  />

                  {/* Layer 2: Secondary subtle rim backlight */}
                  <div className="absolute -inset-x-6 top-8 h-60 rounded-full bg-white/70 dark:bg-white/10 blur-[90px] pointer-events-none" />

                  {/* Layer 3: High-Res Cutout Image with seamless bottom gradient fade */}
                  <div
                    className="relative z-10 w-full flex items-end justify-center"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                    }}
                  >
                    <Image
                      src="/portfolio/khem-cutout.png"
                      alt="Khem Seangleng - Full-Stack Developer"
                      width={640}
                      height={650}
                      priority
                      className="object-contain object-bottom drop-shadow-[0_8px_20px_rgba(15,23,42,0.06)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.75)] filter brightness-[1.01] contrast-[1.01] max-h-[580px] w-auto select-none"
                    />
                  </div>
                </div>
              </MotionReveal>

              {/* RIGHT: Editorial Typography, Bio, Actions & Proof Metrics (Level with Portrait) */}
              <MotionReveal className="space-y-6 lg:pb-3 lg:pl-2">
                <div className="space-y-3.5">
                  <h1 className="font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl xl:text-7xl">
                    {personalInfo.name}
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

                  <p className="max-w-xl text-base leading-relaxed text-[color:var(--text-soft)]">
                    {personalInfo.shortBio}
                  </p>

                  <p className="text-sm text-[color:var(--text-muted)] flex items-center gap-2 pt-0.5">
                    <Icon icon="solar:map-point-bold-duotone" width={16} className="text-[color:var(--accent)]" />
                    Based in {personalInfo.location} &middot; RUPP Computer Science
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/#projects" className="button-primary">
                    View my work
                  </Link>

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

                  <button
                    type="button"
                    onClick={() => setIsConnectOpen(true)}
                    className="button-secondary inline-flex items-center justify-center gap-2"
                    title="Open Social Links & QR"
                  >
                    <Icon icon="solar:link-circle-bold-duotone" width={18} />
                    Connect & QR
                  </button>
                </div>

                {/* Real Proof-of-Work Metrics */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-[color:var(--text-strong)] font-display">05</p>
                    <p className="text-xs text-[color:var(--text-muted)] mt-1">Production Systems</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[color:var(--text-strong)] font-display">06+</p>
                    <p className="text-xs text-[color:var(--text-muted)] mt-1">RBAC Roles Architected</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[color:var(--text-strong)] font-display">100%</p>
                    <p className="text-xs text-[color:var(--text-muted)] mt-1">Status Tracking Sync</p>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* ===== ABOUT / ENGINEERING ARCHITECTURE BENTO ===== */}
        <section id="about" className="border-b border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <MotionReveal className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">Architecture & Philosophy</p>
                <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                  Building dependable software from front-end craft to backend domain logic.
                </h2>
                <p className="text-lg leading-8 text-[color:var(--text-soft)]">{personalInfo.longBio}</p>
              </div>

              {/* Asymmetrical Bento Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Bento 1: Large Feature (Spans 2 cols on lg) */}
                <div className="panel p-6 sm:p-8 space-y-4 lg:col-span-2 group">
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
                </div>

                {/* Bento 2: Rich-Text & Frontend */}
                <div className="panel p-6 sm:p-8 space-y-4 group">
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
                </div>

                {/* Bento 3: Operational Logistics */}
                <div className="panel p-6 sm:p-8 space-y-4 group">
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
                </div>

                {/* Bento 4: Philosophy & Background (Spans 2 cols on lg) */}
                <div className="panel p-6 sm:p-8 space-y-4 lg:col-span-2 group">
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
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* ===== JOURNEY TIMELINE ===== */}
        <JourneyTimeline />

        {/* ===== TECHNICAL SKILLS ===== */}
        <SkillsRadar />

        {/* ===== EXPERIENCE ===== */}
        <section className="border-y border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
            <MotionReveal className="mb-10 space-y-3">
              <p className="eyebrow">Experience</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">Professional history</h2>
            </MotionReveal>

            <MotionStagger className="space-y-10">
              {experience.slice(0, 3).map((item) => (
                <MotionItem
                  key={`${item.period}-${item.title}`}
                  className="grid gap-4 border-t border-white/8 pt-6 lg:grid-cols-[0.28fr_0.72fr]"
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">{item.period}</p>
                    <p className="text-sm text-[color:var(--accent)]">{item.organization}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">{item.description}</p>
                    <div className="space-y-2">
                      {item.points.slice(0, 3).map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-7 text-[color:var(--text-soft)]">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                    {item.skillsAcquired && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.skillsAcquired.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-white/[0.04] rounded text-xs text-[color:var(--text-muted)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <ProjectsSection />

        {/* ===== SERVICES ===== */}
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
                  <div className="panel p-6 space-y-4 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 h-full group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[color:var(--accent)] transition-all duration-300 group-hover:border-[color:var(--accent)]/40 group-hover:bg-[color:var(--accent)]/10">
                      <Icon icon={service.icon} width={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-[color:var(--text-strong)]">{service.title}</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">{service.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/[0.04] rounded-full text-xs text-[color:var(--text-muted)] capitalize">
                      {service.category}
                    </span>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

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
                      <div className="space-y-2 panel p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                          {item.period}
                        </p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-[color:var(--accent)]">{item.organization}</p>
                        <p className="text-sm leading-7 text-[color:var(--text-soft)]">{item.description}</p>
                      </div>
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
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
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
                      </a>
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
