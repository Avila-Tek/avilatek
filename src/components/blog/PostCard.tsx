import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export type Post = {
  category?: string;
  title: string;
  id: string; // ? or maybe slug
  description?: string;
  author?: string;
  date?: Date;
  image?: any; // TODO define where will this be stored
};

interface PostCardProps {
  category?: string;
  title: string;
  id: string;
  description?: string;
  author?: string;
  date?: Date;
  image?: any;
}

export default function PostCard({
  id,
  title,
  author,
  category,
  date,
  description,
  image,
}: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      className="relative h-72 w-64 md:h-80 md:w-68 xl:h-88 xl:w-76 rounded-md shadow-blue dark:shadow-none bg-medium-blue dark:bg-dark-gray my-3 lg:my-4 mx-auto sm:mx-3 lg:mx-4 overflow-hidden"
    >
      {/* Post image */}
      <div className="w-full h-1/2">
        <StaticImage
          src="../../assets/images/projects/continental.png"
          alt="random image"
          placeholder="blurred"
          layout="fullWidth"
          className="w-full h-full"
        />
      </div>
      {/* Post details */}
      <div className="absolute bottom-6 left-6 p-5 flex flex-col items-center justify-between text-center rounded-md w-10/12 h-48 md:h-52 xl:h-56 bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none">
        {/* Category and title are in same tag so it looks neater */}
        <div className="w-full">
          <h3 className="text-xs lg:text-xsm text-secondary-100 dark:text-neutral-300 mb-1.5 sm:mb-1">
            {category}
          </h3>
          <h2 className="second-line-clamp text-primary-500 dark:text-primary-300 text-sm md:text-base xl:text-2base font-medium leading-snug sm:leading-tight">
            {title}
          </h2>
        </div>
        <p className="second-line-clamp xl:third-line-clamp text-xsm md:text-sm leading-snug">
          {description}
        </p>
        {/* Author and date */}
        <div className="text-xs lg:text-xsm flex items-center text-secondary-50 dark:text-neutral-400">
          <h3>{author}</h3>
          <p className="mx-1 md:mx-2">•</p>
          <h4>
            {dayjs(new Date(date).toISOString().split('T')[0]).format(
              'DD MMM, YYYY'
            )}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
