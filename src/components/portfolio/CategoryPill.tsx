import React from 'react';

interface CategoryPillProps {
  name: string;
}

export default function CategoryPill({ name }: CategoryPillProps) {
  return (
    <div className="px-3 py-0.5 bg-medium-blue dark:bg-medium-gray text-secondary-50 dark:text-neutral-400 text-2xs md:text-xs rounded-full">
      <p>{name}</p>
    </div>
  );
}
