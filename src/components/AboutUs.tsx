import React from 'react';
import CodingIllustration from '../assets/illustrations/code-typing-animate.svg';
import BrickPattern from '../assets/images/brick-wall.svg';

export default function AboutUs() {
  return (
    <section className="mt-24 mb-52 w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 xl:gap-20 px-6 md:px-10 lg:px-20">
        {/* Coding illustation */}
        <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12">
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
            <mark className="inline-block bg-primary-300 bg-opacity-50 pb-3 leading-0">
              contamos
            </mark>{' '}
            acerca de <span className="text-primary-500">Avila Tek</span>
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
      <div className="w-full mt-52 text-center px-10">
        <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-primary-500">
          “Una frase cool que represente a Avila Tek pudiese ir aquí etc etc
          etc”
        </h2>
      </div>
    </section>
  );
}
