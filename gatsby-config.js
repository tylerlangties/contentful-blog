module.exports = {
  siteMetadata: {
    title: 'Posts',
    desc: 'A new Blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "f2lkrq61wcti",
        accessToken: "718efc0cdab776d0cfb05ff788bd10f564cccf5aee5673b8164713b922476bb8",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-page-transitions',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

//pathPrefix: "/gatsby-blog",
