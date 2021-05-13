import React from 'react';

interface IconProps {
  className?: string;
}

export default function Line({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      fill="none"
      viewBox="0 0 90 90"
      className={`absolute z-0 ${className}`}
    >
      <path
        fill="currentColor"
        className="text-primary-100 dark:text-secondary-200 opacity-25 dark:opacity-20"
        d="M8.474 88.597l80-80A5.002 5.002 0 0084.957 0a5 5 0 00-3.553 1.526l-80 80a5 5 0 007.07 7.07z"
      />
    </svg>
  );
}
