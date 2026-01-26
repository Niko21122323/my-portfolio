"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import testImg from "../../public/assets/images/projects/tp1.png";
import Link from "next/link";
import { LiaDownloadSolid } from "react-icons/lia";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
    {
      id: 2,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
    {
      id: 3,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
    {
      id: 4,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
    {
      id: 5,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
    {
      id: 6,
      title: "Stoxy",
      description: "Web App",
      image: testImg,
    },
  ];

  const getGridPositions = (projects) => {
    const columns = 2;
    const columnHeights = [0, 0];
    const positioned = [];
    const shortHeight = 3;
    const longHeight = 4;

    for (let i = 0; i < projects.length; i += 2) {
      const maxHeight = Math.max(columnHeights[0], columnHeights[1]);
      const pairIndex = Math.floor(i / 2);
      const isEvenPair = pairIndex % 2 === 0;

      if (projects[i]) {
        const height = isEvenPair ? shortHeight : longHeight;
        const startRow = maxHeight + 1;
        columnHeights[0] = startRow + height - 1;
        positioned.push({
          ...projects[i],
          height,
          rowStart: startRow,
          colStart: 1,
        });
      }

      if (projects[i + 1]) {
        const height = isEvenPair ? longHeight : shortHeight;
        const startRow = maxHeight + 1;
        columnHeights[1] = startRow + height - 1;
        positioned.push({
          ...projects[i + 1],
          height,
          rowStart: startRow,
          colStart: 2,
        });
      }
    }

    return positioned;
  };

  const positionedProjects = getGridPositions(projects);
  const totalRows = Math.max(
    ...positionedProjects.map((p) => p.rowStart + p.height - 1),
  );

  return (
    <>
      <section className="py-24 lg:py-36">
        <div className="container mx-auto xl:max-w-7xl px-6">
          <div className="flex items-end justify-between md:gap-10 border-b border-border pb-10 md:pb-16">
            <h1 className="text-foreground max-[370px]:text-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              What I Made and <br /> How I Build It
            </h1>
            <div className="max-md:hidden">
              <Link
                href={"/"}
                className="grid grid-cols-[1fr_auto] items-start gap-1"
              >
                <div className="flex items-center justify-center bg-muted px-4 h-full w-full">
                  <LiaDownloadSolid className="text-foreground text-base" />
                </div>
                <div className="bg-muted py-3 px-6">
                  <span className="text-foreground text-base">
                    Download Resume
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-24 pt-10 md:pt-16"
            style={
              !isMobile
                ? { gridTemplateRows: `repeat(${totalRows}, minmax(0, 1fr))` }
                : {}
            }
          >
            {positionedProjects.map((project) => (
              <div
                key={project.id}
                style={
                  !isMobile
                    ? {
                        gridRowStart: project.rowStart,
                        gridRowEnd: `span ${project.height}`,
                        gridColumnStart: project.colStart,
                      }
                    : {}
                }
              >
                <div className="flex items-center justify-center bg-ring/10 h-full w-full py-36 px-10">
                  <Image
                    src={project.image}
                    alt={`${project.title} image`}
                    width={700}
                    height={500}
                    className="aspect-video object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
