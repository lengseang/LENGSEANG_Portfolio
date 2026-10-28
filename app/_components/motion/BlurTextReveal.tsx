'use client';

import { motion } from 'framer-motion';

interface BlurTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function BlurTextReveal({ text, className = '', delay = 0, as: Component = 'span' }: BlurTextRevealProps) {
  const words = text.split(' ');

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.032,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.26em] will-change-[transform,filter,opacity]"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
