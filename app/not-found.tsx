'use client';

import Link from 'next/link';
import { MotionReveal } from './_components/motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text-strong)]">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-6 lg:px-8">
        <MotionReveal className="space-y-8">
          <h1 className="font-display text-7xl font-bold sm:text-8xl">404</h1>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Page not found</h2>
            <p className="max-w-md mx-auto text-lg text-[color:var(--text-soft)]">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <Link href="/" className="inline-block button-primary">
            Return home
          </Link>
        </MotionReveal>
      </div>
    </div>
  );
}
