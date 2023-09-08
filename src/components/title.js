import tw from 'twin.macro';

const HeadingStyle = 'font-bold text-stone-800 text-left my-0 font-sans';

export const MainTitle = tw.h1`
  ${HeadingStyle} text-5xl md:text-7xl
`;

export const Title = tw.h2`
  ${HeadingStyle} text-3xl md:text-4xl
`;

export const Subtitle = tw.p`
  font-light text-stone-800 text-xl md:text-2xl text-left mt-4 max-w-3xl leading-loose
`;
