import React from 'react';
import { Fade } from 'react-awesome-reveal';
import useLanguage from '../../hooks/useLanguage';
import TestimonyCard, { Testimony } from './TestimonyCard';

export default function Testimonies() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const data: Array<Testimony> = [
    {
      name: 'John Doe',
      job: 'BAT CEO',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus leo lacinia elementum quam vulputate vitae.',
      image: 'authors/jhon-doe.jpeg',
      rotate: 'rotate-3',
    },
    {
      name: 'Matias Doe',
      job: 'BAT CTO',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus leo lacinia elementum quam vulputate vitae.',
      image: 'authors/jhon-doe.jpeg',
      rotate: '-rotate-2',
    },
    {
      name: 'Jhonny Doe',
      job: 'Hola CEO',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus leo lacinia elementum quam vulputate vitae.',
      image: 'authors/jhon-doe.jpeg',
      rotate: 'rotate-6',
    },
  ];

  const testimonies = [...data, ...data];

  return (
    <section className="pb-40 md:pb-44 relative z-10 overflow-hidden">
      <Fade duration={600} triggerOnce>
        {/* Section title */}
        <div className="w-full text-center mb-20 mt-20 md:mt-24 px-14 md:px-20 lg:px-28 xl:px-36">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-8 sm:px-28">
            <span className="text-primary-400">
              {translation(language, 'sdaas.testimonies.span')}
            </span>{' '}
            {translation(language, 'sdaas.testimonies.first')}{' '}
            <mark className="text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'sdaas.testimonies.mark')}
            </mark>
          </h1>
          <p className="w-11/12 md:w-8/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            {translation(language, 'sdaas.testimonies.text')}
          </p>
        </div>
      </Fade>

      <Fade duration={600} triggerOnce>
        {/* Slider */}
        <div className="w-screen h-76 flex overflow-hidden">
          {/* Slide track */}
          <div className="testimonies-track flex items-center">
            {testimonies.map((testimony) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TestimonyCard key={testimony.name} {...testimony} />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
