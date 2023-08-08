import React from 'react';
// import { Fade } from 'react-awesome-reveal';
import Rocket from '../icons/Rocket';
import useLanguage from '../../hooks/useLanguage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Definition() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <section className="pb-36 px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden">
      <div className="w-11/12 sm:w-10/12">
        {/* <Fade duration={600} cascade triggerOnce> */}
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            <span className="text-primary-400">Software</span> Development as a{' '}
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              Service
            </mark>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base text-justify">
            {translation(language, 'sdaas.definition')}
          </p>
        {/* </Fade> */}
      </div>

      {/* <Fade duration={600} triggerOnce> */}
        <div className="w-full md:w-9/12 mx-auto mt-24 lg:mt-36">
          <Rocket />
        </div>
      {/* </Fade> */}

      <div className="absolute top-28 left-1/4 rounded-blob w-80 h-96 brick bg-medium-blue dark:bg-dark-gray opacity-50 dark:opacity-25" />
      <div className="absolute bottom-36 right-1/3 rounded-second-blob w-80 md:w-6/12 h-72 md:h-80 brick bg-medium-blue dark:bg-dark-gray opacity-50 dark:opacity-25" />
    </section>
  );
}
