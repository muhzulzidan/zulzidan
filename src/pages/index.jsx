import * as React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import generateExcerpt from '../utils/generateExcerpt';

import WorksCarousel from "../components/Works";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage = ({ data, location }) => {
  const { nodes: blogPosts } = data.allContentfulBlog;
  const newestPosts = blogPosts.slice(0, 3); // Change the number to the desired amount of newest posts to display

  const isTable = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    <Layout location={location}>
      <main className="index-page  px-3 pt-12 pb-12">
        <section className="home flex flex-col gap-4">
          <h1 className="text-3xl w-10/12">
            <span className="font-bold font-heading ">
              Hi 👋, i am Zulzidan
            </span>
            <br />
            Web developer & Digital Marketer
          </h1>
          <p className="text-lg w-10/12">
            Empowering businesses to thrive in the digital landscape through
            innovative web development and strategic digital marketing.
          </p>

          <div className="py-4">
            <a
              href="mailto:mail@zulzidan.com"
              className="border border-solid border-gray-950 font-medium font-heading rounded-full px-6 py-3 my-4 text-lg"
            >
              mail@zulzidan.com
            </a>
          </div>
        </section>
        {/* works */}
        <section className="flex flex-col gap-4 py-12 pt-24">
          <div className="flex justify-between font-bold">
            <h3 className="font-body ">My Works</h3>
            <p className="font-body">Learn More</p>
          </div>
          <StaticImage className="rounded-xl " src="../images/works/islamtshirt_react_projects.png" alt="works using reactjs and shopify" quality={100} />
          <div className="flex justify-between font-bold">
            <h3 className="font-body ">Islamtshirt.com</h3>
            <p className="font-body">(2020)</p>
          </div>
        </section>

        <section className="py-12 flex flex-col gap-8 font-heading font-medium leading-relaxed text-2xl">

          <p className="">
            <span className="font-normal">(001)</span>
            <br />
            As a dedicated Web Developer and Digital Marketer, I specialize in crafting unique digital experiences and driving business growth. My expertise spans across
          </p>
          <p>Whether you are a business looking to enhance your online presence or an agency seeking support, I am here to help you succeed in the digital world.</p>
        </section>
        {/* blogs */}
        <section className="flex flex-col pt-12 gap-4">
          <h2 className="font-heading text-2xl font-semibold">Blogs</h2>
          <p className="">
            I also love to write and share my knowledge about tech.
          </p>
          <div className="flex flex-col md:flex-row ">
            <h3 className="font-heading text-xl font-semibold">
              Newest Blog Posts:
            </h3>
            <ul className="flex flex-col md:pl-10 pt-4 tracking-normal gap-4">
              {newestPosts.map((post) => (
                <li key={post.slug} className="">

                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-yellow-600 font-normal text-base flex  gap-2 "
                  >
                    <GatsbyImage image={getImage(post.featuredMedia)} alt={post.title} />
                    <div className="flex flex-col gap-1 w-10/12">
                      <h3 className="text-sm font-semibold">{post.title}</h3>
                      <p className="text-xs line-clamp-2">{generateExcerpt(post.content.raw)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="py-12 flex flex-col gap-8 font-heading font-medium leading-relaxed text-2xl">
          <p>
            <span className="font-normal">(002)</span>
            <br />
            Ready to elevate your digital presence and drive business growth?</p>
          <p> Let’s start the conversation about your web development and digital marketing needs.</p>
          <div className="">
            <a
              href="mailto:mail@zulzidan.com"
              className="border border-solid border-gray-950 rounded-full px-6 text-lg py-3 my-4"
            >
              mail@zulzidan.com
            </a>
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
