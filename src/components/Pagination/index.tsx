import React, { useState } from 'react';
import { StyledPagination } from './styles';

interface IPaginationProps {
  maxButtons?: number;
  perPage?: number;
  totalItems?: number;
  onPageChange?: (e:number) => void;
};

interface IPageRange {
  pageNum: number,
  isDisabled: boolean
}

const Pagination: React.FC<IPaginationProps> = ({
  maxButtons = 5,
  perPage = 10,
  totalItems = 10,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / perPage);
  // const isLastPage = currentPage === totalPages;she

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)

      if (onPageChange) {
        onPageChange(currentPage)
      }
    }
  }

  const goToPage = (page:number) => {
    console.log(`goToPage ${page}`);
    setCurrentPage(page);
  }

  const incrementPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)

      if (onPageChange) {
        onPageChange(currentPage)
      }
    }
  }

  const startPage = () => {
    if (totalPages < maxButtons) {
      return 1;
    }

    if (currentPage < maxButtons) {
      return 1;
    }

    if (currentPage > maxButtons - 1 && currentPage < totalPages - Math.floor(maxButtons / 2)) {
      return currentPage - (maxButtons - (Math.ceil(maxButtons / 2)));
    }

    if (currentPage === (totalPages - Math.ceil(maxButtons / 2))) {
      return totalPages - maxButtons;
    }

    if (currentPage === totalPages) {
      return (totalPages - maxButtons) + 1;
    }

    return currentPage - Math.ceil(maxButtons / 2);
  }

  const endPage = Math.min((startPage() + maxButtons) - 1, totalPages);

  let range:IPageRange[] = [];

  for (let i:number = startPage(); i <= endPage; i += 1) {
    range.push({
      pageNum: i,
      isDisabled: i === currentPage
    });
  }

  console.log('startPage', startPage(), 'range', range, 'currentPage', currentPage);

  return (
    <StyledPagination>
      <nav>
        <button onClick={decrementPage}>⬅</button>
        {currentPage >= maxButtons && (
          <>
            <button onClick={() => goToPage(1)}>1</button>
            <span className="Pagination-spacer">...</span>
          </>
        )}
        {range.map(({pageNum, isDisabled}) => (
          <button
            className={`Pagination-button ${pageNum === currentPage ? 'is-active' : ''}`}
            onClick={() => goToPage(pageNum)}
            disabled={isDisabled}
          >
            {pageNum}
          </button>
        ))}
        {currentPage < (totalPages - Math.floor(maxButtons / 2) + 1) && (
          <>
            <span className="Pagination-spacer">...</span>
            <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
          </>
        )}
        <button onClick={incrementPage}>➡</button>
      </nav>
    </StyledPagination>
  )
}

export { Pagination, StyledPagination, IPaginationProps };
