import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import tw from 'twin.macro';

import BurgerButton from './burger-button';
import { FullscreenBackground } from './background';
import useWindowSize from '../utils/use-window-size';

export const MobileMenu = tw.div`w-full h-full flex flex-col w-2/3 sm:w-1/3 mx-auto`;

const Menu = ({ children }) => {
  const size = useWindowSize();
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const showDesktopMenu = size.width > 768;
  const menuToggle = () => {
    toggleMobileMenu(!showMobileMenu);
  };

  if (!showDesktopMenu) {
    return (
      <>
        <AnimatePresence transition={{ duration: 0.5 }}>
          {showMobileMenu && (
          <FullscreenBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileMenu onClick={() => toggleMobileMenu(false)}>{children}</MobileMenu>
          </FullscreenBackground>
          )}
        </AnimatePresence>
        <BurgerButton key="mobile-menu" handleClick={menuToggle} collapsed={showMobileMenu} />
      </>
    );
  }
  return children;
};

export default Menu;
