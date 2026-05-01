"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 text-[#CBB26A] text-lg md:text-xl font-medium transition-colors duration-300 hover:text-[#f1d37a]"
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => setNavbarOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#33353F] bg-[#121212]/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={100}
            priority
            className="h-auto w-[110px] sm:w-[130px] md:w-[150px]"
          />
        </Link>

        <button
          type="button"
          onClick={() => setNavbarOpen((prev) => !prev)}
          className="flex items-center rounded-sm border border-[#CBB26A] px-3 py-2 text-[#CBB26A] transition-colors duration-300 hover:border-white hover:text-white md:hidden"
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
          aria-expanded={navbarOpen}
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>

      {navbarOpen && (
        <div className="border-t border-[#33353F] bg-[#121212] md:hidden">
          <ul className="flex flex-col items-center gap-3 py-5">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={closeMenu}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
