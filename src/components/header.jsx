import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { AnimatePresence } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Container from './container';
import Menu from './menu';
import ContactForm from './contact-form';

export const LogoLink = tw(Link)`font-extrabold text-4xl no-underline text-stone-800
  flex items-center`;

export const MenuLink = tw(AnchorLink)`font-bold capitalize text-xl no-underline 
  px-4 h-full flex items-center text-stone-800 hover:opacity-50 duration-300 
  justify-center mb-6 md:mb-0
`;

export const ContactButton = tw.button`
  font-bold border border-stone-800 text-stone-800 text-lg 
  rounded-xl py-1 px-4 hover:opacity-50 duration-300 cursor-pointer 
  outline-none justify-center md:ml-8 mx-auto
`;

const Header = () => {
  const [showContactForm, toggleForm] = useState(false);
  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          title
          menu {
            name
            url
          }
          contactLabel
        }
      }
    }
  `);

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === 'Escape') {
        toggleForm(false);
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
  const { title, menu, contactLabel } = data.site.siteMetadata;
  return (
    <Container>
      <div tw="py-8">
        <div tw="w-full flex justify-between">
          <LogoLink to="/">{title}</LogoLink>
          <Menu>
            <nav tw="flex flex-col md:flex-row">
              {menu.length > 0 && menu.map((link) => (
                <MenuLink
                  key={link.name}
                  to={link.url}
                  gatsbyLinkProps={{ activeStyle: { opacity: 0.5 } }}
                >
                  {link.name}
                </MenuLink>
              ))}
              <ContactButton type="button" key="contact-button" onClick={() => toggleForm(!showContactForm)}>
                {contactLabel || 'Contact me'}
              </ContactButton>
            </nav>
          </Menu>
        </div>
        <AnimatePresence transition={{ duration: 0.5 }}>
          {showContactForm && (
            <ContactForm closeCallback={() => toggleForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Header;
