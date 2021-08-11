import React from 'react';
import Quote from '../icons/Quote';
import Image from '../common/Image';

export type Testimony = {
  name: string;
  job?: string;
  quote: string;
  image?: string;
  rotate?: string;
};

interface TestimonyCardProps {
  name: string;
  job?: string;
  quote: string;
  image?: string;
  rotate?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function TestimonyCard({
  name,
  job,
  quote,
  image,
  rotate,
}: TestimonyCardProps) {
  return (
    <div className="w-112 h-68 flex items-center justify-center">
      <div
        className={`h-64 w-80 md:w-96 rounded-md overflow-hidden bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none relative transform ${rotate} hover:rotate-0`}
      >
        <div className="h-48 relative">
          <p className="absolute left-0 top-0 p-8 italic font-medium text-sm md:text-base leading-snug md:leading-snug z-10">
            {quote}
          </p>
          <Quote className="absolute bottom-8 right-8 h-12 md:h-16 w-12  md:w-16 text-dark-blue dark:text-dark-gray opacity-50 dark:opacity-75" />
        </div>
        {/* Card footer */}
        <div className="flex items-center bg-primary-400 w-full h-16 py-1 px-4 relative">
          {/* Author photo */}
          {image ? (
            <div className="absolute left-8 bottom-3 rounded-full h-16 w-16 overflow-hidden shadow-dark-gray ">
              <Image filename={image} alt={name} />
            </div>
          ) : null}
          {/* Author details */}
          <div className={`${image ? 'ml-24' : ''}`}>
            <h2 className="text-font-white text-sm font-semibold mb-0.5">
              {name}
            </h2>
            {job ? (
              <h3 className="text-xs font-medium text-primary-100">{job}</h3>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
