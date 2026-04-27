import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

  gsap.config({
    nullTargetWarn: false,
    autoSleep: 60,
    force3D: true,
  });

  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, useGSAP, SplitText };
