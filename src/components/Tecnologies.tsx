import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';
import Image from './Image';

const logos: Array<{ src: string; name: string; className: string }> = [
  {
    src: 'react.png',
    name: 'ReactJS',
    className: 'w-32',
  },
  {
    src: 'nextjs.png',
    name: 'NextJS',
    className: 'w-24',
  },
  {
    src: 'gatsby.png',
    name: 'Gatsby',
    className: 'w-40',
  },
  {
    src: 'graphql.png',
    name: 'GraphQL',
    className: 'w-40',
  },
  {
    src: 'android.png',
    name: 'Android',
    className: 'w-40',
  },
  {
    src: 'ios.png',
    name: 'iOS',
    className: 'w-24',
  },
];

interface LogoItemProps {
  src: any; // ! find out what type is src
  name: string;
  className?: string;
}

function LogoItem({ src, name, className }: LogoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        filename={src}
        alt={name}
        className={`mx-7 xl:mx-8 duration-150 transition-all filter-grayscale dark:filter-grayscale-bright hover:filter-none ease-in-out ${className}`}
      />
    </motion.div>
  );
}

export default function Technologies() {
  const [technologies, setTechnologies] = React.useState([...logos]);

  const rotate = (change: number) => {
    const { length } = technologies;

    setTechnologies((prev) => {
      if (change === -1) {
        return prev.map((_, idx) => prev[(idx + change + length) % length]);
      }
      return prev.map((_, idx) => prev[(idx + change) % length]);
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => rotate(1), 6000);
    return () => clearInterval(interval);
  }, [technologies]);

  return (
    <section className="pt-16 md:pt-12 mb-48 lg:mb-68">
      <Fade triggerOnce>
        <div className="w-full mb-16 sm:mb-20 px-16 md:px-36">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Las{' '}
            <mark className="text-font0-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              mejores
            </mark>{' '}
            <span className="text-primary-400">tecnologías </span> del mercado
          </h1>
        </div>
        <div className="w-full flex justify-center items-center text-dark-blue dark:text-medium-gray px-16 md:px-28">
          {/* Left arrow btn */}
          <button
            type="button"
            className="focus:ring-0 focus:outline-none hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
            onClick={() => rotate(-1)}
            aria-label="Retroceder en tecnologias"
          >
            <LeftArrow className="h-6 w-6 lg:h-7 lg:w-7" />
          </button>
          {/* Carousel, gap-14 xl:gap-16 */}
          <div className="duration-500 transition-all w-11/12 md:w-9/12 h-18 flex items-center justify-center mx-12">
            <AnimatePresence>
              {technologies.map(({ src, name, className }, idx) => (
                <>
                  {0 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      key={name}
                      className={className}
                    />
                  ) : null}
                  {1 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className={`hidden sm:block ${className}`}
                      key={name}
                    />
                  ) : null}
                  {2 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className={`hidden lg:block ${className}`}
                      key={name}
                    />
                  ) : null}
                  {3 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className={`hidden xl:block ${className}`}
                      key={name}
                    />
                  ) : null}
                </>
              ))}
            </AnimatePresence>
          </div>
          {/* Right arrow btn */}
          <button
            type="button"
            className="focus:ring-0 focus:outline-none hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
            onClick={() => rotate(1)}
            aria-label="Avanzar en tecnologias"
          >
            <RightArrow className="h-6 w-6 lg:h-7 lg:w-7" />
          </button>
        </div>
      </Fade>
    </section>
  );
}
