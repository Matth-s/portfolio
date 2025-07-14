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
    title: "Front-end mentor forum",
    description:
      "Ce projet est une plateforme de type forum permettant aux utilisateurs de poser des questions, d’y répondre et d’interagir entre eux",
    siteUrl: "https://boisterous-cupcake-59de67.netlify.app/",
    techs: ["React", "Firebase", "Javascript", "Redux"],
    githubUrl: "https://github.com/Matth-s/front-end-mentor",
    imageUrl: "",
    presentation: [
      {
        type: "image",
        src: "./presentation/mentor/",
      },
    ],
  },
  {
    title: "Strava",
    description: "Site",
    siteUrl: null,
    techs: ["Nextjs", "Supabase", "Prisma", "Tailwind", "NextAuth"],
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
