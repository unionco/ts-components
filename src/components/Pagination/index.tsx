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
        <button className="Pagination-prev" onClick={decrementPage} disabled={currentPage === 1}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58951 7.87006L8.93359 15.2141L8.40768 15.7401L0.537676 7.87006L8.40768 6.10352e-05L8.93359 0.525978L1.58951 7.87006Z" fill="currentColor"/>
          </svg>
        </button>
        {currentPage >= maxButtons && (
          <>
            <button onClick={() => goToPage(1)}>1</button>
            <span className="Pagination-spacer">•••</span>
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
            <span className="Pagination-spacer">•••</span>
            <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
          </>
        )}
        <button className="Pagination-next" onClick={incrementPage} disabled={currentPage === totalPages}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.34408 8.13006L0 0.785977L0.525917 0.260061L8.39592 8.13006L0.525917 16.0001L0 15.4741L7.34408 8.13006Z" fill="currentColor"/>
          </svg>
        </button>
      </nav>
    </StyledPagination>
  )
}

export { Pagination, StyledPagination, IPaginationProps };
