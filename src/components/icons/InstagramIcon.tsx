import React from "react";

interface IconProps {
  className?: string;
}

export default function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M.33 17.348V7.2c.013-.14.026-.282.041-.422a6.335 6.335 0 01.566-2.033 6.586 6.586 0 013.1-3.17 6.284 6.284 0 012.167-.63l.437-.042h10.12c.025.005.05.01.076.012.452.023.9.093 1.337.211a6.62 6.62 0 014.89 6.289c.023 3.226.008 6.452.006 9.678a6.44 6.44 0 01-.292 1.895 6.624 6.624 0 01-6.3 4.656H6.991c-.21 0-.42-.01-.63-.026a6.301 6.301 0 01-2.152-.563 6.587 6.587 0 01-3.076-2.863 6.393 6.393 0 01-.762-2.428c-.016-.144-.028-.278-.042-.416zm11.37-14.7H7.031c-.2 0-.4.008-.6.027a4.449 4.449 0 00-1.917.611A4.724 4.724 0 002.08 7.53c-.018 3.16-.005 6.32-.005 9.48 0 .36.037.719.112 1.071a4.82 4.82 0 004.688 3.806c3.184.012 6.367 0 9.551 0 .287 0 .572-.023.855-.07a4.621 4.621 0 002.38-1.123 4.755 4.755 0 001.656-3.691c.005-3.157.005-6.314 0-9.472a4.836 4.836 0 00-4.795-4.88c-1.604-.013-3.213.002-4.822.002l.001-.005z"
      ></path>
      <path
        fill="currentColor"
        d="M11.707 6.15a6.123 6.123 0 11-6.13 6.122 6.138 6.138 0 016.13-6.121zm0 1.75a4.374 4.374 0 104.371 4.373A4.362 4.362 0 0011.7 7.9h.008zM18.264 4.402a1.313 1.313 0 11-.008 2.625 1.313 1.313 0 01.008-2.625z"
      ></path>
    </svg>
  );
}