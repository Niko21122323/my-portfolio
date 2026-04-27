import TextReveal from "@/components/animations/TextReveal";
import ProjectCard from "@/components/ProjectCard";
import CtaSection from "@/components/sections/CtaSection";

import { projectData } from "@/lib/data/projectsData";

const page = () => {
  return (
    <main>
      <section className="hero-padding-y">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4">
            <TextReveal>
              <span className="text-muted text-sm text-center font-light">
                ( 2025 - 2026 )
              </span>
            </TextReveal>
            <TextReveal>
              <h1 className="text-foreground text-pretty max-[374px]:text-4xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center font-bold max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
                What I made and how i built it
              </h1>
            </TextReveal>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectData.map(
              ({ id, title, role, projectLink, projectImage, hoverImage }) => (
                <ProjectCard
                  key={id}
                  title={title}
                  role={role}
                  projectLink={projectLink}
                  projectImage={projectImage}
                  hoverImage={hoverImage}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default page;
