import React from 'react';
import { Link } from "gatsby";
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const About = ({ location }) => {
    return (
        <Layout location={location}>
            <SEO title={"About Zulzidan - Web Developer & Digital Marketer"} pathname={location.pathname} />
            <div className="about px-4 md:p-12 py-12">
                <div className="header-section mb-8">
                    <h1 className="text-4xl font-bold mb-4">I build fast websites.</h1>
                    <p className="text-lg">
                        Diving into the digital world since 2019, I've honed my skills as a Front-End Developer, specializing in modern frameworks and CMSs. From educational platforms to e-commerce, my portfolio speaks volumes of my commitment to web development.
                    </p>
                </div>
                
                <div className="experience-section mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Experience</h2>
                    <p className="text-lg">
                        Having offered freelance services on platforms like Fiverr, I've transformed designs into responsive realities. My tenure at Institut Indonesia as a Full-Stack Developer added another feather to my cap, strengthening my skill set and broadening my horizons.
                    </p>
                </div>
                <div className="projects-section mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Projects</h2>
                    <p className="text-lg">
                        My key projects include the development of <i>muhzulzidan.com</i>, a GatsbyJS-powered blog, and <i>islamtshirt.com</i>, an e-commerce website leveraging the strengths of GatsbyJS and Shopify. Each project has been a learning experience, pushing me to explore and adapt.
                    </p>
                </div>
                <div className="background-section mb-8">
                    <p className="text-lg mb-4">
                        A bachelor's degree in IAIN Bone. With experience since 2019, I've specialized in HTML, CSS, SCSS, GatsbyJS, ReactJS, TailwindCSS, Docusaurus, CockpitCMS, and ContentfulCMS. I've played pivotal roles in the development of muhzulzidan.com, a GatsbyJS blog, and islamtshirt.com, a static e-commerce website integrating GatsbyJS and Shopify. Currently, I'm upskilling through a Full-Stack Web Developer bootcamp, aiming for a profound opportunity in Full-Stack Web Development.
                    </p>
                </div>
                <div className="contact-section">
                    <p className="text-lg">
                        Interested in collaborating or learning more about my work? Feel free to <Link className="underline text-blue-500 hover:text-blue-700" to="/contacts/">reach out</Link>.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About;
