import Link from "next/link";

const links = [
  {
    id: 1,
    label: "About",
    link: "/about",
  },
  {
    id: 2,
    label: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    label: "Socials",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto xl:max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-10">
          <Link href="/" className="text-foreground text-xl">
            Nikola
          </Link>
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                data-name={link.label}
                className="nav-link relative text-transparent overflow-hidden text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
