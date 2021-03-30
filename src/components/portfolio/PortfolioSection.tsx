import React from 'react';
import { navigate } from 'gatsby';
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
    <section id="portfolio" className="pt-24 -mt-24 mb-104 w-full">
      <div className="w-full text-center">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-12">
          Conoce <span className="text-primary-500">los proyectos</span> que
          hemos{' '}
          <mark className="inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0">
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
          className="text-sm lg:text-base text-primary-500 bg-transparent border-2 border-primary-500 hover:border-primary-400 hover:text-primary-400 py-1.5 px-6 rounded-full focus:outline-none active:border-primary-300 active:text-primary-300"
          onClick={() => navigate('/')}
        >
          Conoce más de nuestro trabajo
        </button>
      </div>
    </section>
  );
}
