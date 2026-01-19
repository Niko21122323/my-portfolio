"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBorder = ({ className }: { className: string }) => {
  const borderRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      borderRef.current,
      {
        width: "0%",
        left: "0%",
      },
      {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: borderRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div
      ref={borderRef}
      className={`${className} h-[1px] bg-border`}
      style={{ width: 0 }}
    />
  );
};

export default AnimatedBorder;
