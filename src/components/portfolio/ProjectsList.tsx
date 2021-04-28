import React from 'react';
import { Project } from './PortfolioSlider';
import { Fade } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
  projects: Array<Project>;
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <Fade triggerOnce>
      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 pb-40 px-1 xl:px-6">
        {projects.map((project) => (
          <ProjectCard {...project} key={project?.title} />
        ))}
      </div>
    </Fade>
  );
}
