import Pagination from 'react-bootstrap/Pagination';
import { Center } from '@chakra-ui/react';
import _ from 'lodash';

export default function PaginationNums({
  currentPage,
  setCurrentPage,
  pagesCount,
}) {
  const pages = _.range(1, pagesCount + 1);

  const nextPage = (num = 1) => {
    if (pages.includes(currentPage + num)) {
      setCurrentPage(currentPage + num);
    }
  };
  const prevPage = (num = 1) => {
    if (pages.includes(currentPage - num)) {
      setCurrentPage(currentPage - num);
    }
  };
  return (
    <Center>
      <Pagination>
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => prevPage()}
          disabled={!pages.includes(currentPage - 1)}
        />
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => nextPage()}
          disabled={!pages.includes(currentPage + 1)}
        />
        <Pagination.Last
          onClick={() => setCurrentPage(pages.length)}
          disabled={currentPage === pages.length}
        />
      </Pagination>
    </Center>
  );
}
