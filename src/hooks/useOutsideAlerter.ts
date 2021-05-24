import React from 'react';

// a hook that alerts when someone clicks outside of the passed ref
export default function useOutsideAlerter(ref, task) {
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // do the action here
        task(false); // ! this false is hardcoded since this hook so far won't be used in another situation other than the navbar
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
