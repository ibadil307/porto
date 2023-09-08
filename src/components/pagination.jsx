import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const PaginationContainer = tw.div`flex flex-col w-full`;

const PaginationButton = tw(Link)`
  border-solid border border-gray-300 rounded-lg
  no-underline hover:opacity-50 duration-300 text-stone-800 p-4
`;

const PreviousPageButton = tw(PaginationButton)`self-start`;

const NextPageButton = tw(PaginationButton)`self-end`;

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <PaginationContainer>
      {previousPagePath && (
        <PreviousPageButton to={`${previousPagePath}`}>
          Previous
        </PreviousPageButton>
      )}
      {nextPagePath && (
        <NextPageButton to={`${nextPagePath}`}>
          Next
        </NextPageButton>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
