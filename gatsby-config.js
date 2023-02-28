/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Miles Kim`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
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
        name: `art-projects`,
        path: `${__dirname}/projects/art`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `design-projects`,
        path: `${__dirname}/projects/design`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `writing-projects`,
        path: `${__dirname}/projects/writing`,
      },
    },
  ],
}
