import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo_white.png';

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <Link to={href}>
      <h1 className="text-sm lg:text-base tracking-wide mx-2 lg:mx-3 text-font-dark cursor-pointer my-2 hover:text-primary-400">
        {title}
      </h1>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isFixed, setFixed] = useState<boolean>(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    // Set fixed true when the scroll height is greater than 400px
    const changeColor = () => {
      let screenOffset = 280;
      setFixed(window.scrollY >= screenOffset);
    };

    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <motion.nav
      animate={{ height: isOpen ? 'auto' : '4.2rem' }}
      transition={{ type: 'spring', damping: 25 }}
      className={`fixed z-50 md:h-auto bg-light-blue flex flex-wrap justify-between items-center w-full px-8 md:px-10 lg:px-20 py-4 sm:py-3 md:py-2 transition duration-500 ease-in-out overflow-hidden ${
        isFixed || isOpen ? 'shadow-blue' : ''
      }`}
      role="navigation"
    >
      <Link to="/" className="mr-auto">
        <img src={logo} alt="Avila Tek logo" className="h-10 lg:h-12" />
      </Link>

      {/* Hamburger button */}
      <div className="ml-auto md:hidden w-auto mt-1">
        <button
          className="text-font-black hover:text-primary-300 focus:outline-none"
          type="button"
          onClick={toggleNav}
        >
          <svg
            className="h-4 w-4"
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

      <div className="md:flex w-full md:w-auto items-center overflow-hidden my-6 md:my-0">
        <NavItem title="Inicio" href="/" />
        <NavItem title="Nosotros" href="#about-us" />
        <NavItem title="Productos" href="#products" />
        <NavItem title="Servicios" href="#services" />
        <NavItem title="Portafolio" href="#portfolio" />
        <NavItem title="Contacto" href="#contact" />
      </div>
    </motion.nav>
  );
}
