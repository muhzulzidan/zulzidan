import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import Html from "../svg/html.svg"
import Css from "../svg/css.svg"
import SvgReact from "../svg/rasu.svg"
import Gatsby from "../svg/gatsby.svg"
import Sass from "../svg/sass.svg"


const IndexPage = () => {
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
              <button className="contact-button">
                Contact Me
              </button>
              <StaticImage src="../images/shadow.png" className="shadow" />
            </div>
          </div>
        </div>
        < StaticImage src="../images/me.png" alt="muhzulzidan" className="img" />

      </main>
    </Layout>
  )
}

export default IndexPage
