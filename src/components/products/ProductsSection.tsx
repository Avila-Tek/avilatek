import React from 'react';
import ProductList, { Product } from './ProductList';
import LandingPage from '../../assets/illustrations/landing-page.svg';
import ECommerce from '../../assets/illustrations/e-commerce.svg';
import DesignSystems from '../../assets/illustrations/design-systems.svg';

export default function ProductsSection() {
  const products: Array<Product> = [
    {
      name: 'Landing Page',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: LandingPage,
    },
    {
      name: 'E-commerce',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: ECommerce,
    },
    {
      name: 'Design - Systems',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sed nunc et ut. Elit sed nunc et ut.',
      svg: DesignSystems,
    },
  ];

  return (
    <section id="products" className="pt-0.5 -mt-0.5 pb-104 w-full relative z-10 overflow-hidden">
      <div className="w-full text-center mb-20 mt-32">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-12">
          Te presentamos nuestra{' '}
          <mark className="inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0">
            variedad
          </mark>{' '}
          de <span className="text-primary-500">productos</span>
        </h1>
        <p className="w-9/12 md:w-6/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit
          id hac. Consectetur adipiscing elit. Urna in sit id hac.
        </p>
      </div>
      <ProductList products={products} />
      <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue bg-opacity-90" />
    </section>
  );
}
