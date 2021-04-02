import React from 'react';
import { Project } from './PortfolioSlider';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
  projects: Array<Project>;
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-14 pb-40">
      {projects.map((project, idx) => (
        <ProjectCard {...project} key={idx} />
      ))}
    </div>
  );
}
