import React from 'react';
import { Project } from './PortfolioSlider';
import { Fade } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';
import useLanguage from '../../hooks/useLanguage';

interface ProjectsListProps {
  projects: Array<Project>;
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <Fade triggerOnce>
      <div className="w-full lg:w-11/12 xl:w-10/12 mb-16 sm:mb-20 mx-auto px-16 md:px-20 lg:px-6">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
          {translation(language, 'portfolio.present')}{' '}
          <mark className="text-font0-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
            {translation(language, 'portfolio.our')}
          </mark>{' '}
          <span className="text-primary-400">
            {translation(language, 'portfolio.projects')}{' '}
          </span>
        </h1>
      </div>
      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 pb-40 px-1 xl:px-6">
        {projects.map((project) => (
          <ProjectCard
            key={project?.title}
            visit={translation(language, 'portfolio.visit')}
            {...project}
          />
        ))}
      </div>
    </Fade>
  );
}
