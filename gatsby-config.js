module.exports = {
  siteMetadata: {
    title: `Techologie`,
    description: `Le podcast qui tente de lier tech et écologie alors que tout les oppose`,
    author: `Fairness`,
    siteUrl: `https://techologie.net`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Techologie`,
        short_name: `Techologie`,
        start_url: `/`,
        background_color: `#ddf7ee`,
        theme_color: `#ddf7ee`,
        display: `minimal-ui`,
        icon: `src/images/icons/apple-touch-icon.png`,
      },
    },
  ],
}
