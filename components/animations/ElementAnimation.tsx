"use client";

import React, { useRef, ReactElement, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ElementAnimationProps {
  children: ReactElement | ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
  y?: number | string;
  x?: number | string;
  scale?: number;
  opacity?: number;
  stagger?: number;
}

export default function ElementAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  duration = 1,
  y = 100,
  x = 0,
  scale = 1,
  opacity = 0,
  stagger = 0,
}: ElementAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-element-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      gsap.set(elements, {
        y,
        x,
        scale,
        opacity,
      });

      const animationProps = {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        stagger,
        ease: "power4.out",
        delay,
      };

      if (animateOnScroll) {
        gsap.to(elements, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.to(elements, animationProps);
      }
    },
    {
      scope: containerRef,
      dependencies: [
        animateOnScroll,
        delay,
        duration,
        y,
        x,
        scale,
        opacity,
        stagger,
      ],
    },
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(
      children as ReactElement<{ ref?: React.Ref<HTMLDivElement> }>,
      { ref: containerRef },
    );
  }

  return (
    <div ref={containerRef} data-element-wrapper="true">
      {children}
    </div>
  );
}
