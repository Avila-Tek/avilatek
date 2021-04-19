import React from 'react';
import ServiceCard from './ServiceCard';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

export type Service = {
  illustration: any;
  title: string;
  description: string;
};

interface CardsStackProps {
  services: Array<Service>;
}

export default function CardsStack({ services: _services }: CardsStackProps) {
  const [services, setServices] = React.useState<Array<Service>>(_services);
  const stackStyles = [
    'first-flip-card z-30',
    '-top-4 ml-4 z-20',
    '-top-8 -left-5 z-10',
  ];

  const rotate = () => {
    const { length } = services;

    setServices((prev) =>
      prev.map((_, idx) => prev[(idx + 1 + length) % length])
    );
  };

  return (
    <>
      <div className="relative w-60 h-72 lg:w-64 lg:h-80 mt-10 md:mt-0">
        {services.map(({ illustration, title, description }, idx) => (
          <ServiceCard
            key={title}
            illustration={illustration}
            title={title}
            description={description}
            cardClass={stackStyles[idx]}
            idx={idx}
            rotate={rotate}
          />
        ))}
      </div>
      <div className="mt-14 w-full flex justify-center text-medium-blue dark:text-medium-gray">
        <div className="dark:text-dark-gray duration-150 transition-all ease-in-out cursor-not-allowed">
          <LeftArrow className="h-7 w-7 mr-4" />
        </div>
        <button
          type="button"
          className="focus:ring-0 focus:outline-none hover:text-primary-300 active:text-primary-500 duration-150 transition-all ease-in-out"
          onClick={rotate}
          aria-label="Avanzar en servicios"
        >
          <RightArrow className="h-7 w-7" />
        </button>
      </div>
    </>
  );
}
