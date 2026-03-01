'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface BaseSlideProps {
  children: ReactNode;
  direction: number;
  className?: string;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
  }),
};

export function BaseSlide({ children, direction, className = '' }: BaseSlideProps) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`absolute inset-0 w-full h-full flex flex-col p-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}
