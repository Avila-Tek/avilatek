import React from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = React.useState('es');

  return (
    <label htmlFor="language">
      <select
        name="language"
        value={language}
        onChange={(e) => {
          e.preventDefault();
          setLanguage(e.target.value);
        }}
        className="px-8 mx-0 bg-transparent text-xs lg:text-sm text-primary-500 dark:text-primary-400 font-medium border-0 focus:ring-0 focus:outline-none transition-all duration-300 ease-in-out"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </label>
  );
}
