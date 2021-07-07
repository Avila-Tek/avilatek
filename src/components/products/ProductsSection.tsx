import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import ProductList, { Product } from './ProductList';
import useLanguage from '../../hooks/useLanguage';
import LandingPage from '../../assets/illustrations/landing-page.svg';
import ECommerce from '../../assets/illustrations/e-commerce.svg';
import DesignSystems from '../../assets/illustrations/design-systems.svg';
import useActiveLink from '../../hooks/useActiveLink';

export default function ProductsSection() {
  const [, setActiveLink] = useActiveLink();
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const products: Array<Product> = [
    {
      name: 'Digital Funnel',
      description: translation(language, 'products.digitalFunnel'),
      svg: LandingPage,
      btnTxt: translation(language, 'products.quote'),
    },
    {
      name: 'Digital Store',
      description: translation(language, 'products.digitalStore'),
      svg: ECommerce,
      btnTxt: translation(language, 'products.quote'),
    },
    {
      name: 'Dev Tools',
      description: translation(language, 'products.devTools'),
      svg: DesignSystems,
      btnTxt: translation(language, 'products.comingSoon'),
    },
  ];

  return (
    <section
      id="products"
      className="pt-0.5 -mt-0.5 pb-56 md:pb-80 w-full relative z-10 overflow-hidden"
    >
      <Fade duration={500} cascade triggerOnce>
        <div className="w-full text-center mb-20 mt-32">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-14 sm:px-28">
            {translation(language, 'products.first')}{' '}
            <span className="text-primary-400">
              {translation(language, 'products.span')}
            </span>{' '}
            {translation(language, 'products.second')}{' '}
            <mark className="text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'products.mark')}
            </mark>
          </h1>
          <p className="w-9/12 md:w-6/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            {translation(language, 'products.text')}
          </p>
        </div>
        <Waypoint
          onEnter={() => {
            setActiveLink(`/${language === 'es' ? '' : language + '/'}#products`);
          }}
        />
        <ProductList products={products} />
        <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
      </Fade>
    </section>
  );
}
