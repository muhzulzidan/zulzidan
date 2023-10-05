const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // For Blogs
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const blogResult = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
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
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
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
    createPage({
      path: `/works/${node.slug}`,
      component: workTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
