import { projects } from '@/constants/project-constant';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section className="py-16">
      <h2 className="text-center font-bold text-4xl mb-12">
        Projets
      </h2>
      <div className="flex justify-between w-3/5 mx-auto gap-x-4">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={idx * 0.3}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
