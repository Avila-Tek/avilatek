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
      className={`flip-card w-64 lg:w-68 h-80 lg:h-88 absolute transition-all duration-300 ease-in-out ${cardClass}`}
    >
      {/* Card inner */}
      <div className="flip-card-inner relative w-full h-full">
        {/* Front card */}
        <div
          className={`flip-card-front w-full h-full overflow-hidden absolute rounded-md shadow-blue dark:shadow-dark-gray transition-all duration-300 ease-in-out ${
            idx === 0
              ? 'bg-light-blue dark:bg-medium-gray'
              : 'bg-medium-blue dark:bg-dark-gray'
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center p-8 sm:p-10 text-center">
            <img src={illustration} alt={title} className="w-10/12" />
            <h2 className="text-primary-400 dark:text-primary-300 font-bold mx-auto text-base lg:text-lg mt-6 leading-snug">
              {title}
            </h2>
          </div>
        </div>
        {/* Back card */}
        <button
          type="button"
          onClick={rotate}
          aria-label="Cambiar de servicio"
          className="flip-card-back w-full h-full text-font-white overflow-hidden focus:ring-0 focus:outline-none absolute top-0 left-0 shadow-blue dark:shadow-dark-gray bg-primary-400 dark:bg-primary-500 rounded-md"
        >
          <div className="w-full h-full flex flex-col justify-center items-center p-7 sm:p-8">
            <h2 className="text-sm lg:text-base font-bold leading-snug">
              {title}
            </h2>
            <hr className="w-10/12 mt-2 mb-3 border-primary-300 dark:border-primary-400" />
            <p className="text-xsm lg:text-sm font-medium leading-snug">
              {description}
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );
}
