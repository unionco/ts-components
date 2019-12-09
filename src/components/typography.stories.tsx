import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../index';
import { BaseStyles } from './BaseStyles';

storiesOf("Typography", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <h1 className="display">h1. Display Text</h1>
      <h1>H1. Heading Text</h1>
      <h2>H2. Heading Text</h2>
      <h3>H3. Heading Text</h3>
      <h4>H4. Heading Text</h4>
      <h5>H5. Heading Text</h5>
      <h6>H6. Heading Text</h6>
      <p>Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      <p><small>something small</small></p>
    </ThemeProvider>
  ));
