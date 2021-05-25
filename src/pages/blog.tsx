import React from 'react';
import DefaultBanner from '../components/DefaultBanner';
import SEO from '../components/SEO';
import BlogPost from '../components/icons/BlogPost';
import SinglePostPage from '../templates/PostProfile';
import { Post } from '../components/blog/PostCard';
import PostList from '../components/blog/PostList';

const posts: Array<Post> = [
  {
    id: 'this-is-a-test',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
  {
    id: 'this-is-a-test-2',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
  {
    id: 'this-is-a-test-3',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
  {
    id: 'this-is-a-test-4',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
  {
    id: 'this-is-a-test-5',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
  {
    id: 'this-is-a-test-6',
    title: 'Why should we use GatsbyJS',
    author: 'John Doe',
    category: 'Desarrollo Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. Consectetur adipiscing elit. Urna in sit id hac.',
    image: 'imagine there is a image',
    date: new Date(),
  },
];

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
      <DefaultBanner {...data} />
      <PostList posts={posts} pagination />
      {/* <SinglePostPage /> */}
    </main>
  );
}
