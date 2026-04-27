"use client";

import { useRef } from "react";
import { gsap } from "../gsap/gsapConfig";
import { TransitionRouter } from "next-transition-router";
import { usePageStore } from "@/lib/store/usePageStore";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const setTransitioning = usePageStore((state) => state.setTransitioning);

  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        setTransitioning(true);
        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            { y: 0, duration: 0.3, ease: "circ.inOut" },
          )
          .fromTo(
            secondLayer.current,
            { y: "100%" },
            { y: 0, duration: 0.3, ease: "circ.inOut" },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline({
            onComplete: () => {
              next();
              setTransitioning(false);
            },
          })
          .fromTo(
            secondLayer.current,
            { y: 0 },
            { y: "-100%", duration: 0.3, ease: "circ.inOut" },
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            { y: "-100%", duration: 0.3, ease: "circ.inOut" },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
    >
      {children}

      <div
        ref={firstLayer}
        className="fixed inset-0 z-[999999] translate-y-full bg-accent pointer-events-none"
      />
      <div
        ref={secondLayer}
        className="fixed inset-0 z-[999999] translate-y-full bg-background pointer-events-none"
      />
    </TransitionRouter>
  );
};

export default Provider;
