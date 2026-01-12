"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MagneticEffectWrapper = ({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const xTo = gsap.quickTo(wrapper, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(wrapper, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left - centerX;
      const mouseY = e.clientY - rect.top - centerY;

      xTo(mouseX * strength);
      yTo(mouseY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className="inline-block">
      {children}
    </div>
  );
};

export default MagneticEffectWrapper;
