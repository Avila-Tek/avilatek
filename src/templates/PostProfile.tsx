import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import dayjs from 'dayjs';
import Waves from '../components/icons/Waves';
import RotatingTriangle from '../components/icons/RotatingTriangle';
import Line from '../components/icons/Line';
import SEO from '../components/SEO';
import Subscription from '../components/common/Subscription';
import SocialSharing from './SocialSharing';
import 'dayjs/locale/es';

dayjs.locale('es');

export default function SinglePostPage({ data }) {
  const SITE_URL = 'https://avilatek.com/';
  const { frontmatter, html } = data.markdownRemark;
  const {
    slug,
    author,
    authorDescription,
    coauthor,
    image,
    category,
    date,
    subtitle,
    title,
    description,
  } = frontmatter;

  return (
    <>
      <SEO
        title={`${title} | Avila Tek`}
        name={`${title} | Avila Tek`}
        description={description}
        link={`${SITE_URL}blog/${slug}`}
      />
      <main>
        {/* Banner */}
        <section className="relative w-full h-third lg:h-eight bg-light-blue dark:bg-dark-gray flex flex-col items-center transition duration-300 ease-in-out overflow-hidden">
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute h-full w-full z-10 bg-light-blue dark:bg-dark-gray bg-opacity-75 dark:bg-opacity-70 pt-44">
            <div className="flex flex-col items-center px-14 sm:px-10 text-center z-10">
              <h3 className="text-sm md:text-base xl:text-lg text-secondary-100 dark:text-neutral-300 font-semibold mb-2">
                {category}
              </h3>
              <h1 className="w-full sm:w-11/12 lg:w-10/12 font-bold text-xl md:text-2xl xl:text-3xl text-primary-500 dark:text-primary-300">
                {title}
              </h1>
            </div>
          </div>
          <RotatingTriangle className="top-20 right-1/2" />
          <RotatingTriangle className="right-2/12 top-5/12" />
          <RotatingTriangle className="bottom-5/12 left-2/12" />
          <Line className="top-12 right-1/4 w-12" />
          <Line className="top-1/4 left-2/12 w-14" />
          <Line className="bottom-4/12 right-6/12 w-12" />
          <div className="w-full absolute bottom-0 left-0 z-20">
            <Waves className="w-full h-full -mb-2" />
          </div>
        </section>

        {/* Post */}
        <section className="w-10/12 sm:w-9/12 md:w-7/12 mx-auto mt-6 md:mt-0 mb-40">
          {/* Post header */}
          <div>
            <h2 className="font-semibold text-2base md:text-lg xl:text-xl text-secondary-100 dark:text-neutral-100">
              {subtitle}
            </h2>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col sm:flex-row sm:items-center text-xsm sm:text-sm xl:text-base text-neutral-400 font-medium">
                <p>
                  Por{' '}
                  <span className="text-primary-400 dark:text-primary-300">
                    {author}
                    {coauthor && <>, {coauthor}</>}
                  </span>{' '}
                </p>
                <span className="mx-3 hidden sm:inline-block">|</span>
                <p>
                  {dayjs(new Date(date).toISOString().split('T')[0]).format(
                    'DD MMM, YYYY'
                  )}
                </p>
              </div>
              {/* Share buttons */}
            </div>
            <SocialSharing SITE_URL={SITE_URL} slug={slug} title={title} />
          </div>
          <hr className="mt-6 mb-12  border border-medium-blue dark:border-dark-gray" />
          {/* Post body */}
          <div className="w-full grid gap-6 text-sm lg:text-base">
            <div
              className="w-full grid gap-5 text-2sm lg:text-base break-words text-justify leading-normal lg:leading-normal"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <SocialSharing SITE_URL={SITE_URL} slug={slug} title={title} footer />
          <hr className="mt-4 mb-12 border border-medium-blue dark:border-dark-gray" />
          {/* Post footer */}
          <div className="flex flex-col md:flex-row">
            <div className="w-11/12 md:w-9/12">
              <h3 className="capitalize font-semibold text-primary-400 dark:text-primary-300 text-sm lg:text-base xl:text-2base">
                {author}
              </h3>
              <p className="mt-2 text-xsm lg:text-sm xl:text-2sm">
                {authorDescription}
              </p>
            </div>
          </div>
          <hr className="my-12 border border-medium-blue dark:border-dark-gray" />
          {/* Subscription */}
          <Subscription />
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
        slug
        title
        subtitle
        date
        author
        coauthor
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        authorDescription
        category
      }
    }
  }
`;
