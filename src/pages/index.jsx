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
  const works = data.allContentfulZulzidanWorks.edges.slice(0, 4);

  const newestPosts = blogPosts.slice(0, 3); // Change the number to the desired amount of newest posts to display
  const isTable = useMediaQuery({ query: "(min-width: 767px)" });
  
  return (
    <Layout location={location}>
      <main className="px-3 lg:px-10 py-12 space-y-16">
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
        <section className="space-y-8">
          <div className="flex justify-between items-center font-medium">
            <h3 className="text-2xl font-semibold">Selected Works</h3>
            <Link to="/works/" className="text-lg hover:text-indigo-600 transition duration-200">Explore Below</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {works.map(({ node }) => (
              <Link to={`/works/${node.slug}`} key={node.title} className="group hover:bg-gray-200 p-5 rounded-lg transition ease-in-out duration-200 transform hover:scale-105 shadow-lg">
                {/* {console.log(node.images)} */}
                <GatsbyImage image={getImage(node.images[0])} alt={node.title} className="mb-4 rounded-lg shadow-md" />
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600">{node.title}</h3>
                <div className="flex space-x-4 mb-2">
                  <p className="text-gray-600 flex items-center"> <Calendar size={16} className="mr-1" /> {node.date}</p>
                  <p className="text-gray-600 flex items-center"> <Person size={16} className="mr-1" /> {node.client}</p>
                </div>
                <p className="text-gray-700 line-clamp-2">{node.description.description}</p>
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
                    className="hover:text-indigo-600 font-normal text-base flex md:flex-row flex-col gap-8 md:gap-4 "
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
