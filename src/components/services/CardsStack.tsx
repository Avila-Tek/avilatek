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

export default function CardsStack({ services }: CardsStackProps) {
  const [active, setActive] = useState<number>(0);
  const stackStyles = [
    'first-flip-card z-30 hover:w-96',
    'transform rotate-6 z-20',
    'transform -rotate-12 z-10',
  ];

  return (
    <div className="relative w-80 h-80">
      {services.map(({ illustration, title, description }, idx) => (
        <ServiceCard
          key={title}
          illustration={illustration}
          title={title}
          description={description}
          cardClass={stackStyles[idx]}
        />
      ))}
    </div>
  );
}
