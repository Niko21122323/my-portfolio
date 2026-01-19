"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { PiStarFourFill } from "react-icons/pi";

interface TitleLoopProps {
  title: string;
}

const TitleLoop = ({ title }: TitleLoopProps) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);
  const timelineTimeScaleTween = useRef<GSAPTween | null>(null);

  // Create enough repetitions to ensure smooth infinite scroll
  const titleArray = useMemo(() => Array(15).fill(title), [title]);

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
          duration: 150,
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
        {titleArray.map((item, index) => (
          <div key={index} className="flex items-center">
            <h1 className="text-pretty text-5xl md:text-6xl xl:text-7xl text-foreground whitespace-nowrap cursor-default">
              {item}
            </h1>
            <div className="relative flex shrink-0 items-center justify-center px-4 md:px-6 xl:px-8">
              <PiStarFourFill className="text-3xl md:text-4xl xl:text-5xl text-border" />
            </div>
          </div>
        ))}
      </div>
    ),
    [titleArray]
  );

  return (
    <div className="w-full overflow-hidden pb-12 lg:pb-20">
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

export default TitleLoop;
