import React from 'react';
import { navigate } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import PortfolioSlider, { Project } from './PortfolioSlider';
import useLanguage from '../../hooks/useLanguage';

export default function PortfolioSection() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const projects: Array<Project> = [
    {
      title: 'Continental de Seguros',
      description: translation(language, 'portfolio.continental'),
      src: 'projects/continental.png',
      categories: ['App Web'],
      link: 'https://continentaldeseguros.com.ve/',
    },
    {
      title: 'Plataforma Unidos',
      description: translation(language, 'portfolio.unidos'),
      src: 'projects/unidos.png',
      categories: ['App Web'],
      link: 'https://plataformaunidos.net/',
    },
    {
      title: 'Bloop!',
      description: translation(language, 'portfolio.bloop'),
      src: 'projects/bloop.png',
      categories: ['App Web'],
      link: 'https://www.probloop.com/',
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-24 -mt-24 mb-36 md:mb-40 w-full relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        <div className="w-full text-center mb-10">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-12">
            {translation(language, 'portfolio.first')}{' '}
            <mark className="text-font0-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'portfolio.mark')}
            </mark>{' '}
            {translation(language, 'portfolio.second')}{' '}
            <span className="text-primary-400">
              {translation(language, 'portfolio.work')}
            </span>
          </h1>
          <p className="w-9/12 md:w-7/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            {translation(language, 'portfolio.text')}
          </p>
        </div>
        {/* Portfolio slider */}
        <PortfolioSlider projects={projects} />
        {/* Know more button */}
        <div className="w-full flex justify-center mt-20 lg:mt-28">
          <button
            type="button"
            aria-label="Ir al portafolio"
            className="text-sm lg:text-base text-primary-400 bg-transparent border-2 border-primary-400 hover:border-primary-300 hover:text-primary-300 py-1.5 px-6 rounded-full focus:outline-none active:border-primary-500 active:text-primary-500"
            onClick={() =>
              navigate(`/${language === 'es' ? '' : language + '/'}portfolio`)
            }
          >
            {translation(language, 'portfolio.seeMore')}
          </button>
        </div>
      </Fade>
      <div className="absolute -top-8 left-1/3 rounded-third-blob w-96 md:w-7/12 h-64 md:h-80 brick bg-medium-blue dark:bg-dark-gray bg-opacity-50 dark:bg-opacity-25" />
    </section>
  );
}
