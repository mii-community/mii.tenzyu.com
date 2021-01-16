module.exports = {
  siteMetadata: {
    title: "mii.tenzyu.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
