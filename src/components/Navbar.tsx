import React from 'react';
import { Link } from 'gatsby';
import { globalHistory, useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import useLanguage from '../hooks/useLanguage';
import useActiveLink from '../hooks/useActiveLink';
import useTheme from '../hooks/useTheme';
import Image from './common/Image';

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem({ title, href }: NavItemProps) {
  const [activeLink, setActiveLink] = useActiveLink();
  const location = useLocation();
  // A way to determine if we are in a blog post
  const isBlog = location.pathname.includes('blog') && title === 'Blog';

  return (
    <Link
      to={href}
      aria-label={title}
      onClick={() => setActiveLink(href)}
      className={`w-max text-sm lg:text-base tracking-wide mx-2 lg:mx-3 cursor-pointer my-1.5 md:my-2 hover:text-primary-400 dark:hover:text-primary-400 focus:ring-0 focus:outline-none ${
        activeLink === href || isBlog
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
  const [theme] = useTheme();
  const [, setActiveLink] = useActiveLink();
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
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
      const screenOffset = 280;
      setFixed(window.scrollY >= screenOffset);
    };

    window.addEventListener('scroll', changeColor);
  }, []);

  React.useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === 'PUSH') setOpen(false);
      }),
    [setOpen]
  );

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
        to={`/${language === 'es' ? '' : `${language}/`}`}
        aria-label="Logo"
        onClick={() =>
          setActiveLink(`/${language === 'es' ? '' : `${language}/`}`)
        }
        className="mr-auto w-40 lg:w-48 xl:w-56"
      >
        <Image
          filename={
            theme === 'dark' ||
            (theme === 'auto' &&
              window?.matchMedia('(prefers-color-scheme: dark)').matches)
              ? 'logo-black.png'
              : 'logo_white.png'
          }
          alt="Avila Tek logo"
        />
      </Link>

      {/* Hamburger button */}
      <div className="ml-auto md:hidden w-auto">
        <button
          className="text-font-black dark:text-font-white hover:text-primary-300 focus:outline-none"
          type="button"
          onClick={toggleNav}
          aria-label="Menu button"
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
          href={`/${language === 'es' ? '' : `${language}/`}`}
        />
        <NavItem
          title={translation(language, 'navbar.aboutUs')}
          href={`/${language === 'es' ? '' : `${language}/`}#about-us`}
        />
        <NavItem
          title={translation(language, 'navbar.products')}
          href={`/${language === 'es' ? '' : `${language}/`}#products`}
        />
        <NavItem
          title={translation(language, 'navbar.services')}
          href={`/${language === 'es' ? '' : `${language}/`}#services`}
        />
        <NavItem
          title={translation(language, 'navbar.portfolio')}
          href={`/${language === 'es' ? '' : `${language}/`}portfolio`}
        />
        {/* <NavItem
          title={translation(language, 'navbar.blog')}
          href={`/${language === 'es' ? '' : language + '/'}blog`}
        /> */}
        <NavItem
          title={translation(language, 'navbar.contactUs')}
          href={`/${language === 'es' ? '' : `${language}/`}#contact`}
        />
      </div>
    </motion.nav>
  );
}
