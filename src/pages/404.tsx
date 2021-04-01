import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import FourOhFourIllustration from '../assets/illustrations/404-error-page-animate.svg';

const NotFoundPage = () => {
  return (
    <main>
      <SEO title="404" />
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-14 md:px-20">
        <img
          src={FourOhFourIllustration}
          alt="404 Not Found"
          className="w-8/12 md:w-5/12 mr-8"
        />
        <div className="mt-6 w-8/12 md:w-5/12 relative z-10">
          <h1 className="font-bold text-primary-500 text-base lg:text-lg">
            Oops, la página no pudo se encontrada
          </h1>
          <p className="mt-4 mb-2 text-sm lg:text-base">
            Lo sentimos pero la página que está buscando no existe, ha sido
            eliminada o no se encuentra actualmente disponible
          </p>
          <Link
            to="/"
            className="text-primary-400 font-medium text-sm lg:text-base"
          >
            Volver al inicio
          </Link>
          <div className="absolute -top-14 -left-10 rounded-blob w-72 h-80 brick bg-medium-blue bg-opacity-90" />
        </div>
      </div>
      {/* {process.env.NODE_ENV === 'development' ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null} */}
    </main>
  );
};

export default NotFoundPage;
