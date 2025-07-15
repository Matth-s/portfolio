import { IProject } from "@/interface/project-interface";

export const projects: IProject[] = [
  {
    title: "Audiophile",
    description:
      "Audiophile est un site vitrine inspiré d’un projet Frontend Mentor. Il présente une gamme de produits audio (casques, enceintes, écouteurs) dans une interface soignée, responsive et orientée utilisateur",
    siteUrl: "https://brilliant-druid-b603d2.netlify.app",
    techs: ["React", "Javascript", "Redux"],
    githubUrl: "https://github.com/Matth-s/audiophile",
    imageUrl: "/audiophile.png",
    presentation: [
      {
        type: "image",
        src: "/audiophile.png",
      },
    ],
  },
  {
    title: "Feedback",
    description:
      "Feedback est un projet fullstack de type forum permettant aux utilisateurs de poser des questions, d’y répondre et d’interagir entre eux",
    siteUrl: "https://boisterous-cupcake-59de67.netlify.app/",
    techs: ["React", "Firebase", "Javascript", "Redux"],
    githubUrl: "https://github.com/Matth-s/front-end-mentor",
    imageUrl: "",
    presentation: [
      {
        type: "image",
        src: "/feedback.png",
      },
    ],
  },
  {
    title: "Strava Clone",

    description: `StravaClone est un projet fullstack où j'ai intégré des fonctionnalités premium de Strava grâce à leur API.
Pour ce projet, j’ai utilisé le framework Next.js, ce qui m’a permis d’avoir un front-end et un back-end dans un même environnement.
Côté back-end, j'ai utilisé Supabase comme base de données, associé à Prisma et TypeScript pour garantir la cohérence des types, et Reactjs pour le front-end afin de proposer une interface fluide.
`,
    siteUrl: null,
    techs: [
      "Nextjs",
      "Supabase",
      "Prisma",
      "Tailwind",
      "NextAuth",
      "Typescript",
    ],
    githubUrl: "https://github.com/Matth-s/strava",
    imageUrl: "",
    presentation: [
      {
        type: "image",
        src: "/strava.png",
      },
      {
        type: "image",
        src: "/strava1.png",
      },
      {
        type: "image",
        src: "/strava2.png",
      },
    ],
  },
];
