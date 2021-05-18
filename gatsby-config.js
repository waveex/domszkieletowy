module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  pathPrefix: "/domszkieletowy",
  siteMetadata: {
    title: "Dom szkieletowy",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "ua-123123123",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
