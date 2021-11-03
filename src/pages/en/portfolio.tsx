import React from 'react';
import { Project } from '../../components/portfolio/PortfolioSlider';
import SEO from '../../components/SEO';
import Technologies from '../../components/Technologies';
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
      categories: ['Web App'],
      link: 'https://continentaldeseguros.com.ve/',
    },
    {
      title: 'Plataforma Unidos',
      description:
        'Sistema de la trasnacional British American Tobacco, es un CRM que brinda indicadores a sus clientes. Cuenta con manejo de estadísticas, plan de fidelidad con canjeo de "experiencias" por buenos resultados en la venta de productos y un sistema de autogestión y evaluación interna de venta de productos.',
      src: 'projects/unidos.png',
      categories: ['Web App'],
      link: 'https://plataformaunidos.net/',
    },
    {
      title: 'Bloop!',
      description:
        'Plataforma para productora de eventos, es un CRM a la medida, para auto gestionar proyectos, proveedores, clientes y usuarios, y automatizar procesos de la empresa.',
      src: 'projects/bloop.png',
      categories: ['Web App'],
      link: 'https://www.probloop.com/',
    },
    {
      title: 'Frutería Los Pomelos',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: 'pomelos-ss.png',
      categories: ['Web App'],
      link: 'https://fruterialospomelos.store/',
    },
    {
      title: 'Habitat Village',
      description:
        'Plataforma hotelera para manejo de reservas, este CRM permite publicar la disponibilidad de habitaciones, paquetes extras de actividades e incluye un sistema de fidelidad.',
      src: 'projects/village-ss.png',
      categories: ['Web App'],
      link: 'https://habitatvillage.com/ ',
    },
    {
      title: 'Bodebar',
      description:
        'Plataforma de venta y manejo de inventario, es un sistema que ayuda al automercado a manejar sus productos y venderlos de forma online en su plataforma, manejando tracking para delivery o pickup.',
      src: 'projects/bodebar.png',
      categories: ['Web App', 'Desktop'],
      link: 'https://bodebar.com.ve/',
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
    {
      title: 'Grupo Nueve Once',
      description:
        'Ofrecemos servicio de desarrollo a la empresa Grupo Nueve Once en diferentes areas, ayudándolos a innovar y crear productos tecnológicos que ayuden a sus clientes tener una experiencia única en el servicio de tele-medicina y asistencia medica remota.',
      src: 'projects/gno.png',
      categories: ['DaaS'],
    },
    {
      title: 'Grupo MRE',
      description:
        'Aplicación web para la empresa norteamericana Real State Grupo MRE, esta aplicación les permite listar sus propiedades y sincronizarse con el MLS (Multiple Listing Services) el cual se encuentran registrados, también permite mostrar y promocionar propiedades, manejo de citas y más.',
      src: 'projects/grupo-mre.png',
      categories: ['Web App'],
      link: 'https://grupomre.com/',
    },
    {
      title: 'Intergraph USA Corp',
      description:
        'Website para la empresa Intergraph USA Corp con sede en los Estados Unidos, este website funciona como imagen corporativa para la empresa en donde ofrecen sus servicios en aeronáutica civil.',
      src: 'projects/intergraph-usa-corp.png',
      categories: ['Landing Page'],
      link: 'https://www.intergraphusa.com/',
    },
    {
      title: 'Psico Sport Hacks',
      description:
        'Website para el emprendimiento Psico Sport Hacks (PSH por sus siglas), que sirve como sitio informativo de sus servicios de psicologia para deportistas de alto rendimiento.',
      src: 'projects/psh.png',
      categories: ['Landing Page'],
      link: 'https://psicosporthacks.com/',
    },
  ];

  const data = {
    title: (
      <>
        Meet part of our{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 text-font-black dark:text-font-white">
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
