"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsapConfig";

import NavItem from "./NavItem";
import LinkComponent from "./LinkComponent";
import LocalTimeComponent from "./LocalTimeComponent";

import { navigationLinks } from "@/lib/data/navigationLinks";
import { socialsLinks } from "@/lib/data/socialsLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLButtonElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(menuRef.current, { yPercent: -100, autoAlpha: 0 });
      gsap.set(overlayRef.current, { autoAlpha: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .set(document.documentElement, { scrollbarGutter: "stable" })
        .set(document.body, { overflow: "hidden" })
        .to(
          overlayRef.current,
          { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" },
          0,
        )
        .to(
          menuRef.current,
          { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: "expo.inOut" },
          0,
        )
        .to(
          line1Ref.current,
          { y: 5, rotation: 45, duration: 0.4, ease: "back.out(1.5)" },
          0,
        )
        .to(
          line2Ref.current,
          { y: -5, rotation: -45, duration: 0.4, ease: "back.out(1.5)" },
          0,
        );
    },
    { scope: containerRef },
  );

  const handleScroll = contextSafe(() => {
    if (isOpen) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY < 10) {
      gsap.to(containerRef.current, {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.4,
        ease: "power3.out",
      });
    } else if (currentScrollY < lastScrollY.current) {
      gsap.to(containerRef.current, {
        yPercent: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    lastScrollY.current = currentScrollY;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!tl.current) return;
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <nav ref={containerRef} className="fixed top-0 left-0 w-full z-[100]">
      <div className="relative z-[100] bg-background border-b border-border">
        <div className="container flex justify-between lg:grid sm:grid-cols-3 items-center gap-6 py-6">
          <p className="text-base sm:text-lg text-foreground">
            <span className="text-muted text-sm sm:text-base">Local / </span>
            <LocalTimeComponent
              customClass="text-foreground text-lg sm:text-xl"
              periodClass="text-muted text-sm sm:text-base"
            />
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-[8px] cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div
                ref={line1Ref}
                className="w-8 h-[2px] bg-foreground origin-center rounded-full"
              ></div>
              <div
                ref={line2Ref}
                className="w-8 h-[2px] bg-foreground origin-center rounded-full"
              ></div>
            </button>
          </div>

          <div className="max-lg:hidden justify-self-end">
            <LinkComponent
              url="/contact"
              title="Let's Talk"
              customClass="text-foreground text-xl"
              customHoverClass="text-foreground text-xl"
            />
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className="absolute top-full left-0 w-full h-auto bg-background z-[99] border-b border-border opacity-0 invisible"
      >
        <div className="py-10 md:py-12 xl:py-16">
          {navigationLinks.map((linkData) => (
            <NavItem key={linkData.id} {...linkData} closeMenu={closeMenu} />
          ))}
        </div>
        <div className="border-t border-border">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between py-8">
              <div className="flex items-center gap-6">
                {socialsLinks.map(({ id, label, link }) => (
                  <LinkComponent
                    key={id}
                    url={link}
                    target="_blank"
                    title={label}
                    customClass="text-base sm:text-lg lg:text-xl text-foreground font-medium"
                    customHoverClass="text-base sm:text-lg lg:text-xl text-foreground font-medium"
                  />
                ))}
              </div>
              <LinkComponent
                url="mailto:stojanovski21n@gmail.com"
                title="stojanovski21n@gmail.com"
                customClass="text-base sm:text-lg lg:text-xl text-foreground font-medium"
                customHoverClass="text-base sm:text-lg lg:text-xl text-foreground font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        ref={overlayRef}
        tabIndex={0}
        aria-label="Close menu overlay"
        onClick={closeMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") closeMenu();
        }}
        className="fixed top-0 left-0 w-full h-screen bg-background/80 backdrop-blur-sm z-[98] opacity-0 invisible cursor-pointer outline-none"
      ></button>
    </nav>
  );
};

export default Navbar;
