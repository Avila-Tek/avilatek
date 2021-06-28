import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import CodeTyping from './icons/CodeTyping';
import useLanguage from '../hooks/useLanguage';
import updateUrl from '../lib/updateUrl';

export default function AboutUs() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <section
      id="about-us"
      className="pt-48 -mt-48 pb-40 md:pb-44 w-full relative z-10 overflow-hidden"
    >
      <Waypoint
        onEnter={() => {
          updateUrl(`/${language === 'es' ? '' : language + '/'}#about-us`);
        }}
      />
      <div className="flex flex-col md:flex-row justify-center items-center px-8 md:px-10 lg:px-20">
        {/* Coding illustation */}
        <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mb-6 md:mb-0 mr-0 md:mr-16 xl:mr-20">
          <Fade triggerOnce>
            <CodeTyping />
          </Fade>
        </div>

        {/* Text */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-6/12">
          <Fade cascade triggerOnce>
            <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
              {translation(language, 'aboutUs.about')}{' '}
              <span className="text-primary-400">
                {translation(language, 'aboutUs.us')}
              </span>
            </h1>
            <p className="my-6 lg:my-7 text-sm lg:text-base text-justify">
              {translation(language, 'aboutUs.text')}
            </p>
          </Fade>
        </div>
      </div>

      {/* The phrase */}
      <div className="w-10/12 md:w-9/12 mx-auto mt-56 text-center px-10">
        <Fade triggerOnce className="w-full">
          <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-primary-500 dark:text-primary-400">
            “Let’s go invent tomorrow instead of worrying about what happened
            yesterday.”
          </h2>
          <h3 className="text-primary-500 dark:text-primary-400 font-medium text-sm lg:text-base mt-4">
            Steve Jobs
          </h3>
        </Fade>
      </div>
      <div className="absolute top-28 left-1/4 rounded-blob w-80 h-96 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
      <div className="absolute bottom-28 right-1/4 rounded-second-blob w-80 md:w-6/12 h-72 md:h-80 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );
}
