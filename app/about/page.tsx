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

          <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-20 pt-12 lg:pt-20">
            <AnimatedBorder className="absolute top-0 left-0" />

            <div className="lg:col-span-4 relative min-h-72 max-lg:hidden">
              <Image
                src={heroImage}
                alt="hero image"
                height={800}
                width={500}
                className="absolute top-0 left-0 w-full h-full object-cover max-lg:object-top"
              />
            </div>

            <div className="flex flex-col gap-6 sm:gap-10 xl:gap-20 lg:col-span-8">
              <h2 className="text-foreground text-2xl sm:text-3xl xl:text-[42px] leading-tight">
                Hi, I’m Nikola I’m a full-stack developer who loves building
                clean, modern web apps and turning ideas into things people
                actually enjoy using.
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
              <p className="text-muted-foreground text-base md:text-lg">
                I work across the full stack, building everything from
                responsive, polished interfaces to scalable backends that just
                work. Over the past few years, I’ve collaborated on real-world
                projects, shipped production features, and helped turn ideas
                into reliable products. I care about clean architecture,
                performance, and creating experiences that feel simple and
                intuitive for the people using them.
              </p>

              <div className="max-sm:pt-6">
                <PrimaryButton title="Let's  WorkTogether" link="/" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 sm:py-24 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="text-foreground text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-[1000px] leading-tight pb-12 lg:pb-24">
            What I do, from frontend to backend and everything in between.
          </h3>

          <div className="flex flex-col gap-12 lg:gap-24">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative grid lg:grid-cols-12 gap-y-8 lg:gap-x-20 pt-12 lg:pt-24"
              >
                <AnimatedBorder className="absolute top-0 left-0" />
                <div className="flex flex-col sm:flex-row items-start max-lg:gap-6 lg:grid lg:grid-cols-7 lg:col-span-7">
                  <span className="text-lg text-muted-foreground col-span-2">
                    0{service.id}
                  </span>
                  <h5 className="text-foreground text-2xl md:text-3xl xl:text-4xl leading-tight col-span-5">
                    {service.title}
                  </h5>
                </div>

                <p className="text-muted-foreground lg:col-span-5">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
