import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import LongArrow from '../icons/LongArrow';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

export type Product = {
  name: string;
  description: string;
  svg: any;
};

interface ProductCardProps {
  product: Product;
  className?: string;
  direction?: number;
}

function ProductCard({ product, className, direction }: ProductCardProps) {
  const variants = {
    initial: { opacity: 0.5, x: direction === 1 ? 6 : -6 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0.5, x: direction === 1 ? -6 : 6 },
  };

  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      className={`w-56 sm:w-60 lg:w-72 h-72 lg:h-80 mx-6 lg:mx-10 flex flex-col p-7 rounded-md bg-light-blue dark:bg-medium-gray shadow-blue dark:shadow-dark-gray justify-between ${className}`}
    >
      <img src={product?.svg} alt={product?.name} className="w-2/5" />
      <h2 className="text-primary-400 font-bold mt-3 mb-2 text-sm lg:text-base">
        {product?.name}
      </h2>
      <p className="mb-4 leading-snug text-sm lg:text-base">
        {product?.description}
      </p>

      {/* this button or anchor will take you the contact section */}
      <Link
        className="flex items-center w-full text-secondary-500 dark:text-font-white hover:text-primary-300 duration-150 transition-all ease-in-out"
        to="#contact"
      >
        <p className="text-xs md:text-sm mr-3">Solicitar</p>
        <LongArrow className="h-4" />
      </Link>
    </motion.li>
  );
}

interface ProductListProps {
  products?: Array<Product>;
}

export default function ProductList({ products: _products }: ProductListProps) {
  const [products, setProducts] = useState(_products);
  const [direction, setDirection] = useState(1); // * 1. to the right | -1. to the left

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
        className="block xl:hidden focus:ring-0 focus:border-transparent focus:outline-none text-medium-blue dark:text-dark-gray hover:text-primary-300 duration-150 transition-all ease-in-out"
        onClick={() => rotate(-1)}
      >
        <LeftArrow className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Cards carousel, gap-12 lg:gap-20 */}
      <ul className="w-full flex justify-center mx-4">
        {/* manage how many cards will show up in each device size */}
        <AnimatePresence>
          {products.map((product, idx) => (
            <>
              {idx === 0 && (
                <ProductCard
                  key={product?.name}
                  product={product}
                  direction={direction}
                />
              )}
              {idx === 1 && (
                <ProductCard
                  key={product?.name}
                  product={product}
                  className="hidden md:block"
                  direction={direction}
                />
              )}
              {idx === 2 && (
                <ProductCard
                  key={product?.name}
                  product={product}
                  className="hidden xl:block"
                  direction={direction}
                />
              )}
            </>
          ))}
        </AnimatePresence>
      </ul>

      {/* Right arrow btn */}
      <button
        type="button"
        className="block xl:hidden focus:ring-0 focus:border-transparent focus:outline-none text-medium-blue dark:text-dark-gray hover:text-primary-300 duration-150 transition-all ease-in-out"
        onClick={() => rotate(1)}
      >
        <RightArrow className="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </div>
  );
}
