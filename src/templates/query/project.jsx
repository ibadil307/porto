import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PostTemplate from '../display/post-template';

const ProjectPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.post.title}
      description={data.post.description || data.post.excerpt}
    />
    <PostTemplate
      post={data.post}
      previous={data.previous}
      next={data.next}
      postType="project"
    />
  </Layout>
);

export default ProjectPostTemplate;

export const projectQuery = graphql`
  query ProjectPostBySlug(
    $previousPostId: String
    $nextPostId: String
    $slug: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    post: sitePost(slug: { eq: $slug }) {
      id
      excerpt(pruneLength: 160)
      body
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
    previous: sitePost(id: { eq: $previousPostId }) {
      title
      slug
    }
    next: sitePost(id: { eq: $nextPostId }) {
      title
      slug
    }
  }
`;
