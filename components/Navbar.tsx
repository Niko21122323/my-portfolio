import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-6 py-6">
          <Link href="/">Nikola</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/">Socials</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
