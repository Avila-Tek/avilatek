import React from 'react';

interface IconProps {
  className?: string;
}

export default function DarkModeIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 633 660"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M0 329.61c0 182.05 147.59 329.64 329.64 329.64 135.91 0 252.59-82.26 303.02-199.69-49.91 47.16-117.24 76.08-191.33 76.08-153.9 0-278.67-124.77-278.67-278.68 0-115.59 70.37-214.73 170.6-256.94C149.74-1.85 0 145.99 0 329.61zm503.35-41.58h.45c0 43.45 35.55 79 79 79v.46c-43.45 0-79 35.55-79 78.99h-.45c0-43.44-35.55-78.99-79-78.99v-.46c43.45 0 79-35.55 79-79zM363.96 77.23h.78c0 76.02 62.2 138.22 138.21 138.22v.78c-76.01 0-138.21 62.19-138.21 138.21h-.78c0-76.02-62.2-138.21-138.22-138.21v-.78c76.02 0 138.22-62.2 138.22-138.22z"
        clipRule="evenodd"
      />
    </svg>
  );
}
