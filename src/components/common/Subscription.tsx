import React from 'react';
import Button from './Button';

export default function Subscription() {
  return (
    <form className="w-11/12 sm:w-10/12 lg:w-128 mx-auto">
      <label
        htmlFor="subscription"
        className="block mb-8 mx-auto text-center text-base md:text-2base lg:text-lg text-primary-500 dark:text-primary-400 font-semibold p-0"
      >
        Recibe nuestras últimas noticias
      </label>
      <div className="flex items-center bg-medium-blue dark:bg-medium-gray rounded-full">
        <input
          name="subscription"
          id="subscription"
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 w-full block bg-transparent text-font-black dark:text-font-white rounded-full text-sm md:text-2sm border-medium-blue dark:border-medium-gray focus:border-0 focus:ring-0 focus:outline-none"
        />
        <Button type="button" className="text-sm md:text-2sm py-2">Subscribirse</Button>
      </div>
    </form>
  );
}
