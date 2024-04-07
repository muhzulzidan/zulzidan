import React, { lazy, Suspense, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import slugify from 'slugify'
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { FiCopy, FiCheck } from "lucide-react";
// import { FiCheck, FiCopy } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import generateTableOfContents from '../components/table-of-contents';
import generateExcerpt from '../utils/generateExcerpt';
// import Layout from '../components/layout';
import SEOHead from "../components/head";
// import ShareButton from '../components/ShareButton';
// import Breadcrumb from '../components/Breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// const RichTextRenderer = React.lazy(() => import('../components/RichTextRenderer'));
import RichTextRenderer from '../components/RichTextRenderer'
import { Button } from '../components/ui/button';
const Layout = React.lazy(() => import('../components/layout'));
const Breadcrumb = React.lazy(() => import('../components/Breadcrumb'));
const ShareButton = React.lazy(() => import('../components/ShareButton'));
// const CodeBlock = React.lazy(() => import('../components/CodeBlock'));


const BlogPagesComponents = ({ data, location, }) => {
  const { title, content, featuredMedia, date } = data.contentfulBlog;
  // const image = getImage(featuredMedia.gatsbyImageData);
  const { references } = content;
  const [isCopied, setIsCopied] = useState({});
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setImage(getImage(featuredMedia.gatsbyImageData));
  }, [featuredMedia]);

  // Initialize an empty array to store the headings
  let tableOfContents = [];

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
      [BLOCKS.HEADING_2]: (node, children) => {
        // Add the heading to the table of contents
        const headingText = node.content[0].value.trim().replace(/[-\s]+$/, '');
        tableOfContents.push(headingText);

        // Convert the heading text into a slug
        const slug = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        console.log(slug, "slug heading");

        return <h2 id={slug}>{children}</h2>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, index) => {
        const { code, language } = node.data.target
        const handleCopy = (contentfulId) => {
          setIsCopied((prevIsCopied) => {
            const newIsCopied = { ...prevIsCopied, [contentfulId]: true };
            setTimeout(() => {
              newIsCopied[contentfulId] = false;
            }, 2000);
            return newIsCopied;
          });
        };

        return (
          <div className='relative'>
            <div className='absolute right-3 top-0'>
              {/* <CopyToClipboard text={code.code} onCopy={() => handleCopy(node.data.target.contentful_id)}> */}
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(code.code).then(() => {
                    handleCopy(node.data.target.contentful_id);
                  });
                }}
              >
                {isCopied[node.data.target.contentful_id] ? (
                  <>
                    {/* <FiCheck className="mr-1" /> */}
                    Copied!
                  </>
                ) : (
                  <>
                    {/* <FiCopy className="mr-1" /> */}
                    Copy
                  </>
                )}
              </Button>
              {/* </CopyToClipboard> */}
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
              <pre className="font-mono text-sm">{code.code}</pre>
            </div>
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
    { text: title, link: location.pathname },
  ];

  // console.log(tableOfContents, "content")

  function getPlainTextFromHeader(contentNode) {
    return contentNode.reduce((acc, current) => {
      return acc + current.value
    }, '')
  }

  function getHeadersFromRichText(richText) {
    const headers = (content) => content.nodeType === BLOCKS.HEADING_2

    return richText.content.filter(headers).map((heading) => {
      const plainText = getPlainTextFromHeader(heading.content)

      return {
        text: plainText,
        href: `#${slugify(plainText)}`,
      }
    })
  }
  // console.log(renderRichText(content), "contentasdasd")
  console.log(generateTableOfContents(content.raw), "contentasdasd")


  return (

    <Layout location={location}>
      <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-20 break-words font-sans flex flex-col gap-4 ">

        <Suspense fallback={<div>Loading...</div>}>
          <Breadcrumb items={breadcrumbItems} />
        </Suspense>
        <h1 className="text-3xl font-heading font-bold mb-4">{title}</h1>
        <p className='line-clamp-1 text-stone-600 font-semibold xl:pr-12'>{generateExcerpt(content.raw)}</p>

        <div className='flex justify-between xl:pr-12 my-4'>
          <p>Ditulis Oleh zidan Pada {date}</p>
          <Suspense fallback={<div>Loading...</div>}>
            <ShareButton />
          </Suspense>
        </div>


        <div className={`mb-4 w-full   justify-center items-center flex${!showImage ? 'md:w-1/2 ' : 'w-full'}`}>
          {showImage ? null : <Button variant="outline" onClick={() => setShowImage(true)} className="w-full">Show Image</Button>}
          <Suspense fallback={<div>Loading...</div>}>
            {showImage && image && <GatsbyImage image={image} alt={featuredMedia.title} />}
          </Suspense>
        </div>


       


        <div className='prose max-w-none'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" >
              <AccordionTrigger>
                <span className='m-0 font-bold'> Table of Contents</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className='list-none'>
                  {generateTableOfContents(content.raw).map((item, i) => {
                    // Convert the item text into a slug
                    const slug = item.trim().replace(/[-\s]+$/, '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');



                    const href = `#${slug}`;

                    return (
                      <li key={i} >
                        <a href={href} className='no-underline hover:text-indigo-600' >{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {content && <RichTextRenderer content={content} options={options} />}

        </div>
       
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
