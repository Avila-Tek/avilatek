import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Image from '../common/Image';

dayjs.locale('es');

export type Post = {
  category?: string;
  title: string;
  subtitle?: string;
  slug: string; // ? or maybe slug
  description?: string;
  author?: string;
  date?: Date;
  image?: string;
  authorImage?: string;
  authorDescription?: string;
  html?: any;
};

interface PostCardProps {
  category?: string;
  title: string;
  slug: string;
  description?: string;
  author?: string;
  date?: Date;
  image?: string;
  authorImage?: string;
}

export default function PostCard({
  slug,
  title,
  author,
  category,
  date,
  description,
  image,
  authorImage,
}: PostCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
        className="relative h-68 w-60 sm:h-72 sm:w-64 md:h-80 md:w-68 xl:h-88 xl:w-76 rounded-md shadow-blue dark:shadow-none bg-medium-blue dark:bg-dark-gray my-3 lg:my-4 mx-auto sm:mx-3 lg:mx-4 overflow-hidden transition-all duration-300 ease-in-out"
      >
        {/* Post image */}
        <div className="w-full h-1/2">
          <Image
            filename={image}
            alt={title}
            className="w-full h-full"
          />
          {/* <StaticImage
            src="../../assets/images/projects/continental.png"
            alt="random image"
            placeholder="blurred"
            layout="fullWidth"
            className="w-full h-full"
          /> */}
        </div>
        {/* Post details */}
        <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 p-5 flex flex-col items-center justify-between text-center rounded-md w-10/12 h-48 md:h-52 xl:h-56 bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-none transition-all duration-300 ease-in-out">
          {/* Category and title are in same tag so it looks neater */}
          <div className="w-full">
            <h3 className="text-xs xl:text-xsm text-secondary-100 dark:text-neutral-300 mb-1.5 sm:mb-1 transition-all duration-300 ease-in-out">
              {category}
            </h3>
            <h2 className="third-line-clamp text-primary-500 dark:text-primary-300 text-sm md:text-2sm xl:text-base font-medium leading-snug transition-all duration-300 ease-in-out">
              {title}
            </h2>
          </div>
          <p className="second-line-clamp lg:third-line-clamp text-xs sm:text-xsm xl:text-sm leading-snug">
            {description}
          </p>
          {/* Author and date */}
          <div className="text-xs xl:text-xsm flex items-center text-secondary-50 dark:text-neutral-400 transition-all duration-300 ease-in-out">
            <h3>{author}</h3>
            <p className="mx-1 lg:mx-2">•</p>
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
