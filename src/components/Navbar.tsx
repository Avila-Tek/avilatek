import React, { useState } from "react";
import { Link } from "gatsby";

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <Link to={href}>
      <h1 className="tracking-wide mx-3 text-font-dark cursor-pointer my-2 hover:text-primary-400">
        {title}
      </h1>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className="fixed flex justify-between items-center w-100 px-20 py-3"
      role="navigation"
    >
      <Link to="/" className="ml-auto">
        <h1>Logo</h1>
      </Link>

      <div className="ml-auto md:hidden pt-5">
        <button
          className="text-white hover:text-secondary-500 focus:outline-none"
          type="button"
          onClick={toggleNav}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            {isOpen ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      <div className="w-full h-full md:h-auto md:w-auto md:flex items-center">
        <NavItem title="Inicio" href="/" />
        <NavItem title="Nosotros" href="#about-us" />
        <NavItem title="Productos" href="#products" />
        <NavItem title="Servicios" href="#servicios" />
        <NavItem title="Portafolio" href="/portfolio" />
        <NavItem title="Contacto" href="#contact" />
      </div>
    </nav>
  );
}
