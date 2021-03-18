import React from "react";

interface IconProps {
  className?: string;
}

export default function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 25"
      className={className}
    >
      <path
        fill="currentColor"
        d="M8.886 24.313v-10.74h3.587l.54-4.19h-4.1c0-1.12-.011-2.2.009-3.281a1.49 1.49 0 01.79-1.2c.244-.13.52-.192.796-.177.747-.037 1.5-.027 2.245-.036h.371V.947a22.323 22.323 0 00-4.013-.11c-1.024.075-2 .467-2.791 1.122A5.041 5.041 0 004.579 5.75c-.054 1.1-.027 2.2-.035 3.3v.352H.96v4.188h3.567v10.723"
      ></path>
    </svg>
  );
}
