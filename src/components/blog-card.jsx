/* eslint-disable no-unneeded-ternary */
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import ReadMore from './readmore-button';
import useWindowSize from '../utils/use-window-size';

export const FeaturedPost = tw.div`pt-8`;

export const Card = styled.div`
  ${tw`flex w-full no-underline duration-300`}
  flex-flow: ${({ featured }) => (featured ? 'row' : 'column')};
`;

export const StyledImage = tw(GatsbyImage)`rounded-2xl`;

export const FeaturedImage = tw(StyledImage)`w-7/12 mr-12`;

export const BlogCardTitle = tw.h3`text-xl lg:text-2xl text-stone-800 font-bold m-0`;

export const BlogCardDescription = tw.p`text-xl lg:text-2xl text-stone-800 font-normal mt-2 mb-0`;

const BlogCard = ({
  title, description, image, link, featured = false, linkText = 'view more',
}) => {
  const size = useWindowSize();
  const featuredDesktop = size.width > 768;
  if (featured && featuredDesktop) {
    return (
      <Card to={link} itemProp="url" featured={1}>
        <FeaturedImage
          image={getImage(image)}
          alt={title}
        />
        <article
          className="featured-post-list-item"
          itemScope
          itemType="http://schema.org/Article"
          tw="pb-4 pt-1"
        >
          <header>
            <BlogCardTitle itemProp="headline">{title}</BlogCardTitle>
          </header>
          <section>
            <BlogCardDescription
              dangerouslySetInnerHTML={{ __html: description }}
              itemProp="description"
            />
          </section>
          <ReadMore to={link}>
            {linkText}
          </ReadMore>
        </article>
      </Card>
    );
  }
  return (
    <Card to={link} itemProp="url" featured={0}>
      <StyledImage
        image={getImage(image)}
        alt={title}
      />
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
        tw="py-4"
      >
        <header>
          <BlogCardTitle itemProp="headline">{title}</BlogCardTitle>
        </header>
        <section>
          <BlogCardDescription
            dangerouslySetInnerHTML={{ __html: description }}
            itemProp="description"
          />
        </section>
        <ReadMore to={link}>
          {linkText}
        </ReadMore>
      </article>
    </Card>
  );
};

export default BlogCard;
