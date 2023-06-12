import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import { SEO } from '../components/seo';

const About = ({ location }) => {
    return (
        <Layout location={location}>
            <div className="about">
                <div className="left" >
                    <h1>
                        I build fast websites.
                    </h1>

                    <p>
                        A bachelor's degree in Informatics Engineering from IAIN Bone. With experience since 2019, I have worked as a skilled Front-End Developer specializing in HTML, CSS, SCSS, GatsbyJS, ReactJS, TailwindCSS, Docusaurus, CockpitCMS, and ContentfulCMS. As a freelancer on platforms like Fiverr, I have successfully completed projects such as the development of muhzulzidan.com, a blog using GatsbyJS, and islamtshirt.com, a static e-commerce website utilizing GatsbyJS and Shopify for checkout functionality. I am currently pursuing further skill enhancement through a Full-Stack Web Developer bootcamp program, aiming to secure a full-time opportunity in Full-Stack Web Development.
                        <br />
                        <br />
                        If you have an interesting project, feel free to <Link style={{
                            color: "#FCD65E"
                        }} to="/contacts/">contact me</Link>.
                    </p>
                </div>
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
