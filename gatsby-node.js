const path = require('path');

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/PostProfile.tsx');
  // 2. Query all posts
  const { data } = await graphql(`
    query getPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);
  // 3. Loop over each post and create a page for that post
  data.allMarkdownRemark.edges.forEach((post) => {
    actions.createPage({
      // What is the URL for this new page
      path: `/blog/${post.node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });
}

exports.createPages = async (params) => {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnPostsIntoPages(params)]);
};
