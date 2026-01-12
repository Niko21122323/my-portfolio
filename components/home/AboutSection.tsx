import ElementAnimation from "../animations/ElementAnimation";
import TextAnimation from "../animations/TextAnimation";
import PrimaryButton from "../buttons/PrimaryButton";

const AboutSection = () => {
  return (
    <section className="py-52">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-12">
          <TextAnimation>
            <span className="text-ring text-base">About Me</span>
          </TextAnimation>
          <TextAnimation>
            <h2 className="text-foreground text-center text-4xl leading-tight max-w-3xl">
              I'm Nikola, a full-stack developer crafting fast, scalable, and
              user-focused digital experiences from frontend polish to backend
              logic.
            </h2>
          </TextAnimation>
          <TextAnimation>
            <p className="text-ring text-center text-xl max-w-3xl">
              I develop end-to-end web applications using JavaScript,
              TypeScript, React, Next.js, Node.js, GraphQL, Prisma, and
              databases like MongoDB and SQL.
            </p>
          </TextAnimation>

          <ElementAnimation>
            <PrimaryButton title="More About Me" link="/about" />
          </ElementAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
