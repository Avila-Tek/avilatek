import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-light dark:bg-dark text-font-black dark:text-font-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
