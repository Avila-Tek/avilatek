import React from 'react';
import { graphql } from 'gatsby';
import DefaultBanner from '../components/DefaultBanner';
import SEO from '../components/SEO';
import BlogPost from '../components/icons/BlogPost';
import { Post } from '../components/blog/PostCard';
import PostList from '../components/blog/PostList';

export default function BlogPage({ data }) {
  const posts: Array<Post> = data?.allMarkdownRemark?.edges.map(
    (n) =>
      ({
        author: n.node.frontmatter.author,
        date: new Date(n.node.frontmatter.date),
        slug: n.node.frontmatter.slug,
        title: n.node.frontmatter.title,
        subtitle: n.node.frontmatter.subtitle,
        description: n.node.frontmatter.description,
        image: n.node.frontmatter.image,
        category: n.node.frontmatter.category,
      } as Post)
  );

  const banner = {
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
    <>
      <SEO title="Blog" />
      <DefaultBanner {...banner} />
      <PostList posts={posts} pagination filters />
    </>
  );
}

export const getAllPosts = graphql`
  query getAllPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            slug
            subtitle
            title
            description
            image
            category
          }
          html
        }
      }
    }
  }
`;
