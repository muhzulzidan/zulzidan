import React from "react";
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

  const isBlogPage = location?.location?.pathname?.startsWith("/blog") || false;
  const isBlogPage2 = location?.pathname?.startsWith("/blog") || false;
  const showFooter = paths.includes(location?.location?.pathname) || paths.includes(location?.pathname) || isBlogPage || isBlogPage2;

  return (
    <div className="max-w-screen-xl mx-auto font-body">

      <Header />
      {children}
      {/* {showFooter && <Footer />} */}
      <Footer />
    </div>
  );
};

export default Layout;
