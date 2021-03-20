import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, image }) {
  return (
    <Helmet titleTemplate={`%s | Avila Tek`}>
      <html lang="en" />
      <title>Avila Tek</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content="Here goes the description" />
      {/* Open Graph */}
      {/* {location && <meta property="og:url" content={location.href} />} */}
      <meta property="og:image" content="/logo.svg" />
      <meta property="og:title" content="Avila Tek" key="ogtitle" />
      <meta property="og:site_name" content="Avila Tek" key="ogsitename" />
      <meta
        property="og:description"
        content="Here goes the description"
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}
