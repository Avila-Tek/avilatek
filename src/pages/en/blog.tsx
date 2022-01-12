import React from 'react';
import { graphql } from 'gatsby';
import DefaultBanner from '../../components/common/DefaultBanner';
import SEO from '../../components/SEO';
import BlogPost from '../../components/icons/BlogPost';
import { Post } from '../../components/blog/PostCard';
import PostList from '../../components/blog/PostList';

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
        Avila Tek Beyond The{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 text-font-dark dark:text-font-white">
          Blog
        </mark>{' '}
      </>
    ),
    description:
      'News, articles and experiences on how we develop technologies that change the world, remember to subscribe to keep up with us.',
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
  query getAllEnPosts {
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
