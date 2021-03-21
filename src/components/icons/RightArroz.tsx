import React from 'react';

interface IconProps {
  className?: string;
}

export default function RightArroz({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      viewBox="0 0 36 36"
      className={className}
    >
      <path d="M18 36C8.043 36 0 27.957 0 18S8.043 0 18 0s18 8.043 18 18-8.043 18-18 18zm0-33.702C9.574 2.298 2.298 9.19 2.298 18c0 8.425 6.893 15.702 15.702 15.702 8.425 0 15.702-7.276 15.702-15.702S26.426 2.298 18 2.298z" />
      <path d="M13.787 27.191c-.383 0-.766 0-.766-.383-.383-.383-.383-1.148 0-1.532L20.298 18l-7.277-7.277c-.383-.383-.383-1.149 0-1.532.383-.766 1.15-.766 1.915 0l8.043 8.043s.383.383.383.766 0 .766-.383.766l-8.043 8.042c-.383.383-.766.383-1.149.383z" />
    </svg>
  );
}
