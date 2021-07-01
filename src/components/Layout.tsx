import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import useLanguage from '../hooks/useLanguage';

export default function Layout({ children }) {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

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
      `\n\n${translation(language, 'consoleLog')}\n`,
      `https://www.avilatek.dev/${
        language === 'es' ? '' : language + '/'
      }work-with-us`
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
