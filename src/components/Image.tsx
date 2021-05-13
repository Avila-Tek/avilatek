import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface ImageProps {
  filename: string;
  alt?: string;
  className?: string;
}

export default function Image({ filename, alt, className = '' }: ImageProps) {
  const data = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) =>
    n.node.relativePath.includes(filename)
  );

  if (!image) {
    return null;
  }

  return (
    <GatsbyImage image={getImage(image.node)} alt={alt} className={className} />
  );
}
