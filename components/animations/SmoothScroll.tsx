"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const smoothScrollRef = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    smoothScrollRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.5,
      ignoreMobileResize: true,
      normalizeScroll: true,
    });

    return () => {
      smoothScrollRef.current?.kill();
      smoothScrollRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-wrapper" style={{ overflow: "hidden" }}>
      <div id="smooth-content" style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
