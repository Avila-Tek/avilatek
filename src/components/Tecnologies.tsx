import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';
import ReactLogo from '../assets/images/technologies/react.png';
import NextJSLogo from '../assets/images/technologies/nextjs.png';
import GatsbyLogo from '../assets/images/technologies/gatsby.png';
import GraphQLLogo from '../assets/images/technologies/graphql.png';
import AndroidLogo from '../assets/images/technologies/android.png';
import iOSLogo from '../assets/images/technologies/ios.png';

const logos = [
  {
    src: ReactLogo,
    name: 'ReactJS',
  },
  {
    src: NextJSLogo,
    name: 'NextJS',
  },
  {
    src: GatsbyLogo,
    name: 'Gatsby',
  },
  {
    src: GraphQLLogo,
    name: 'GraphQL',
  },
  {
    src: AndroidLogo,
    name: 'Android',
  },
  {
    src: iOSLogo,
    name: 'iOS',
  },
];

interface LogoItemProps {
  src: any; // ! find out what type is src
  name: string;
  className?: string;
}

function LogoItem({ src, name, className }: LogoItemProps) {
  return (
    <motion.img
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
      src={src}
      alt={name}
      className={`mx-7 xl:mx-8 duration-150 transition-all filter-grayscale hover:filter-none ease-in-out ${
        name === 'Android' ? 'h-5 md:h-6 xl:h-7' : 'h-10 lg:h-12'
      } ${className}`}
    />
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
    <section className="pt-16 md:pt-12 mb-52 lg:mb-72">
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
          <div className="duration-500 transition-all w-11/12 md:w-9/12 flex items-center justify-center mx-12">
            <AnimatePresence>
              {technologies.map(({ src, name }, idx) => (
                <>
                  {0 === idx ? (
                    <LogoItem src={src} name={name} key={name} />
                  ) : null}
                  {1 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className="hidden sm:block"
                      key={name}
                    />
                  ) : null}
                  {2 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className="hidden lg:block"
                      key={name}
                    />
                  ) : null}
                  {3 === idx ? (
                    <LogoItem
                      src={src}
                      name={name}
                      className="hidden xl:block"
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
