import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import Waves from '../icons/Waves';
import FolderGirl from '../../assets/illustrations/documents-animate.svg';

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
    <div className="bg-light-blue dark:bg-dark-gray">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start pt-14 md:pt-24 pb-8 md:pb-6 px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-4/12 pt-2 md:pt-16">
          <Fade triggerOnce cascade>
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold relative">
              <motion.span
                variants={bracketVariants}
                animate="animation"
                className="text-primary-400 absolute -top-1 -left-7"
              >
                [
              </motion.span>
              Frase relacionada al{' '}
              <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
                portafolio
              </mark>{' '}
              de aqui
              <motion.span
                variants={bracketVariants}
                animate="animation"
                className="text-primary-400 absolute bottom-0 -right-5"
              >
                ]
              </motion.span>
            </h1>
            <p className="my-6 text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in
              sit id hac.{' '}
            </p>
            <a
              href="https://bit.ly/avila-tek"
              target="_blank"
              className="px-10 md:px-14 text-sm lg:text-base text-font-white bg-primary-400 hover:bg-primary-300 py-1 rounded-full focus:outline-none active:bg-primary-500 disabled:opacity-50 disabled:bg-primary-500"
            >
              Trabaja con nosotros
            </a>
          </Fade>
        </div>
        {/* Animated Illustration */}
        <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mx-auto md:mr-0 md:ml-16 lg:ml-20 xl:ml-24">
          <Fade triggerOnce>
            <img
              src={FolderGirl}
              alt="at the office illustration"
              className="w-full"
            />
          </Fade>
        </div>
      </div>
      {/* Waves */}
      <div className="w-full">
        <Waves className="w-full h-full" />
      </div>
    </div>
  );
}
