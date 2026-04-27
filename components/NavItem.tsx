"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";
import { Link } from "next-transition-router";
import { NavItemProps } from "@/lib/types";

const NavItem = ({ link, label, closeMenu }: NavItemProps) => {
  const itemRef = useRef<HTMLAnchorElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: itemRef });

  const handleMouseEnter = contextSafe((e: React.MouseEvent) => {
    if (!itemRef.current || !bgRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const enterFromTop = relY < rect.height / 2;

    gsap.killTweensOf(bgRef.current);
    gsap.set(bgRef.current, {
      top: enterFromTop ? 0 : "auto",
      bottom: enterFromTop ? "auto" : 0,
      height: 0,
    });
    gsap.to(bgRef.current, {
      height: "100%",
      duration: 0.4,
      ease: "power3.out",
    });
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent) => {
    if (!itemRef.current || !bgRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const leaveFromTop = relY < rect.height / 2;

    gsap.killTweensOf(bgRef.current);
    gsap.set(bgRef.current, {
      top: leaveFromTop ? 0 : "auto",
      bottom: leaveFromTop ? "auto" : 0,
    });
    gsap.to(bgRef.current, {
      height: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  return (
    <Link
      ref={itemRef}
      href={link}
      onClick={closeMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative block w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground text-center font-heading font-bold uppercase py-4 lg:hover:text-background transition-colors duration-300 group"
    >
      <span className="relative z-10">{label}</span>
      <div
        ref={bgRef}
        className="absolute left-0 w-full bg-accent max-lg:hidden"
        style={{ height: 0 }}
      ></div>
    </Link>
  );
};

export default NavItem;
