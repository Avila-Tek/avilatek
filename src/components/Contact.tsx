import React, { useState } from 'react';
import NProgress from 'nprogress';
import { validateEmail, validateName, validateString } from 'avilatek-utils';
import { motion } from 'framer-motion';
import Input from './ui/Input';
import Button from './ui/Button';
import ContactUs from '../assets/illustrations/contact-us.svg';
import Textarea from './ui/Textarea';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [status, setStatus] = useState<{ message: string; type: string }>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!validateName(name) || String(name).length > 127) {
        return setStatus({ message: 'Nombre inválido', type: 'danger' });
      }

      if (!validateEmail(email) || String(email).length > 127) {
        return setStatus({ message: 'Correo inválido', type: 'danger' });
      }

      if (!validateString(message) || String(message).length > 127) {
        return setStatus({ message: 'Mensaje inválido', type: 'danger' });
      }

      setDisabled(true);
      NProgress.start();
      setStatus({ message: 'Se ha enviado su solicitud', type: 'success' });
      setDisabled(false);
    } catch (error) {
      setDisabled(false);
      setStatus({ message: error, type: 'danger' });
    } finally {
      NProgress.done();
    }
  };

  return (
    <section
      id="contact"
      className="pt-24 -mt-24 pb-48 w-full px-14 md:px-20 lg:px-28 xl:px-48 relative z-10 overflow-hidden"
    >
      {/* Section details */}
      <div className="w-10/12 md:w-9/12 xl:w-6/12 mb-16 mx-auto md:mx-0">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
          <span className="text-primary-500">Contáctanos</span> para tu próxima{' '}
          <mark className="inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0">
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
          onSubmit={onSubmit}
          className="bg-light-blue shadow-blue rounded-md p-7 md w-80 sm:w-96 md:w-80 lg:w-96 mx-auto md:mx-0"
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
          <Button
            type="submit"
            disabled={disabled}
            className="w-full text-sm lg:text-base"
          >
            Contactar
          </Button>
          {status && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`w-full text-center mt-4 bg-opacity-10 py-1 rounded-md ${
                status?.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <h1
                className={`text-xs md:text-sm font-medium ${
                  status?.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {status?.message}
              </h1>
            </motion.div>
          )}
        </form>

        {/* Contact us illustration */}
        <div className="w-9/12 sm:w-7/12 md:w-5/12 mt-12 md:mt-0 mx-auto md:mx-0">
          <img src={ContactUs} alt="contact illustration" className="w-full" />
        </div>
      </div>
      <div className="absolute top-8 left-1/3 rounded-second-blob w-96 md:w-6/12 h-72 md:h-96 brick bg-medium-blue bg-opacity-90" />
    </section>
  );
}
