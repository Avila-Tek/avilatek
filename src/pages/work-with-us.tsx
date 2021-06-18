import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import SEO from '../components/SEO';
import WorkWithUs from '../components/icons/WorkWithUs';
import WorkForm from '../components/WorkForm';

export default function WorkWithUsPage() {
  return (
    <>
      <SEO title="Trabaja con nosotros" />
      <main className="min-h-screen w-full relative overflow-hidden">
        <section className="pt-44 pb-40 px-14 md:px-20 lg:px-28 xl:px-44">
          <Fade triggerOnce>
            {/* Section title */}
            <div className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-6/12 mb-16 mx-auto md:mx-0">
              <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                <span className="text-primary-400">Únete</span> a la experiencia
                de{' '}
                <mark className="text-font0-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
                  Avila Tek
                </mark>
              </h1>
              <p className="w-full mt-6 lg:mt-7 text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in
                sit id hac. Consectetur adipiscing elit. Urna in sit id hac.
              </p>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
              {/* Work form */}
              <WorkForm />

              <div className="w-10/12 sm:w-6/12 lg:w-4/12 xl:w-5/12 max-w-xs sm:max-w-none xl:max-w-2xl pt-8 lg:pt-0 mt-12 lg:mt-0 mx-auto lg:mx-0">
                <WorkWithUs />
              </div>
            </div>
          </Fade>
        </section>
        <div className="absolute top-10 left-1/3 rounded-second-blob w-96 md:w-6/12 h-72 md:h-96 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
      </main>
    </>
  );
}
