import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"

import Layout from "../components/layout"

import Html from "../svg/html.svg"
import Css from "../svg/css.svg"
import SvgReact from "../svg/rasu.svg"
import Gatsby from "../svg/gatsby.svg"
import Sass from "../svg/sass.svg"
import WorksCarousel from "../components/Works"

// import Link from gatsby

import { Link } from "gatsby"

const IndexPage = (location) => {

  const isTable = useMediaQuery({ query: '(min-width: 767px)' })
  const isLaptop = useMediaQuery({ query: '(min-width: 992px)' })

  return (
    <Layout location={location}>
      <title>zulzidan</title>
      <main className="index-page">
        <div className="home">
          <div className="black-div" />
          <div className="content">
            <div>
              <h1>
                my name is <br /> 
                <span>Muhammad Zulzidan M </span>
                <br/> an indonesian web developer
              </h1>
              <div className="icons-svg">
                <Html />
                <Css />
                <Sass />
                <SvgReact />
                <Gatsby />
              </div>
              <div className="button-container">
                <Link to="/contacts/" className="contact-button">
                  Contact
                </Link>
                <StaticImage src="../images/shadow.png" alt="shadow" className="shadow" />
              </div>
            </div>
          </div>
          
          {isLaptop ? (<StaticImage src="../images/me.png" alt="muhzulzidan" className="img imgLaptop" />) : (!isTable ? < StaticImage src="../images/me.png" alt="muhzulzidan" className="img" /> : <StaticImage src="../images/me-tablet.png" alt="muhzulzidan" className="img imgTablet" /> )
          }
        </div>


        <div className="worksPages">
          <h2>Works</h2>
          <WorksCarousel className="WorksCarousel" />
        </div>
        <div className="worksPages blogs">
          <h2>Blogs</h2>
          <p>i also love to write to share my knowladge about my own industry.</p>
          <div className="newest">
            <p>Newest Blog Posts :</p>
            <ul>
              <li>peletakan batu pertama mesjid alfalah </li>
              <li>Agnostik, Apakah Menentang Fitrah Bertuhan Manusia? </li>
              <li>Memaknai Kematian Dari Sudut Pandang Luffy (One Piece) </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
