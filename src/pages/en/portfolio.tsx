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
        'Insurance system for insurance companies, with client portfolio management, policy management, claims, receipts, capital management, and statistical reports for decision making.',
      src: 'projects/continental.png',
      categories: ['Web App'],
      link: 'https://continentaldeseguros.com.ve/',
    },
    {
      title: 'Plataforma Unidos',
      description:
        'The system for the transnational British American Tobacco is a CRM that provides indicators to its clients. It has statistics management, a loyalty plan with an exchange of "experiences" for good results in the sale of products, and a system of self-management and internal evaluation of product sales.',
      src: 'projects/unidos.png',
      categories: ['Web App'],
      link: 'https://plataformaunidos.net/',
    },
    {
      title: 'Bloop!',
      description:
        'A platform for an event producer, it is a customized CRM to self-manage projects, suppliers, clients, and users, and automate company processes.',
      src: 'projects/bloop.png',
      categories: ['Web App'],
      link: 'https://www.probloop.com/',
    },
    {
      title: 'Frutería Los Pomelos',
      description:
        'A sales platform and inventory management, it is a system that helps the supermarket to manage its products and sell them online on its platform, managing the tracking for delivery or pickup.',
      src: 'pomelos-ss.png',
      categories: ['Web App'],
      link: 'https://fruterialospomelos.store/',
    },
    {
      title: 'Habitat Village',
      description:
        'A hotel platform for reservations management, this CRM allows you to publish the availability of rooms, extra packages of activities and includes a loyalty system.',
      src: 'projects/village-ss.png',
      categories: ['Web App'],
      link: 'https://habitatvillage.com/ ',
    },
    {
      title: 'Bodebar',
      description:
        'A sales platform and inventory management, it is a system that helps the supermarket to manage its products and sell them online on its platform, managing the tracking for delivery or pickup.',
      src: 'projects/bodebar.png',
      categories: ['Web App', 'Desktop'],
      link: 'https://bodebar.avilatek.dev/',
    },
    {
      title: 'PTCK',
      description: "Law firm's landing page.",
      src: 'projects/ptck.png',
      categories: ['Landing Page'],
      link: 'https://ptck.legal/',
    },
    {
      title: 'JPG Associates',
      description: "Insurance brokerage company's landing page.",
      src: 'projects/jpg.png',
      categories: ['Landing Page'],
      link: 'https://jpgassociates.net/',
    },
  ];

  const data = {
    title: (
      <>
        Meet some of our{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
          projects
        </mark>
      </>
    ),
    description: 'Custom projects developed based on the needs of each client.',
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
