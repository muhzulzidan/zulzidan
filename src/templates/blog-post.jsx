import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from 'gatsby-plugin-wpgraphql-seo';
export default function BlogPost({ data, location }) {
    const post = data.allWpPost.nodes[0]
    console.log(post)
    return (
        <Layout location={location}>
            {/* <Seo post={wpPage} /> */}

            <div className="blogPost">
                {/* GatsbyImage from featuredImage */}
                <GatsbyImage
                    image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    alt={post.featuredImage.altText}
                    className="blogPost__image"
                />
                <div className="title">
                    <h1>{post.title}</h1>
                    <br />
                    <p>written by {post.author.node.name}</p>
                    <p>{post.date}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "DD, MMMM YYYY")
        author {
            node {
                name
            }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData

              }
            }
          }
        }
      }
    }
  }
`
