import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BlogListTemplate from '../display/blog-list-template';

const BlogList = ({ data, pageContext }) => (
  <Layout>
    <SEO title="All posts" />
    <BlogListTemplate
      posts={data.allSitePost.nodes}
      subtitle={data.site.siteMetadata.blogDescription}
      pageContext={pageContext}
    />
  </Layout>
);

export default BlogList;

export const blogListQuery = graphql`query ($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
      blogDescription
    }
  }
  allSitePost(
    sort: {fields: [date], order: DESC}
    limit: $limit
    skip: $skip
    filter: {posttype: {eq: "blog"}}
  ) {
    nodes {
      excerpt
      featured
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      description
      image {
        childImageSharp {
          gatsbyImageData(width: 900, quality: 97, layout: CONSTRAINED, aspectRatio: 1.87)
        }
      }
    }
  }
}
`;
