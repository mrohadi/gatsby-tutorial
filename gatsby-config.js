module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Quriny",
    description: "This description is intended for testing pusrposes only!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "61d2f435c82c976b71c48a07",
        tawkKey: "b3a7d4d3e84f2b6d5dae28a2daf680abfdeb7e7d",
        // get this from the tawk script widget
      },
    },
  ],
};
