import React from 'react';

interface ActiveLinkContextProps {
  activeLink?: string;
  setActiveLink?: React.Dispatch<React.SetStateAction<string>>;
}

export const ActiveLinkContext = React.createContext<ActiveLinkContextProps>({
  activeLink: '',
});

interface ActiveLinkProviderProps {
  children: React.ReactNode;
}

export const ActiveLinkProvider = ({ children }: ActiveLinkProviderProps) => {
  const [activeLink, setActiveLink] = React.useState('');

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
