import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedIn from './icons/LinkedIn';
import LanguageToggle from './common/LanguageToggle';
import ThemeToggle from './common/ThemeToggle';

interface FooterProps {
  language?: string;
}

export default function Footer({ language = 'es' }: FooterProps) {
  return (
    <footer className="bg-light-blue dark:bg-medium-gray w-full px-12 lg:px-24 xl:px-26 py-1.5 shadow-blue dark:shadow-dark-gray border-t-2 border-medium-blue dark:border-dark-gray dark:text-font-white transition-all duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row w-full py-8 gap-6 sm:gap-20">
        {/* Contact section */}
        <div className="w-full sm:w-1/3 text-xs md:text-sm">
          <h2 className="text-primary-400 font-semibold text-sm md:text-base">
            Contacto
          </h2>
          <p className="mt-4">
            <span className="font-medium mr-4">Caracas</span> +58 (424) 27 82
            759
          </p>
          <p className="my-2">
            <span className="font-medium mr-5">Madrid</span> +34 (682) 35 74 16
          </p>
          <p>info@avilatek.dev</p>
          {/* RRSS icons */}
          <div className="flex mt-4">
            <a
              href="https://www.instagram.com/avilatek/?hl=es-la"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer mr-4"
              aria-label="Instagram"
              rel="noopener"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/avilatek_?lang=es"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer mr-4"
              aria-label="Twitter"
              rel="noopener"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.facebook.com/pg/avilatek.dev/about/"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer mr-4"
              aria-label="Facebook"
              rel="noopener"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://ve.linkedin.com/company/avilatek"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer"
              aria-label="LinkedIn"
              rel="noopener"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        {/* Join the team section */}
        <div className="w-full sm:w-1/2 lg:w-1/3 text-xs md:text-sm">
          <h2 className="text-primary-400 font-semibold text-sm md:text-base">
            Únete al equipo
          </h2>
          <p className="mt-4 mb-5">
            Si tienes conocimientos en desarrollo de software y quieres formar
            parte de un equipo profesional, contáctanos.{' '}
          </p>
          <a
            href="https://bit.ly/avila-tek"
            target="_blank"
            aria-label="Trabaja con nosotros"
            rel="noopener"
            className="px-6 text-xs md:text-sm text-font-white bg-primary-400 hover:bg-primary-300 py-1.5 rounded-full focus:outline-none active:bg-primary-500 disabled:opacity-50 disabled:bg-primary-500"
          >
            Trabaja con nosotros
          </a>
        </div>
      </div>
      {/* Copyright info */}
      <div className="relative w-full mt-3">
        <svg
          className="h-32 w-32 text-medium-blue dark:text-dark-gray dark:text-opacity-50 absolute right-1 sm:right-3 -top-20 transition-all duration-300 ease-in-out"
          viewBox="0 0 176 5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="none"
        >
          <path d="M124.87 2.701c-1.257.294-2.162.709-3.521 1.61-2.463 1.634-2.232 1.234-11.189 19.337-4.424 8.94-8.086 16.282-8.138 16.316-.052.033-2.585-4.992-5.63-11.165-5.557-11.27-6.254-12.587-7.21-13.636-4.444-4.877-13.08-4.34-16.599 1.032-.327.5-3.632 7.063-7.345 14.584l-6.75 13.675-4.7-9.512c-5.452-11.035-6.134-12.074-8.765-13.345l-.618-.299v-4.663c0-4.097-.032-4.675-.263-4.765-.144-.056-1.19-.102-2.325-.102h-2.062v8.583h-.721c-2.8 0-6.47 2.178-8.127 4.824-.54.864-28.187 56.876-28.187 57.109 0 .11 28.972.167 85.28.167 56.637 0 85.281-.057 85.281-.168 0-.284-36.642-74.445-37.185-75.26-2.271-3.41-7.131-5.28-11.226-4.322z" />
        </svg>
        <ThemeToggle />
      </div>
      <hr className="w-full mb-1 mt-4 border-medium-blue dark:border-dark-gray dark:border-opacity-50" />
      <div className="w-full my-0 flex items-center justify-between text-xs lg:text-sm">
        <p>
          &copy; {new Date().getFullYear()} Avila Tek. Todos los derechos
          reservados
        </p>
        <LanguageToggle />
      </div>
    </footer>
  );
}
