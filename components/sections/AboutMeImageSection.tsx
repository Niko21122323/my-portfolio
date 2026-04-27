"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";
import aboutImage from "../../public/photos/about/about-image.png";
import RevealAnimation from "../animations/RevelAnimation";

const AboutMeImageSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[750px]"
    >
      <RevealAnimation>
        <Image
          ref={imageRef}
          src={aboutImage}
          alt="about image"
          className="h-full w-full object-cover object-top will-change-transform"
          loading="eager"
          placeholder="blur"
        />
      </RevealAnimation>
    </section>
  );
};

export default AboutMeImageSection;
