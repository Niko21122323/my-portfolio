import Image from "next/image";
import heroImage from "../../public/assets/images/about/about-hero-image.jpg";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const page = () => {
  return (
    <>
      <section className="bg-background pt-36">
        <div className="container mx-auto px-2">
          <h1 className="text-7xl text-foreground pb-20">
            Who I Am and What I Do
          </h1>
          <div className="grid grid-cols-12 gap-20 pt-20 border-t border-border">
            <div className="col-span-4">
              <Image
                src={heroImage}
                alt="hero image"
                height={800}
                width={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="col-span-8">
              <h2 className="text-foreground text-4xl">
                <span className="float-right">
                  Hi, I’m Nikola I’m a full-stack
                </span>
                <br />
                developer who loves building clean, modern web apps and turning
                ideas into things people actually enjoy using.
              </h2>
              <p className="text-muted-foreground">
                I work across the full stack, building everything from
                responsive, polished interfaces to scalable backends that just
                work. Over the past few years, I’ve collaborated on real-world
                projects, shipped production features, and helped turn ideas
                into reliable products. I care about clean architecture,
                performance, and creating experiences that feel simple and
                intuitive for the people using them.
              </p>
              <PrimaryButton title="Let's  WorkTogether" link="/" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
