import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-font-black dark:text-font-white transition-all ease-in-out duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
