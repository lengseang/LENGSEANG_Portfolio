import Image from 'next/image';
import Link from 'next/link';

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
  highlights,
  navItems,
  personalInfo,
  services,
  socialLinks,
} from '@/app/_data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <SiteHeader items={navItems} ctaHref="/#contact" />

      <main>
        {/* ===== HERO ===== */}
        <section id="home" className="relative overflow-hidden border-b border-white/8">
          <div className="soft-glow soft-glow-left" />
          <div className="soft-glow soft-glow-right" />

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-18 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
            <MotionReveal className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
                  {personalInfo.name}
                </h1>
                <p className="text-xl font-medium text-[color:var(--accent)]">
                  {personalInfo.role}
                </p>
                <p className="max-w-xl text-base leading-8 text-[color:var(--text-soft)]">
                  {personalInfo.shortBio}
                </p>
                <p className="text-sm text-[color:var(--text-muted)] flex items-center gap-2">
                  <Icon icon="solar:map-point-bold-duotone" width={16} className="text-[color:var(--accent)]" />
                  Based in {personalInfo.location} &middot; RUPP Computer Science
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
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
              </div>

              <div className="pt-2 border-t border-white/8 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-[color:var(--text-strong)] font-display">4+</p>
                  <p className="text-xs text-[color:var(--text-muted)] mt-0.5">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[color:var(--text-strong)] font-display">4</p>
                  <p className="text-xs text-[color:var(--text-muted)] mt-0.5">Major Platforms</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[color:var(--text-strong)] font-display">6+</p>
                  <p className="text-xs text-[color:var(--text-muted)] mt-0.5">RBAC Roles Built</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal className="flex justify-center lg:justify-end">
              <div className="relative aspect-[4/4.5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl border border-white/15 bg-[color:var(--surface)] shadow-2xl">
                <Image
                  src="/portfolio/khem-profile.jpg"
                  alt="Portrait of Khem Seangleng"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 24rem, 90vw"
                />
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="border-y border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
            <MotionReveal className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">About Me</p>
                <h2 className="font-display text-4xl leading-none sm:text-5xl">
                  Building clean interfaces and robust system architectures
                </h2>
                <p className="text-lg leading-8 text-[color:var(--text-soft)]">
                  {personalInfo.longBio}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="panel p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[color:var(--accent)]">
                    <Icon icon="solar:shield-check-bold-duotone" width={22} />
                  </div>
                  <h3 className="text-base font-semibold text-[color:var(--text-strong)]">Secure RBAC Systems</h3>
                  <p className="text-xs leading-6 text-[color:var(--text-soft)]">
                    Granular permission hierarchies, role inheritance, and secure API endpoints for enterprise administrative tools.
                  </p>
                </div>

                <div className="panel p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[color:var(--accent)]">
                    <Icon icon="solar:code-2-bold-duotone" width={22} />
                  </div>
                  <h3 className="text-base font-semibold text-[color:var(--text-strong)]">Frontend Engineering</h3>
                  <p className="text-xs leading-6 text-[color:var(--text-soft)]">
                    Responsive, component-driven UI with React, Vue, Next.js, and TypeScript focused on speed and usability.
                  </p>
                </div>

                <div className="panel p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[color:var(--accent)]">
                    <Icon icon="solar:server-bold-duotone" width={22} />
                  </div>
                  <h3 className="text-base font-semibold text-[color:var(--text-strong)]">Backend & Databases</h3>
                  <p className="text-xs leading-6 text-[color:var(--text-soft)]">
                    Scalable RESTful services with NestJS & Express, paired with PostgreSQL & MySQL schema optimizations.
                  </p>
                </div>

                <div className="panel p-6 space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-[color:var(--accent)]">
                    <Icon icon="solar:routing-2-bold-duotone" width={22} />
                  </div>
                  <h3 className="text-base font-semibold text-[color:var(--text-strong)]">Operational Workflows</h3>
                  <p className="text-xs leading-6 text-[color:var(--text-soft)]">
                    Multi-role delivery handoffs, real-time push notification pipelines, and QR verification systems.
                  </p>
                </div>
              </div>

              <div className="panel p-6 lg:p-8 space-y-4">
                <h3 className="text-sm uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Key Highlights & Background</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {personalInfo.professionalSummary.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[color:var(--text-soft)]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {personalInfo.hobbies && personalInfo.hobbies.length > 0 && (
                  <div className="pt-4 border-t border-white/8 space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Interests & Hobbies</p>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.hobbies.map((hobby) => (
                        <span
                          key={hobby}
                          className="px-3 py-1 bg-white/[0.04] border border-white/8 rounded-full text-xs text-[color:var(--text-soft)]"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* ===== JOURNEY TIMELINE ===== */}
        <JourneyTimeline />

        {/* ===== SKILLS RADAR ===== */}
        <SkillsRadar />

        {/* ===== EXPERIENCE ===== */}
        <section className="border-y border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
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
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
            <MotionReveal className="mb-10 space-y-3">
              <p className="eyebrow">Services</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">What I offer</h2>
              <p className="max-w-2xl text-lg text-[color:var(--text-soft)]">
                From secure admin systems to full-stack web architectures
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
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Education & Reference */}
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
                            icon="solar:arrow-right-up-outline"
                            width={16}
                            className="text-[color:var(--text-muted)] mt-1 flex-shrink-0"
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
        <section id="contact" className="border-t border-white/8">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-18 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-22">
            <MotionReveal className="space-y-6">
              <div className="space-y-3">
                <p className="eyebrow">Contact</p>
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
                          ? 'LinkedIn'
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

                <div className="pt-2">
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
    </div>
  );
}
