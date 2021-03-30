import React from 'react';

interface CategoryPillProps {
  name: string;
}

export default function CategoryPill({ name }: CategoryPillProps) {
  return (
    <div className="px-2 py-0.5 bg-medium-blue text-secondary-50 text-2xs md:text-xs rounded-full">
      <p>{name}</p>
    </div>
  );
}
