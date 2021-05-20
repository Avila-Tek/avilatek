import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import PageNotFound from '../components/icons/PageNotFound';

export default function NotFoundPage() {
  return (
    <main>
      <SEO title="404" />
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center py-32 px-6 md:px-12 lg:px-20">
        <PageNotFound />
        <div className="mt-2 md:mt-6 w-8/12 md:w-5/12 relative z-10">
          <h2 className="font-bold text-primary-500 dark:text-primary-400 text-base lg:text-lg">
            Oops, la página no pudo se encontrada
          </h2>
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
          <div className="absolute -top-14 -left-10 rounded-blob w-72 h-64 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
        </div>
      </div>
    </main>
  );
}
