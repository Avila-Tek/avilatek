import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';
import Bat from '../assets/images/logos/bat.png';
import Bigott from '../assets/images/logos/bigott.png';
import Bloop from '../assets/images/logos/bloop.png';
import Bloopex from '../assets/images/logos/bloopex.png';
import Continental from '../assets/images/logos/continental.png';
import HabitatVenezuela from '../assets/images/logos/habitat-venezuela.png';
import HabitatVillage from '../assets/images/logos/habitat-village.png';
import Pomelos from '../assets/images/logos/pomelos.png';
import Rockval from '../assets/images/logos/rockval.png';
import Grint from '../assets/images/logos/the-grint.png';

const logos = [
  {
    src: Bat,
    size: 'w-32',
  },
  {
    src: Bigott,
    size: 'w-40 lg:w-44',
  },
  {
    src: Bloop,
    size: 'w-28 lg:w-32',
  },
  {
    src: Bloopex,
    size: 'w-28',
  },
  {
    src: Continental,
    size: 'w-56 lg:w-60',
  },
  {
    src: HabitatVenezuela,
  },
  {
    src: HabitatVillage,
  },
  {
    src: Pomelos,
  },
  {
    src: Rockval,
  },
  {
    src: Grint,
  },
];

interface LogoItemProps {
  src: any;
  size?: string;
  className?: string;
}

function LogoItem({ src, className, size }: LogoItemProps) {
  return (
    <motion.img
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
      src={src}
      alt={src}
      // w-28 lg:w-32
      className={`mx-8 duration-200 transition-all filter-grayscale hover:filter-drop-shadow dark:hover:filter-none ease-in-out ${className} ${
        size ?? 'w-36 lg:w-40'
      }`}
    />
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
    <section className="pt-28 md:pt-18 mb-52 lg:mb-80 xl:mb-104">
      <Fade triggerOnce>
        <div className="w-full mb-16 sm:mb-20 px-16 md:px-36">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Conoce{' '}
            <mark className="text-font0-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              algunos
            </mark>{' '}
            de nuestros <span className="text-primary-400">clientes </span>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center text-medium-blue dark:text-medium-gray px-16 md:px-28">
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
          <div className="bg-medium-blue dark:bg-medium-gray bg-opacity-70 dark:bg-opacity-20 rounded-full duration-500 transition-all h-36 w-11/12 md:w-10/12 flex items-center justify-center mx-12">
            <AnimatePresence>
              {clients.map(({ src, size }, idx) => (
                <>
                  {0 === idx ? (
                    <LogoItem src={src} key={src} size={size} />
                  ) : null}
                  {1 === idx ? (
                    <LogoItem
                      src={src}
                      size={size}
                      key={src}
                      className="hidden sm:block"
                    />
                  ) : null}
                  {2 === idx ? (
                    <LogoItem
                      src={src}
                      size={size}
                      key={src}
                      className="hidden lg:block"
                    />
                  ) : null}
                  {3 === idx ? (
                    <LogoItem
                      src={src}
                      size={size}
                      key={src}
                      className="hidden xl:block"
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
            aria-label="Avanzar en clientes"
          >
            <RightArrow className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        </div>
      </Fade>
    </section>
  );
}
