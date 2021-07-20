import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from './common/Image';
import useLanguage from '../hooks/useLanguage';

const logos = [
  {
    src: 'logos/bigott.png',
    size: 'w-32 md:w-36 xl:w-40 mb-1',
  },
  {
    src: 'logos/continental-logo.png',
    size: 'w-48 md:w-52',
  },
  {
    src: 'logos/gno-logo.png',
  },
  {
    src: 'logos/bloop-logo.png',
    size: 'w-28 md:w-32',
  },
  {
    src: 'logos/new-habitat-village-logo.png',
    size: 'w-14 xl:w-16',
  },
  {
    src: 'logos/rockval.png',
  },
  {
    src: 'logos/bat.png',
    size: 'w-24 lg:w-28 mb-1',
  },
  {
    src: 'logos/ptck-logo.png',
    size: 'w-40 md:w-44 xl:w-48',
  },
  {
    src: 'logos/intergraph-logo.png',
  },
  {
    src: 'logos/habitat-venezuela.png',
  },
  {
    src: 'logos/bloopex.png',
    size: 'w-24 md:w-26',
  },
  {
    src: 'logos/hablemos-seguros-logo-1.png',
    size: 'w-44 xl:w-48',
  },
  {
    src: 'logos/jpg-logo.png',
  },
  {
    src: 'logos/new-pomelos-logo.png',
    size: 'w-36 md:w-40 xl:w-44',
  },
  {
    src: 'logos/psh-logo.png',
    size: 'w-28 xl:w-32',
  },
  {
    src: 'logos/grupo-mre-logo.png',
  },
  {
    src: 'logos/bodebar-logo.png',
    size: 'w-20 xl:w-24',
  },
];

interface LogoItemProps {
  src: any;
  size?: string;
}

function LogoItem({ src, size }: LogoItemProps) {
  return (
    <div className="flex items-center justify-center h-14 w-60 px-4">
      <Image
        filename={src}
        alt={src}
        className={`duration-200 transition-all filter-grayscale-dark dark:filter-grayscale-bright hover:filter-black dark:hover:filter-white ease-in-out ${
          size ?? 'w-32 md:w-36 xl:w-40'
        }`}
      />
    </div>
  );
}

export default function Clients() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const [clients, setClients] = React.useState([...logos, ...logos]);

  return (
    <section className="pt-28 md:pt-18 mb-48 lg:mb-56 -mt-12">
      <Fade duration={600} triggerOnce>
        <div className="w-full mb-12 sm:mb-14 px-16 md:px-36">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            {translation(language, 'clients.first')}{' '}
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'clients.mark')}
            </mark>{' '}
            {translation(language, 'clients.second')}{' '}
            <span className="text-primary-400">
              {translation(language, 'clients.span')}
            </span>
          </h1>
        </div>

        {/* slider */}
        {/* bg-medium-blue dark:bg-medium-gray bg-opacity-30 dark:bg-opacity-10 */}
        <div className="bg-medium-blue dark:bg-medium-gray bg-opacity-40 dark:bg-opacity-10 sm:rounded-full flex h-40 mx-auto w-full sm:w-9/12 overflow-hidden">
          {/* First slide track */}
          <div className="slide-track flex items-center">
            {clients.map(({ src, size }) => (
              <LogoItem key={src} src={src} size={size} />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
