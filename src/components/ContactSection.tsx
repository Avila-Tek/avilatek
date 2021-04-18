import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ContactForm from './ContactForm';
import LightningIcon from './icons/LightningIcon';
import MessageIcon from './icons/MessageIcon';
import SettingsIcon from './icons/SettingsIcon';
import ContactUs from '../assets/illustrations/contact-us.svg';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-24 -mt-24 pb-48 w-full px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        {/* Section details */}
        <div className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-6/12 mb-16 mx-auto md:mx-0">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            <span className="text-primary-400">Cuéntanos </span> de tu{' '}
            <mark className="text-font0-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              idea
            </mark>
          </h1>
          <p className="w-full mt-6 lg:mt-7 text-sm lg:text-base">
            Luego de que recibamos tu información te estaremos contactando.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Contact form */}
          <ContactForm />

          {/* Contact us illustration */}
          <div className="w-10/12 sm:w-7/12 lg:w-5/12 mt-12 lg:mt-0 mx-auto lg:mx-0 h-full">
            <img
              src={ContactUs}
              alt="contact illustration"
              className="w-full xl:w-10/12"
            />
            {/* Extra info */}
            <div className="mt-3">
              {/* Fast response */}
              <div className="flex items-center">
                <LightningIcon className="h-6 w-6 mr-6 text-primary-400" />
                <div>
                  <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                    Respuesta rápida
                  </h2>
                  <p className="mt-1 text-xsm lg:text-sm">
                    Te estaremos contactando en menos de 24 horas
                  </p>
                </div>
              </div>
              {/* Consulting */}
              <div className="flex items-center my-4">
                <MessageIcon className="h-12 w-12 mr-6 text-primary-400" />
                <div>
                  <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                    Consultoría incluida
                  </h2>
                  <p className="mt-1 text-xsm lg:text-sm">
                    Antes de hacer un presupuesto debemos pautar una reunion de
                    levantamiento de requerimientos
                  </p>
                </div>
              </div>
              {/* Personalized */}
              <div className="flex items-center">
                <SettingsIcon className="h-12 w-12 mr-7 text-primary-400" />
                <div>
                  <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                    Proyectos a la medida
                  </h2>
                  <p className="mt-1 text-xsm lg:text-sm">
                    Cada proyecto tiene sus especificaciones que trabajamos de
                    cero para cumplir las necesidades de cada cliente
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Fade>
      <div className="absolute top-8 left-1/3 rounded-second-blob w-96 md:w-6/12 h-72 md:h-96 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );
}
