import React from 'react';

interface IconProps {
  className?: string;
}

export default function LongArrow({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 10"
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M0 5a1 1 0 011-1h8.532L7.18 1.718A1 1 0 118.57.282l4.125 4a1 1 0 010 1.436l-4.125 4A1 1 0 117.18 8.282L9.532 6H1a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
