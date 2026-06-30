'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icon } from '@/app/_components/icon';
import { EmojiSticker } from './Sticker';

export function ServiceHoverSticker({ icon }: { icon: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: decorative hover wrapper for emoji
    <div className="relative inline-flex" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-[color:var(--accent)]">
        <Icon icon={icon} width={24} />
      </div>
      <motion.div
        className="absolute -top-4 -right-4 z-10"
        animate={
          hovered
            ? {
                x: [0, -3, 4, -2, 3, -1, 0],
                y: [0, 2, -3, 4, -2, 1, 0],
                rotate: [0, -8, 12, -6, 10, -4, 0],
              }
            : { x: 0, y: 0, rotate: 0 }
        }
        transition={hovered ? { duration: 0.4, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
      >
        <EmojiSticker
          src="/vid/fearful-scream.mp4"
          size={48}
          mobileSize={36}
          visible={hovered}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 400, damping: 8 },
            },
          }}
        />
      </motion.div>
    </div>
  );
}
