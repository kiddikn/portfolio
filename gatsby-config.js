module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `kiddikn portfolio`,
    subTitle: 'IT × LIFESAVING × 楽笑',
    author: `赤田樹皇 / Juo Akata`,
    description: `kiddikn portfolio`,
    siteUrl: `https://kiddikn.github.io/portfolio/`,
    socialLinks: [
      {
        style: 'brands',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/kiddikn',
      },
      {
        style: 'brands',
        icon: 'fa-twitter',
        name: 'Twitter',
        url: 'https://twitter.com/kiddikn',
      },
      {
        style: 'brands',
        icon: 'fa-facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/juo.akata',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ここに記入`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kiddikn portfolio`,
        short_name: `kiddikn`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#910503`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
