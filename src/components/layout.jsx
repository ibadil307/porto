import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';

import Header from './header';
import Footer from './footer';
import Background from './background';

const Content = tw.div`flex-grow`;

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Background className="global-wrapper">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Background>
  </div>
);

export default Layout;
