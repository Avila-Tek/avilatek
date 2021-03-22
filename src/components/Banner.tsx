import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import AtTheOffice from '../assets/illustrations/on-the-office-animate.svg';
import Waves from '../assets/images/waves.svg';

export default function Banner() {
  const [active, setActive] = useState<number>(0);
  const words = ['adipiscing', 'elit', 'sit'];

  const variants = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 30, opacity: 0 },
  };

  const bracketVariants = {
    animation: {
      opacity: [1, 0.4, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  // so that the words change
  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % words.length),
      6000
    );
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="bg-light-blue">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-2 md:gap-16 lg:gap-20 xl:gap-24 pt-14 md:pt-24 pb-12 px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-4/12 pt-14 md:pt-16">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold relative">
            <motion.span
              variants={bracketVariants}
              animate="animation"
              className="text-primary-300 absolute -top-1 -left-7"
            >
              [
            </motion.span>
            Lorem ipsum dolor sit amet, consectetur{' '}
            {/* Changing words animation */}
            <AnimatePresence exitBeforeEnter>
              {words.map((word, idx) => (
                <>
                  {active === idx && (
                    <motion.mark
                      key={idx}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      className="inline-block bg-primary-300 bg-opacity-50 pb-3 leading-0"
                    >
                      {word}
                    </motion.mark>
                  )}
                </>
              ))}
            </AnimatePresence>
            <motion.span
              variants={bracketVariants}
              animate="animation"
              className="text-primary-300 absolute bottom-0 -right-5"
            >
              ]
            </motion.span>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
            id hac.{' '}
          </p>
          <Button
            type="button"
            onClick={() => {
              console.log('conoci mas');
            }}
            className="px-10 md:px-14 text-sm lg:text-base"
          >
            Conoce más
          </Button>
        </div>
        {/* Animated Illustration */}
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 md:pt-8 lg:pt-0">
          <img
            src={AtTheOffice}
            alt="at the office illustration"
            className="w-full"
          />
        </div>
      </div>
      {/* Waves */}
      <div className="w-full">
        <img src={Waves} alt="wave" className="w-full" />
      </div>
    </div>
  );
}
