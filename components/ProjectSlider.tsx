"use client";

import { useRef } from "react";
import { projects } from "@/data/data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const ProjectSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const duplicatedProjects = [...projects, ...projects];

  useGSAP(
    () => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      const items = Array.from(scrollContainer.children) as HTMLElement[];
      const halfIndex = Math.floor(items.length / 2);

      const scrollDistance = items[halfIndex].offsetLeft;

      tweenRef.current = gsap.to(scrollContainer, {
        x: -scrollDistance,
        duration: 30,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(scrollContainer, { x: 0 });
        },
      });
    },
    { scope: containerRef, dependencies: [projects] },
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

  return (
    <section className="py-24 lg:py-36 overflow-hidden">
      <div
        className="container mx-auto xl:max-w-7xl px-6 overflow-x-hidden"
        ref={containerRef}
      >
        <Link
          href={"/"}
          className="relative block overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={scrollRef} className="flex gap-5 will-change-transform">
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 cursor-pointer basis-[calc(83.333%-16.67px)] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-13.33px)]"
              >
                <div className="overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={700}
                    priority={index < 6}
                    className="min-h-82 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-foreground/90">{project.name}</p>
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
