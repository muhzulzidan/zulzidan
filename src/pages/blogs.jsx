import React, { useState,  } from "react";

import { graphql, Link } from 'gatsby'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"
import { Search } from 'react-bootstrap-icons';


import Layout from '../components/layout'
const BlogsPage = ({ data, location }) => {
    const { allContentfulBlog } = data
    const blogs = allContentfulBlog.nodes

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        },
    }
    const [searchTerm, setSearchTerm] = useState('')
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
                    <div className="text-center mb-6">
                        {/* Title and Description */}
                        <h2 className="font-heading font-bold text-3xl mb-2">Blogs</h2>
                        <p className="font-body text-gray-700 text-lg">Explore our latest articles and insights.</p>

                        {/* Search Box */}
                        <div className="mt-6 relative max-w-md mx-auto">
                            <Search className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="p-2 pl-10 w-full border rounded-md"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredBlogs.map(blog => (
                            <Link
                                key={blog.slug}
                                rel="noopener noreferrer"
                                to={`/blog/${blog.slug}`}
                                className="block w-full h-full overflow-hidden bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${blog.featuredMedia.gatsbyImageData.images.fallback.src})`
                                    }}
                                    className="bg-center bg-cover h-64 sm:h-48 lg:h-56"
                                    alt={blog.title}
                                ></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
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
