module.exports = {
  siteMetadata: {
    title: 'Kyle Zsembery',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kyle Zsembery Blog',
        short_name: 'Kyle Zsembery',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/basic-brain-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-less',
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
  ],
}