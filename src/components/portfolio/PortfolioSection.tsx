import React from 'react';
import { navigate } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import PortfolioSlider, { Project } from './PortfolioSlider';
import ProjectImg from '../../assets/images/bulb.jpeg';

export default function PortfolioSection() {
  const projects: Array<Project> = [
    {
      title: 'Avila Tek',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris adipiscing non sit morbi eget.',
      src: ProjectImg,
      categories: ['App Web', 'Movil'],
      link: 'https://avilatek.dev',
    },
    {
      title: 'Avila Tak',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris adipiscing non sit morbi eget.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://avilatek.dev',
    },
    {
      title: 'Avila Tuk',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris adipiscing non sit morbi eget.',
      src: ProjectImg,
      categories: ['App Web', 'Desktop'],
      link: 'https://avilatek.dev',
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-24 -mt-24 mb-80 w-full relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        <div className="w-full text-center">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-12">
            Conoce <span className="text-primary-400">los proyectos</span> que
            hemos{' '}
            <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              desarrollado
            </mark>
          </h1>
          <p className="w-9/12 md:w-7/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
            id hac. Consectetur adipiscing elit. Urna in sit id hac.
          </p>
        </div>
        {/* Portfolio slider */}
        <PortfolioSlider projects={projects} />
        {/* Know more button */}
        <div className="w-full flex justify-center mt-16 lg:mt-24">
          <button
            type="button"
            className="text-sm lg:text-base text-primary-400 bg-transparent border-2 border-primary-400 hover:border-primary-300 hover:text-primary-300 py-1.5 px-6 rounded-full focus:outline-none active:border-primary-500 active:text-primary-500"
            onClick={() => navigate('/portfolio')}
          >
            Conoce más de nuestro trabajo
          </button>
        </div>
      </Fade>
      <div className="absolute top-6 left-1/3 rounded-third-blob w-96 md:w-7/12 h-64 md:h-80 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );
}
