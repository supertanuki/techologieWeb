module.exports = {
  siteMetadata: {
    title: `Techologie`,
    description: `Le podcast qui tente de lier tech et écologie alors que tout les oppose`,
    author: `Coopérateurs et amis de Fairness`,
    siteUrl: `https://techologie.net`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
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
