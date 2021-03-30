import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

export type Service = {
  illustration: any;
  title: string;
  description: string;
};

interface CardsStackProps {
  services: Array<Service>;
}

export default function CardsStack({ services: _services }: CardsStackProps) {
  const [services, setServices] = useState<Array<Service>>(_services);
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
    <div className="relative w-60 h-72 lg:w-80 lg:h-80 mt-14 sm:mt-20 md:mt-0">
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
  );
}
