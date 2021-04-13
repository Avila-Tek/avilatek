import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Input from './ui/Input';
import Button from './ui/Button';
import ContactUs from '../assets/illustrations/contact-us.svg';
import Textarea from './ui/Textarea';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <section
      id="contact"
      className="pt-24 -mt-24 pb-48 w-full px-14 md:px-20 lg:px-28 xl:px-48 relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        {/* Section details */}
        <div className="w-10/12 md:w-9/12 xl:w-6/12 mb-16 mx-auto md:mx-0">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            <span className="text-primary-400">Contáctanos</span> para tu
            próxima{' '}
            <mark className="inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              gran idea
            </mark>
          </h1>
          <p className="w-full mt-6 lg:mt-7 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
            id hac. Consectetur adipiscing elit. Urna in sit id hac.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Contact form */}
          <form
            method="POST"
            action="https://formsubmit.co/info@avilatek.dev"
            className="bg-light-blue dark:bg-dark-gray shadow-blue dark:shadow-dark-gray rounded-md p-7 md w-80 sm:w-96 md:w-80 lg:w-96 mx-auto md:mx-0 transition-all duration-300 ease-in-out"
          >
            <Input
              name="name"
              type="text"
              value={name}
              placeholder="Nombre"
              label="Nombre"
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              required
              maxLength={127}
              pattern="^[a-zA-Z\u00C0-\u00FF]+\s?[a-zA-Z\u00C0-\u00FF]+$"
              title="No se admiten carácteres especiales"
              onKeyPress={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="Correo"
              label="Correo electrónico"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              required
              maxLength={127}
              onKeyPress={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <Textarea
              name="message"
              value={message}
              placeholder="Mensaje"
              label="Describa su proyecto o duda"
              onChange={(e) => {
                e.preventDefault();
                setMessage(e.target.value);
              }}
              required
              rows={5}
              maxLength={1000}
              onKeyPress={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="¡Nuevo mensaje!" />
            <input
              type="hidden"
              name="_next"
              value="https://avilatek.dev/successful-submission"
            />
            <Button type="submit" className="w-full text-sm lg:text-base">
              Contactar
            </Button>
          </form>

          {/* Contact us illustration */}
          <div className="w-9/12 sm:w-7/12 md:w-5/12 mt-12 md:mt-0 mx-auto md:mx-0">
            <img
              src={ContactUs}
              alt="contact illustration"
              className="w-full"
            />
          </div>
        </div>
      </Fade>
      <div className="absolute top-8 left-1/3 rounded-second-blob w-96 md:w-6/12 h-72 md:h-96 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
    </section>
  );
}
