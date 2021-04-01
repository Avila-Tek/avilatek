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
    <div className="group relative h-56 sm:h-60 lg:h-64 w-10/12 sm:w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-blue">
      {/* Image of the project */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Info that appears when you hover */}
      <div
        className="w-full h-full absolute top-0 left-0 p-7 bg-primary-100 bg-opacity-80 flex flex-col justify-between opacity-0 group-hover:opacity-100 duration-500 transition-all ease-in-out"
      >
        <div>
          <h1 className="font-bold text-base md:text-lg cursor-default">{title}</h1>
          <p className="text-sm mt-2 mb-4 font-medium leading-tight cursor-default">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-4 -ml-1 cursor-default">
            {categories.map((category) => (
              <CategoryPill name={category} />
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="flex items-center w-full text-secondary-500 hover:text-primary-500 duration-150 transition-all ease-in-out"
        >
          <p className="font-medium text-sm mr-3">Visitar</p>
          <LongArrow className="h-4" />
        </a>
      </div>
    </div>
  );
}
