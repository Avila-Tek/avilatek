import React from 'react';
import { motion } from 'framer-motion';
import LongArrow from '../icons/LongArrow';
import CategoryPill from './CategoryPill';

interface ProjectCardProps {
  title: string;
  src: any;
  categories: Array<string>;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  src,
  categories,
  description,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative h-64 sm:h-72 lg:h-80 w-10/12 sm:w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-lg overflow-hidden shadow-blue dark:shadow-dark-gray"
    >
      {/* Image of the project */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Info that appears when you hover */}
      <div className="w-full h-full absolute top-0 left-0 p-6 lg:p-8 bg-primary-100 dark:bg-primary-500 bg-opacity-90 dark:bg-opacity-80 flex flex-col justify-between opacity-0 group-hover:opacity-100 duration-500 transition-all ease-in-out">
        <div>
          <div className="flex flex-wrap items-center mb-1.5 cursor-default">
            {categories.map((category) => (
              <CategoryPill name={category} key={category} className="mr-2" />
            ))}
          </div>
          <h2 className="font-bold text-sm sm:text-base lg:text-lg cursor-default mb-2">
            {title}
          </h2>
          <p className="text-xsm lg:text-sm mb-3 font-medium cursor-default">
            {description}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          aria-label={`Visitar ${title}`}
          rel="noopener"
          className="flex items-center w-full text-secondary-500 dark:text-font-white hover:text-primary-500 dark:hover:text-primary-100 duration-150 transition-all ease-in-out"
        >
          <p className="font-medium text-sm mr-3">Visitar</p>
          <LongArrow className="h-4" />
        </a>
      </div>
    </motion.div>
  );
}
