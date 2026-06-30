'use client';

import { motion, type Variants } from 'framer-motion';
import { useThemeState } from './useThemeState';

export function EmojiSticker({
  src,
  size = 56,
  mobileSize = 36,
  className = '',
  style,
  variants,
  visible = true,
}: {
  src: string;
  size?: number;
  mobileSize?: number;
  className?: string;
  style?: React.CSSProperties;
  variants?: Variants;
  visible?: boolean;
}) {
  const { isLight, mounted } = useThemeState();
  if (!mounted || !isLight || !visible) return null;

  const vidSize = typeof window !== 'undefined' && window.innerWidth < 640 ? mobileSize : size;

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fall: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  };

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ width: vidSize, height: vidSize, ...style }}
      {...(reduced
        ? { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1 } }
        : { initial: 'hidden', animate: 'visible', variants: variants || fall })}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full"
        style={{
          objectFit: 'contain',
          mixBlendMode: 'screen' as const,
          filter: 'brightness(1.15)',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  );
}
