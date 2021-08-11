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
    <li className="lg:h-40 xl:h-38 w-full rounded-full bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none flex items-center p-5 md:px-8 md:py-6 max-w-xl mx-auto">
      <div className="w-14 md:w-18 h-14 md:h-18 flex items-center justify-center bg-primary-300 dark:bg-primary-400 rounded-full text-font-white">
        {icon}
      </div>
      <div className="w-10/12 pl-4 pr-2 md:pr-4">
        <h2 className="text-primary-500 dark:text-primary-300 text-sm xl:text-2sm font-bold mb-1.5">
          {name}
        </h2>
        <p className="font-medium text-xsm xl:text-sm">{description}</p>
      </div>
    </li>
  );
}
