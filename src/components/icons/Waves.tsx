import React from 'react';

interface IconProps {
  className?: string;
}

export default function Waves({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="303"
      viewBox="0 0 1440 303"
      className={className}
    >
      {/* In light theme is medium-blue and in dark mode is medium-gray */}
      <path
        fill="currentColor"
        className="text-medium-blue dark:text-medium-gray transition-all duration-300 ease-in-out"
        fillRule="evenodd"
        d="M0 13.9l60 6.002c60 6.003 180 18.007 300 42.017s240 60.024 360 42.017C840 85.928 960 13.9 1080 1.895c120-12.005 240 36.014 300 60.024l60 24.01V266H0V13.9z"
        clipRule="evenodd"
      />
      {/* In light theme is light and in dark mode is dark */}
      <path
        fill="currentColor"
        className="text-light dark:text-dark transition-all duration-300 ease-in-out"
        d="M108.448 27L0 16v286.525h1440V102l-30.04-15.581c-61.38-24.01-184.15-72.029-306.92-60.024C980.267 38.4 857.496 110.428 734.725 128.436 611.954 146.443 533.03 103.5 411.794 73.5 275.247 39.711 290.046 42.5 108.448 27z"
      />
    </svg>
  );
}
