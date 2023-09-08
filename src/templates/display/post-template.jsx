import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import tw, { styled } from 'twin.macro';

import Container from '../../components/container';
import TableOfContents from '../../components/table-of-contents';

export const PostTitle = tw.h1`font-sans text-5xl font-semibold pb-8 text-stone-800`;

export const PostDate = tw.p`font-sans text-sm text-stone-500 pb-4`;

export const StyledArticle = styled.article`
  ${tw`pt-12 font-sans xl:pl-24 max-w-5xl`}
`;

export const PostNavigation = tw.div`
  flex py-8 w-full font-sans xl:px-24
`;

export const PostNavigationButtonContainer = tw(Link)`
  w-full border-solid border border-stone-300 rounded-lg text-center py-6 text-stone-800
  flex flex-col odd:mr-5 even:ml-5 no-underline hover:opacity-50 duration-300
`;

export const PostNavigationDirection = tw.p`
  font-light text-sm text-stone-800
`;

export const PostNavigationTitle = tw.h4`
  text-xl text-stone-800 mt-3
`;

export const PostImageContainer = tw.div`flex xl:px-24`;

export const PostImage = tw(GatsbyImage)`
  w-full mx-auto max-w-screen-2xl rounded-2xl
`;

export const PostContainer = tw.div`flex w-full justify-between flex-col-reverse md:flex-row`;

export const PostContentsContainer = tw.div`relative pl-8 font-sans xl:pr-24`;

export const PostNavigationButton = ({
  children, rel, label, ...props
}) => (
  <PostNavigationButtonContainer {...props}>
    <PostNavigationDirection>{rel === 'next' ? `Next ${label}` : `Previous ${label}`}</PostNavigationDirection>
    <PostNavigationTitle>{children}</PostNavigationTitle>
  </PostNavigationButtonContainer>
);

const PostTemplate = ({
  post, previous = null, next = null, postType,
}) => {
  const navButtonLabel = postType === 'blog' ? 'Post' : 'Project';
  const postTitle = post.title;
  return (
    <Container>
      <header tw="xl:px-24 pt-16 xl:pt-32">
        <PostTitle itemProp="headline">{postTitle}</PostTitle>
        <PostDate>{post.date}</PostDate>
      </header>
      <PostImageContainer>
        {post.image
          && (
          <PostImage
            image={getImage(post.image.childImageSharp.gatsbyImageData)}
            alt={postTitle}
          />
          )}
      </PostImageContainer>
      <PostContainer>
        <StyledArticle
          tw="prose prose-stone 2xl:prose-2xl"
          itemScope
          itemType="http://schema.org/Article"
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledArticle>
        <PostContentsContainer>
          {post.tableOfContents?.items?.length > 0 && (
            <TableOfContents items={post.tableOfContents.items} />)}
        </PostContentsContainer>
      </PostContainer>
      <PostNavigation>
        {previous && (<PostNavigationButton to={`/${postType}${previous.slug}`} rel="prev" label={navButtonLabel}>{previous.title}</PostNavigationButton>)}
        {next && (<PostNavigationButton to={`/${postType}${next.slug}`} rel="next" label={navButtonLabel}>{next.title}</PostNavigationButton>)}
      </PostNavigation>
    </Container>
  );
};

export default PostTemplate;
