"use client";

import { useRef } from "react";
import { projects } from "@/data/data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const ProjectSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollWidth = container.scrollWidth / 2;

      tweenRef.current = gsap.to(container, {
        x: -scrollWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = () => {
    gsap.to(tweenRef.current, {
      timeScale: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(tweenRef.current, {
      timeScale: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="pb-36 overflow-hidden">
      <div className="container mx-auto lg:max-w-6xl px-6">
        <Link
          href={"/"}
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={containerRef} className="flex gap-5 will-change-transform">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 cursor-pointer basis-[calc(83.333%-16.67px)] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-13.33px)]"
              >
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={700}
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="text-sm font-medium text-foreground/90">
                    {project.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSlider;
