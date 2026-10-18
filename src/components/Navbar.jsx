import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative z-20 bg-transparent px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Logo
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-base font-medium text-white/70 transition-colors duration-300 hover:text-white lg:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="hire-button">
            <span className="hire-button__text">Hire Me</span>
            <FontAwesomeIcon icon={faBriefcase} className="hire-button__icon" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center text-2xl md:hidden"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div className="mt-5 flex flex-col gap-6 border-t border-white/10 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link w-fit text-lg font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a href="#contact" className="hire-button">
            <span className="hire-button__text">Hire Me</span>
            <FontAwesomeIcon icon={faBriefcase} className="hire-button__icon" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
