import { Link } from "next-transition-router";

const PrimaryButton = ({ url, title }: { url: string; title: string }) => {
  return (
    <Link
      href={url}
      className="relative flex items-center justify-center max-sm:w-full overflow-hidden text-center text-sm text-background hover:text-foreground font-light uppercase bg-foreground rounded-full px-6 py-3 sm:py-2 border border-foreground transition-colors duration-300 ease-in-out group"
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-background group-hover:h-full transition-all duration-300 ease-in-out"></div>
    </Link>
  );
};

export default PrimaryButton;
