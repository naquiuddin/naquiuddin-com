import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between px-4 py-4 sm:px-8">
      <Link href="/">
        <a className="w-3/5 text-xl font-bold text-teal-900">Khaja Naquiuddin</a>
      </Link>
      <div className="flex flex-row items-center justify-end w-1/3 space-x-2 md:space-x-6">
        <Link href="/">
          <a className="block hover:border-b-2 hover:border-solid hover:border-teal-900">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="hover:border-b-2 hover:border-teal-900">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="hover:border-b-2 hover:border-teal-900">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
