import { Link } from "next-transition-router";

const LinkComponent = ({
  url,
  title,
  customClass,
  customHoverClass,
  target,
}: {
  url: string;
  title: string;
  customClass?: string;
  customHoverClass?: string;
  target?: string;
}) => {
  return (
    <Link
      target={target}
      href={url}
      className="group relative inline-block pb-1 w-fit"
    >
      <span className="relative z-10 flex flex-col overflow-hidden h-[1.5rem]">
        <span
          className={`transition-transform duration-300 ease-in-out group-hover:-translate-y-full ${customClass}`}
        >
          {title}
        </span>

        <span
          className={`absolute transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0 ${customHoverClass}`}
        >
          {title}
        </span>
      </span>

      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default LinkComponent;
