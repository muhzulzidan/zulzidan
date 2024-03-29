import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="preload"
          href="/questrical/questrial-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="questrialFont"
        />
        <link
          rel="preload"
          href="/poppins/poppins-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="poppins400NormalFont"
        />
      
        <link
          rel="preload"
          href="/poppins/poppins-latin-500-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="poppins500NormalFont"
        />
        
        <link
          rel="preload"
          href="/poppins/poppins-latin-600-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="poppins600NormalFont"
        />
        
        <link
          rel="preload"
          href="/poppins/poppins-latin-700-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="poppins700NormalFont"
        />
       
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        
      </body>
     
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
