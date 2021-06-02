module.exports = {
  siteMetadata: {
    title: 'Avila Tek',
    siteUrl: 'https://avilatek.dev',
    description: 'Desarrollamos tecnologías que innovan para ti',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/images`,
      },
      __key: 'assets',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-79745040-2',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
