import React from 'react';

interface IconProps {
  className?: string;
}

export default function LeftArrow({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="currentColor"
      className={className}
    >
      <path d="M18 0c9.957 0 18 8.043 18 18s-8.043 18-18 18S0 27.957 0 18 8.043 0 18 0zm0 33.702c8.425 0 15.702-6.893 15.702-15.702C33.702 9.574 26.81 2.298 18 2.298 9.574 2.298 2.298 9.574 2.298 18c0 8.425 7.276 15.702 15.702 15.702z" />
      <path d="M22.213 8.809c.383 0 .766 0 .766.383.383.383.383 1.149 0 1.531L15.702 18l7.277 7.277c.383.383.383 1.149 0 1.532-.383.766-1.15.766-1.915 0l-8.043-8.043s-.383-.383-.383-.766 0-.766.383-.766l8.043-8.042c.383-.383.766-.383 1.149-.383z" />
    </svg>
  );
}
