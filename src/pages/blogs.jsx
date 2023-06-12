import React from 'react'
import { graphql, Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from '../components/layout'

const BlogsPage = ({ data, location }) => {
    const { allContentfulBlog } = data
    const blogs = allContentfulBlog.nodes

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        },
    }

    const generateExcerpt = (rawContent) => {
        const content = JSON.parse(rawContent)
        let plainText = ''

        const extractText = (node) => {
            if (node.nodeType === 'text') {
                plainText += node.value.trim() + ' '
            }

            if (node.content) {
                node.content.forEach(extractText)
            }
        }

        content.content.forEach(extractText)

        plainText = plainText
            .replace(/\n/g, '') // Remove newlines
            .replace(/\s+/g, ' ') // Replace multiple whitespaces with a single space
            .trim()

        const maxLength = 150 // Set the maximum number of characters for the excerpt
        if (plainText.length <= maxLength) {
            return plainText
        }
        return `${plainText.slice(0, maxLength)}...`
    }


    return (
        <Layout location={location}>
            <section className="pt-10 lg:px-20 px-12">
                <div className="container mx-auto space-y-6 sm:space-y-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(blog => (
                            <Link
                                key={blog.slug}
                                rel="noopener noreferrer"
                                href={`/blog/${blog.slug}`}
                                className="block w-full h-full overflow-hidden bg-white rounded-2xl shadow-lg"
                            >
                                <img
                                    src={blog.featuredMedia.gatsbyImageData.images.fallback.src}
                                    alt={blog.title}
                                    className="object-cover w-full h-64 sm:h-48 lg:h-56"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {blog.title}
                                    </h3>
                                    <span className="text-xs text-gray-500">February 19, 2021</span>
                                    <p className="mt-3 text-sm text-gray-700">{generateExcerpt(blog.content.raw)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query BlogPageQuery {
    allContentfulBlog {
      nodes {
        slug
        title
        content {
          raw
        }
        featuredMedia {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default BlogsPage
