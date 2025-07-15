export interface IProject {
  title: string;
  description: string;
  siteUrl: string | null;
  techs: string[];
  githubUrl: string;
  presentation: IPresentation[];
}

export interface IPresentation {
  type: "image" | "video";
  src: string;
}
