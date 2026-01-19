"use client";

import { services } from "@/data/data";
import TextAnimation from "./animations/TextAnimation";
import AnimatedBorder from "./AnimatedBorder";
import { useThemeSwitch } from "./animations/useThemeSwitch";

const WhatIDoSection = () => {
  const sectionRef = useThemeSwitch({ theme: "dark" });

  return (
    <section ref={sectionRef} className="pb-56 bg-background">
      <div className="container mx-auto px-8">
        <div className="relative grid grid-cols-12 pb-24">
          <div className="col-span-9 col-start-4">
            <TextAnimation>
              <span className="text-ring text-base">What I Do</span>
            </TextAnimation>
            <TextAnimation>
              <h5 className="text-foreground text-4xl pt-6">
                I design and build modern web applications with a strong focus
                on performance, clarity, and real-world usability. With a
                full-stack mindset and hands-on experience across dozens of
                production projects, I connect clean interfaces with reliable
                backend systems, making sure everything scales well and feels
                great to use.
              </h5>
            </TextAnimation>
          </div>
        </div>
        <div className="flex flex-col gap-24">
          {services.map((service) => (
            <div key={service.id} className="relative grid grid-cols-12 pt-24">
              <TextAnimation>
                <span className="text-base text-foreground col-span-3">
                  0{service.id}
                </span>
              </TextAnimation>
              <TextAnimation>
                <h4 className="text-foreground text-4xl col-span-5">
                  {service.title}
                </h4>
              </TextAnimation>
              <TextAnimation>
                <p className="text-ring col-span-4">{service.text}</p>
              </TextAnimation>
              <AnimatedBorder className="absolute top-0 left-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
