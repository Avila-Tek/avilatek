import React from 'react';

interface IconProps {
  className?: string;
}

export default function Quote({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="73"
      height="62"
      fill="currentColor"
      viewBox="0 0 73 62"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.131 33.24c-.433 7.47-2.518 14.155-6.18 20.092a.674.674 0 00.163.894l7.57 5.824a.682.682 0 00.95-.121C27.28 48.836 33.106 37.82 32.09 23.278L30.735 3.897a.727.727 0 00-.774-.673L1.124 5.241a.727.727 0 00-.673.774l1.92 27.462c.028.398.376.7.774.672l12.986-.908v-.002zM54.16 30.58c-.433 7.47-2.518 14.156-6.181 20.093a.677.677 0 00.164.893l7.57 5.824a.68.68 0 00.948-.12C65.31 46.177 71.136 35.16 70.12 20.617l-1.356-19.38a.727.727 0 00-.773-.673L39.153 2.582a.727.727 0 00-.675.773l1.92 27.463c.028.397.377.7.776.672l12.986-.908v-.002z"
        clipRule="evenodd"
      />
    </svg>
  );
}
