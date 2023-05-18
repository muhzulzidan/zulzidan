import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import {SEO} from '../components/seo';
const About = (location) => {
    return (
        <Layout location={location}>
            <div className="about">
                <div className="left" >
                    <h1>
                        I build a fast website.
                    </h1>


                    <p>
                        born and live in Indonesia.
                        <br />
                        <br />
                        I strive to create elegant solutions delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.
                        <br />
                        <br />
                        I’ve worked with small projects, and ready to take another level.
                        <br />
                        <br />
                        I also occasionally give make content for my personal branding as a web developer in indonesian language.
                        <br />
                        <br />
                        Have an interesting project? <Link style={{
                            color: "#FCD65E"
                        }} to="/contacts/">Let's talk.</Link>
                    </p>
                </div>
                {/* <div className="right w-1/2 ml-8 relative -mr-4 ">
                    <StaticImage src="../images/aboutImage.png" alt="zulzdn" className="img absolute top-[10vh]" />
                </div> */}
            </div>
        </Layout>
    )
}

export default About



export function Head({ location }) {
    return (
        <SEO title={"zulzidan, jasa pembuatan web, Digital Marketer, Web Developer, and a weebs."} pathname={location.pathname} />
    )
}