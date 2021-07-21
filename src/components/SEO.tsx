import React from 'react';
import { Helmet } from 'react-helmet';
import useTheme from '../hooks/useTheme';
import icon from '../assets/images/logo-with-bg.png';

interface SEOProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  title?: string;
}

export default function SEO({ children, title }: SEOProps) {
  const [theme] = useTheme();

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
      <meta name="title" content="Avila Tek" />
      <meta
        name="description"
        content="Desarrollamos tecnologías que innovan para ti"
      />
      {/* The famous theme color */}
      <meta
        name="theme-color"
        content={
          theme === 'dark' ||
          (theme === 'auto' &&
            window?.matchMedia('(prefers-color-scheme: dark)').matches)
            ? '#00592C'
            : '#29A164'
        }
      />
      {/* Open Graph / Facebook */}
      <meta property="og:url" content="https://avilatek.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={icon} />
      <meta property="og:title" content="Avila Tek" key="ogtitle" />
      <meta property="og:site_name" content="Avila Tek" key="ogsitename" />
      <meta
        property="og:description"
        content="Desarrollamos tecnologías que innovan para ti"
        key="ogdesc"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://avilatek.dev/" />
      <meta property="twitter:image" content={icon} />
      <meta property="twitter:title" content="Avila Tek" />
      <meta
        property="twitter:description"
        content="Desarrollamos tecnologías que innovan para ti"
      />
      {children}
    </Helmet>
  );
}
