module.exports = {
  siteMetadata: {
    title : 'Evans Website'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], 
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    }
  ],
}
