import React from 'react';

interface IconProps {
  className?: string;
}

export default function LongArrow({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 14"
      className={className}
      fill="currentColor"
    >
      <path d="M28.421 6.108c.065-.762-.03-1.798.195-1.873a3.891 3.891 0 012.063.052 23.2 23.2 0 013.478 1.138 3.7 3.7 0 011.638 1.265c.386.609.105 1.038-.766 1.31-2.18.678-4.29 1.58-6.421 2.412-.267.105-.498.472-.732.46a12.078 12.078 0 01-1.75-.332c.293-.49.488-1.098.903-1.44.503-.413 1.191-.601 1.718-.848-5.326.09-10.665.197-16.004.262-1.757.02-9.822.005-11.58 0C.367 8.51-.142 8.243.034 7.5c.076-.32.664-.815 1.127-.838 1.422-.071 9.303-.008 10.73 0 3.588.02 7.178.1 10.764.017 1.947-.046 3.888-.376 5.765-.571z" />
    </svg>
  );
}
