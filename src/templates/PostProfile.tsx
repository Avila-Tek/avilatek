import React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Waves from '../components/icons/Waves';
import RotatingTriangle from '../components/icons/RotatingTriangle';
import Line from '../components/icons/Line';
import SEO from '../components/SEO';

dayjs.locale('es');

export default function SinglePostPage({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const {
    author,
    authorDescription,
    authorImage,
    category,
    date,
    image,
    subtitle,
    title,
  } = frontmatter;

  return (
    <>
      <SEO title={title} />
      <main>
        {/* Banner */}
        <section className="relative w-full bg-light-blue dark:bg-dark-gray flex flex-col items-center pt-32 md:pt-44 transition duration-300 ease-in-out">
          <div className="flex flex-col items-center px-14 sm:px-10 text-center z-10">
            <h3 className="text-sm md:text-base text-secondary-50 dark:text-primary-100 font-semibold mb-2">
              {category}
            </h3>
            <h1 className="w-full sm:w-11/12 lg:w-10/12 font-bold text-lg md:text-xl">{title}</h1>
          </div>
          <div className="w-full mt-16 md:mt-20">
            <Waves className="w-full h-full -mb-2" />
          </div>
          <RotatingTriangle className="top-20 right-1/2" />
          <RotatingTriangle className="right-2/12 top-5/12" />
          <RotatingTriangle className="bottom-5/12 left-2/12" />
          <Line className="top-12 right-1/4 w-12" />
          <Line className="top-1/4 left-2/12 w-14" />
          <Line className="bottom-4/12 right-6/12 w-12" />
        </section>
        {/* Post */}
        <section className="w-9/12 md:w-7/12 mx-auto mt-8 md:mt-2 mb-40 z-20">
          {/* Post header */}
          <div>
            <h2 className="font-semibold text-base md:text-lg text-secondary-100 dark:text-neutral-100">
              {subtitle}
            </h2>
            <div className="flex items-center mt-3">
              <div className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 bg-primary-400 rounded-full" />
              <p className="text-xsm sm:text-sm ml-3 text-neutral-400 font-medium">
                Por{' '}
                <span className="text-primary-400 dark:text-primary-300 mr-3">
                  {author}
                </span>
                |
                <span className="ml-3">
                  {dayjs(new Date(date).toISOString().split('T')[0]).format(
                    'DD MMM, YYYY'
                  )}
                </span>
              </p>
            </div>
          </div>
          <hr className="my-12 border border-medium-blue dark:border-dark-gray" />
          {/* Post body */}
          <div className="w-full grid gap-5 text-sm lg:text-base">
            {/* //! Hard coded just for now */}
            <div className="w-full h-half lg:h-third bg-secondary-200 mb-4" />
            <div
              className="w-full grid gap-5 text-sm lg:text-base"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <hr className="my-12 border border-medium-blue dark:border-dark-gray" />
          {/* Post footer */}
          <div className="flex flex-col md:flex-row">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:h-20 lg:w-20 mr-6 mb-4 bg-primary-400 rounded-full overflow-hidden" />
            <div className="w-11/12 md:w-9/12">
              <h3 className="capitalize font-semibold text-primary-400 dark:text-primary-300 text-sm lg:text-base">
                {author}
              </h3>
              <p className="mt-2 text-xsm lg:text-sm">{authorDescription}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const postQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date
        author
        authorImage
        description
        image
        authorDescription
        category
      }
    }
  }
`;
