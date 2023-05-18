import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RWebShare } from "react-web-share";
import SosialMedia from '../components/sosialMedia'
import Share from "../svg/share.svg"
import { SEO } from '../components/seo';
const Links = ({ data }) => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    const links = data.allNotion.edges.map((node) =>
        <li key={node.node.id}>
            <a href={node.node.properties.Url.value}>{node.node.title}</a>
        </li>
    );
    return (
        <div className='linksPage'>
            <div className={`topBar hidden ${show && 'active'}`}>
                {/* <Link to='/'>Home`</Link> */}
                <RWebShare
                    data={{
                        text: "Like humans, flamingos make friends for life",
                        url: "https://on.natgeo.com/2zHaNup",
                        title: "Flamingos",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button className='share' >
                        <Share/>
                    </button>
                </RWebShare>
                <StaticImage src="../images/meRed.png" alt="@muhzulzidan, zulzidan" className="meCircle" />

            </div>
            <div className='head'>
                <StaticImage src="../images/meRed.png" alt="@muhzulzidan, zulzidan" className="meCircle" />
                <h1>muhzulzidan</h1>
                <p>Membantu pemilik bisnis untuk masuk ke dunia digital dengan digital marketing</p>
            </div>
            <div className='linksDiv'>
                <h2>Jasa yang saya tawarkan</h2>
                {links}
            </div>
            <div className='sosmed'>
                <SosialMedia />
            </div>
            <div className="logoBottom">
                <h1><Link to="/">zulzidan.com</Link></h1>
            </div>
        </div>
    )
}

export const query = graphql`
  query HomePageQuery {
    allNotion {
        edges {
            node {
                id
                title
                properties {
                    Url {
                        value
                    }
                }
            }
        }
    }
  }
`

export default Links


export function Head({ location }) {
    return (
        <SEO title={"zulzidan, jasa pembuatan web, Digital Marketer, Web Developer, and a weebs."} pathname={location.pathname} />
    )
}