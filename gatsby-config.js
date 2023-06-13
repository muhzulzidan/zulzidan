
module.exports = {
  siteMetadata: {
    title: "zulzidan",
    siteUrl: "https://zulzidan.com",
    description: "Layanan pembuatan website profesional yang disesuaikan dengan kebutuhan Anda. Dapatkan website yang menarik dan fungsional yang mewakili bisnis Anda.",
    author: "zulzidan",
    twitterUsername: "@muhzulzidan",
    image: "static/meCircle.png",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7txs81scyd71`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "PbLKQETwvix25xdvs-ocAYv-QxGYDwkVKOf0kvoDPgo",
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `https://cockpit.muhzulzidan.my.id/graphql`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require('tailwindcss')],
      },
    },
    // 'gatsby-plugin-next-seo',
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-Z20EKSD90B", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,

        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          origin: "zulzidan.com",

        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "276780816",
    //   },
    // },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_6zX9QHNfNj7z684P9C7Gqt5JqEDFLFRRHH0Q83Cxzi3`,
        databaseId: `2ed3fcf4dd13409089a7ed229b988c38`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://zulzidan.us21.list-manage.com/subscribe/post?u=3cb9f7fda4f96738bd0b52b16&amp;id=d4e0997cbe&amp;f_id=00b6d7e6f0', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    'gatsby-plugin-postcss',
  ],
};
