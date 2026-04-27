import Image from "next/image";
import heroText from "../../public/photos/home/hero-text.svg";
import RevealAnimation from "../animations/RevelAnimation";
import TextReveal from "../animations/TextReveal";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="hero-padding-y">
          <RevealAnimation>
            <Image
              src={heroText}
              alt="hero title text svg"
              className="w-full h-auto"
            />
          </RevealAnimation>

          <div className="flex lg:justify-end pt-6 sm:pt-8 lg:pt-12">
            <TextReveal>
              <p className="text-base sm:text-xl xl:text-3xl text-muted font-light lg:max-w-[700px] xl:max-w-[1000px]">
                Full stack developer with 3 years of experience shipping
                production-ready applications across agency and SaaS
                environments, skilled in JavaScript/TypeScript, frontend
                architecture, and API integration.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
