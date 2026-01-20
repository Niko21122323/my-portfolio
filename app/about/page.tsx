import Image from "next/image";
import heroImage from "../../public/assets/images/about/about-hero-image.jpg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { services } from "@/data/data";
import AnimatedBorder from "@/components/AnimatedBorder";
import TitleLoop from "@/components/TitleLoop";

const page = () => {
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
          <div className="border-t border-border"></div>
        </div>
      </section>
    </>
  );
};

export default page;
