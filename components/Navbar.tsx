import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto xl:max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6 py-10">
          <Link href="/">Nikola</Link>
          <div className="flex items-center gap-10">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/">Socials</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
