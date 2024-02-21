import React, { lazy, Suspense, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCheck, FiCopy } from "react-icons/fi";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import generateExcerpt from '../utils/generateExcerpt';
import Layout from '../components/layout';
import SEOHead from "../components/head";
import ShareButton from '../components/ShareButton';
import Breadcrumb from '../components/Breadcrumb';

const RichTextRenderer = React.lazy(() => import('../components/RichTextRenderer'));
const CodeBlock = React.lazy(() => import('../components/CodeBlock'));


const BlogPagesComponents = ({ data, location }) => {
  const { title, content, featuredMedia, date } = data.contentfulBlog;
  // const image = getImage(featuredMedia.gatsbyImageData);
  const { references } = content;
  const [isCopied, setIsCopied] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(getImage(featuredMedia.gatsbyImageData));
  }, [featuredMedia]);

  const Bold = ({ children }) => <span className="font-bold">{children}</span>;
  const Text = ({ children }) => <p className="">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.CODE]: code => <code className='bg-yellow-200'>{code}</code>
    },
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        return (
          <a className='text-black hover:text-yellow-600' href={node.data.uri}>
            {node.content[0].value}
          </a>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Text>{children}</Text>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, index) => {
        const {code, language} = node.data.target
        const handleCopy = (contentfulId) => {
          setIsCopied((prevIsCopied) => {
            return {
              ...prevIsCopied,
              [contentfulId]: true,
            };
          });

          setTimeout(() => {
            setIsCopied((prevIsCopied) => {
              return {
                ...prevIsCopied,
                [contentfulId]: false,
              };
            });
          }, 2000);
        };

        return (
         <div className='relative'>
            <div className='absolute right-3 top-0'>
              <CopyToClipboard text={code.code} onCopy={() => handleCopy(node.data.target.contentful_id)}>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center px-2 py-1 mt-2 text-sm text-stone-50 bg-stone-800 rounded-md hover:bg-stone-300 hover:text-stone-900 focus:outline-none focus:ring focus:ring-gray-400"
                >
                  {isCopied[node.data.target.contentful_id] ? (
                    <>
                      <FiCheck className="mr-1" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy className="mr-1" />
                      Copy
                    </>
                  )}
                </motion.button>
              </CopyToClipboard>
            </div>
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
              {code.code}
            </SyntaxHighlighter>
          </div>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <GatsbyImage image={getImage(node.data.target.gatsbyImageData)} alt={node.data.target.title} />           
          </>
        );
      },

    }
  };

  const breadcrumbItems = [

    { text: title, link: location.pathname }, // Dynamically set the current page title and link
  ];
  return (
    <Layout location={location}>
      <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-20 prose prose-h3:text-xl prose-a: max-w-none">
     
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className='line-clamp-1 text-stone-600 font-semibold xl:pr-12'>{generateExcerpt(content.raw)}</p>
    <div className='flex justify-between xl:pr-12 my-4'>
          <p>Ditulis Oleh zidan Pada {date}</p>
          <ShareButton />
  
    </div>
      
        <div className='mb-24'>
          <Suspense fallback={<div>Loading...</div>}>
            {image && <GatsbyImage image={image} alt={featuredMedia.title} />}
          </Suspense>
        </div>
        {/* {content && renderRichText(content, options)} */}
        <Suspense fallback={<div>Loading...</div>}>
          {content && <RichTextRenderer content={content} options={options} />}
        </Suspense>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const { title, content, featuredMedia, slug, date } = data.contentfulBlog;
  // console.log(`date`, date)
  return <SEOHead title={title} description={generateExcerpt(content.raw)} image={featuredMedia} url={`https://www.zulzidan.com/blogs/${slug}`} publishDate={date} />;
};

export default BlogPagesComponents;

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "DD MMM YYYY")
      content {
        raw
        references {
           ... on ContentfulAsset {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
              __typename
              contentful_id
              title
            }
          ... on ContentfulCodeBlock {
            __typename
            contentful_id
            language
            code {              
              code
            }
          }
        }
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
`;
