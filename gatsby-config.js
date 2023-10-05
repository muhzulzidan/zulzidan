
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
    // `gatsby-plugin-preact`,
    `gatsby-plugin-minify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7txs81scyd71`,
        accessToken: "PbLKQETwvix25xdvs-ocAYv-QxGYDwkVKOf0kvoDPgo",
        // downloadLocal: true,
      },
    },
   
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
          "G-Z20EKSD90B", 
          "3991895352",
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

    // {
    //   /* Include plugin */
    //   resolve: "gatsby-omni-font-loader",

    //   /* Plugin options */
    //   options: {

    //     /* Font loading mode */
    //     mode: "defer",

    //     /* Preconnect URL-s. This example is for Google Fonts */
    //     preconnect: ["https://fonts.gstatic.com"],

    //     /* Web fonts. File link should point to font CSS file. */
    //     web: [{
    //       /* Exact name of the font as defied in @font-face CSS rule */
    //       name: "Questrial",
    //       /* URL to the font CSS file with @font-face definition */
    //       file: "https://fonts.googleapis.com/css2?family=Questrial&display=swap",
    //     },
    //     ],
    //   },
    // },
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
        name: "zulzidan",
        short_name: "zulzidan",
        start_url: "/",
        background_color: "#f1f1f1",
        theme_color: "#000",
        icon: "static/logo.png",
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
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
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    'gatsby-plugin-brotli', 
    'gatsby-plugin-minify-html'
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     ignore: ['/linksPage.module.scss', '/menu.module.scss' ], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       // safelist: ['safelist'], // Don't remove this selector
    //     },
    //     // More options defined here https://purgecss.com/configuration.html#options
    //   },
    // },
  ],
};
