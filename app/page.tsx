import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/app/_components/contact-form";
import { Icon } from "@/app/_components/icon";
import { MotionItem, MotionReveal, MotionStagger } from "@/app/_components/motion";
import { SiteHeader } from "@/app/_components/site-header";
import {
  experience,
  highlights,
  navItems,
  personalInfo,
  projects,
  skills,
  socialLinks,
} from "@/app/_data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <SiteHeader items={navItems} ctaHref="/#contact" />

      <main>
        <section id="home" className="relative overflow-hidden border-b border-white/8">
          <div className="soft-glow soft-glow-left" />
          <div className="soft-glow soft-glow-right" />

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-18 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <MotionReveal className="space-y-8">
              <div className="space-y-4">
                <p className="eyebrow">Khem Seangleng</p>
                <h1 className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
                  Simple dark portfolio with clearer focus.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[color:var(--text-soft)]">
                  {personalInfo.shortBio}
                </p>
                <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
                  {personalInfo.role} based in {personalInfo.location}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/#projects" className="button-primary">
                  Selected work
                </Link>
                <Link href="/certifications" className="button-secondary">
                  Certifications
                </Link>
              </div>

              <MotionStagger className="flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <MotionItem key={item}>
                    <span className="tag">{item}</span>
                  </MotionItem>
                ))}
              </MotionStagger>
            </MotionReveal>

            <MotionReveal className="flex justify-center lg:justify-end">
              <div className="relative aspect-[4/4.8] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--surface)]">
                <Image
                  src="/portfolio/hero-leng.png"
                  alt="Portrait of Khem Seangleng"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 24rem, 90vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
                    Current focus
                  </p>
                  <p className="mt-2 text-lg font-medium text-[color:var(--text-strong)]">
                    Secure products, admin systems, and clean frontend architecture.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
          <MotionReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="eyebrow">About</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">
                Frontend-first, product-minded, and focused on clarity.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-[color:var(--text-soft)]">
                {personalInfo.longBio}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label} 
                    className={`panel p-5 flex flex-col justify-between gap-3 group transition-colors hover:bg-white/[0.04] hover:border-white/20 ${index === 0 ? 'col-span-2 sm:col-span-2' : index === 3 ? 'col-span-2 sm:col-span-2' : 'col-span-1'}`}
                  >
                    <div className="text-[color:var(--text-muted)] text-sm font-medium transition-colors group-hover:text-[color:var(--accent)]">
                      {skill.level}
                    </div>
                    <div className="text-sm font-medium leading-relaxed text-[color:var(--text-strong)]">
                      {skill.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </section>

        <section className="border-y border-white/8">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
            <MotionReveal className="mb-10 space-y-3">
              <p className="eyebrow">Experience</p>
              <h2 className="font-display text-4xl leading-none sm:text-5xl">
                Recent work
              </h2>
            </MotionReveal>

            <MotionStagger className="space-y-10">
              {experience.slice(0, 2).map((item) => (
                <MotionItem
                  key={`${item.period}-${item.title}`}
                  className="grid gap-4 border-t border-white/8 pt-6 lg:grid-cols-[0.28fr_0.72fr]"
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                      {item.period}
                    </p>
                    <p className="text-sm text-[color:var(--accent)]">{item.organization}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-7 text-[color:var(--text-soft)]">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.points.slice(0, 3).map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-7 text-[color:var(--text-soft)]">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-18 sm:px-6 lg:px-8 lg:py-22">
          <MotionReveal className="mb-10 space-y-3">
            <p className="eyebrow">Projects</p>
            <h2 className="font-display text-4xl leading-none sm:text-5xl">
              Selected work
            </h2>
          </MotionReveal>

          <MotionStagger className="space-y-6">
            {projects.map((project) => (
              <MotionItem
                key={project.title}
                className="group grid gap-6 border-t border-white/8 pt-6 md:grid-cols-[0.36fr_0.64fr]"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-[color:var(--surface)] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_0_2rem_-0.5rem_rgba(255,255,255,0.05)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 22rem, 100vw"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)] group-hover:text-[color:var(--accent)] transition-colors duration-300">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-soft)]">
                    {project.summary}
                  </p>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] transition-opacity duration-300 hover:opacity-70"
                  >
                    Explore
                    <Icon icon="solar:arrow-right-up-outline" width={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </section>

        <section id="contact" className="border-t border-white/8">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-18 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-22">
            <MotionReveal className="space-y-6">
              <div className="space-y-3">
                <p className="eyebrow">Contact</p>
                <h2 className="font-display text-4xl leading-none sm:text-5xl">
                  Let&apos;s build something solid.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[color:var(--text-soft)]">
                {personalInfo.availability}
              </p>

              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} className="contact-link">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[color:var(--accent)]">
                      <Icon icon={item.icon} width={18} />
                    </span>
                    <span className="text-sm text-[color:var(--text-soft)]">
                      {item.label === "Email"
                        ? personalInfo.email
                        : item.label === "Telegram"
                          ? "@LegendOfLeng"
                          : item.label === "LinkedIn"
                            ? "LinkedIn"
                            : personalInfo.phone}
                    </span>
                  </a>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal>
              <ContactForm email={personalInfo.email} />
            </MotionReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
