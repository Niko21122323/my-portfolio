import ContactForm from "@/components/ContactForm";
import LinkComponent from "@/components/LinkComponent";
import CtaSection from "@/components/sections/CtaSection";

import { formData } from "@/lib/data/formData";
import { contactInfo, socialsLinks } from "@/lib/data/socialsLinks";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="hero-padding-y">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-muted text-sm text-center font-light">
              ( Contact )
            </span>
            <h1 className="text-foreground text-pretty max-[374px]:text-4xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center font-bold max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
              Let's start a project together
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-y-16">
            <div className="md:col-span-7 order-2 lg:order-1">
              <ContactForm formData={formData} />
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col sm:justify-between md:justify-normal gap-8 sm:gap-6 md:gap-16 md:col-span-4 lg:col-span-3 md:col-start-9 lg:col-start-10 order-1 md:order-2">
              <div className="flex flex-col gap-4">
                <h5 className="text-muted text-lg font-medium">
                  Contact Details
                </h5>
                <div className="flex flex-col gap-2">
                  {contactInfo.map(({ id, link, label }) => (
                    <LinkComponent
                      key={id}
                      url={link}
                      title={label}
                      customClass="text-foreground text-base lg:text-xl"
                      customHoverClass="text-foreground text-base lg:text-xl"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-muted text-lg font-medium">
                  Location & Time
                </h5>
                <div className="flex flex-col gap-2">
                  <p className="text-foreground text-base lg:text-xl">
                    Skopje, Macedonia
                  </p>
                  <p className="text-foreground text-base lg:text-xl">
                    16:49 pm
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-muted text-lg font-medium">Socials</h5>
                <div className="flex flex-col gap-2">
                  {socialsLinks.map(({ id, link, label }) => (
                    <LinkComponent
                      key={id}
                      url={link}
                      title={label}
                      customClass="text-foreground text-base lg:text-xl"
                      customHoverClass="text-foreground text-base lg:text-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  );
};

export default page;
