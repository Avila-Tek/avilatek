import React from 'react';

interface IconProps {
  className?: string;
}

export default function Monitor({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 366 306"
      className={className}
    >
      <path
        fill="#263238"
        stroke="#263238"
        d="M360 1H6a5 5 0 00-5 5v6a5 5 0 005 5h354a5 5 0 005-5V6a5 5 0 00-5-5zM365 195H1v18h364v-18z"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        d="M365 7h-16v189h16V7zM17 9H1v186h16V9z"
      ></path>
      <path fill="#9A9A9A" d="M365.6 212.41H.5v36.62h365.1v-36.62z"></path>
      <path
        fill="#fff"
        d="M365.6 212.41H.5v36.62h365.1v-36.62z"
        opacity="0.4"
      ></path>
      <path fill="#9A9A9A" d="M254.19 293.78H111.9v11.89h142.29v-11.89z"></path>
      <path
        fill="#fff"
        d="M254.19 293.78H111.9v11.89h142.29v-11.89z"
        opacity="0.3"
      ></path>
      <path
        fill="#9A9A9A"
        d="M237.25 293.79h-108.4l2.75-20.63.14-.98.25-1.93.13-.98.26-1.93.04-.3.09-.67.26-1.94.13-.97 1.93-14.42h96.44l1.81 13.6.1.65.3 2.26.08.65.12.84.19 1.42.08.65.3 2.26.09.65 2.91 21.77z"
      ></path>
      <path
        fill="#fff"
        d="M237.25 293.79h-108.4l2.75-20.63.14-.98.25-1.93.13-.98.26-1.93.04-.3.09-.67.26-1.94.13-.97 1.93-14.42h96.44l1.81 13.6.1.65.3 2.26.08.65.12.84.19 1.42.08.65.3 2.26.09.65 2.91 21.77z"
        opacity="0.4"
      ></path>
      <path
        fill="#37474F"
        d="M189 228.26a6.047 6.047 0 01-3.735 5.589 6.051 6.051 0 01-8.249-4.409 6.044 6.044 0 012.573-6.21 6.047 6.047 0 017.639.752A6.052 6.052 0 01189 228.26z"
      ></path>
      <path
        fill="#000"
        d="M233.68 267.04l-100.78-3.58 1.93-14.42h96.44l2.41 18z"
        opacity="0.16"
      ></path>
    </svg>
  );
}
