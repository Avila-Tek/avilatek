import React from 'react';

interface BenefitCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export type Benefit = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BenefitCard({
  name,
  description,
  icon,
}: BenefitCardProps) {
  return (
    <li className="w-full rounded-full bg-light-blue shadow-blue grid grid-cols-12 px-8 py-6">
      <div className="w-20 h-20 col-span-2 my-auto flex items-center justify-center bg-primary-300 rounded-full text-font-white">
        {icon}
      </div>
      <div className="col-span-10 pl-6 pr-4">
        <h2 className="text-primary-500 text-2sm font-bold mb-1.5">{name}</h2>
        <p className="font-medium text-sm">{description}</p>
      </div>
    </li>
  );
}
