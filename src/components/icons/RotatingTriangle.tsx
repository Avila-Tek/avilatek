import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

export default function RotatingTriangle({ className }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="84"
      fill="none"
      viewBox="0 0 96 84"
      className={`h-8 w-8 md:h-10 md:w-10 absolute z-0 ${className}`}
      style={{ originY: 0.5, originX: 0 }}
      animate={{ rotate: 360 }}
      transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
    >
      <path
        fill="currentColor"
        className="text-dark-blue dark:text-dark opacity-80 dark:opacity-75"
        d="M91.025 83.175h-87c-1.4 0-2.8-.8-3.5-2-.7-1.2-.7-2.8 0-4l43.5-75.3c1.4-2.5 5.5-2.5 6.9 0l43.6 75.3c.7 1.2.7 2.8 0 4-.8 1.2-2.1 2-3.5 2zm-80.1-8h73.1l-36.5-63.3-36.6 63.3z"
      />
    </motion.svg>
  );
}
