import { Project } from "../types";

import crescoProjectImage from "../../public/photos/projects/cresco-1.png";
import crescoHoverImage from "../../public/photos/projects/cresco-2.png";

import trackleProjectImage from "../../public/photos/projects/trackle-1.png";
import trackleHoverImage from "../../public/photos/projects/trackle-2.png";

import equifyProjectImage from "../../public/photos/projects/equify-1.png";
import equifyHoverImage from "../../public/photos/projects/equify-2.png";

import deltaProjectImage from "../../public/photos/projects/delta-1.png";
import deltaHoverImage from "../../public/photos/projects/delta-2.png";

import playforgeProjectImage from "../../public/photos/projects/playforge-1.png";
import playforgeHoverImage from "../../public/photos/projects/playforge-2.png";

import pijanarhijaProjectImage from "../../public/photos/projects/pijanarhija-1.png";
import pijanarhijaHoverImage from "../../public/photos/projects/pijanarhija-2.png";

export const projectData: Project[] = [
  {
    id: 1,
    title: "Cresco",
    projectLink: "/projects/cresco",
    role: "Design & Development",
    projectImage: crescoProjectImage,
    hoverImage: crescoHoverImage,
  },
  {
    id: 2,
    title: "Trackle",
    projectLink: "/projects/trackle",
    role: "Design & Development",
    projectImage: trackleProjectImage,
    hoverImage: trackleHoverImage,
  },
  {
    id: 3,
    title: "Equify",
    projectLink: "/projects/equify",
    role: "Design & Development",
    projectImage: equifyProjectImage,
    hoverImage: equifyHoverImage,
  },
  {
    id: 4,
    title: "Delta",
    projectLink: "/projects/delta-carrier",
    role: "Development",
    projectImage: deltaProjectImage,
    hoverImage: deltaHoverImage,
  },
  {
    id: 5,
    title: "Playforge",
    projectLink: "/projects/playforge",
    role: "Design & Development",
    projectImage: playforgeProjectImage,
    hoverImage: playforgeHoverImage,
  },
  {
    id: 6,
    title: "Pijanarhija",
    projectLink: "/projects/pijanarhija",
    role: "Development",
    projectImage: pijanarhijaProjectImage,
    hoverImage: pijanarhijaHoverImage,
  },
];
