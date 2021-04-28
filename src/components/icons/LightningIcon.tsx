import React from 'react';

interface IconProps {
  className?: string;
}

export default function LightningIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="20"
      viewBox="0 0 13 20"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12.173 8.866a.767.767 0 00-.668-.392H7.666V.796a.768.768 0 00-1.42-.43L.103 10.348a.768.768 0 000 .768.768.768 0 00.653.43h3.839v7.678a.768.768 0 00.56.768.644.644 0 00.207 0 .768.768 0 00.653-.369l6.143-9.982a.769.769 0 00.015-.775z"
      />
    </svg>
  );
}
