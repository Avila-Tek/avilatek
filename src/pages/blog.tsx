import React from 'react';
import DefaultBanner from '../components/DefaultBanner';
import SEO from '../components/SEO';
import BlogPost from '../components/icons/BlogPost';
import PostProfile from '../components/blog/PostProfile';

export default function BlogPage() {
  const data = {
    title: (
      <>
        Frase relacionada a este{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
          blog
        </mark>{' '}
        llenando espacio
      </>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac.',
    illustration: <BlogPost />,
  };

  return (
    <main>
      <SEO title="Blog" />
      {/* <DefaultBanner {...data} /> */}
      <PostProfile />
    </main>
  );
}
