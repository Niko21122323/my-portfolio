import Image from "next/image";
import { projects } from "@/data/data";
import Marquee from "./Marquee";
import PrimaryButton from "./buttons/PrimaryButton";
import TextAnimation from "./animations/TextAnimation";
import ElementAnimation from "./animations/ElementAnimation";

const ProjectSection = () => {
  return (
    <section className="pb-52 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 row-span-9 gap-y-36">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${project.gridClass}`}
            >
              <div className="h-full w-full max-h-[470px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`project ${project.name} image`}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="py-8">
                <h5 className="text-foreground text-2xl">{project.name}</h5>
                <p className="text-ring text-base">{project.description}</p>
                <div className="flex items-center gap-1.5 pt-4">
                  <Marquee items={project.technologies} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pt-24">
          <PrimaryButton title="More Projects" link="/projects" />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
