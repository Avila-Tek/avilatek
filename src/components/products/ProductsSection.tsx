import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ProductList, { Product } from './ProductList';
import LandingPage from '../../assets/illustrations/landing-page.svg';
import ECommerce from '../../assets/illustrations/e-commerce.svg';
import DesignSystems from '../../assets/illustrations/design-systems.svg';

export default function ProductsSection() {
  const products: Array<Product> = [
    {
      name: 'Digital Funnel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: LandingPage,
    },
    {
      name: 'Digital Store',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: ECommerce,
    },
    {
      name: 'UI Tools - For Developers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: DesignSystems,
    },
  ];

  return (
    <section
      id="products"
      className="pt-0.5 -mt-0.5 pb-56 md:pb-80 w-full relative z-10 overflow-hidden"
    >
      <Fade cascade triggerOnce>
        <div className="w-full text-center mb-20 mt-32">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-14 sm:px-28">
            Te presentamos nuestros{' '}
            <span className="text-primary-400">productos</span> desarrollados a
            la{' '}
            <mark className="text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              medida
            </mark>
          </h1>
          <p className="w-9/12 md:w-6/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            Productos listos que se ajustan a la necesidad de tu solución de
            negocio, desarrollado con las mejoras tecnologías del mercado.
          </p>
        </div>
        <ProductList products={products} />
        <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
      </Fade>
    </section>
  );
}
