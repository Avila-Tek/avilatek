import React from 'react';

interface CategoryPillProps {
  name: string;
  className?: string;
}

export default function CategoryPill({ name, className }: CategoryPillProps) {
  return (
    <div
      className={`px-3 py-1 font-medium bg-medium-blue dark:bg-primary-50 text-secondary-50 dark:text-primary-500 dark:bg-opacity-80 text-2xs md:text-xs rounded-full transition-all duration-300 ease-in-out ${className}`}
    >
      <p>{name}</p>
    </div>
  );
}
