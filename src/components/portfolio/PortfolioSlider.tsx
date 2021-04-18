import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryPill from './CategoryPill';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import Monitor from '../../assets/images/monitor.png';

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
  const [active, setActive] = React.useState<number>(0);
  const { length } = projects;

  const changeSlide = (idx: number) => {
    setActive(idx);
  };

  // Slider change automatically
  React.useEffect(() => {
    const interval = setInterval(
      () => changeSlide((active + 1) % projects.length),
      10000
    );
    return () => clearInterval(interval);
  }, [active]);

  return (
    // gap-12 md:gap-8 lg:gap-16
    <div className="w-10/12 md:w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center mt-12 md:mt-16">
      {/* Slider buttons */}
      <div className="flex md:flex-col md:h-full justify-center items-center">
        <button
          type="button"
          onClick={() => changeSlide((active - 1 + length) % length)}
          className="mr-3 md:mr-0 md:mb-3 focus:ring-0 focus:outline-none text-medium-blue dark:text-dark-gra hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
          aria-label="Retroceder en el portafolio"
        >
          <LeftArrow className="h-5 w-5 transform md:rotate-90" />
        </button>
        {projects.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label="Numero de proyecto"
            onClick={() => changeSlide(idx)}
            className={`rounded-full h-2 w-2 mx-1 md:mx-0 md:my-1 ${
              active === idx
                ? 'bg-primary-300'
                : 'bg-medium-blue dark:bg-medium-gray hover:bg-primary-100'
            }`}
          />
        ))}
        <button
          type="button"
          onClick={() => changeSlide((active + 1) % length)}
          className="ml-3 md:ml-0 md:mt-3 focus:ring-0 focus:outline-none text-medium-blue dark:text-dark-gra hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
          aria-label="Avanzar en el portafolio"
        >
          <RightArrow className="transform md:rotate-90 h-5 w-5" />
        </button>
      </div>

      {/* Project details */}
      <AnimatePresence>
        {projects.map(({ title, categories, description, link }, idx) => (
          <>
            {active === idx ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-10/12 md:w-4/12 xl:w-4/12 my-12 md:my-0 mx-0 md:ml-7 md:mr-6 lg:mx-8 xl:mx-16"
                key={title}
              >
                {/* Categories */}
                <div className="flex flex-wrap items-center mb-3">
                  {categories.map((category) => (
                    <CategoryPill
                      name={category}
                      key={category}
                      className="mr-2"
                    />
                  ))}
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-primary-500 dark:text-primary-400 font-bold">
                  {title}
                </h2>
                <p className="text-sm xl:text-base my-4 lg:my-6">
                  {description}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Ir a ${title}`}
                  className="text-xs sm:text-sm lg:text-base px-8 text-font-white bg-primary-400 hover:bg-primary-300 py-1 rounded-full active:bg-primary-500"
                >
                  Visitar
                </a>
              </motion.div>
            ) : null}
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
        <div className="absolute top-2 z-10 rounded-2xl h-44 sm:h-52 lg:h-72 xl:h-80 w-full px-1 overflow-hidden">
          <AnimatePresence>
            {projects.map(({ title, src }, idx) => (
              <>
                {active === idx ? (
                  <motion.img
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : null}
              </>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
