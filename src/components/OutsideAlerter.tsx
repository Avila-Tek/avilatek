import React from 'react';
import useOutsideAlerter from '../hooks/useOutsideAlerter';

interface OutsideAlerterProps {
  children?: React.ReactChild | Array<React.ReactChild>;
}

export default function OutsideAlerter({ children }: OutsideAlerterProps) {
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{children}</div>;
}
