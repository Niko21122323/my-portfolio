import Image from "next/image";
import aboutImage from "../../public/photos/about/about-image.png";
import PrimaryButton from "../PrimaryButton";

const CtaSection = () => {
  return (
    <section className="section-padding-y">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="relative rounded-full">
            <div className="rounded-full size-20 lg:size-24 overflow-hidden">
              <Image
                src={aboutImage}
                alt="my image"
                className="h-full w-full object-cover scale-125"
              />
            </div>
            <div className="absolute bottom-0 right-0 size-6 rounded-full bg-accent border-4 border-background"></div>
          </div>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground text-center font-bold max-w-[400px] sm:max-w-[600px] lg:max-w-[780px]">
            Have a project in mind? Drop me a message
          </h3>
          <div className="w-fit">
            <PrimaryButton url="/contact" title="Let's Talk" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
