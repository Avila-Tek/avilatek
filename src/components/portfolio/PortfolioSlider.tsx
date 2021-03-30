import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Monitor from '../../assets/images/monitor.png';
import Project from '../../assets/images/bulb.jpeg';
import CategoryPill from './CategoryPill';
import Button from '../ui/Button';

export type Project = {
  title: string;
  src: any;
  categories: Array<string>;
  description: string;
  link: string;
}

export default function PortfolioSlider() {
  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-14 md:gap-8 lg:gap-16 mt-20 md:mt-0">
      {/* Slider buttons */}
      <div className="flex md:flex-col gap-3 md:h-full justify-center">
        <button
          type="button"
          className={`rounded-full h-2 w-2 ${
            false ? 'bg-primary-300' : 'bg-medium-blue hover:bg-light-blue'
          }`}
        />
        <button
          type="button"
          className={`rounded-full h-2 w-2 ${
            true ? 'bg-primary-300' : 'bg-medium-blue hover:bg-light-blue'
          }`}
        />
        <button
          type="button"
          className={`rounded-full h-2 w-2 ${
            false ? 'bg-primary-300' : 'bg-medium-blue hover:bg-light-blue'
          }`}
        />
      </div>

      {/* Project details */}
      <div className="w-10/12 md:w-4/12 lg:w-3/12">
        {/* Categories */}
        <div className="flex items-center gap-2 mb-3 -ml-1">
          <CategoryPill name="App Web" />
          <CategoryPill name="Movil" />
        </div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-500 font-bold">
          Avila Tek
        </h1>
        <p className="text-sm lg:text-base my-4 md:my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          adipiscing non sit morbi eget.{' '}
        </p>
        <Button
          type="button"
          onClick={() => {}}
          className="text-xs sm:text-sm lg:text-base px-8"
        >
          Visitar
        </Button>
      </div>

      {/* Project photo */}
      <div className="relative w-80 sm:w-96 lg:w-128 xl:w-136 h-64 sm:h-80 md:h-72 lg:h-96 mx-auto md:mx-0 mt-0 md:mt-16">
        {/* Monitor */}
        <img
          src={Monitor}
          alt="MAC monitor"
          className="absolute top-0 left-0 z-20 w-full"
        />
        {/* The image */}
        <div className="absolute top-2 z-10 rounded-2xl h-44 sm:h-52 lg:h-72 w-full pr-1 overflow-hidden">
          <AnimatePresence>
            <motion.img
              src={Project}
              alt="Project"
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
