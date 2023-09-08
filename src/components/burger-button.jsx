import React from 'react';
import tw, { styled } from 'twin.macro';

export const BurgerLine = styled.div`
  width: 35px;
  height: 1px;
  ${tw`border-b-2 border-solid border-stone-800 duration-500`}
  margin: ${({ collapsed }) => (collapsed ? 0 : '10px 0')}; 
`;

const BurgerButton = ({ handleClick, collapsed }) => (
  <div tw="inline-block z-10">
    <button
      tw="cursor-pointer h-16 focus:outline-none "
      onClick={handleClick}
      type="button"
      aria-label={collapsed ? 'Hide menu' : 'Show menu'}
    >
      <BurgerLine collapsed={collapsed} />
      <BurgerLine collapsed={collapsed} />
      <BurgerLine collapsed={collapsed} />
    </button>
  </div>
);

export default BurgerButton;
