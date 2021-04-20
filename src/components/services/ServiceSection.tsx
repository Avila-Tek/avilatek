import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import CardsStack, { Service } from './CardsStack';
import DaaS from '../../assets/illustrations/daas.svg';
import Development from '../../assets/illustrations/development.svg';
import Consulting from '../../assets/illustrations/consulting.svg';

export default function ServiceSection() {
  const services: Array<Service> = [
    {
      illustration: DaaS,
      title: 'Tu departamento de tecnología',
      description:
        'Si tienes un proyecto ambicioso y requieres de un equipo profesional, te ofrecemos nuestro servicio de Desarrollo como Servicio (DaaS), donde te asignamos un equipo con base a las necesidades para la ejecución y mantenimiento de tu proyecto.',
    },
    {
      illustration: Development,
      title: 'Marketing',
      description:
        'Si necesitas ayuda en el desarrollo de una campaña publicitaria de alcance masivo, tenemos el equipo ideal, haciendo análisis de tu cliente ideal para la focalización de publicidad, con técnicas como A/B testing que permiten iterar en publicidad que si funcione.',
    },
    {
      illustration: Consulting,
      title: 'Consultorías',
      description:
        'Ofrecemos estudio de exploración y análisis de datos para mejoras en tu negocio, aumento de ventas, mejorar experiencia de usuario, mejoras en performance y más.',
    },
  ];

  return (
    // gap-20 xl:gap-28
    <section
      id="services"
      className="pt-24 md:pt-56 -mt-24 md:-mt-56 w-full pb-96 flex flex-col md:flex-row px-14 lg:px-24 items-center justify-center relative z-10 overflow-hidden"
    >
      <div className="w-10/12 md:w-4/12 mb-20 md:mb-0 mr-0 md:mr-20 xl:mr-28">
        <Fade cascade triggerOnce>
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Nuestros <span className="text-primary-400">servicios</span> a la{' '}
            <mark className="text-font0-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              medida
            </mark>{' '}
            de tu negocio
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base">
            Te ofrecemos los siguientes servicios para llevar tu negocio al
            siguiente nivel.
          </p>
          <Link
            to="#contact"
            aria-label="Cotiza tu proyecto en servicios"
            className="text-font-white bg-primary-400 hover:bg-primary-300 py-1 rounded-full active:bg-primary-500 px-8 md:px-10 lg:px-12 text-sm lg:text-base"
          >
            Cotiza tu proyecto
          </Link>
        </Fade>
      </div>
      <Fade triggerOnce>
        <CardsStack services={services} />
      </Fade>
      <div className="absolute top-32 right-1/2 rounded-blob w-80 md:w-3/12 h-104 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );
}
