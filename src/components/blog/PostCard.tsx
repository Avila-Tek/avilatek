import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export type Post = {
  category?: string;
  title: string;
  subtitle?: string;
  slug: string; //
  description?: string;
  author?: string;
  coauthor?: string;
  date?: Date;
  image?: any;
  authorDescription?: string;
  html?: any;
};

interface PostCardProps {
  category?: string;
  title: string;
  slug: string;
  description?: string;
  author?: string;
  coauthor?: string;
  date?: Date;
  image?: any;
}

export default function PostCard({
  slug,
  title,
  author,
  category,
  date,
  description,
  image,
  coauthor,
}: PostCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
        className="relative h-80 w-72 sm:h-76 sm:w-68 md:h-80 md:w-68 xl:h-88 xl:w-76 rounded-md shadow-blue dark:shadow-none bg-medium-blue dark:bg-dark-gray my-3 lg:my-4 mx-auto sm:mx-3 lg:mx-4 overflow-hidden transition-all duration-300 ease-in-out"
      >
        {/* Post image */}
        <div className="w-full h-1/2">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Post details */}
        <div className="absolute bottom-6 left-6 p-5 flex flex-col items-center justify-between text-center rounded-md w-10/12 h-50 md:h-52 xl:h-56 bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none transition-all duration-300 ease-in-out">
          {/* Category and title are in same tag so it looks neater */}
          <div className="w-full">
            <h3 className="text-xs xl:text-xsm text-secondary-100 dark:text-neutral-300 mb-1 transition-all duration-300 ease-in-out">
              {category}
            </h3>
            <h2 className="third-line-clamp text-primary-500 dark:text-primary-300 text-xsm md:text-sm xl:text-base font-medium leading-snug md:leading-tight lg:leading-snug xl:leading-snug transition-all duration-300 ease-in-out">
              {title}
            </h2>
          </div>
          <p className="third-line-clamp text-xs md:text-xsm xl:text-sm leading-snug md:leading-snug xl:leading-snug">
            {description}
          </p>
          {/* Author and date */}
          <div className="text-xs sm:text-2xs xl:text-xs 2xl:text-xsm flex items-center text-secondary-50 dark:text-neutral-400 transition-all duration-300 ease-in-out">
            <div>
              <h3>{author}</h3>
              {/* {coauthor ? <h3 className="text-xs">& {coauthor}</h3> : null} */}
            </div>
            <p className="mx-1 lg:mx-1.5 2xl:mx-2">•</p>
            <h4>
              {dayjs(new Date(date).toISOString().split('T')[0]).format(
                'DD MMM, YYYY'
              )}
            </h4>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
