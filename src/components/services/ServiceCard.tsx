import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  illustration: any;
  title: string;
  description: string;
  cardClass?: string;
  idx?: number;
  rotate?: () => void;
}

export default function ServiceCard({
  illustration,
  title,
  description,
  cardClass,
  idx,
  rotate,
}: ServiceCardProps) {
  const variants = [
    { rotate: [1, 0, 1] },
    { rotate: [8, 2, 8] },
    { rotate: [-6, -12, -6] },
  ];

  return (
    <motion.div
      animate={variants[idx]}
      transition={{ duration: 3, repeat: Infinity }}
      className={`flip-card w-52 sm:w-56 lg:w-64 h-64 sm:h-72 lg:h-80 absolute ${cardClass}`}
    >
      {/* Card inner */}
      <div className="flip-card-inner relative w-full h-full">
        {/* Front card */}
        <div
          className={`flip-card-front w-full h-full overflow-hidden absolute rounded-md shadow-blue ${
            idx === 0 ? 'bg-light-blue' : 'bg-medium-blue'
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center p-10 text-center">
            <img src={illustration} alt={title} className="w-10/12" />
            <h2 className="text-primary-400 font-bold mx-auto text-base lg:text-lg mt-6 leading-snug">
              {title}
            </h2>
          </div>
        </div>
        {/* Back card */}
        <button
          type="button"
          onClick={rotate}
          className="flip-card-back w-full h-full text-font-white overflow-hidden focus:ring-0 focus:outline-none absolute top-0 left-0 shadow-blue bg-secondary-300 rounded-md"
        >
          <div className="w-full h-full flex flex-col justify-center items-center p-8 lg:p-10">
            <h1 className="text-sm lg:text-lg font-bold leading-snug">
              {title}
            </h1>
            <hr className="w-full mt-2 mb-3 border-secondary-100" />
            <p className="font-medium leading-tight text-xs lg:text-sm">
              {description}
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );
}
