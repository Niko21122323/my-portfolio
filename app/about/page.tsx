import CtaSection from "@/components/sections/CtaSection";
import AboutMeImageSection from "@/components/sections/AboutMeImageSection";

import { workExperience } from "@/lib/data/workExperience";
import { technicalSkills } from "@/lib/data/technicalSkills";
import TextReveal from "@/components/animations/TextReveal";

const page = () => {
  return (
    <main>
      <section className="hero-padding-y">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4">
            <TextReveal>
              <span className="text-muted text-sm text-center font-light">
                ( About Me )
              </span>
            </TextReveal>

            <TextReveal>
              <h1 className="text-foreground max-[374px]:text-4xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center font-bold max-w-[300px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
                Who I am and what I do
              </h1>
            </TextReveal>
          </div>
        </div>
      </section>
      <AboutMeImageSection />
      <section className="section-padding-y">
        <div className="container">
          <p className="text-base sm:text-xl md:text-2xl lg:text-4xl text-foreground font-medium leading-tight">
            A full stack web developer with three years of experience shipping
            production-ready applications across agency and SaaS environments.
            Partners with designers, backend engineers, and QA teams to deliver
            reliable, high-performing products on tight timelines. Confident in
            the ability to thrive in fast-paced settings and leverage skills in
            JavaScript/TypeScript development, frontend architecture, and API
            integration to enable team success.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 sm:gap-y-12">
            <div className="md:col-span-4 md:sticky md:top-6 md:h-fit">
              <h3 className="text-foreground max-[410px]:text-3xl text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-semibold">
                Work Experience
              </h3>
            </div>
            <div className="flex flex-col gap-8 md:gap-20 md:col-span-7 lg:col-span-6 xl:col-span-5 md:col-start-6 lg:col-start-7 xl:col-start-8">
              {workExperience.map(
                ({ id, place, role, description, duration }) => (
                  <div key={id}>
                    <h4 className="text-foreground text-xl sm:text-3xl font-semibold pb-4">
                      {place}
                    </h4>
                    <div className="flex max-[410px]:flex-col max-[410px]:items-start max-[410px]:gap-2 items-center justify-between gap-6 pb-6">
                      <p className=" text-lg sm:text-xl lg:text-2xl text-foreground font-medium">
                        {role}
                      </p>
                      <span className="text-sm sm:text-base text-muted font-light">
                        {duration}
                      </span>
                    </div>
                    <p className="max-[410px]:text-sm text-base text-muted font-light">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 sm:gap-y-12">
            <div className="md:col-span-4 md:sticky md:top-6 md:h-fit">
              <h3 className="text-foreground max-[410px]:text-3xl text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-semibold">
                Technical Skills
              </h3>
            </div>
            <div className="flex flex-col gap-8 md:gap-16 md:col-span-7 lg:col-span-6 xl:col-span-5 md:col-start-6 lg:col-start-7 xl:col-start-8">
              {technicalSkills.map(({ title, skills }) => (
                <div key={title}>
                  <h4 className="text-foreground text-xl sm:text-3xl font-semibold pb-6">
                    {title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="block px-4 py-1.5 rounded-full bg-muted-background text-muted text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  );
};

export default page;
