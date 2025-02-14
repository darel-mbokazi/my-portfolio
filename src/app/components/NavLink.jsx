import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#CBB26A] sm:text-xl rounded md:p-0 hover:text-[#cbb36aa4]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
