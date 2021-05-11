import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ filename, alt, className }) => {
  const data = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      alt={alt}
      className={className}
    />
  );
};

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
