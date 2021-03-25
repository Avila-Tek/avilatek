import React from 'react';
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
  return (
    <div>
      {services.map(({ illustration, title, description }) => (
        <ServiceCard
          key={title}
          illustration={illustration}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
