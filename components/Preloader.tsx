"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";
import { usePageStore } from "@/lib/store/usePageStore";

export default function Preloader() {
  const container = useRef<HTMLDivElement | null>(null);
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);
  const text1 = useRef<HTMLHeadingElement | null>(null);
  const text2 = useRef<HTMLHeadingElement | null>(null);

  const setPreloaderDone = usePageStore((state) => state.setPreloaderDone);

  useGSAP(
    () => {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem("preloader-seen", "true");
          setPreloaderDone(true);
          gsap.set(container.current, { display: "none" });
        },
      });

      gsap.set([text1.current, text2.current], { yPercent: 40, opacity: 0 });

      tl.to(text1.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(text1.current, {
          yPercent: -40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          delay: 0.6,
        })
        .to(text2.current, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(text2.current, {
          yPercent: -40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
          delay: 0.6,
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
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999999] pointer-events-none"
    >
      <div ref={firstLayer} className="absolute inset-0 bg-accent" />

      <div
        ref={secondLayer}
        className="absolute inset-0 bg-background flex items-center justify-center"
      >
        <div className="grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1">
          <h1
            ref={text1}
            className="text-foreground text-3xl md:text-5xl font-medium tracking-tight opacity-0"
          >
            Hi I'm Nikola
          </h1>
          <h1
            ref={text2}
            className="text-foreground text-3xl md:text-5xl font-medium tracking-tight opacity-0"
          >
            Thanks for stopping by
          </h1>
        </div>
      </div>
    </div>
  );
}
