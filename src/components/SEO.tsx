import React from 'react';
import { Helmet } from 'react-helmet';
import useTheme from '../hooks/useTheme';
import icon from '../assets/images/logo-with-bg.png';

interface SEOProps {
  children?: React.ReactChild | Array<React.ReactChild>;
  title?: string;
  name?: string;
  description?: string;
  link?: string;
}

export default function SEO({
  children,
  title,
  name = 'Avila Tek',
  description = 'Desarrollamos tecnologías que innovan para ti',
  link = 'https://avilatek.com/',
}: SEOProps) {
  const [theme] = useTheme();

  return (
    <Helmet titleTemplate="%s | Avila Tek">
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="title" content={name} />
      <meta name="description" content={description} />
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
      <meta property="og:url" content={link} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://imgur.com/a/Lr22sOv" />
      <meta property="og:title" content={name} key="ogtitle" />
      <meta property="og:site_name" content="Avila Tek" key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={link} />
      <meta property="twitter:image" content="https://imgur.com/a/Lr22sOv" />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
      {children}
    </Helmet>
  );
}
