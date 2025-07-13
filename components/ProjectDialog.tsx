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
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectDialogProps = {
  project: IProject;
};

const ProjectDialog = ({ project }: ProjectDialogProps) => {
  const { title, imageUrl, githubUrl, siteUrl, description } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 w-full cursor-pointer">Voir le projet</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl overflow-hidden p-0">
        <DialogHeader className="border-border border-b p-6">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="mx-auto space-y-4 p-2">
          <p>{description}</p>

          {imageUrl && (
            <div className="relative h-64 w-full md:h-96">
              <Image
                src={imageUrl}
                alt={`Capture d’écran du projet ${title}`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="mx-auto flex w-fit gap-4 pt-4">
            {siteUrl && (
              <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Voir en ligne
                </Button>
              </a>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
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
