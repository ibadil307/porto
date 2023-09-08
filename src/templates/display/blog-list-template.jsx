import React from 'react';
import tw from 'twin.macro';

import { MainTitle, Subtitle } from '../../components/title';
import BlogCard, { FeaturedPost } from '../../components/blog-card';
import Pagination from '../../components/pagination';
import Container from '../../components/container';

export const BlogListing = tw.div`
  grid md:grid-cols-3 gap-8 pt-8 md:pt-16
`;

export const BlogSection = tw(Container)`
  flex flex-col font-sans py-14 md:py-28
`;

const BlogListTemplate = ({
  posts, title = 'Blog', subtitle = null, pageContext,
}) => {
  const blogPosts = posts.filter((p) => !p.featured);
  const featuredPost = posts.filter((p) => p.featured)[0];
  return (
    <BlogSection>
      <div>
        <MainTitle>{title}</MainTitle>
        {subtitle && (
          <Subtitle>{subtitle}</Subtitle>
        )}
      </div>
      {!blogPosts && (
      <Subtitle>
        No blog posts found. Add mdx posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </Subtitle>
      )}
      {featuredPost && (
      <FeaturedPost>
        <BlogCard
          key={featuredPost.slug}
          featured
          title={featuredPost.title}
          description={featuredPost.description}
          image={featuredPost.image.childImageSharp.gatsbyImageData}
          link={`/blog${featuredPost.slug}`}
        />
      </FeaturedPost>
      )}
      <BlogListing>
        {blogPosts.length > 0 && blogPosts.map((post) => {
          const {
            title: postTitle, description, image, slug,
          } = post;
          return (
            <BlogCard
              key={slug}
              link={`/blog${slug}`}
              title={postTitle}
              description={description}
              image={image.childImageSharp.gatsbyImageData}
            />
          );
        })}
      </BlogListing>
      <Pagination pageContext={pageContext} />
    </BlogSection>
  );
};

export default BlogListTemplate;
