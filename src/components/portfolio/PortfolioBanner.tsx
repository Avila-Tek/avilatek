import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import Waves from '../icons/Waves';
import Documents from '../icons/Documents';
import Line from '../icons/Line';
import RotatingTriangle from '../icons/RotatingTriangle';

export default function Banner() {
  const bracketVariants = {
    animation: {
      opacity: [1, 0.4, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-light-blue dark:bg-dark-gray flex flex-col justify-between pt-12 transition duration-300 ease-in-out">
      <div className="relative h-third flex flex-col-reverse md:flex-row justify-center items-center md:items-start pt-14 md:pt-24 pb-8 md:pb-6 px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-4/12 pt-4 md:pt-24 lg:pt-20 z-10">
          <Fade triggerOnce cascade>
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold relative">
              <motion.span
                variants={bracketVariants}
                animate="animation"
                className="text-primary-400 absolute -top-1 -left-7"
              >
                [
              </motion.span>
              Conocer parte de nuestros{' '}
              <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
                proyectos
              </mark>
              <motion.span
                variants={bracketVariants}
                animate="animation"
                className="text-primary-400 absolute bottom-0 -right-5"
              >
                ]
              </motion.span>
            </h1>
            <p className="w-full my-6 text-sm lg:text-base">
              Proyectos desarollados a la medida con base a las necesidades de
              cada cliente.{' '}
            </p>
          </Fade>
        </div>
        {/* Animated Illustration */}
        <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mx-auto md:mr-0 md:ml-14 lg:ml-16 xl:ml-24 z-10">
          <Fade triggerOnce>
            <Documents />
          </Fade>
        </div>
        <RotatingTriangle className="top-12 right-8/12 md:right-1/2" />
        <RotatingTriangle className="right-2/12 top-5/12" />
        <RotatingTriangle className="bottom-1/12 left-5/12 md:left-3/12" />
        <RotatingTriangle className="top-28 left-1/12 hidden md:block" />
        <Line className="top-12 right-1/4 w-12" />
        <Line className="top-1/4 left-2/12 w-14 hidden md:block" />
        <Line className="bottom-3/12 md:bottom-1/12 left-2/12 md:left-5/12 w-10" />
        <Line className="bottom-0 right-2/12 md:right-1/12 w-12" />
      </div>
      {/* Waves */}
      <div className="w-full mt-8">
        <Waves className="w-full h-full -mb-2" />
      </div>
    </div>
  );
}
