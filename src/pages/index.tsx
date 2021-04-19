import * as React from 'react';
import Banner from '../components/Banner';
import Technologies from '../components/Tecnologies';
import AboutUs from '../components/AboutUs';
import SEO from '../components/SEO';
import ProductsSection from '../components/products/ProductsSection';
import ServiceSection from '../components/services/ServiceSection';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Clients from '../components/Clients';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SEO title="Inicio" />
      <Banner />
      <Clients />
      {/* <Technologies /> */}
      <AboutUs />
      <ProductsSection />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
