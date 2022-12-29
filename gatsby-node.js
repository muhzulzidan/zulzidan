// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === 'build-html') {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /slick-carousel/,
//                         use: loaders.null(),
//                     }
//                 ],
//             },
//         });
//     }
// }

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return graphql(`
//     {
//       allWpPost(sort: { fields: [date] }) {
//         nodes {
//           slug
//         }
//       }
//     }
//   `).then(result => {
//         //highlight-start
//         result.data.allWpPost.nodes.forEach(node => {
//             createPage({
//                 path: node.slug,
//                 component: path.resolve(`./src/templates/blog-post.jsx`),
//                 context: {
//                     // This is the $slug variable
//                     // passed to blog-post.js
//                     slug: node.slug,
//                 },
//             })
//         })
//         //highlight-end
//     })
// }
