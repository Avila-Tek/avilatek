import React from 'react';
import { navigate } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import PortfolioSlider, { Project } from './PortfolioSlider';

export default function PortfolioSection() {
  const projects: Array<Project> = [
    {
      title: 'Continental de Seguros',
      description:
        'Sistema de seguros para empresas aseguradoras, con manejo de cartera de clientes, administración de pólizas, siniestros, recibos, manejo de capital y reportes estadísticos para toma de decisiones.',
      src: 'projects/continental.png',
      categories: ['App Web'],
      link: 'https://continentaldeseguros.com.ve/',
    },
    {
      title: 'Plataforma Unidos',
      description:
        'Sistema de la trasnacional British American Tobacco, es un CRM que brinda indicadores a sus clientes. Cuenta con manejo de estadísticas, plan de fidelidad con canjeo de "experiencias" por buenos resultados en la venta de productos y un sistema de autogestión y evaluación interna de venta de productos.',
      src: 'projects/unidos.png',
      categories: ['App Web'],
      link: 'https://plataformaunidos.net/',
    },
    {
      title: 'Bloop!',
      description:
        'Plataforma para productora de eventos, es un CRM a la medida, para auto gestionar proyectos, proveedores, clientes y usuarios, y automatizar procesos de la empresa.',
      src: 'projects/bloop.png',
      categories: ['App Web'],
      link: 'https://www.probloop.com/',
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-24 -mt-24 mb-56 md:mb-68 w-full relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        <div className="w-full text-center mb-10">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-12">
            Conoce{' '}
            <mark className="text-font0-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              parte
            </mark>{' '}
            de nuestro <span className="text-primary-400">trabajo</span>
          </h1>
          <p className="w-9/12 md:w-7/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            Llevamos más de 6 años en el mercado desarrollando software para
            empresas en Europa, Estados Unidos y Latino América.
          </p>
        </div>
        {/* Portfolio slider */}
        <PortfolioSlider projects={projects} />
        {/* Know more button */}
        <div className="w-full flex justify-center mt-16 lg:mt-20">
          <button
            type="button"
            aria-label="Ir al portafolio"
            className="text-sm lg:text-base text-primary-400 bg-transparent border-2 border-primary-400 hover:border-primary-300 hover:text-primary-300 py-1.5 px-6 rounded-full focus:outline-none active:border-primary-500 active:text-primary-500"
            onClick={() => navigate('/portfolio')}
          >
            Conoce más de nuestro trabajo
          </button>
        </div>
      </Fade>
      <div className="absolute -top-8 left-1/3 rounded-third-blob w-96 md:w-7/12 h-64 md:h-80 brick bg-medium-blue dark:bg-dark-gray bg-opacity-50 dark:bg-opacity-25" />
    </section>
  );
}
