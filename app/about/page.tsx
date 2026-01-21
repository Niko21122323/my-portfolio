import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/assets/images/about/about-hero-image.jpg";

import { LiaDownloadSolid } from "react-icons/lia";

const page = () => {
  return (
    <>
      <section className="py-24 md:py-36">
        <div className="container mx-auto xl:max-w-6xl px-6">
          <div className="flex items-end justify-between md:gap-10 border-b border-border pb-10 md:pb-16">
            <h1 className="text-foreground max-[370px]:text-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              Who I Am and <br /> What I Do
            </h1>
            <div className="max-md:hidden">
              <Link
                href={"/"}
                className="grid grid-cols-[1fr_auto] items-start gap-1"
              >
                <div className="flex items-center justify-center bg-muted px-4 h-full w-full">
                  <LiaDownloadSolid className="text-foreground text-bsae" />
                </div>
                <div className="bg-muted py-3 px-6">
                  <span className="text-foreground text-base">
                    Download Resume
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-20 pt-10 md:pt-16">
            <div className="md:col-span-7">
              <h2 className="max-[370px]:text-2xl text-2xl lg:text-[32px] md:pb-16">
                I’m Nikola, a full-stack developer with over 3 years of
                professional experience based in Skopje, Macedonia.
              </h2>
              <div className="aspect-video my-10 md:hidden">
                <Image
                  src={heroImage}
                  alt="hero image"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="text-foreground/80 text-lg pb-2">What I Do</h5>
                  <p className="text-base text-muted-foreground max-w-[90%]">
                    I build modern, scalable web applications using JavaScript
                    and TypeScript, with a focus on React, Next.js, and Node.js,
                    prioritizing performance and maintainable code.
                  </p>
                </div>
                <div>
                  <h5 className="text-foreground/80 text-lg pb-2">
                    Beyond Code
                  </h5>
                  <p className="text-base text-muted-foreground max-w-[90%]">
                    Outside of development, I like staying active and keeping a
                    good balance. I enjoy watching sports, going to the gym,
                    watching movies and TV shows, and spending time with
                    friends.
                  </p>
                </div>
              </div>
              <div className="md:hidden pt-10">
                <Link
                  href={"/"}
                  className="grid grid-cols-[1fr_auto] items-start gap-1 w-fit"
                >
                  <div className="flex items-center justify-center bg-muted px-4 h-full">
                    <LiaDownloadSolid className="text-foreground text-bsae" />
                  </div>
                  <div className="bg-muted py-3 px-6">
                    <span className="text-foreground text-base">
                      Download Resume
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative col-span-3 lg:col-end-13 max-md:hidden">
              <Image
                src={heroImage}
                alt="about image"
                width={500}
                height={500}
                className="absolute top-0 right-0 w-full h-2/3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
