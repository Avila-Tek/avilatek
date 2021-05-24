import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  title?: string;
}

export default function SEO({ children, title }: SEOProps) {
  return (
    <Helmet titleTemplate={`%s | Avila Tek`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Desarrollamos tecnologías que innovan para ti"
      />
      {/* Open Graph */}
      {/* {location && <meta property="og:url" content={location.href} />} */}
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:title" content="Avila Tek" key="ogtitle" />
      <meta property="og:site_name" content="Avila Tek" key="ogsitename" />
      <meta
        property="og:description"
        content="Desarrollamos tecnologías que innovan para ti"
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}