import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="bg-light">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
