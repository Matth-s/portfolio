"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IProject } from "@/interface/project-interface";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

type ProjectDialogProps = {
  project: IProject;
};

const ProjectDialog = ({ project }: ProjectDialogProps) => {
  const { title, githubUrl, siteUrl, description, presentation } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 w-full cursor-pointer">Voir le projet</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl min-w-3/5 overflow-hidden">
        <DialogHeader className="border-border border-b p-6">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="mx-auto w-full space-y-4 p-2">
          <p>{description}</p>

          <ProjectCarousel data={presentation} />

          <div className="mx-auto flex w-fit gap-4 pt-4">
            {siteUrl && (
              <Link href={siteUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir en ligne
                </Button>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-bg-primary text-primary flex items-center gap-2 hover:cursor-pointer hover:opacity-50"
                >
                  <Github className="h-4 w-4" />
                  Code source
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
