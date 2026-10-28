'use client';

import { type HTMLMotionProps, motion, useReducedMotion, type Variants } from 'framer-motion';
import { type HTMLAttributes, type ReactNode, useEffect, useState } from 'react';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
}

function StaticDiv(props: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  return <div {...props} />;
}

export function MotionReveal({ children, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const isClient = useIsClient();

  if (!isClient || prefersReducedMotion) {
    return <StaticDiv {...(props as HTMLAttributes<HTMLDivElement>)}>{children}</StaticDiv>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ children, ...props }: HTMLMotionProps<'div'> & { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const isClient = useIsClient();

  if (!isClient || prefersReducedMotion) {
    return <StaticDiv {...(props as HTMLAttributes<HTMLDivElement>)}>{children}</StaticDiv>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, ...props }: HTMLMotionProps<'div'> & { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const isClient = useIsClient();

  if (!isClient || prefersReducedMotion) {
    return <StaticDiv {...(props as HTMLAttributes<HTMLDivElement>)}>{children}</StaticDiv>;
  }

  return (
    <motion.div variants={revealVariants} {...props}>
      {children}
    </motion.div>
  );
}

export { BlurTextReveal } from './motion/BlurTextReveal';
export { Magnetic } from './motion/Magnetic';
export { RollingText } from './motion/RollingText';
