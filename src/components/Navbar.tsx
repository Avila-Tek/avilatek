import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo_white.png';
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
  const [theme, setTheme] = useTheme();

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
      {/* h-9 lg:h-12 */}
      <Link to="/" className="mr-auto">
        <img src={logo} alt="Avila Tek logo" className="w-40 lg:w-48 xl:w-56" />
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

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Cambiar de tema"
          className={`ml-2 md:ml-4 mt-2 md:mt-0 py-1 px-8 md:p-2 rounded-full focus:outline-none text-font-white bg-opacity-60 hover:bg-opacity-75 transition-all ease-in-out duration-200 ${
            theme === 'light'
              ? 'bg-purple-700 hover:bg-purple-600 active:bg-purple-800'
              : 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600'
          }`}
        >
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
    </motion.nav>
  );
}
