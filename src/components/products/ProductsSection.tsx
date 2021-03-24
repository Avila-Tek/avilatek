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
    <section className="mt-40 mb-56 w-full">
      <div className="w-full text-center mb-20">
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
    </section>
  );
}
