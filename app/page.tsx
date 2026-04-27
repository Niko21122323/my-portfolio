import PrimaryButton from "@/components/PrimaryButton";
import ProjectCard from "@/components/ProjectCard";
import CtaSection from "@/components/sections/CtaSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

import { projectData } from "@/lib/data/projectsData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[0, 1, 2, 5]
              .map((i) => projectData[i])
              .map(
                ({
                  id,
                  title,
                  role,
                  projectLink,
                  projectImage,
                  hoverImage,
                }) => (
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
          <div className="flex items-center justify-center pt-8 sm:pt-12 md:pt-16 xl:pt-20">
            <PrimaryButton url="/projects" title="See Them All" />
          </div>
        </div>
      </section>
      <ServicesSection />
      <CtaSection />
    </main>
  );
}
