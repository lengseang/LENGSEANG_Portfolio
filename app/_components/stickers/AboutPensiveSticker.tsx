'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EmojiSticker } from './Sticker';

export function AboutPensiveSticker() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-80px' });

  return (
    <div ref={ref} className="flex-shrink-0 self-start mt-1">
      {inView && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          <motion.div
            aria-hidden="true"
            animate={{
              y: [0, -16, -4, -12, 0],
              rotate: [0, 6, -4, 8, 0],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <EmojiSticker src="/vid/pensive-think.mp4" size={52} mobileSize={40} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
