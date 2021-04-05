import React from 'react';
import CodingIllustration from '../assets/illustrations/code-typing-animate.svg';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="pt-48 -mt-48 pb-60 w-full relative z-10 overflow-hidden"
    >
      {/* gap-6 md:gap-16 xl:gap-20 */}
      <div className="flex flex-col md:flex-row justify-center items-center px-8 md:px-10 lg:px-20">
        {/* Coding illustation */}
        <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mb-6 md:mb-0 mr-0 md:mr-16 xl:mr-20">
          <img
            src={CodingIllustration}
            alt="at the office illustration"
            className="w-full"
          />
        </div>

        {/* Text */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            Te{' '}
            <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              contamos
            </mark>{' '}
            acerca de <span className="text-primary-400">Avila Tek</span>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
            nunc augue ut neque amet sed sed laoreet. Vitae egestas sit ornare
            consequat, laoreet sit eget sollicitudin a. Velit malesuada dui
            porta sed facilisis posuere imperdiet. Imperdiet faucibus vestibulum
            justo, malesuada eu vel.
          </p>
        </div>
      </div>

      {/* The phrase */}
      <div className="w-10/12 mx-auto mt-56 text-center px-10">
        <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-primary-500 dark:text-primary-400">
          “Una frase cool que represente a Avila Tek pudiese ir aquí etc etc
          etc”
        </h2>
      </div>
      <div className="absolute top-28 left-1/4 rounded-blob w-80 h-96 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
      <div className="absolute bottom-28 right-1/4 rounded-second-blob w-80 md:w-6/12 h-72 md:h-80 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );}
