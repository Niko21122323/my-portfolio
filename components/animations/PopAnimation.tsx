"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";
import { usePageReady } from "@/lib/hooks/usePageReady";

interface PopRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function PopAnimation({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}: PopRevealProps) {
  const container = useRef<HTMLDivElement>(null);
  const isReady = usePageReady();

  useGSAP(
    () => {
      if (!isReady) return;

      gsap.to(container.current, {
        opacity: 1,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: "back.out(0.7)",
      });
    },
    { scope: container, dependencies: [isReady] },
  );

  return (
    <div
      ref={container}
      className={`opacity-0 scale-0 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
