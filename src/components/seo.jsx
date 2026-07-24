import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const toAbsoluteUrl = (siteUrl, value) => {
  if (!value) return siteUrl
  if (/^https?:\/\//i.test(value)) return value

  const cleanValue = value.replace(/^static\//, "").replace(/^\/+/, "")
  return `${siteUrl}/${cleanValue}`
}

export const SEO = ({ title, description, pathname, image: imageOverride, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const pageTitle = title || defaultTitle
  const pageDescription = description || defaultDescription
  const pageUrl = toAbsoluteUrl(siteUrl, pathname || "/")
  const pageImage = toAbsoluteUrl(siteUrl, imageOverride || image)

  const seo = {
    title: pageTitle,
    description: pageDescription,
    image: pageImage,
    url: pageUrl,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zulzidan" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {children}
    </>
  )
}
