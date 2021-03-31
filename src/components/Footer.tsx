import React from 'react';
import Button from '../components/ui/Button';
import Avila from '../assets/images/logo-avila-tek.png';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedIn from './icons/LinkedIn';

export default function Footer() {
  return (
    <footer className="bg-light-blue w-full px-10 lg:px-20 py-2 shadow-blue border-t-2 border-medium-blue">
      <div className="flex flex-col sm:flex-row w-full py-6 gap-6 sm:gap-20">
        {/* Contact section */}
        <div className="w-full sm:w-1/3 text-xs md:text-sm">
          <h2 className="text-primary-400 font-semibold text-sm md:text-base">
            Contacto
          </h2>
          <p className="mt-4">
            <span className="font-medium mr-4">Caracas</span> +58 (424) 27 82
            749
          </p>
          <p className="my-2">
            <span className="font-medium mr-5">Madrid</span> +34 (682) 35 74 16
          </p>
          <p>info@avilatek.dev</p>
          {/* RRSS icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/avilatek/?hl=es-la"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/avilatek_?lang=es"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.facebook.com/pg/avilatek.dev/about/"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://ve.linkedin.com/company/avilatek"
              target="_blank"
              className="hover:text-primary-300 cursor-pointer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        {/* Join the team section */}
        <div className="w-full sm:w-1/3 text-xs md:text-sm">
          <h2 className="text-primary-400 font-semibold text-sm md:text-base">
            Únete al equipo
          </h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
            id hac. Urna in sit id hac.{' '}
          </p>
          <div className="w-40 flex justify-end">
            <img src={Avila} alt="Avila logo" className="h-6 mt-2" />
          </div>
          <Button
            type="button"
            className="text-xs md:text-sm"
            onClick={() => {
              console.log('Hola');
            }}
          >
            Trabaja con nosotros
          </Button>
        </div>
      </div>
      {/* Copyright info */}
      <div className="relative w-full">
        <svg
          className="h-32 w-32 text-medium-blue absolute right-3"
          style={{ top: '-7rem' }}
          viewBox="0 0 176 5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="none"
        >
          <path d="M124.87 2.701c-1.257.294-2.162.709-3.521 1.61-2.463 1.634-2.232 1.234-11.189 19.337-4.424 8.94-8.086 16.282-8.138 16.316-.052.033-2.585-4.992-5.63-11.165-5.557-11.27-6.254-12.587-7.21-13.636-4.444-4.877-13.08-4.34-16.599 1.032-.327.5-3.632 7.063-7.345 14.584l-6.75 13.675-4.7-9.512c-5.452-11.035-6.134-12.074-8.765-13.345l-.618-.299v-4.663c0-4.097-.032-4.675-.263-4.765-.144-.056-1.19-.102-2.325-.102h-2.062v8.583h-.721c-2.8 0-6.47 2.178-8.127 4.824-.54.864-28.187 56.876-28.187 57.109 0 .11 28.972.167 85.28.167 56.637 0 85.281-.057 85.281-.168 0-.284-36.642-74.445-37.185-75.26-2.271-3.41-7.131-5.28-11.226-4.322z" />
        </svg>
      </div>
      <hr className="w-full mb-4 mt-2 border-medium-blue" />
      <p className="text-xs lg:text-sm my-2">
        &copy; {new Date().getFullYear()} Avila Tek. Todos los derechos
        reservados
      </p>
    </footer>
  );
}
