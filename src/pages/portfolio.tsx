import React from 'react';
import PortfolioBanner from '../components/portfolio/PortfolioBanner';
import { Project } from '../components/portfolio/PortfolioSlider';
import ProjectImg from '../assets/images/bulb.jpeg';
import ProjectsList from '../components/portfolio/ProjectsList';

export default function PortfolioPage() {
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
    <main>
      <PortfolioBanner />
      <ProjectsList projects={projects} />
    </main>
  );
}
