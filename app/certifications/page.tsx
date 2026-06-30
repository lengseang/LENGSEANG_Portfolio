import Link from 'next/link';

import { Icon } from '@/app/_components/icon';
import { MotionReveal } from '@/app/_components/motion';
import { SiteHeader } from '@/app/_components/site-header';
import { certifications, navItems } from '@/app/_data/portfolio';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <SiteHeader items={navItems} ctaHref="/#contact" />

      <main className="relative overflow-hidden">
        <div className="soft-glow soft-glow-left" />
        <div className="soft-glow soft-glow-right" />

        <section className="mx-auto max-w-5xl px-5 py-18 sm:px-6 lg:px-8 lg:py-24">
          <MotionReveal className="space-y-5">
            <p className="eyebrow">Certifications</p>
            <h1 className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl">
              Clean layout, dark UI, smooth alternating motion.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--text-soft)]">
              Each card enters from the opposite side to keep the sequence moving without making the page feel too
              heavy.
            </p>
          </MotionReveal>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="space-y-4">
            {certifications.map((certification, index) => {
              const fromLeft = index % 2 === 0;

              return (
                <MotionReveal
                  key={`${certification.title}-${certification.issuer}`}
                  className={`flex ${fromLeft ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: fromLeft ? -90 : 90 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <article className="simple-card w-full max-w-3xl">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--text-muted)]">
                          {certification.issuer} / {certification.year}
                        </p>
                        <h2 className="text-2xl font-semibold">{certification.title}</h2>
                        <p className="text-sm leading-7 text-[color:var(--text-soft)]">{certification.focus}</p>
                      </div>

                      <a
                        href={certification.href}
                        target="_blank"
                        rel="noreferrer"
                        className="button-secondary shrink-0"
                      >
                        View
                        <Icon icon="solar:arrow-right-up-bold" width={18} />
                      </a>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>

          <MotionReveal className="mt-12">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]"
            >
              Back to portfolio
              <Icon icon="solar:arrow-right-up-outline" width={18} />
            </Link>
          </MotionReveal>
        </section>
      </main>
    </div>
  );
}
