"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap/gsapConfig";

const DotAnimation = () => {
  const container = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl.fromTo(
        ".dot",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: "power1.inOut",
        },
      ).to(".dot", {
        opacity: 0,
        duration: 0.3,
        delay: 0.5,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  return (
    <span ref={container} aria-hidden="true" className="inline-flex ml-1">
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </span>
  );
};

export default DotAnimation;
