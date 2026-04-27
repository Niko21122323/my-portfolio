import { navigationLinks } from "@/lib/data/navigationLinks";
import { socialsLinks } from "@/lib/data/socialsLinks";

import LinkComponent from "./LinkComponent";
import LocalTimeComponent from "./LocalTimeComponent";

const Footer = () => {
  return (
    <footer className="max-md:border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-20 py-10 md:py-6 mb-24">
          <div className="flex flex-col gap-2">
            {navigationLinks.map(({ id, label, link }) => (
              <LinkComponent
                key={id}
                url={link}
                title={label}
                customClass="text-xl text-muted"
                customHoverClass="text-xl text-foreground"
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {socialsLinks.map(({ id, label, link }) => (
              <LinkComponent
                key={id}
                url={link}
                target="_blank"
                title={label}
                customClass="text-xl text-muted"
                customHoverClass="text-xl text-foreground"
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl text-muted">Skopje, Macedonia</p>
            <LocalTimeComponent
              customClass="text-muted text-xl"
              periodClass="text-muted text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 pb-6">
          <p className="text-lg sm:text-xl text-foreground font-semibold uppercase">
            2026 ® NIKOLA STOJANOVSKI
          </p>
          <LinkComponent
            url="mailto:stojanovski21n@gmail.com"
            title="stojanovski21n@gmail.com"
            customClass="text-xl text-foreground font-semibold"
            customHoverClass="text-xl text-foreground font-semibold"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
