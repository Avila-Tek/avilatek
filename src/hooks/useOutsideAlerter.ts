import React from 'react';

// a hook that alerts when someone clicks outside of the passed ref
export default function useOutsideAlerter(ref) {
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // do the action here
        alert('Clicked outside');
        // calledFunction();
      }
    }
    // if the document exists, then we bind the event listener
    if (typeof document !== undefined) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);
}
