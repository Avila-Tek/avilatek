import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { globalHistory, useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import useLanguage from '../hooks/useLanguage';

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  const location = useLocation();
  // A way to determine we are in blog post, includes won't work since home would be active in all routes, so it can't be general
  const isBlog = location.pathname.includes('blog') && title === 'Blog';

  return (
    // ! Link activeClassName doesn't work with anchors
    <Link
      to={href}
      aria-label={title}
      className={`w-max text-sm lg:text-base tracking-wide mx-2 lg:mx-3 cursor-pointer my-1.5 md:my-2 hover:text-primary-400 dark:hover:text-primary-400 focus:ring-0 focus:outline-none transition-all duration-300 ease-in-out ${
        location.pathname + location.hash === href || isBlog
          ? 'text-primary-400 dark:text-primary-400 border-b-2 border-primary-400'
          : 'text-font-dark dark:text-font-white'
      }`}
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  const wrapper = React.useRef(null);
  const location = useLocation();
  const [translation] = useLanguage();
  const language = location.pathname.includes('en') ? 'en' : 'es';
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [isFixed, setFixed] = React.useState<boolean>(false);
  const updateOpenState = React.useCallback(setOpen, [setOpen]);
  useOutsideAlerter(wrapper, updateOpenState);

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
      ref={wrapper}
      initial={{ height: '4.2rem' }}
      animate={{ height: isOpen ? 'auto' : '4.2rem' }}
      transition={{ type: 'spring', damping: 25 }}
      className={`fixed z-50 h-screen md:h-auto bg-light-blue dark:bg-dark-gray flex flex-wrap justify-between items-center w-full px-6 lg:px-16 xl:px-20 py-4 md:py-1 transition duration-300 ease-in-out overflow-hidden ${
        isFixed || isOpen ? 'shadow-blue dark:shadow-dark-gray' : ''
      }`}
      role="navigation"
    >
      <Link
        to={`/${language === 'es' ? '' : language + '/'}`}
        aria-label="Logo"
        className="mr-auto w-40 lg:w-48 xl:w-56"
      >
        <StaticImage
          src="../assets/images/logo_white.png"
          alt="Avila Tek logo"
          placeholder="blurred"
          layout="fullWidth"
        />
      </Link>

      {/* Hamburger button */}
      <div className="ml-auto md:hidden w-auto">
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

      <div className="flex flex-col md:flex-row w-full md:w-auto md:items-center overflow-hidden my-4 md:my-0">
        <NavItem
          title={translation(language, 'navbar.home')}
          href={`/${language === 'es' ? '' : language + '/'}`}
        />
        <NavItem
          title={translation(language, 'navbar.aboutUs')}
          href={`/${language === 'es' ? '' : language + '/'}#about-us`}
        />
        <NavItem
          title={translation(language, 'navbar.products')}
          href={`/${language === 'es' ? '' : language + '/'}#products`}
        />
        <NavItem
          title={translation(language, 'navbar.services')}
          href={`/${language === 'es' ? '' : language + '/'}#services`}
        />
        <NavItem
          title={translation(language, 'navbar.portfolio')}
          href={`/${language === 'es' ? '' : language + '/'}portfolio`}
        />
        <NavItem
          title={translation(language, 'navbar.blog')}
          href={`/${language === 'es' ? '' : language + '/'}blog`}
        />
        <NavItem
          title={translation(language, 'navbar.contactUs')}
          href={`/${language === 'es' ? '' : language + '/'}#contact`}
        />
      </div>
    </motion.nav>
  );
}
