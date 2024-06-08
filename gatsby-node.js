const path = require("path");
const { renderRichText } = require('gatsby-source-contentful/rich-text');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  })
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage, deletePage, createRedirect } = actions;
  
 createRedirect({
    fromPath: `/mpi/`,
    toPath: `https://forms.gle/TKLcGV7b9LqDuq3B6`,
    statusCode: 200,
  })

  // For Blogs
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const blogResult = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
             content {
              raw
              references {
                ... on ContentfulAsset {
                  contentful_id
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  if (blogResult.errors) {
    console.error(blogResult.errors);
    throw new Error("There was an error fetching blog data from Contentful");
  }

  blogResult.data.allContentfulBlog.edges.forEach((edge) => {
    const path = `/blogs/${edge.node.slug}/`;

    createPage({
      component: blogTemplate,
      path,
      context: {
        slug: edge.node.slug,
      },
    });

    createRedirect({
      fromPath: `/blogs/${edge.node.slug}`,
      toPath: path,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });

  // For Works
  const workTemplate = path.resolve("./src/templates/workTemplate.js");
  const worksResult = await graphql(`
    query {
      allContentfulZulzidanWorks {
        edges {
          node {
            title
            slug  
          }
        }
      }
    }
  `);

  if (worksResult.errors) {
    console.error(worksResult.errors);
    throw new Error("There was an error fetching works data from Contentful");
  }

  worksResult.data.allContentfulZulzidanWorks.edges.forEach(({ node }) => {
    const path = `/works/${node.slug}/`;

    createPage({
      path,
      component: workTemplate,
      context: {
        slug: node.slug,
      },
    });

    createRedirect({
      fromPath: `/works/${node.slug}`,
      toPath: path,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });

  
};
