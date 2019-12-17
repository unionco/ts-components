import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Pagination } from './index';

storiesOf("Pagination", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Pagination totalItems={180} maxButtons={4} perPage={50} />
    </ThemeProvider>
  ));
