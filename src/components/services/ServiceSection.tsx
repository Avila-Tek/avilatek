import React from 'react';
import Button from '../ui/Button';
import DaaS from '../../assets/illustrations/daas.svg';
import Development from '../../assets/illustrations/development.svg';
import Consulting from '../../assets/illustrations/consulting.svg';
import CardsStack, { Service } from './CardsStack';

export default function ServiceSection() {
  const services: Array<Service> = [
    {
      illustration: DaaS,
      title: 'DaaS',
      description:
        'Nuestro servicio de “Development as a Service” te permite obtener un equipo de personas profesionales para tu empresa, entrenada y capacitada para desarrollar tu aplicación o sistema.',
    },
    {
      illustration: Development,
      title: 'Desarrollo de aplicaciones',
      description:
        'Elaboramos Apps para plataformas Web, iOS, Android, Windows y MacOS, en las mejores tecnologías tendencias del mercado.',
    },
    {
      illustration: Consulting,
      title: 'Consultorías',
      description:
        'Ofrecemos un servicio profesional con experiencia y conocimiento en tecnología y desarrollo de software.',
    },
  ];

  return (
    <section className="w-full mt-40 mb-56 flex gap-20 px-24 items-center justify-center">
      <div className="w-4/12">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
          Los mejores <span className="text-primary-500">servicios</span> a un{' '}
          <mark className="inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0">
            click de distancia
          </mark>
        </h1>
        <p className="mt-6 lg:mt-7 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
          id hac. Consectetur adipiscing elit. Urna in sit id hac.
        </p>
        <Button
          type="button"
          className="mt-6 lg:mt-7 px-8 md:px-10 lg:px-12"
          onClick={() => {
            console.log('solicite');
          }}
        >
          Solicitalos
        </Button>
      </div>
      <CardsStack services={services} />
    </section>
  );
}
