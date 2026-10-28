'use client';

interface RollingTextProps {
  text: string;
  className?: string;
}

export function RollingText({ text, className = '' }: RollingTextProps) {
  return (
    <span className={`relative inline-block overflow-hidden h-[1.3em] group/roll align-middle ${className}`}>
      {/* Primary layer */}
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/roll:-translate-y-full">
        {text}
      </span>
      {/* Clone layer that rolls in from underneath */}
      <span className="absolute inset-0 block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover/roll:translate-y-0 text-[color:var(--accent)] font-semibold">
        {text}
      </span>
    </span>
  );
}
