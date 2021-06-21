import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Waves from '../icons/Waves';
import Line from '../icons/Line';
import RotatingTriangle from '../icons/RotatingTriangle';

interface DefaultBannerProps {
  title?: React.ReactChild | Array<React.ReactChild>;
  description?: string;
  illustration?: React.ReactChild | Array<React.ReactChild>;
}

export default function DefaultBanner({
  description,
  illustration,
  title,
}: DefaultBannerProps) {
  return (
    <div className="bg-light-blue dark:bg-dark-gray flex flex-col justify-between pt-12 transition duration-300 ease-in-out">
      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center md:items-start pt-14 md:pt-24 pb-8 md:pb-6 px-10 md:px-12 lg:px-16 xl:px-20">
        {/* Banner details */}
        <div className="w-10/12 sm:w-8/12 md:w-5/12 pt-4 md:pt-10 lg:pt-12 z-10">
          <Fade triggerOnce cascade>
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold relative">
              {title}
            </h1>
            <p className="my-5 lg:my-7 xl:my-8 text-2sm lg:text-2base">
              {description}
            </p>
          </Fade>
        </div>
        {/* Animated Illustration */}
        <div className="w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12 mx-auto md:mr-0 md:ml-14 lg:ml-16 xl:ml-24 z-10">
          <Fade triggerOnce>{illustration}</Fade>
        </div>
        <RotatingTriangle className="top-12 right-8/12 md:right-1/2" />
        <RotatingTriangle className="right-2/12 top-5/12" />
        <RotatingTriangle className="bottom-1/12 left-5/12 md:left-3/12" />
        <RotatingTriangle className="top-28 left-1/12 hidden md:block" />
        <Line className="top-12 right-1/4 w-12" />
        <Line className="top-1/4 left-2/12 w-14 hidden md:block" />
        <Line className="bottom-3/12 md:bottom-1/12 left-2/12 md:left-5/12 w-10" />
        <Line className="bottom-0 right-2/12 md:right-1/12 w-12" />
      </div>
      {/* Waves */}
      <div className="w-full mt-18">
        <Waves className="w-full h-full -mb-2" />
      </div>
    </div>
  );
}
