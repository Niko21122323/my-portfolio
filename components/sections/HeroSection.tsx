"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import heroImage from "../../public/assets/images/home/hero-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const backgroundRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: backgroundRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <section className="relative h-screen">
      <div ref={backgroundRef} className="absolute top-0 left-0 h-full w-full">
        <Image
          src={heroImage}
          alt="hero image"
          width={2536}
          height={1426}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-8 z-10 h-full">
        <div className="flex flex-col justify-end gap-[100px] h-full">
          <p className="self-end text-lg text-background text-right max-w-[420px]">
            A full-stack developer crafting fast, scalable, and user-focused
            digital experiences from frontend polish to backend logic.
          </p>
          <h1 className="text-white text-[170px] font-bold">Hi I'm Nikola</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
