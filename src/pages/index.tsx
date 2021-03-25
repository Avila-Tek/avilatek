import * as React from 'react';
import Banner from '../components/Banner';
import Technologies from '../components/Tecnologies';
import AboutUs from '../components/AboutUs';
import SEO from '../components/SEO';
import ProductsSection from '../components/products/ProductsSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SEO title="Inicio" />
      <Banner />
      <Technologies />
      <AboutUs />
      <ProductsSection />
    </main>
  );
}
