module.exports = {
  siteMetadata: {
    title: 'Porto',
    author: {
      name: 'GatsbyTemplates',
      summary: 'premium portfolio theme',
    },
    description: 'Porto - portfolio theme for GatsbyJS',
    blogDescription: 'Read about my journey and what made me a professional',
    siteUrl: 'https://porto.gatsbytemplates.io/',
    social: {
      twitter: 'gatsbytemplates',
      instagram: ' ',
      behance: ' ',
      github: ' ',
      linkedin: ' ',
    },
    // Defining menu links to your pages:
    menu: [
      {
        name: 'portfolio',
        url: '/#portfolio',
      },
      {
        name: 'blog',
        url: '/blog',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/blog',
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/portfolio',
        name: 'portfolio',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/assets',
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Porto Theme Demo',
        short_name: 'Porto',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsbytemplates-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
  ],
};
