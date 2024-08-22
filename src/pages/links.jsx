import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { RWebShare } from "react-web-share";
import SosialMedia from '../components/sosialMedia'
import Share from "../svg/share.svg"
import { SEO } from '../components/seo';
import LogoFull from '../svg/logoFull.svg'
import "../images/zidan_green.png";
import * as styles from "../style/linksPage.module.scss"

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
    const links = data.allNotion.edges
        .sort((a, b) => a.node.properties.order.value - b.node.properties.order.value)
        .map((node) => {
            console.log(node, "node");
            return (
                <li key={node.node.id}>
                    <a href={node.node.properties.Url.value}>{node.node.title}</a>
                </li>
            );
        });



    return (
        <div className={`max-w-3xl mx-auto ${styles.linksPage}`}>
            <div className={`${styles.topBar}  hidden ${show && 'active'}`}>
                {/* <Link to='/'>Home`</Link> */}
                <RWebShare
                    data={{
                        text: "Like humans, flamingos make friends for life",
                        url: "https://on.natgeo.com/2zHaNup",
                        title: "Flamingos",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button className={styles.share} >
                        <Share />
                    </button>
                </RWebShare>
                <StaticImage src="../images/zidan_green.png" alt="@muhzulzidan, zulzidan" className={styles.meCircle} />

            </div>
            <div className={styles.head}>
                <StaticImage src="../images/zidan_green.png" alt="@muhzulzidan, zulzidan" className={`w-24 h-24 rounded-full mb-6`} />
                <h1>muhzulzidan</h1>
                <p>Membantu pemilik bisnis untuk masuk ke dunia digital dengan digital marketing</p>
            </div>
            <div className={styles.linksDiv}>
                <h2>Jasa yang saya tawarkan</h2>
                {links}
            </div>
            <div className={styles.sosmed}>
                <SosialMedia />
            </div>
            <div className={styles.logoBottom}>
                <h1>
                    <Link to="/">
                        <LogoFull />
                    </Link>
                </h1>
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
                    order {
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