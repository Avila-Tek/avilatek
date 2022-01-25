import * as React from 'react';
import { graphql } from 'gatsby';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import SEO from '../components/SEO';
import ProductsSection from '../components/products/ProductsSection';
import ServiceSection from '../components/services/ServiceSection';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Clients from '../components/Clients';
import BlogSection from '../components/blog/BlogSection';
import { Post } from '../components/blog/PostCard';

export default function HomePage({ data }) {
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

  return (
    <main className="min-h-screen">
      <SEO title="Inicio" />
      <Banner />
      <Clients />
      <AboutUs />
      <ProductsSection />
      <ServiceSection />
      <PortfolioSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </main>
  );
}

export const getPosts = graphql`
  query getPosts {
    allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            date
            category
            description
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
            slug
            title
          }
        }
      }
    }
  }
`;
