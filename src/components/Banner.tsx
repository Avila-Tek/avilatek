import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Waves from './icons/Waves';
import AtTheOffice from './icons/OnTheOffice';
import RotatingTriangle from './icons/RotatingTriangle';
import Line from './icons/Line';

export default function Banner() {
  const [active, setActive] = React.useState<number>(0);
  const words = [
    'desarrollamos apps',
    'desarrollamos sistemas',
    'hacemos marketing',
    'hacemos consultorías',
  ];

  const variants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
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
  React.useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % words.length),
      6000
    );
    return () => clearInterval(interval);
  }, [active]);

  // gap-2 md:gap-16 lg:gap-20 xl:gap-24
  return (
    <div className="min-h-screen bg-light-blue dark:bg-dark-gray flex flex-col justify-between pt-12">
      <div className="relative h-third flex flex-col-reverse md:flex-row justify-center items-center pt-16 md:pt-24 pb-12 px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-4/12 pt-4 md:pt-10 lg:pt-16 xl:pt-16 z-10">
          <Fade triggerOnce cascade>
            <div className="h-18 sm:h-16 md:h-20 lg:h-24">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold relative">
                <motion.span
                  variants={bracketVariants}
                  animate="animation"
                  className="text-primary-400 absolute -top-1 -left-7"
                >
                  [
                </motion.span>
                Lleva tu negocio al mundo digital,{' '}
                {/* Changing words animation */}
                <AnimatePresence exitBeforeEnter>
                  {words.map((word, idx) => (
                    <>
                      {active === idx ? (
                        <motion.p
                          key={word}
                          variants={variants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.5 }}
                          className="break-all text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 text-font-dark dark:text-font-white"
                        >
                          {word}
                        </motion.p>
                      ) : null}
                    </>
                  ))}
                </AnimatePresence>
                <motion.span
                  variants={bracketVariants}
                  animate="animation"
                  className="text-primary-400 absolute bottom-0 -right-7 transition-all duration-300 ease-in-out"
                >
                  ]
                </motion.span>
              </h1>
            </div>
            <p className="my-5 lg:my-7 xl:my-8 text-sm lg:text-base">
              Desarrollamos tecnologías innovadoras.{' '}
            </p>
            <Link
              to="/#contact"
              aria-label="Boton de cotiza tu proyecto"
              className="px-6 md:px-8 text-sm lg:text-base text-font-white bg-primary-400 hover:bg-primary-300 py-1 rounded-full focus:outline-none active:bg-primary-500 disabled:opacity-50 disabled:bg-primary-500 cursor-pointer"
            >
              Cotiza tu proyecto
            </Link>
          </Fade>
        </div>
        {/* Animated Illustration */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 ml-0 md:ml-16 lg:ml-20 xl:ml-24 z-10">
          <Fade triggerOnce>
            <AtTheOffice />
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
