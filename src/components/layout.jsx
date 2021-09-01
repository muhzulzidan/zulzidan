import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import Header from "./header"
import Footer from "./footer"

const Layout = ({children, location}) => {
    // console.log(location.pathname)

    // check if the pathname from an array of paths
    // if it is in the array, then display the footer 
    // else, don't display the footer
    const paths = ['/', '/about', '/about/', '/blogs', '/blogs/' , '/works', '/works/' ]
    // check if the location.location is not empty
    // const showFooter = paths.includes(location.location.pathname)
    // if location is empty, then use location.location
   const showFooter = location.location ? paths.includes(location.location.pathname) : paths.includes(location.pathname)
    
    const {
        wp: { seo },
    } = useStaticQuery(graphql`
        query SiteInfoQuery {
            wp {
                seo {
                    contentTypes {
                        post {
                            title
                            schemaType
                            metaRobotsNoindex
                            metaDesc
                        }
                        page {
                            metaDesc
                            metaRobotsNoindex
                            schemaType
                            title
                        }
                    }
                    webmaster {
                        googleVerify
                        yandexVerify
                        msVerify
                        baiduVerify
                    }
                    schema {
                        companyName
                        personName
                        companyOrPerson
                        wordpressSiteName
                        siteUrl
                        siteName
                        inLanguage
                        logo {
                            sourceUrl
                            mediaItemUrl
                            altText
                        }
                    }
                    social {
                        facebook {
                            url
                            defaultImage {
                                sourceUrl
                                mediaItemUrl
                            }
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        mySpace {
                            url
                        }
                        pinterest {
                            url
                            metaTag
                        }
                        twitter {
                            username
                        }
                        wikipedia {
                            url
                        }
                        youTube {
                            url
                        }
                    }
                }
            }
        }
    `);

    
    return (
         <SEOContext.Provider value={{ global: seo }}>
            <div className="layout" >
                <Header />
                {children}
                {showFooter && <Footer />}
            </div>
        </SEOContext.Provider>
        
    )
}

export default Layout
