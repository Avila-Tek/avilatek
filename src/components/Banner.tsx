import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import Waves from './icons/Waves';
import AtTheOffice from './icons/OnTheOffice';
import RotatingTriangle from './icons/RotatingTriangle';
import Line from './icons/Line';
import useLanguage from '../hooks/useLanguage';
import useActiveLink from '../hooks/useActiveLink';

export default function Banner() {
  const [, setActiveLink] = useActiveLink();
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const [active, setActive] = React.useState<number>(0);
  const words = [...translation(language, 'homeBanner.words')];

  // so that the words change
  React.useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % words.length),
      7000
    );
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="min-h-screen bg-light-blue dark:bg-dark-gray flex flex-col justify-between pt-12 transition duration-300 ease-in-out">
      <Waypoint
        onEnter={() => {
          setActiveLink(`/${language === 'es' ? '' : `${language}/`}`);
        }}
      />
      <div className="relative h-third flex flex-col-reverse md:flex-row justify-center items-center pt-16 md:pt-20 pb-12 px-10 md:px-12 lg:px-14 xl:px-18">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 pt-4 md:pt-10 lg:pt-12 z-10">
          <Fade duration={600} triggerOnce cascade>
            <div className="h-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold relative">
                {translation(language, 'homeBanner.title')}{' '}
                {/* Changing words animation */}
                <AnimatePresence exitBeforeEnter>
                  {words.map((word, idx) => (
                    <React.Fragment key={word}>
                      {active === idx ? (
                        <motion.span
                          key={word}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.7 }}
                          className="word break-words inline ml-1 text-font-black text-font-dark dark:text-font-white"
                        >
                          {word}
                        </motion.span>
                      ) : null}
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </h1>
            </div>
            <p className="mt-6 xl:mt-10 mb-6 text-2sm lg:text-2base">
              {translation(language, 'homeBanner.description')}
            </p>
            <Link
              to={`/${language === 'es' ? '' : `${language}/`}#contact`}
              aria-label="Boton de cotiza tu proyecto"
              className="px-6 md:px-8 py-1 sm:py-1.5 text-2sm lg:text-base text-font-white font-medium bg-primary-400 hover:bg-primary-300 rounded-full focus:outline-none active:bg-primary-500 disabled:opacity-50 disabled:bg-primary-500 cursor-pointer"
            >
              {translation(language, 'homeBanner.button')}
            </Link>
          </Fade>
        </div>
        {/* Animated Illustration */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 mx-0 md:ml-8 xl:-mr-6 z-10">
          <Fade duration={600} triggerOnce>
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
      <div className="w-full mt-16 md:mt-8">
        <Waves className="w-full h-full -mb-2" />
      </div>
    </div>
  );
}
