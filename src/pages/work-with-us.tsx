import * as React from 'react';

export default function WorkWithUsPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(
        'https://avilatek.sg.larksuite.com/share/base/form/shrusngwY7i49v2HkUrJR5r523d'
      );
    }
  }, []);
  return <div className="min-h-screen" />;
}
