import * as React from "react";
// import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import { graphql } from "gatsby";
import Layout  from "../components/layout";

import Html from "../svg/html.svg";
import Css from "../svg/css.svg";
import SvgReact from "../svg/rasu.svg";
import Gatsby from "../svg/gatsby.svg";
import Sass from "../svg/sass.svg";
import WorksCarousel from "../components/Works";

// import Link from gatsby

import { Link } from "gatsby";
import { SEO } from "../components/seo";

const IndexPage = ({ data, location }) => {


  const isTable = useMediaQuery({ query: "(min-width: 767px)" });
  
  return (
    <Layout location={location}>

      <main className="index-page">
        <div className="home">
          <div className="black-div" />
          <div className="content">
            <div>
              <h1>
                my name is <br />
                <span>Muhammad Zulzidan M </span>
                <br /> Digital Marketer, Web Developer, and a weebs.
              </h1>
              <div className="icons-svg">
                <Html />
                <Css />
                <Sass />
                <SvgReact />
                <Gatsby />
              </div>
              <div className="button-container">
                <a
                  href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20saya"
                  // to="/contacts/"
                  className="contact-button"
                >
                  Contact
                </a>
                <StaticImage
                  src="../images/shadow.png"
                  alt="shadow"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <StaticImage
            src="../images/MeBlackbg.png"
            alt="muhzulzidan"
            className="img"
          />
          {/* {isLaptop ? (
            <StaticImage
              src="../images/me.png"
              alt="muhzulzidan"
              className="img imgLaptop"
            />
          ) : !isTable ? (
            <StaticImage
              src="../images/me.png"
              alt="muhzulzidan"
              className="img"
            />
          ) : (
            <StaticImage
              src="../images/me-tablet.png"
              alt="muhzulzidan"
              className="img imgTablet"
            />
          )} */}
        </div>

        <div className="worksPages">
          <h2>Works</h2>
          <WorksCarousel
            className="WorksCarousel"
            device={!isTable ? true : false}
          />
        </div>
        <div className="worksPages blogs">
          <h2>Blogs</h2>
          <p>
            i also love to write & share my knowledge about my tech.
          </p>
          <div className="newest">
            <p>Newest Blog Posts :</p>
            <ul className="post" >
             <li>
               <a href="https://muhzulzidan.com/teknologi/">muhzulzidan.com/teknologi</a>
             </li>
            </ul>
            

          </div>
        </div>
      </main>
    </Layout>
  );
};




export default IndexPage;

export function Head({location}) {
  return (
    <SEO title={"zulzidan, jasa pembuatan web"} pathname={location.pathname} description={" beberapa hal yang menggambarkan zulzidan adalah pembuatan web, jasa pembuatan web di Bone, seorang Digital Marketer serta seorang Web Developer, semoga kita bisa membuat sesuatu yang luar biasa bersama."} />
  )
}
