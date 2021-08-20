import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"

import Layout from "../components/layout"

import Html from "../svg/html.svg"
import Css from "../svg/css.svg"
import SvgReact from "../svg/rasu.svg"
import Gatsby from "../svg/gatsby.svg"
import Sass from "../svg/sass.svg"

// import Link from gatsby

import { Link } from "gatsby"

const IndexPage = () => {

  const isTable = useMediaQuery({ query: '(min-width: 767px)' })

  return (
    <Layout>
      <title>zulzidan</title>
      <main className="index-page">
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
                Contact Me
              </Link>
              <StaticImage src="../images/shadow.png" className="shadow" />
            </div>
          </div>
        </div>
        {!isTable ? < StaticImage src="../images/me.png" alt="muhzulzidan" className="img" /> : <StaticImage src="../images/me-tablet.png" alt="muhzulzidan" className="img imgTablet" /> }
        

      </main>
    </Layout>
  )
}

export default IndexPage
