import React, { useState, useEffect } from 'react';
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
}

function ProductCard({ product, className }: ProductCardProps) {
  return (
    <motion.li
      key={product?.name}
      className={`w-72 flex flex-col p-7 rounded-md bg-light-blue shadow-blue justify-between ${className}`}
    >
      <img src={product?.svg} alt={product?.name} className="w-3/5 md:w-2/5" />
      <h1 className="text-primary-500 font-bold mt-3 mb-1 text-sm md:text-base">
        {product?.name}
      </h1>
      <p className="mb-4 leading-snug text-sm md:text-base">
        {product?.description}
      </p>
      <button
        type="button"
        className="flex items-center w-full text-secondary-500 focus:ring-0 focus:outline-none hover:text-secondary-300 duration-150 transition-all ease-in-out"
        onClick={() => {
          console.log('Oprimi un producto');
        }}
      >
        <p className="text-sm mr-3">Solicitar</p>
        <LongArrow className="h-4" />
      </button>
    </motion.li>
  );
}

interface ProductListProps {
  products?: Array<Product>;
}

export default function ProductList({ products: _products }: ProductListProps) {
  const [products, setProducts] = useState(_products);
  const direction = 1; // * 1. to the right | 2. to the left

  const variants = {
    initial: { opacity: 0.2 },
    animate: { opacity: 1 },
    exit: { opacity: 0.2 },
  };

  const rotate = (change: number) => {
    const { length } = products;

    setProducts((prev) => {
      if (change === -1) {
        return prev.map((_, idx) => prev[(idx + change + length) % length]);
      }
      return prev.map((_, idx) => prev[(idx + change) % length]);
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => rotate(1), 6000);
  //   return () => clearInterval(interval);
  // }, [products]);

  return (
    <div className="w-full flex justify-center px-16 md:px-28">
      {/* Left arrow btn */}
      <button
        type="button"
        className="block lg:hidden focus:ring-0 focus:outline-none text-medium-blue hover:text-primary-300 duration-150 transition-all ease-in-out"
        onClick={() => rotate(-1)}
      >
        <LeftArrow className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Cards carousel */}
      <ul className="w-full flex gap-20 justify-center">
        <AnimatePresence>
          {products.map((product, idx) => (
            // <>
            //   {idx === 0 && <ProductCard product={product} />}
            //   {idx === 1 && (
            //     <ProductCard product={product} className="hidden md:block" />
            //   )}
            //   {idx === 2 && (
            //     <ProductCard product={product} className="hidden lg:block" />
            //   )}
            // </>
            <ProductCard product={product} />
          ))}
        </AnimatePresence>
      </ul>

      {/* Right arrow btn */}
      <button
        type="button"
        className="block lg:hidden focus:ring-0 focus:outline-none text-medium-blue hover:text-primary-300 duration-150 transition-all ease-in-out"
        onClick={() => rotate(1)}
      >
        <RightArrow className="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </div>
  );
}
