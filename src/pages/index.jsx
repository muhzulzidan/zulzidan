import * as React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage,  } from "gatsby-plugin-image"
import { Calendar, Person } from "react-bootstrap-icons"


import generateExcerpt from '../utils/generateExcerpt';
import ContentfulImage from "../components/ContentfulImage"
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage = ({ data, location }) => {
  const { nodes: blogPosts } = data.allContentfulBlog;
  const works = data.allContentfulZulzidanWorks.edges.slice(0, 3);

  const newestPosts = blogPosts.slice(0, 3); // Change the number to the desired amount of newest posts to display
  const isTable = useMediaQuery({ query: "(min-width: 767px)" });
  
  return (
    <Layout location={location}>
      <main className="index-page  px-3 lg:px-10 pt-12 pb-12 ">
        <section className="home flex flex-col gap-4 lg:gap-8">
          <h1 className="text-3xl lg:text-5xl w-10/12">
            <span className="font-bold font-heading ">
              Hi 👋, i am Zulzidan
            </span>
            <br />
            Web developer & Digital Marketer
          </h1>
          <p className="text-lg lg:text-3xl w-10/12 lg:w-9/12">
            Empowering businesses to thrive in the digital landscape through
            innovative web development and strategic digital marketing.
          </p>

          <div className="py-4 lg:pt-10">
            <a
              href="mailto:mail@zulzidan.com"
              className="border border-solid border-gray-950 font-medium font-heading rounded-full px-6 py-3 my-4 text-lg"
            >
              mail@zulzidan.com
            </a>
          </div>
        </section>
        {/* works */}
        <section className="flex flex-col gap-12 py-12 pt-24">
          <div className="flex justify-between font-medium">
            <h3 className="font-heading ">Selected Works</h3>
            <Link to="/works/" className="font-heading">Explore Below</Link>
          </div>
          <div className="flex flex-col gap-12">
            {works.map(({ node }) => (

            
              <Link to={`/works/${node.slug}`} key={node.title}>
               
               <div className="flex md:flex-row flex-col gap-6">
                  <div className="md:w-4/12 w-full ">
                    {/* <ContentfulImage
                      imageDetails={node.images[0].fields}
                      alt={node.title}
                    />            */}
                    <GatsbyImage image={getImage(node.images[0])} alt={node.title} />
                  </div>    
                  <div className="flex flex-col justify-between text-lg w-full">
                    <h3 className="font-heading font-semibold text-2xl">{node.title}</h3>
                   <div className="flex gap-4">
                      <p className="text-gray-800 flex gap-1 items-center text-base"> <Calendar  size={12} /> {node.date}</p>
                      <p className="text-gray-800 flex gap-1 items-center text-base"> <Person  size={12} /> {node.client}</p>
                   </div>
                    <p className="font-body line-clamp-2">{node.description.description}</p>
                  </div>
               </div>
              </Link>
            ))}
          </div>
        </section>
        
        <section className="py-32 flex flex-col md:flex-row gap-8 items-start font-heading font-medium leading-relaxed text-2xl">
          <div className="font-normal hidden md:block w-6/12 text-lg">(001)</div>
          <div className="flex flex-col gap-8 w-full justify-center  items-center md:pr-24">
            <p className="">
              <p className="font-heading font-medium md:hidden">(001)</p>
              As a dedicated Web Developer and Digital Marketer, I specialize in crafting unique digital experiences and driving business growth. My expertise spans across
            </p>
            <p>Whether you are a business looking to enhance your online presence or an agency seeking support, I am here to help you succeed in the digital world.</p>
          </div>
        </section>
        {/* blogs */}
        <section className="flex flex-col pt-12 gap-4">
          <h2 className="font-heading text-2xl font-semibold">Blogs</h2>
          <p className="text-lg">
            I also love to write and share my knowledge about tech.
          </p>
          <div className="flex flex-col md:flex-row ">
            {/* <h3 className="font-heading text-xl font-semibold">
              Newest Blog Posts:
            </h3> */}
            <ul className="flex flex-col pt-4 tracking-normal gap-4">
              {newestPosts.map((post) => (
                <li key={post.slug} className="pt-4">

                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-yellow-600 font-normal text-base flex md:flex-row flex-col gap-8 md:gap-4 "
                  >
                    <GatsbyImage image={getImage(post.featuredMedia)} alt={post.title} />
                    <div className="flex flex-col gap-1 w-10/12">
                      <h3 className="text-2xl font-semibold">{post.title}</h3>
                      {/* <h3 className="text-lg font-semibold">{post.date}</h3> */}
                      <p className="text-lg line-clamp-2">{generateExcerpt(post.content.raw)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
       
        <section className="py-24 pt-32 flex flex-col md:flex-row gap-8 items-start font-heading font-medium leading-relaxed text-2xl">
          <div className="font-normal hidden md:block w-6/12 text-lg">(002)</div>
          <div className="flex flex-col gap-8 w-full justify-center  items-center md:pr-24">
            <p className="">
              <p className="font-medium font-heading md:hidden">(002)</p>
              Ready to elevate your digital presence and drive business growth?
            </p>
            <p> Let’s start the conversation about your web development and digital marketing needs.
              <div className="pt-12">
                <a
                  href="mailto:mail@zulzidan.com"
                  className="border border-solid border-gray-950 rounded-full px-6 text-lg py-3 my-4"
                >
                  mail@zulzidan.com
                </a>
              </div>
            </p>

          </div>
        </section>

      </main>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlog(sort: { createdAt: DESC }) {
      nodes {
        slug
        title
        date(formatString: "DD-MM-YYYY")
        content{
          raw
        }
        featuredMedia {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
     allContentfulZulzidanWorks {
      edges {
        node {
          description {
            description
          }
          date(formatString: "DD-MM-YYYY")
          client
          title
          slug
          images {
              gatsbyImageData(width: 2000) 
              title
          }
        }
      }
    }
  }
`;

export default IndexPage;

export function Head({ location }) {
  return (
    <SEO
      title={"zulzidan, jasa pembuatan web"}
      pathname={location.pathname}
      description={
        " beberapa hal yang menggambarkan zulzidan adalah pembuatan web, jasa pembuatan web di Bone, seorang Digital Marketer serta seorang Web Developer, semoga kita bisa membuat sesuatu yang luar biasa bersama."
      }
    />
  );
}
