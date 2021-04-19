import React from 'react';
import PortfolioBanner from '../components/portfolio/PortfolioBanner';
import { Project } from '../components/portfolio/PortfolioSlider';
import SEO from '../components/SEO';
import Technologies from '../components/Tecnologies';
import ProjectsList from '../components/portfolio/ProjectsList';
import ProjectImg from '../assets/images/bulb.jpeg';

export default function PortfolioPage() {
  const projects: Array<Project> = [
    {
      title: 'Continental de Seguros',
      description:
        'Sistema de seguros para empresas aseguradoras, con manejo de cartera de clientes, administración de pólizas, siniestros, recibos, manejo de capital y reportes estadísticos para toma de decisiones.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://avilatek.dev',
    },
    {
      title: 'Plataforma Unidos',
      description:
      'Sistema de la trasnacional British American Tobacco, es un CRM que brinda indicadores a sus clientes. Cuenta con manejo de estadísticas, plan de fidelidad con canjeo de "experiencias" por buenos resultados en la venta de productos y un sistema de autogestión y evaluación interna de venta de productos.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://www.probloop.com/',
    },
    {
      title: 'TheGrint',
      description:
        'Aplicación de Golf, se encuentra entre las 200 más descargadas en la App Store en la categoría de deportes, hacemos soporte a la app de Golf en su plataforma móvil.',
      src: ProjectImg,
      categories: ['Móvil', 'iOS'],
      link: 'https://avilatek.dev',
    },
    {
      title: 'Bloop!',
      description:
        'Plataforma para productora de eventos, es un CRM a la medida, para auto gestionar proyectos, proveedores, clientes y usuarios, y automatizar procesos de la empresa.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://www.probloop.com/',
    },
    {
      title: 'Frutería Los Pomelos',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://fruterialospomelos.store/',
    },
    {
      title: 'Habitat Village',
      description:
        'Plataforma hotelera para manejo de reservas, este CRM permite publicar la disponibilidad de habitaciones, paquetes extras de actividades e incluye un sistema de fidelidad.',
      src: ProjectImg,
      categories: ['App Web'],
      link: 'https://habitatvillage.com/ ',
    },
    {
      title: 'Bodebar',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: ProjectImg,
      categories: ['App Web', 'Desktop'],
      link: 'https://bodebar.avilatek.dev/',
    },
    {
      title: 'PTCK',
      description: 'Landing page de bufete de abogados.',
      src: ProjectImg,
      categories: ['Landing Page'],
      link: 'https://ptck.legal/',
    },
    {
      title: 'JPG Associates',
      description: 'Landing page de sociedad de corretaje de seguros.',
      src: ProjectImg,
      categories: ['Landing Page'],
      link: 'https://jpgassociates.net/',
    },
  ];

  return (
    <main>
      <SEO title="Portafolio" />
      <PortfolioBanner />
      <Technologies />
      <ProjectsList projects={projects} />
    </main>
  );
}
