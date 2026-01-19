"use client";

import TextAnimation from "../animations/TextAnimation";
import PrimaryButton from "../buttons/PrimaryButton";

const AboutSection = () => {
  return (
    <section className="relative py-52 bg-background overflow-x-clip">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-16">
          <TextAnimation>
            <span className="block text-center text-ring text-base">
              About Me
            </span>
            <h2 className="text-foreground text-center text-4xl leading-tight max-w-3xl py-12">
              I&apos;m Nikola, a full-stack developer crafting fast, scalable,
              and user-focused digital experiences from frontend polish to
              backend logic.
            </h2>
            <p className="text-ring text-center text-xl max-w-3xl">
              I develop end-to-end web applications using JavaScript,
              TypeScript, React, Next.js, Node.js, GraphQL, Prisma, and
              databases like MongoDB and SQL.
            </p>
          </TextAnimation>
          <div>
            <PrimaryButton title="More About Me" link="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
