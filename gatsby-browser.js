import React from 'react';
import Layout from './src/components/Layout';
import { ThemeProvider } from './src/context/ThemeContext';
import { ActiveLinkProvider } from './src/context/ActiveLinkContext';
import './src/styles/global.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <ActiveLinkProvider>{element}</ActiveLinkProvider>
    </ThemeProvider>
  );
}
