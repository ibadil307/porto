import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import tw, { styled } from 'twin.macro';

import Container from './container';
import SocialIcons from './social';

export const BioLayout = tw.div`flex flex-col md:flex-row pt-16 md:pt-32`;

export const StyledPortrait = styled(GatsbyImage)`
  ${tw`mr-auto rounded-2xl`}
  @media(min-width: 768px) {
    min-width: 25rem;
  }
`;

export const BioContent = styled.div`
  ${tw`flex flex-col justify-start md:pl-12 font-sans`}
  flex: 2;
`;

export const BioContentCard = tw.div`md:px-4 pt-8 md:pt-24 pb-8 text-left`;

export const BioTitle = tw.h2`text-left text-3xl md:text-4xl font-bold m-0 text-stone-800`;

export const BioSubtitle = tw.p`text-left text-base font-bold my-8 md:my-12 opacity-75 max-w-sm`;

export const BioText = tw.p`text-left text-base font-light my-6`;

export const StyledSocialIcons = tw.div`flex w-full justify-start pt-4 md:pt-12`;

const Bio = ({ author, portrait, children }) => (
  <Container className="bio">
    <BioLayout>
      <div tw="flex flex-1">
        {portrait && (
        <StyledPortrait
          image={getImage(portrait)}
          alt={author?.name || ''}
        />
        )}
      </div>
      <BioContent>
        <BioContentCard>
          {children}
          <StyledSocialIcons>
            <SocialIcons />
          </StyledSocialIcons>
        </BioContentCard>
      </BioContent>
    </BioLayout>
  </Container>
);

export default Bio;
