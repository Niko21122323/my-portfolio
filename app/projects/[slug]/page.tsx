import Link from "next/link";
import Image from "next/image";

import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import CtaSection from "@/components/sections/CtaSection";
import PrimaryButton from "@/components/PrimaryButton";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();

  return slugs.map((slug) => ({ slug }));
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const { frontmatter, content } = project;

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="hero-padding-y">
        <div className="container">
          <h1 className="text-foreground max-[374px]:text-4xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold pb-12 sm:pb-20 xl:pb-28">
            {frontmatter.title}
          </h1>
          <div className="grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 xl:max-w-3/4">
            <div className="flex flex-col">
              <h5 className="text-foreground text-xl font-semibold border-b border-border pb-4">
                Work Done
              </h5>
              <p className="text-lg text-muted font-light pt-4">
                {frontmatter.workDone}
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="text-foreground text-xl font-semibold border-b border-border pb-4">
                Project Type
              </h5>
              <p className="text-lg text-muted font-light pt-4">
                {frontmatter.projectType}
              </p>
            </div>
            <div className="flex flex-col max-lg:hidden">
              <h5 className="text-foreground text-xl font-semibold border-b border-border pb-4">
                Live & Code
              </h5>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href={frontmatter.liveLink}
                  target="_blank"
                  className="text-lg text-muted font-light"
                >
                  View Live
                </Link>
                <div className="h-full w-[1px] bg-border"></div>
                <Link
                  href={frontmatter.githubLink}
                  target="_blank"
                  className="text-lg text-muted font-light"
                >
                  View on Github
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-[500px]:flex-col items-center gap-2 lg:hidden pt-12 sm:pt-20">
            <PrimaryButton url={frontmatter.liveLink} title="View Live" />
            <PrimaryButton
              url={frontmatter.githubLink}
              title="View on Github"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {frontmatter.projectImages.map((img: string, idx: number) => (
              <Image
                key={img}
                src={img}
                alt={`${frontmatter.title} gallery ${idx + 1}`}
                width={1920}
                height={1080}
                className="h-full w-full object-cover rounded-2xl sm:rounded-3xl"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 xl:py-28">
        <div className="container">
          <h3 className="text-foreground max-[410px]:text-3xl text-4xl xl:text-5xl font-semibold pb-6">
            Project Description
          </h3>
          <MDXRemote
            source={content}
            components={{
              p: (props) => (
                <p
                  className="text-muted text-base lg:text-lg xl:text-xl font-light"
                  {...props}
                />
              ),
            }}
          />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 sm:gap-y-12">
            <div className="md:col-span-4 md:sticky md:top-6 md:h-fit">
              <h3 className="text-foreground max-[410px]:text-3xl text-4xl sm:text-5xl md:text-3xl xl:text-5xl font-semibold">
                Technologies Used
              </h3>
            </div>
            <div className="flex flex-col gap-8 md:gap-16 md:col-span-7 lg:col-span-6 xl:col-span-5 md:col-start-6 lg:col-start-7 xl:col-start-8">
              {frontmatter.technologies.map(
                (technology: { category: string; items: string[] }) => (
                  <div key={technology.category}>
                    <h4 className="text-foreground text-xl sm:text-3xl font-semibold pb-4">
                      {technology.category}
                    </h4>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {technology.items.map((item) => (
                        <span
                          key={item}
                          className="block px-4 py-1.5 rounded-full bg-muted-background text-muted text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 sm:pt-20 xl:pt-28">
        <div className="container">
          <div className="flex flex-col gap-2">
            <h4 className="text-foreground max-[410px]:text-3xl text-4xl xl:text-5xl font-semibold pb-6">
              What I Learned & How I Improved
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
              {frontmatter.learnings.map((paragraph: string) => (
                <p
                  key={paragraph}
                  className="text-muted text-base lg:text-lg font-light"
                >
                  {paragraph}
                </p>
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
