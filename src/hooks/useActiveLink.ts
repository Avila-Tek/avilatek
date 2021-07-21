import React from 'react';
import { ActiveLinkContext } from '../context/ActiveLinkContext';

export default function useActiveLink() {
  const { activeLink, setActiveLink } = React.useContext(ActiveLinkContext);
  return [activeLink, setActiveLink] as const;
}
