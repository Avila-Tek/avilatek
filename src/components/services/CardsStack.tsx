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
    'first-flip-card z-30 hover:w-96',
    'transform rotate-6 z-20',
    'transform -rotate-12 z-10',
  ];

  // rotate-6 => 6deg
  // -rotate-12 => -12deg

  const rotate = () => {
    const { length } = services;

    setServices((prev) =>
      prev.map((_, idx) => prev[(idx + 1 + length) % length])
    );
  };

  return (
    <div className="relative w-60 h-72 lg:w-80 lg:h-80">
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
