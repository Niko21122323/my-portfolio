"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";
import { usePageReady } from "@/lib/hooks/usePageReady";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function RevealAnimation({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = 40,
  className = "",
}: RevealProps) {
  const container = useRef<HTMLDivElement>(null);
  const isReady = usePageReady();

  useGSAP(
    () => {
      if (!isReady) return;

      gsap.to(container.current, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
      });
    },
    { scope: container, dependencies: [isReady] },
  );

  return (
    <div
      ref={container}
      className={`opacity-0 ${className}`}
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      {children}
    </div>
  );
}
