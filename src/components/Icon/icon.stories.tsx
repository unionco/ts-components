import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Icon } from './index';

storiesOf("Icon", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Icon icon="arrowRight" color="primary" />
    </ThemeProvider>
  ));
