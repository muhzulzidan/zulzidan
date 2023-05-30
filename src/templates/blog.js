import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import Layout from '../components/layout';
import SEOHead from "../components/head";

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2 className="text-2xl font-bold">Embedded Asset</h2>
          <pre className="bg-gray-200 p-4">{JSON.stringify(node, null, 2)}</pre>
        </>
      )
    },
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


const BlogPagesComponents = ({ data, location }) => {
  const { title, content, featuredMedia } = data.contentfulBlog
  const image = getImage(featuredMedia.gatsbyImageData)

  return (
    <Layout location={location}>
      <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-20  prose max-w-none">
        <div className='mb-24'>
          {image && <GatsbyImage image={image} alt={featuredMedia.title} />}
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {content && renderRichText(content, options)}
      </div>
    </Layout>
  )
}
export const Head = ({data}) => {
  const { title, content, featuredMedia } = data.contentfulBlog
  return <SEOHead title={title} description={generateExcerpt(content.raw) } image={featuredMedia} />
}
export default BlogPagesComponents

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        raw
      }
      featuredMedia {
        title
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        description
      }
    }
  }
`
