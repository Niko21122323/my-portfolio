import Image from "next/image";
import Link from "next/link";

import { ProjectCardType } from "@/lib/types";
import PopAnimation from "./animations/PopAnimation";
import RevealAnimation from "./animations/RevelAnimation";

const ProjectCard = ({
  role,
  title,
  projectLink,
  projectImage,
  hoverImage,
}: ProjectCardType) => {
  return (
    <RevealAnimation delay={0.3}>
      <Link
        href={projectLink}
        className="block relative overflow-hidden rounded-2xl sm:rounded-3xl group"
      >
        <Image
          src={projectImage}
          alt={`${title} cover image`}
          className="w-full h-auto object-cover"
          loading="eager"
          placeholder="blur"
        />
        <Image
          src={hoverImage}
          alt={`${title} cover image`}
          className="absolute top-0 left-0 w-full h-full z-10 opacity-0 object-cover group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          loading="eager"
          placeholder="blur"
        />

        <div className="absolute left-6 bottom-6 flex flex-col gap-2 z-20">
          <span className="text-foreground text-xl lg:text-3xl xl:text-4xl font-semibold">
            {title}
          </span>
          <span className="text-foreground text-sm font-light">{role}</span>
        </div>
      </Link>
    </RevealAnimation>
  );
};

export default ProjectCard;
