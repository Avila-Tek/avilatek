import React from 'react';
import { Project } from '../../components/portfolio/PortfolioSlider';
import SEO from '../../components/SEO';
import Technologies from '../../components/Tecnologies';
import ProjectsList from '../../components/portfolio/ProjectsList';
import Documents from '../../components/icons/Documents';
import DefaultBanner from '../../components/common/DefaultBanner';

export default function PortfolioPage() {
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
    {
      title: 'Frutería Los Pomelos',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: 'pomelos-ss.png',
      categories: ['App Web'],
      link: 'https://fruterialospomelos.store/',
    },
    {
      title: 'Habitat Village',
      description:
        'Plataforma hotelera para manejo de reservas, este CRM permite publicar la disponibilidad de habitaciones, paquetes extras de actividades e incluye un sistema de fidelidad.',
      src: 'projects/village-ss.png',
      categories: ['App Web'],
      link: 'https://habitatvillage.com/ ',
    },
    {
      title: 'Bodebar',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: 'projects/bodebar.png',
      categories: ['App Web', 'Desktop'],
      link: 'https://bodebar.avilatek.dev/',
    },
    {
      title: 'PTCK',
      description: 'Landing page de bufete de abogados.',
      src: 'projects/ptck.png',
      categories: ['Landing Page'],
      link: 'https://ptck.legal/',
    },
    {
      title: 'JPG Associates',
      description: 'Landing page de sociedad de corretaje de seguros.',
      src: 'projects/jpg.png',
      categories: ['Landing Page'],
      link: 'https://jpgassociates.net/',
    },
  ];

  const data = {
    title: (
      <>
        Meet part of our{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
          projects
        </mark>
      </>
    ),
    description: 'Tailor-made projects based on the needs of each client.',
    illustration: <Documents />,
  };

  return (
    <>
      <SEO title="Portfolio" />
      <DefaultBanner {...data} />
      <Technologies />
      <ProjectsList projects={projects} />
    </>
  );
}
