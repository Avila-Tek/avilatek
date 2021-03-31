import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Monitor from '../../assets/images/monitor.png';
import CategoryPill from './CategoryPill';

export type Project = {
  title: string;
  src: any;
  categories: Array<string>;
  description: string;
  link: string;
};

interface PortfolioSliderProps {
  projects: Array<Project>; // it must be the newest or most important projects, so around 4 is okay
}

export default function PortfolioSlider({ projects }: PortfolioSliderProps) {
  const [active, setActive] = useState<number>(0);

  const changeSlide = (idx: number) => {
    setActive(idx);
  };

  // Slider change automatically
  useEffect(() => {
    const interval = setInterval(
      () => changeSlide((active + 1) % projects.length),
      10000
    );
    return () => clearInterval(interval);
  }, [active]);

  return (
    // gap-12 md:gap-8 lg:gap-16
    <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center mt-12 md:mt-0">
      {/* Slider buttons */}
      <div className="flex md:flex-col gap-3 md:h-full justify-center">
        {projects.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => changeSlide(idx)}
            className={`rounded-full h-2 w-2 ${
              active === idx
                ? 'bg-primary-300'
                : 'bg-medium-blue hover:bg-primary-100'
            }`}
          />
        ))}
      </div>

      {/* Project details */}
      <AnimatePresence>
        {projects.map(({ title, categories, description, link }, idx) => (
          <>
            {active === idx && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-10/12 md:w-4/12 lg:w-3/12 my-12 md:my-0 mx-0 md:mx-8 lg:mx-16"
                key={uuid()}
              >
                {/* Categories */}
                <div className="flex flex-wrap items-center gap-2 mb-3 -ml-1">
                  {categories.map((category) => (
                    <CategoryPill name={category} />
                  ))}
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-500 font-bold">
                  {title}
                </h1>
                <p className="text-sm lg:text-base my-4 lg:my-6">
                  {description}
                </p>
                <a
                  href={link}
                  target="_blank"
                  className="text-xs sm:text-sm lg:text-base px-8 text-font-white bg-primary-400 hover:bg-primary-300 py-1 rounded-full active:bg-primary-500"
                >
                  Visitar
                </a>
              </motion.div>
            )}
          </>
        ))}
      </AnimatePresence>

      {/* Project photo */}
      <div className="relative w-80 sm:w-96 lg:w-128 xl:w-144 h-64 sm:h-80 lg:h-96 xl:h-112 mx-auto md:mx-0 mt-0 md:mt-14">
        {/* Monitor */}
        <img
          src={Monitor}
          alt="MAC monitor"
          className="absolute top-0 left-0 z-20 w-full"
        />
        {/* The image */}
        <div className="absolute top-2 z-10 rounded-2xl h-44 sm:h-52 lg:h-72 xl:h-80 w-full pr-1 overflow-hidden">
          <AnimatePresence>
            {projects.map(({ title, src }, idx) => (
              <>
                {active === idx && (
                  <motion.img
                    key={uuid()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
