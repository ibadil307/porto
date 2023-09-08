import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import Container from './container';

export const StyledFooter = tw.div`py-12 font-sans bg-stone-800`;

export const Logo = tw.div`font-semibold text-3xl md:text-4xl 
no-underline text-gray-100 md:w-1/3 pl-2 md:pl-0`;

export const FooterText = styled.div`
  ${tw`text-gray-100 font-light text-sm md:text-2xl text-right pr-2 md:pr-0`}
  flex: 2;
`;

export const Copyright = tw.a`font-thin text-xs md:text-xl mb-0 mt-3 
text-gray-100 no-underline`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          title
          footerText
        }
      }
    }
  `);
  const FooterTextData = data.site.siteMetadata.footerText || `Minimalistic Gatsby theme for designers, web developers and 
  different type of digital creators`;
  return (
    <StyledFooter>
      <Container>
        <div tw="flex">
          <Logo>{data.site.siteMetadata.title}</Logo>
          <FooterText>
            <div>
              <p>{FooterTextData}</p>
            </div>
            <Copyright href="https://gatsbytemplates.io/theme/porto-gatsby-theme/" target="_blank" rel="noopener">
              Porto 2.0 theme
              by GatsbyTemplates
            </Copyright>
          </FooterText>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
