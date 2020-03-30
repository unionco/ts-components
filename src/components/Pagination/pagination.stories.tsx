import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { number, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Pagination } from './index';

storiesOf("Pagination", module)
  .add("Default", () => {
    const align = select('Alignment', ['left', 'center', 'right'], 'center');
    const totalItems = number('Total Items', 150);
    const maxButtons = number('Max Center Buttons', 3);
    const perPage = number('Items Per Page', 10);

    return (
      <ThemeProvider>
        <BaseStyles />
        <Pagination align={align} totalItems={totalItems} maxButtons={maxButtons} perPage={perPage} />
      </ThemeProvider>
    )
  })
  .add("Controlled Component", () => {
    const [currentPage, setCurrentPage] = useState(1);
    const align = select('Alignment', ['left', 'center', 'right'], 'center');
    const totalItems = number('Total Items', 150);
    const maxButtons = number('Max Center Buttons', 3);
    const perPage = number('Items Per Page', 10);

    const handlePageChange = (page: number) => {
      console.log('handle page change', page);
      setCurrentPage(page);
    };

    return (
      <ThemeProvider>
        <BaseStyles />
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} align={align} totalItems={totalItems} maxButtons={maxButtons} perPage={perPage} />
      </ThemeProvider>
    )
  });
