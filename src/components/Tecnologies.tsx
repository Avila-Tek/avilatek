import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArroz';
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
  src: any; // ! find out what class is src
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
      key={name}
      className={`duration-150 transition-all filter-grayscale hover:filter-none ease-in-out ${
        name === 'Android' ? 'h-6 md:h-7 xl:h-8' : 'h-10 md:h-12'
      } ${className}`}
    />
  );
}

export default function Technologies() {
  const [technologies, setTechnologies] = useState([...logos]);

  const rotate = (change: number) => {
    const { length } = technologies;

    setTechnologies((prev) => {
      if (change === -1) {
        return prev.map((_, idx) => prev[(idx + change + length) % length]);
      }
      return prev.map((_, idx) => prev[(idx + change) % length]);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => rotate(1), 6000);
    return () => clearInterval(interval);
  }, [technologies]);

  return (
    <section className="bg-light pt-24 md:pt-10 pb-28 lg:pb-40">
      <div className="w-full flex justify-center items-center text-medium-blue px-16 md:px-28">
        {/* Left arrow btn */}
        <button
          type="button"
          className="focus:ring-0 focus:outline-none hover:text-primary-300 duration-150 transition-all ease-in-out"
          onClick={() => rotate(-1)}
        >
          <LeftArrow className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Carousel */}
        <ul className="duration-500 transition-all w-11/12 md:w-10/12 flex gap-14 xl:gap-16 items-center justify-center mx-12">
          <AnimatePresence>
            {technologies.map(({ src, name }, idx) => (
              <>
                {0 === idx && <LogoItem src={src} name={name} />}
                {1 === idx && (
                  <LogoItem src={src} name={name} className="hidden sm:block" />
                )}
                {2 === idx && (
                  <LogoItem src={src} name={name} className="hidden lg:block" />
                )}
                {3 === idx && (
                  <LogoItem src={src} name={name} className="hidden xl:block" />
                )}
              </>
            ))}
          </AnimatePresence>
        </ul>

        {/* Left arrow btn */}
        <button
          type="button"
          className="focus:ring-0 focus:outline-none hover:text-primary-300 duration-150 transition-all ease-in-out"
          onClick={() => rotate(1)}
        >
          <RightArrow className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </div>
    </section>
  );
}
