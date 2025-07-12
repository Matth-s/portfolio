'use client';

import { IProject } from '@/interface/project-interface';
import React from 'react';

import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import ProjectDialog from './ProjectDialog';

type ProjectCardProps = {
  project: IProject;
  delay: number;
};

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  const { title, description, techs } = project;

  return (
    <motion.div
      className="w-full"
      initial={{
        y: 150,
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.7,
          delay,
        },
      }}
    >
      <Card className="w-full rounded-sm h-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[var(--text)]">
            {title}
          </CardTitle>
          <CardDescription className="text-lg">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <ul className="flex flex-wrap gap-x-2 gap-y-1 mt-auto">
            {techs.map((tech) => (
              <li
                className="px-3.5 py-1 bg-[var(--background-primary)] rounded-sm bg-background-primary text-[var(--text)]"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <ProjectDialog project={project} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
