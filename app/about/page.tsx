import Image from "next/image";
import heroImage from "../../public/assets/images/about/about-hero-image.jpg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import AnimatedBorder from "@/components/AnimatedBorder";
import TitleLoop from "@/components/TitleLoop";

import { StaticImageData } from "next/image";
import testImg1 from "../../public/assets/images/projects/tp1.png";
import testImg2 from "../../public/assets/images/projects/tp2.png";
import testImg3 from "../../public/assets/images/projects/tp3.png";

const page = () => {
  interface StoryChapter {
    id: number;
    year: number;
    title: string;
    description: string;
    images: (string | StaticImageData)[];
  }

  const myStory: StoryChapter[] = [
    {
      id: 1,
      year: 2022,
      title: "Self-Taught Beginnings",
      description:
        "I started learning how to code on my own, driven by curiosity and a desire to build things from scratch.",
      images: [testImg1, testImg2, testImg3],
    },
    {
      id: 2,
      year: 2023,
      title: "Full-Stack Academy",
      description:
        "I enrolled in Semos Education, where I improved my skills and gained hands-on experience with HTML, CSS, JavaScript, Node.js, TypeScript, MongoDB, and React.",
      images: [testImg1, testImg2, testImg3],
    },
    {
      id: 3,
      year: 2024,
      title: "Frontend Developer at Pabau",
      description:
        "I launched my career as a frontend developer, improving my skills and learning new technologies like GraphQL, Prisma, and Jest, while collaborating with a professional team.",
      images: [testImg1, testImg2, testImg3],
    },
    {
      id: 4,
      year: 2025,
      title: "Frontend Developer at Thrasker",
      description:
        "At Thrasker, I worked with Astro.js and Shopify, contributed to real-world projects, made lasting connections, and took my frontend expertise to the next level.",
      images: [testImg1, testImg2, testImg3],
    },
    {
      id: 5,
      year: 2026,
      title: "Freelance Full-Stack Developer",
      description:
        "Now I work as a freelance full-stack developer, creating modern, user-focused web projects and bringing ideas from concept to deployment on and off freelancing platforms.",
      images: [testImg1, testImg2, testImg3],
    },
  ];

  return (
    <>
      <section className="bg-background py-24 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6">
          <TitleLoop title="Who I Am and What I Do" />

          <div className="relative grid lg:grid-cols-12 gap-12 pt-12 lg:pt-20">
            <AnimatedBorder className="absolute top-0 left-0" />

            <div className="lg:col-span-3 relative min-h-72 max-lg:hidden">
              <Image
                src={heroImage}
                alt="hero image"
                height={800}
                width={500}
                className="absolute top-0 left-0 w-2/3 h-2/3 object-cover max-lg:object-top"
              />
            </div>

            <div className="flex flex-col gap-6 sm:gap-10 xl:gap-20 lg:col-span-8 lg:col-start-5">
              <h2 className="text-foreground text-2xl sm:text-3xl xl:text-[42px] leading-tight">
                Hi, I’m Nikola, a full-stack developer with over 3 years of
                professional experience based in Skopje, Macedonia.
              </h2>
              <div className="max-h-72 block lg:hidden">
                <Image
                  src={heroImage}
                  alt="hero image"
                  width={700}
                  height={400}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 xl:gap-20">
                <div>
                  <h5 className="text-lg text-foreground/90 pb-2">What I Do</h5>
                  <p className="text-base text-muted-foreground">
                    I build modern, scalable web applications using JavaScript
                    and TypeScript, with a focus on React, Next.js, and Node.js,
                    prioritizing performance and maintainable code.
                  </p>
                </div>
                <div>
                  <h5 className="text-lg text-foreground/90 pb-2">
                    Beyond Code
                  </h5>
                  <p className="text-base text-muted-foreground">
                    Outside of development, I like staying active and keeping a
                    good balance. I enjoy watching sports, going to the gym,
                    watching movies and TV shows, and spending time with
                    friends.
                  </p>
                </div>
              </div>

              <div className="max-lg:pt-6">
                <PrimaryButton title="Let's  WorkTogether" link="/" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 lg:pb-36">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-start justify-between border-t border-border pt-4">
            <span className="text-foreground text-base">My Story</span>
            <span className="text-foreground text-base">2022 - 2025</span>
          </div>
          <div className="flex flex-col gap-10 pt-36">
            {myStory.map((chapter) => (
              <div
                key={chapter.id}
                className="grid grid-cols-12 border-b border-border pb-10"
              >
                <div className="col-span-3">
                  <span className="text-foreground text-lg">
                    {chapter.year}
                  </span>
                </div>
                <div className="col-span-5">
                  <h5 className="text-foreground text-3xl">{chapter.title}</h5>
                </div>
                <div className="grid grid-cols-3 gap-3 col-span-3 col-end-13">
                  {chapter.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt="image"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
