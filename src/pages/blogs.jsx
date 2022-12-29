// import React from 'react'
// import Layout from '../components/layout'
// import {  GatsbyImage } from "gatsby-plugin-image"
// import { Link, graphql } from 'gatsby'
// import Search from '../svg/search.svg'


// const BlogsPages = ({ data, location },  ) => {

//     return (
//         <Layout location={location}>
//             <div className="blogsPages">
//                 <title>blogs | zulzidan</title>
//                 <h1>Blogs</h1>
//                 <p className="p">This is where i write about Tech</p>
//                 {/* search box with svg icon inside input*/}
//                 <div className="searchBox">
//                     <input type="text" placeholder="Search" />
//                     <Search />
//                 </div>
//                 <div className="posts">
//                     <br />
//                     {data.allWpPost.nodes.map( node => {
//                         return (
//                             <div className="post" key={node.id}>
//                                 <Link to={`/${node.slug}`}>
//                                     <div className="post-image">
//                                         {/* <h2>{item.title}</h2> */}
//                                         {/* <img src={node.featuredImage} alt="An image" className="img" /> */}
//                                         <GatsbyImage image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt="" className="img"/>
//                                     </div>
//                                     <div className="post-content">
//                                         <p className="date">{node.date}</p>
//                                         <h2>{node.title}</h2>
//                                     </div>
//                                 </Link>
//                             </div>
//                         )
//                     })}
//                     <button className="loadMore" style={{display:"none"}}>
//                         Load More
//                     </button>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default BlogsPages

// export const pageQuery = graphql`
//   query {
//     allWpPost(sort: { fields: [date] }) {
//       nodes {
//         id
//         title
//         excerpt
//         slug
//         date(formatString: "DD, MMMM YYYY") 
//         featuredImage {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData

//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `