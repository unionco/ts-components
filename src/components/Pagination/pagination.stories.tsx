import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Pagination } from './index';

storiesOf("Pagination", module)
  .add("Default", () => {
    const totalItems = number('Total Items', 150);
    const maxButtons = number('Max Center Buttons', 3);
    const perPage = number('Items Per Page', 10);
    return (
    <ThemeProvider>
      <BaseStyles />
      <Pagination totalItems={totalItems} maxButtons={maxButtons} perPage={perPage} />
    </ThemeProvider>
  )});
