import React, { Suspense } from "react"
// import { useMediaQuery } from "react-responsive";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage,  } from "gatsby-plugin-image"
import { Calendar, Person } from "react-bootstrap-icons"


import generateExcerpt from '../utils/generateExcerpt';
// import ContentfulImage from "../components/ContentfulImage"
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const HomeSection = React.lazy(() => import('../components/home/HomeSection'));
const WorksSection = React.lazy(() => import('../components/home/WorksSection'));
const DigitalMarketingSection = React.lazy(() => import('../components/home/DigitalMarketingSection'));
const BlogsSection = React.lazy(() => import('../components/home/BlogsSection'));


const IndexPage = ({ data, location }) => {
  const { nodes: blogPosts } = data.allContentfulBlog;
  const works = data.allContentfulZulzidanWorks.edges.slice(0, 4);

  const newestPosts = blogPosts.slice(0, 3); 
  
  return (
    <Layout location={location}>
      <main className="px-3 lg:px-10 py-12 space-y-16 ">
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
              href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20buat%20website"
              className="border border-solid border-gray-950 font-medium font-heading rounded-full px-6 py-3 my-4 text-lg hover:bg-indigo-900 hover:border-none hover:text-white cursor-pointer"
            >
              Chat on Whatsapp
            </a>
          </div>
        </section>
        {/* works */}
        <Suspense fallback={<div className="h-[1690px]">Loading...</div>}>
          <WorksSection works={works} />
        </Suspense>
        <Suspense fallback={<div className="h-[750px]">Loading...</div>}>
          <DigitalMarketingSection />
        </Suspense>
        {/* blogs */}
        <Suspense fallback={<div className="h-[1270px]">Loading...</div>}>
          <BlogsSection newestPosts={newestPosts} />
        </Suspense>
       
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
                  href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20buat%20website"
                  className="border border-solid border-gray-950 rounded-full px-6 text-lg py-3 my-4 hover:bg-indigo-900 hover:border-none hover:text-white cursor-pointer"
                >
                  Chat on Whatsapp
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
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
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
