import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { globalHistory } from '@reach/router';
import { motion } from 'framer-motion';
import LightModeIcon from './icons/LightModeIcon';
import DarkModeIcon from './icons/DarkModeIcon';
import useTheme from '../hooks/useTheme';

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  return (
    <Link to={href}>
      <p className="text-sm lg:text-base tracking-wide mx-2 lg:mx-3 text-font-dark dark:text-font-white cursor-pointer my-2 hover:text-primary-400">
        {title}
      </p>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isFixed, setFixed] = React.useState<boolean>(false);
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  React.useEffect(() => {
    // Set fixed true when the scroll height is greater than 400px
    const changeColor = () => {
      let screenOffset = 280;
      setFixed(window.scrollY >= screenOffset);
    };

    window.addEventListener('scroll', changeColor);
  }, []);

  React.useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setOpen(false);
    });
  }, [setOpen]);

  return (
    <motion.nav
      initial={{ height: '4.2rem' }}
      animate={{ height: isOpen ? 'auto' : '4.2rem' }}
      transition={{ type: 'spring', damping: 25 }}
      className={`fixed z-50 md:h-auto bg-light-blue dark:bg-dark-gray flex flex-wrap justify-between items-center w-full px-6 lg:px-16 xl:px-20 py-4 md:py-2 transition duration-300 ease-in-out overflow-hidden ${
        isFixed || isOpen ? 'shadow-blue dark:shadow-dark-gray' : ''
      }`}
      role="navigation"
    >
      <Link to="/" className="mr-auto">
        <div className="w-40 lg:w-48 xl:w-56">
          <StaticImage
            src="../assets/images/logo_white.png"
            alt="Avila Tek logo"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </Link>

      {/* Hamburger button */}
      <div className="ml-auto md:hidden w-auto mt-1">
        <button
          className="text-font-black dark:text-font-white hover:text-primary-300 focus:outline-none"
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
        <NavItem title="Nosotros" href="/#about-us" />
        <NavItem title="Productos" href="/#products" />
        <NavItem title="Servicios" href="/#services" />
        <NavItem title="Portafolio" href="/#portfolio" />
        <NavItem title="Contacto" href="/#contact" />

        <label className="relative inline-block w-14 h-7 ml-1.5 mt-1.5 md:mt-0">
          <input
            type="checkbox"
            className="checkbox focus:outline-none"
            aria-label="Cambiar de tema"
            onClick={toggleTheme}
          />
          <span className="thumb bg-secondary-300 dark:bg-primary-400">
            <LightModeIcon className="h-4 w-4" />
            <DarkModeIcon className="h-4 w-4" />
          </span>
        </label>
      </div>
    </motion.nav>
  );
}
