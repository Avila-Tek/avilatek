import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import CardsStack, { Service } from './CardsStack';
import useLanguage from '../../hooks/useLanguage';
import DaaS from '../../assets/illustrations/daas.svg';
import Development from '../../assets/illustrations/development.svg';
import Consulting from '../../assets/illustrations/consulting.svg';

export default function ServiceSection() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const services: Array<Service> = [
    {
      illustration: DaaS,
      title: translation(language, 'services.department.title'),
      description: translation(language, 'services.department.description'),
    },
    {
      illustration: Development,
      title: translation(language, 'services.marketing.title'),
      description: translation(language, 'services.marketing.description'),
    },
    {
      illustration: Consulting,
      title: translation(language, 'services.consulting.title'),
      description: translation(language, 'services.consulting.description'),
    },
  ];

  return (
    // gap-20 xl:gap-28
    <section
      id="services"
      className="pt-24 md:pt-56 -mt-24 md:-mt-56 w-full pb-48 md:pb-64 flex flex-col md:flex-row px-14 lg:px-24 items-center justify-center relative z-10 overflow-hidden"
    >
      <div className="w-10/12 md:w-4/12 mb-20 md:mb-0 mr-0 md:mr-20 xl:mr-28 -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20">
        <Fade cascade triggerOnce>
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            {translation(language, 'services.first')}{' '}
            <span className="text-primary-400">
              {translation(language, 'services.span')}
            </span>{' '}
            {translation(language, 'services.second')}{' '}
            <mark className="text-font0-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'services.mark')}
            </mark>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base">
            {translation(language, 'services.text')}
          </p>
          <Link
            to={`/${language === 'es' ? '' : language + '/'}#contact`}
            aria-label="Cotiza tu proyecto en servicios"
            className="text-font-white bg-primary-400 hover:bg-primary-300 py-1.5 rounded-full active:bg-primary-500 px-8 md:px-10 lg:px-12 text-sm lg:text-base"
          >
            {translation(language, 'services.button')}
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
