import { projects } from '@/constants/project-constant';
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section className="py-16">
      <h2 className="text-center font-bold text-4xl mb-12">
        Projets
      </h2>
      <div className="flex  flex-col justify-between w-4/5 mx-auto gap-4 md:3/5 text-center lg:flex-row">
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
