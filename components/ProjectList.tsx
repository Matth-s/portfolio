import { projects } from "@/constants/project-constant";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">Projets</h2>
      <div className="md:3/5 mx-auto flex w-4/5 flex-col justify-between gap-4 text-center lg:flex-row">
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
