import React from 'react';
import { Fade } from 'react-awesome-reveal';
import useLanguage from '../../hooks/useLanguage';

export default function ByTheNumbers() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <section className="pb-36 px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden">
      <Fade duration={600} cascade triggerOnce>
        <div className="w-full md:w-7/12">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            <span className="text-primary-400">SDaaS</span> by the{' '}
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              numbers
            </mark>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base text-justify">
            {translation(language, 'sdaas.byTheNumbers.text')}
          </p>
        </div>
        <div>The numbers go here</div>
      </Fade>
      <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
    </section>
  );
}
