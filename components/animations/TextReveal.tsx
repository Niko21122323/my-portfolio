"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap/gsapConfig";
import { usePageReady } from "@/lib/hooks/usePageReady";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
  as?: React.ElementType;
}

export default function TextReveal({
  children,
  delay = 0,
  stagger = 0.05,
  className = "",
  as: Component = "span",
}: TextRevealProps) {
  const container = useRef<HTMLElement>(null);
  const isReady = usePageReady();

  useGSAP(
    () => {
      if (!isReady || !container.current) return;

      const splitParent = new SplitText(container.current, {
        type: "words",
        wordsClass: "inline-block overflow-hidden align-top",
      });

      const splitChild = new SplitText(splitParent.words, {
        type: "words",
        wordsClass: "word-inner inline-block align-top",
      });

      gsap.set(container.current, { opacity: 1 });

      gsap.fromTo(
        splitChild.words,
        {
          yPercent: 102,
        },
        {
          yPercent: 0,
          duration: 1.1,
          delay: delay,
          stagger: stagger,
          ease: "expo.out",
        },
      );

      return () => {
        splitChild.revert();
        splitParent.revert();
      };
    },
    { scope: container, dependencies: [isReady] },
  );

  return (
    <Component
      ref={container}
      className={`opacity-0 leading-[1.1] inline-block ${className}`}
      style={{ verticalAlign: "top" }}
    >
      {children}
    </Component>
  );
}
