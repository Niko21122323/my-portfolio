import webAppIcon from "../../public/icons/webApp-icon.png";
import websiteIcon from "../../public/icons/website-icon.png";
import eCommerceIcon from "../../public/icons/eCommerce-icon.png";
import { ServiceType } from "../types";

export const servicesData: ServiceType[] = [
  {
    id: 1,
    icon: websiteIcon,
    title: "Frontend",
    description:
      "I build interfaces that are fast, accessible, and easy to maintain. My main tools are React, Next.js, and Astro.js, with Tailwind CSS for styling and TypeScript to keep things type-safe.",
    background: "bg-[#00FFF7]",
  },
  {
    id: 2,
    icon: eCommerceIcon,
    title: "Backend",
    description:
      "I handle the server side with Node.js and Express, work with both SQL and NoSQL databases, and build REST APIs that are clean and straightforward to work with.",
    background: "bg-[#E0B5F0]",
  },
  {
    id: 3,
    icon: webAppIcon,
    title: "Full Stack",
    description:
      "I can take a project from idea to deployment. Auth, database, frontend, CI, hosting on Vercel or Railway, the whole thing.",
    background: "bg-[#8EFF01]",
  },
];
