import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import CompletedIllustration from '../assets/illustrations/sent-message-animate.svg';

export default function MessageSentPage() {
  return (
    <main>
      <SEO title="Mensaje enviado con éxito" />
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center pt-8 px-6 md:px-12 lg:px-20">
        <img
          src={CompletedIllustration}
          alt="Successfully sent the message"
          className="w-7/12 sm:w-6/12 md:w-5/12 xl:w-4/12 mr-8"
        />
        <div className="mt-6 w-8/12 md:w-5/12 relative z-10">
          <h2 className="font-bold text-primary-500 text-base lg:text-lg">
            ¡Muchas gracias por su tiempo!
          </h2>
          <p className="mt-4 mb-2 text-sm lg:text-base">
            Hemos recibido correctamente su mensaje, nos pondremos en contacto
            con la mayor prontitud posible respondiendo a tu consulta.
            ¡Mantengamos el contacto por las redes sociales!
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
