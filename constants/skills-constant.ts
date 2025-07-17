import { ISkill } from "@/interface/skill-interface";

export const frontendSkill: ISkill = {
  title: "Front-end",
  tech: [
    {
      name: "Typescript",
      logo: "./icons/typescript.svg",
    },
    {
      name: "React",
      logo: "./icons/reactjs.svg",
    },
    {
      name: "Tailwind",
      logo: "./icons/tailwind.svg",
    },
  ],
};

export const backendSkill: ISkill = {
  title: "Back-end",
  tech: [
    {
      name: "Nodejs",
      logo: "./icons/nodejs.svg",
    },
    {
      name: "Express",
      logo: "./icons/express.svg",
    },
    {
      name: "Prisma",
      logo: "./icons/prisma.svg",
    },
    {
      name: "PostgreSql",
      logo: "./icons/postgres.svg",
    },
  ],
};

export const othersSkills: ISkill = {
  title: "Autres",
  tech: [
    {
      name: "Docker",
      logo: "./icons/docker.svg",
    },
    {
      name: "Github",
      logo: "./icons/github.svg",
    },
    {
      name: "Vercel",
      logo: "./icons/vercel.svg",
    },
  ],
};
