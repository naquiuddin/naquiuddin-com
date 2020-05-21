import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row px-8 py-4">
      <Link href="/"><a className="w-3/5 text-xl text-teal-900">Khaja Naquiuddin</a></Link>
      <div className="w-1/5">&nbsp;</div>
      <div className="flex flex-row justify-around w-1/3">
        <Link href="/">
          <a className="block hover:border-b-2 hover:border-solid hover:border-teal-900">Home</a>
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
