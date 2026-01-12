"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import gsap from "gsap";
import MagneticEffectWrapper from "../MagneticEffectWrapper";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const PrimaryButton = ({ title, link }: { title: string; link: string }) => {
  const iconOverlayRef = useRef<HTMLDivElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const iconContainer = iconContainerRef.current;
      const textContainer = textContainerRef.current;
      const iconOverlay = iconOverlayRef.current;
      const textOverlay = textOverlayRef.current;

      if (!iconContainer || !textContainer || !iconOverlay || !textOverlay)
        return;

      const getRelativePosition = (
        container: HTMLElement,
        clientX: number,
        clientY: number,
      ) => {
        const rect = container.getBoundingClientRect();
        return {
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100,
        };
      };

      const iconPos = getRelativePosition(iconContainer, e.clientX, e.clientY);
      const textPos = getRelativePosition(textContainer, e.clientX, e.clientY);

      gsap.fromTo(
        iconOverlay,
        {
          height: "0%",
          width: "0%",
          left: `${iconPos.x}%`,
          top: `${iconPos.y}%`,
          transformOrigin: "center center",
        },
        {
          height: "200%",
          width: "200%",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          duration: 0.4,
          ease: "power2.out",
        },
      );

      // Animate text overlay
      gsap.fromTo(
        textOverlay,
        {
          height: "0%",
          width: "0%",
          left: `${textPos.x}%`,
          top: `${textPos.y}%`,
          transformOrigin: "center center",
        },
        {
          height: "200%",
          width: "200%",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          duration: 0.4,
          ease: "power2.out",
        },
      );
    },
    [],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const iconContainer = iconContainerRef.current;
      const textContainer = textContainerRef.current;
      const iconOverlay = iconOverlayRef.current;
      const textOverlay = textOverlayRef.current;

      if (!iconContainer || !textContainer || !iconOverlay || !textOverlay)
        return;

      const getRelativePosition = (
        container: HTMLElement,
        clientX: number,
        clientY: number,
      ) => {
        const rect = container.getBoundingClientRect();
        return {
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100,
        };
      };

      const iconPos = getRelativePosition(iconContainer, e.clientX, e.clientY);
      const textPos = getRelativePosition(textContainer, e.clientX, e.clientY);

      gsap.to(iconOverlay, {
        height: "0%",
        width: "0%",
        left: `${iconPos.x}%`,
        top: `${iconPos.y}%`,
        x: "0%",
        y: "0%",
        duration: 0.4,
        ease: "power2.in",
      });

      gsap.to(textOverlay, {
        height: "0%",
        width: "0%",
        left: `${textPos.x}%`,
        top: `${textPos.y}%`,
        x: "0%",
        y: "0%",
        duration: 0.4,
        ease: "power2.in",
      });
    },
    [],
  );

  return (
    <MagneticEffectWrapper>
      <Link
        href={link}
        className="relative flex items-center group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={iconContainerRef}
          className="relative p-4 bg-secondary-foreground rounded-full overflow-hidden group-hover:bg-accent transition-colors duration-400 ease-in-out"
        >
          <MdOutlineSubdirectoryArrowRight className="relative z-10 text-base text-background group-hover:text-foreground transition-colors duration-700 ease-in-out" />
          <div
            ref={iconOverlayRef}
            className="absolute rounded-full bg-accent"
            style={{
              height: "0%",
              width: "0%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <div
          ref={textContainerRef}
          className="relative bg-secondary-foreground rounded-full px-6 py-3 overflow-hidden group-hover:bg-accent transition-colors duration-400 ease-in-out"
        >
          <span className="relative z-10 text-background group-hover:text-foreground transition-colors duration-700 ease-in-out">
            {title}
          </span>
          <div
            ref={textOverlayRef}
            className="absolute rounded-full bg-accent"
            style={{
              height: "0%",
              width: "0%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </Link>
    </MagneticEffectWrapper>
  );
};

export default PrimaryButton;
