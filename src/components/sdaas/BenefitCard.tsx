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
    <li className="w-full rounded-full bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none grid grid-cols-12 px-8 py-6">
      <div className="w-18 h-18 col-span-2 my-auto flex items-center justify-center bg-primary-300 dark:bg-primary-400 rounded-full text-font-white">
        {icon}
      </div>
      <div className="col-span-10 pl-6 pr-4">
        <h2 className="text-primary-500 dark:text-primary-300 text-sm xl:text-2sm font-bold mb-1.5">
          {name}
        </h2>
        <p className="font-medium text-xsm xl:text-sm">{description}</p>
      </div>
    </li>
  );
}
