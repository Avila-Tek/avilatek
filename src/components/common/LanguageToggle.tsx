import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';

export default function LanguageToggle() {
  const location = useLocation();
  const [language, setLanguage] = React.useState(
    location.pathname.includes('en') ? 'en' : 'es'
  );

  React.useEffect(() => {
    navigate(`/${language === 'es' ? '' : language}`);
  }, [language]);

  return (
    <label htmlFor="language">
      <select
        name="language"
        value={language}
        onChange={(e) => {
          e.preventDefault();
          setLanguage(e.target.value);
        }}
        className="px-8 mx-0 bg-transparent text-xs lg:text-sm text-primary-500 dark:text-primary-300 font-medium border-0 focus:ring-0 focus:outline-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </label>
  );
}
