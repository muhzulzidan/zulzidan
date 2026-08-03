import { SITE } from "../lib/site"

export const useSiteMetadata = () => ({
  title: SITE.title,
  description: SITE.description,
  image: SITE.image,
  siteUrl: SITE.url,
  twitterUsername: SITE.twitter,
})
