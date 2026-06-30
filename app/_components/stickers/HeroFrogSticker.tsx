'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EmojiSticker } from './Sticker';

export function HeroFrogSticker() {
  const [peeking, setPeeking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeeking(true);
      setTimeout(() => setPeeking(false), 3000);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      {peeking && (
        <motion.div
          key="frog"
          initial={{ x: 50, y: 30, opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{
            x: [6, 10, 4, 8],
            y: [2, 6, 0, 4],
            opacity: 1,
            scale: [1, 1.08, 0.95, 1.05],
            rotate: [4, -2, 6, 0],
          }}
          exit={{ x: 60, y: 40, opacity: 0, scale: 0.2, rotate: 25 }}
          transition={{
            x: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            default: { type: 'spring', stiffness: 150, damping: 10 },
          }}
          className="absolute -bottom-3 -right-3 z-10"
        >
          <EmojiSticker src="/vid/frog-peek.mp4" size={64} mobileSize={48} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
