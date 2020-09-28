/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito Sans`,
            subsets: [`latin`],
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
  ],
}
