import React from 'react';

interface IconProps {
  className?: string;
}

export default function LightModeIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 90 89"
      className={className}
    >
      <path d="M46.933 14.885a2.432 2.432 0 01-4.864 0V2.431a2.432 2.432 0 014.864 0v12.454zM44.501 68.461c13.345 0 24.163-10.818 24.163-24.163S57.846 20.135 44.501 20.135 20.338 30.953 20.338 44.298s10.818 24.163 24.163 24.163zM42.069 74.113a2.434 2.434 0 012.433-2.432 2.433 2.433 0 012.431 2.432v12.455A2.433 2.433 0 0144.502 89a2.434 2.434 0 01-2.433-2.432V74.113zM74.114 46.931a2.431 2.431 0 010-4.863H86.57a2.432 2.432 0 010 4.863H74.114zM14.886 42.068a2.432 2.432 0 010 4.863H2.432a2.433 2.433 0 010-4.863h12.454zM67.161 25.278a2.431 2.431 0 01-3.439-3.439l8.808-8.807a2.432 2.432 0 013.439 3.438l-8.808 8.808zM21.841 63.721a2.432 2.432 0 013.439 3.439l-8.807 8.806a2.433 2.433 0 01-3.438-3.439l8.806-8.806zM63.722 67.158a2.432 2.432 0 013.44-3.437l8.807 8.806a2.432 2.432 0 01-3.438 3.439l-8.809-8.808zM25.279 21.839a2.431 2.431 0 11-3.438 3.439l-8.806-8.807a2.432 2.432 0 113.438-3.438l8.806 8.806z" />
    </svg>
  );
}
