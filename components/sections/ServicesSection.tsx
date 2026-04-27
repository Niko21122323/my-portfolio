import { servicesData } from "@/lib/data/servicesData";
import DotAnimation from "../DotAnimation";

const ServicesSection = () => {
  return (
    <section className="section-padding-t">
      <div className="container">
        <h3 className="text-foreground max-[410px]:text-3xl text-4xl xl:text-5xl font-semibold pb-12">
          Where I Fit In <DotAnimation />
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {servicesData.map(({ id, icon, title, description, background }) => (
            <div
              key={id}
              className={`flex flex-col gap-16 lg:gap-32 xl:gap-44 p-6 2xl:p-8 rounded-3xl bg-background border border-border`}
            >
              <span className="text-foreground text-base font-light">
                ( 00{id} )
              </span>
              <div>
                <h5 className="text-foreground text-base font-medium pb-4">
                  {title}
                </h5>
                <p className="text-muted text-sm font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
