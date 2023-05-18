import React from "react";
// import { GatsbySeo } from "gatsby-plugin-next-seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { SEO } from "./seo";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ title, pathname, children, location }) => {
  const paths = [
    "/",
    "/about",
    "/about/",
    "/blogs",
    "/blogs/",
    "/works",
    "/works/",
  ];
  const showFooter = location.location
    ? paths.includes(location.location.pathname)
    : paths.includes(location.pathname);

  const { title: defaultTitle, siteUrl } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    // description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  };
  return (
    <div className="layout">
      {console.log(title)}
      {/* <SEO title={title} pathname={pathname}  /> */}
      {/* <GatsbySeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      /> */}
      <Header />
      {children}
      {showFooter && <Footer />}
    </div>
  );
};



export default Layout;
