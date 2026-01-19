"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Theme = "dark" | "light";

interface UseThemeSwitchOptions {
  theme: Theme;
  start?: string;
  end?: string;
}

export const useThemeSwitch = ({
  theme = "dark",
  start = "top 90%",
  end = "bottom 50%",
}: UseThemeSwitchOptions) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const htmlElement = document.documentElement;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: start,
      end: end,
      onEnter: () => {
        console.log("onEnter - setting theme to:", theme);
        if (theme === "dark") {
          htmlElement.setAttribute("data-theme", "dark");
        } else {
          htmlElement.removeAttribute("data-theme");
        }
      },
      onLeave: () => {
        console.log("onLeave - removing theme:", theme);
        if (theme === "dark") {
          htmlElement.removeAttribute("data-theme");
        } else {
          htmlElement.setAttribute("data-theme", "dark");
        }
      },
      onEnterBack: () => {
        console.log("onEnterBack - setting theme to:", theme);
        if (theme === "dark") {
          htmlElement.setAttribute("data-theme", "dark");
        } else {
          htmlElement.removeAttribute("data-theme");
        }
      },
      onLeaveBack: () => {
        console.log("onLeaveBack - removing theme:", theme);
        if (theme === "dark") {
          htmlElement.removeAttribute("data-theme");
        } else {
          htmlElement.setAttribute("data-theme", "dark");
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [theme, start, end]);

  return sectionRef;
};
