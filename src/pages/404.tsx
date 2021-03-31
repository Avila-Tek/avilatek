import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import FourOhFourIllustration from '../assets/illustrations/404-error-page-animate.svg';

const NotFoundPage = () => {
  return (
    <main>
      <SEO title="404" />
      <div className="h-screen w-full flex items-center justify-center">
        <img
          src={FourOhFourIllustration}
          alt="404 Not Found"
          className="h-2/5 md:h-1/2"
        />
      </div>
      {/* {process.env.NODE_ENV === 'development' ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null} */}
    </main>
  );
};

export default NotFoundPage;
