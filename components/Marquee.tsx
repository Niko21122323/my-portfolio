"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { PiStarFourFill } from "react-icons/pi";

interface MarqueeProps {
  items: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const timelineTimeScaleTween = useRef<GSAPTween | null>(null);

  useEffect(() => {
    if (!movingContainer.current) return;

    const ctx = gsap.context(() => {
      gsap.set(movingContainer.current, { xPercent: 0 });

      timeline.current = gsap
        .timeline({
          defaults: { ease: "none" },
          repeat: -1,
        })
        .to(movingContainer.current, {
          xPercent: -50,
          duration: 20,
        });
    }, movingContainer);

    return () => {
      ctx.revert();
      timelineTimeScaleTween.current?.kill();
    };
  }, []);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="relative flex shrink-0 items-center justify-center">
              <span className="text-base text-muted-foreground whitespace-nowrap cursor-default">
                {item}
              </span>
            </div>
            <div className="relative flex shrink-0 items-center justify-center px-2">
              <PiStarFourFill className="text-base text-muted" />
            </div>
          </div>
        ))}
      </div>
    ),
    [items],
  );

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={movingContainer}
        className="flex w-fit"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        {list}
        {list}
      </div>
    </div>
  );
};

export default Marquee;
