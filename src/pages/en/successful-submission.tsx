import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/SEO';
import SentMessage from '../../components/icons/SentMessage';

export default function MessageSentPage() {
  return (
    <main>
      <SEO title="Message sent successfully" />
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center py-32 px-6 md:px-12 lg:px-20">
        <SentMessage />
        <div className="mt-2 md:mt-6 w-8/12 md:w-5/12 relative z-10">
          <h2 className="font-bold text-primary-500 dark:text-primary-400 text-base lg:text-lg">
            Thank you very much for taking the time
          </h2>
          <p className="mt-4 mb-2 text-sm lg:text-base">
            We have successfully received your message, we will get in touch as
            soon as possible and give you a response to your query. Let's keep
            in touch on our social media!
          </p>
          <Link
            to="/en"
            className="text-primary-400 font-medium text-sm lg:text-base"
          >
            Back to home
          </Link>
          <div className="absolute -top-14 -left-10 rounded-blob w-72 h-64 brick bg-medium-blue dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-25" />
        </div>
      </div>
    </main>
  );
}
