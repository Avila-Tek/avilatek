import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';
import Image from './common/Image';

const logos = [
  {
    src: 'logos/bat.png',
    size: 'w-24 lg:w-28 mb-1 pl-2 sm:pl-0',
  },
  {
    src: 'logos/bigott.png',
    size: 'w-36 md:w-40 xl:w-44 mb-1',
  },
  {
    src: 'logos/bloop-logo.png',
    size: 'w-28 xl:w-32',
  },
  {
    src: 'logos/bloopex.png',
    size: 'w-24 md:w-28',
  },
  {
    src: 'logos/continental-logo.png',
    size: 'w-48 md:w-52 xl:w-60',
  },
  {
    src: 'logos/pomelos-logo.png',
    size: 'w-32 xl:w-40',
  },
  {
    src: 'logos/habitat-venezuela.png',
  },
  {
    src: 'logos/habitat-village.png',
  },
  {
    src: 'logos/rockval.png',
  },
  {
    src: 'logos/the-grint.png',
  },
];

interface LogoItemProps {
  src: any;
  size?: string;
  className?: string;
}

function LogoItem({ src, className, size }: LogoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        filename={src}
        alt={src}
        className={`mx-8 xl:mx-9 duration-200 transition-all filter-logo-light dark:filter-grayscale-bright hover:filter-drop-shadow dark:hover:filter-none ease-in-out ${className} ${
          size ?? 'w-32 md:w-36 xl:w-40'
        }`}
      />
    </motion.div>
  );
}

export default function Clients() {
  const [clients, setClients] = React.useState([...logos]);

  const rotate = (change: number) => {
    const { length } = clients;

    setClients((prev) => {
      if (change === -1) {
        return prev.map((_, idx) => prev[(idx + change + length) % length]);
      }
      return prev.map((_, idx) => prev[(idx + change) % length]);
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => rotate(1), 6000);
    return () => clearInterval(interval);
  }, [clients]);

  return (
    <section className="pt-28 md:pt-18 mb-52 lg:mb-72 -mt-12">
      <Fade triggerOnce>
        <div className="w-full mb-16 sm:mb-20 px-16 md:px-36">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Conoce{' '}
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              algunos
            </mark>{' '}
            de nuestros <span className="text-primary-400">clientes </span>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center text-dark-blue dark:text-medium-gray px-16 md:px-28">
          {/* Left arrow btn */}
          <button
            type="button"
            className="focus:ring-0 focus:outline-none hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
            onClick={() => rotate(-1)}
            aria-label="Retroceder en clientes"
          >
            <LeftArrow className="h-6 w-6 lg:h-7 lg:w-7" />
          </button>

          {/* Carousel, gap-14 xl:gap-16 */}
          <div className="bg-medium-blue dark:bg-medium-gray bg-opacity-40 dark:bg-opacity-30 rounded-full duration-500 transition-all h-36 w-full md:w-11/12 xl:w-9/12 flex items-center justify-center mx-8 lg:mx-12">
            <AnimatePresence>
              {clients.map(({ src, size }, idx) => (
                <div key={src}>
                  {0 === idx ? <LogoItem src={src} size={size} /> : null}
                  {1 === idx ? (
                    <LogoItem
                      src={src}
                      size={size}
                      className="hidden sm:block"
                    />
                  ) : null}
                  {2 === idx ? (
                    <LogoItem
                      src={src}
                      size={size}
                      className="hidden lg:block"
                    />
                  ) : null}
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right arrow btn */}
          <button
            type="button"
            className="focus:ring-0 focus:outline-none hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
            onClick={() => rotate(1)}
            aria-label="Avanzar en clientes"
          >
            <RightArrow className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        </div>
      </Fade>
    </section>
  );
}
