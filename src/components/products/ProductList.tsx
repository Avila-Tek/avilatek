import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import LongArrow from '../icons/LongArrow';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import useLanguage from '../../hooks/useLanguage';

export type Product = {
  name: string;
  description: string;
  svg: any;
  btnTxt?: string;
};

interface ProductCardProps {
  product: Product;
  className?: string;
  direction?: number;
}

function ProductCard({ product, className, direction }: ProductCardProps) {
  const [, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  const variants = {
    initial: { opacity: 0.2, x: direction === 1 ? 3 : -3 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0.2, x: direction === 1 ? -3 : 3 },
  };

  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3 },
      }}
      className={`w-68 md:w-76 h-80 md:h-88 mx-4 md:mx-6 lg:mx-8 flex-col justify-between p-7 rounded-md bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-dark-gray transition-all duration-300 ease-in-out ${className}`}
    >
      <div>
        <img src={product?.svg} alt={product?.name} className="h-16 md:h-18" />
        <h2 className="text-primary-400 font-bold mt-3 mb-2 text-sm lg:text-base">
          {product?.name}
        </h2>
        <p className="w-full  leading-snug text-xsm md:text-sm">
          {product?.description}
        </p>
      </div>

      {/* this button or anchor will take you the contact section */}
      <Link
        className="flex items-center text-secondary-500 dark:text-font-white hover:text-primary-300 duration-150 transition-all ease-in-out"
        to={`/${language === 'es' ? '' : language + '/'}#contact`}
        aria-label={`Ir a cotizar el producto ${product.name}`}
      >
        <p className="text-xs md:text-sm mr-3">{product.btnTxt}</p>
        <LongArrow className="h-3" />
      </Link>
    </motion.li>
  );
}

interface ProductListProps {
  products?: Array<Product>;
}

export default function ProductList({ products: _products }: ProductListProps) {
  const [products, setProducts] = React.useState(_products);
  const [direction, setDirection] = React.useState(1); // * 1. to the right | -1. to the left

  const rotate = (change: number) => {
    const { length } = products;

    // change the order of products
    setProducts((prev) => {
      if (change === -1) {
        return prev.map((_, idx) => prev[(idx + change + length) % length]);
      }
      return prev.map((_, idx) => prev[(idx + change) % length]);
    });

    // will set in which direction the carousel is going to change the animation slightly
    setDirection(change);
  };

  return (
    <div className="w-full flex justify-center px-10 md:px-28">
      {/* Left arrow btn */}
      <button
        type="button"
        aria-label="Avanzar en productos"
        className="block xl:hidden focus:ring-0 focus:border-transparent focus:outline-none text-dark-blue dark:text-medium-gray hover:text-primary-300 active:text-primary-500 dark:hover:text-primary-300 dark:active:text-primary-500 duration-150 transition-all ease-in-out"
        onClick={() => rotate(-1)}
      >
        <LeftArrow className="h-6 w-6 md:h-7 md:w-7" />
      </button>

      {/* Cards carousel, gap-12 lg:gap-20 */}
      <ul className="lg:w-full flex justify-center mx-4">
        {/* manage how many cards will show up in each device size */}
        <AnimatePresence>
          {products.map((product, idx) => (
            <>
              {idx === 0 ? (
                <ProductCard
                  key={product?.name}
                  product={product}
                  direction={direction}
                  className="flex"
                />
              ) : null}
              {idx === 1 ? (
                <ProductCard
                  key={product?.name}
                  product={product}
                  className="hidden lg:flex"
                  direction={direction}
                />
              ) : null}
              {idx === 2 ? (
                <ProductCard
                  key={product?.name}
                  product={product}
                  className="hidden xl:flex"
                  direction={direction}
                />
              ) : null}
            </>
          ))}
        </AnimatePresence>
      </ul>

      {/* Right arrow btn */}
      <button
        type="button"
        aria-label="Retroceder en productos"
        className="block xl:hidden focus:ring-0 focus:border-transparent focus:outline-none text-dark-blue dark:text-medium-gray hover:text-primary-300 active:text-primary-500 dark:hover:text-primary-300 dark:active:text-primary-500 duration-150 transition-all ease-in-out"
        onClick={() => rotate(1)}
      >
        <RightArrow className="h-6 w-6 md:h-7 md:w-7" />
      </button>
    </div>
  );
}
