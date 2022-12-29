module.exports = {
  siteMetadata: {
    title: "zulzidan",
    siteUrl: "https://zulzidan.com"
  },
  plugins: [
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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
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
