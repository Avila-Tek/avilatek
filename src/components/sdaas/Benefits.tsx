import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import useLanguage from '../../hooks/useLanguage';
import StartUp from '../icons/StartUp';
import BenefitCard, { Benefit } from './BenefitCard';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Benefits() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  const benefits: Array<Benefit> = [
    {
      name: translation(language, 'sdaas.benefits.business.title'),
      description: translation(language, 'sdaas.benefits.business.text'),
      icon: <StartUp />,
    },
    {
      name: translation(language, 'sdaas.benefits.time.title'),
      description: translation(language, 'sdaas.benefits.time.text'),
      icon: <StartUp />,
    },
    {
      name: translation(language, 'sdaas.benefits.scalability.title'),
      description: translation(language, 'sdaas.benefits.scalability.text'),
      icon: <StartUp />,
    },
    {
      name: translation(language, 'sdaas.benefits.fullTime.title'),
      description: translation(language, 'sdaas.benefits.fullTime.text'),
      icon: <StartUp />,
    },
    {
      name: translation(language, 'sdaas.benefits.pricing.title'),
      description: translation(language, 'sdaas.benefits.pricing.text'),
      icon: <StartUp />,
    },
    {
      name: translation(language, 'sdaas.benefits.cost.title'),
      description: translation(language, 'sdaas.benefits.cost.text'),
      icon: <StartUp />,
    },
  ];

  return (
    <section className="pb-40 md:pb-44 px-14 md:px-20 lg:px-28 xl:px-36 relative z-10 overflow-hidden">
      <Fade duration={600} cascade triggerOnce>
        {/* Section title */}
        <div className="w-full text-center mb-20 mt-20 md:mt-24">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-8 sm:px-28">
            <span className="text-primary-400">
              {translation(language, 'sdaas.benefits.span')}
            </span>{' '}
            {translation(language, 'sdaas.benefits.first')}{' '}
            <mark className="text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'sdaas.benefits.mark')}
            </mark>
          </h1>
          <p className="w-11/12 md:w-8/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            {translation(language, 'sdaas.benefits.text')}
          </p>
        </div>

        {/* Benefits list */}
        <ul className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-10 mx-auto">
          {benefits.map(({ name, description, icon }) => (
            <BenefitCard
              key={name}
              name={name}
              description={description}
              icon={icon}
            />
          ))}
        </ul>

        {/* CTA button */}
        <div className="w-full flex justify-center mt-20 lg:mt-28">
          <Link
            to={`/${language === 'es' ? '' : `${language}/`}#contact`}
            aria-label="SDaaS CTA button"
            className="text-font-white bg-primary-400 hover:bg-primary-300 py-2 rounded-full active:bg-primary-500 px-10 md:px-14 lg:px-18 text-sm lg:text-base mx-auto"
          >
            {translation(language, 'sdaas.benefits.cta')}
          </Link>
        </div>
      </Fade>
      <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
    </section>
  );
}
