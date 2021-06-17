import React from 'react';
import { useLocation } from '@reach/router';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const location = useLocation();
  // console.log(location.pathname.split("/"));
  // console.log(location.hash);

  // So that the ascii art appears in every view
  React.useEffect(() => {
    console.log(
      `              o\\
    _________/__\\__________
   |                  - (  |
  ,'-.                 . \`-|
 (____".       ,-.    '   ||
   |          /\\,-\\   ,-.  |
   |      ,-./     \\ /'.-\\ |
   |     /-.,\\      /     \\|
   |    /     \\    ,-.     \\
   |___/_______\\__/___\\_____\\`,
      '\n\n¡Trabaja con nosotros!\n',
      'https://bit.ly/avila-tek'
    );
  }, []);

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-font-black dark:text-font-white transition-all ease-in-out duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
