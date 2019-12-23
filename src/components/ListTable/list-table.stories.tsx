import React from "react";
import { storiesOf } from "@storybook/react";
import { ListTable } from "./index";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { select } from "@storybook/addon-knobs";

const headerData = ['First', 'Second', 'Third', 'Fourth'];

const bodyData = [
  ['Row Two', 'Action', 'Action', '4.3MB'],
  ['Row Three', 'Action', 'Action', '4.3MB'],
  ['Row Four', 'Action', 'Action', '4.3MB'],
]

storiesOf("List Table", module)
  .add("Default", () => {
    const type = select('Type', ['default', 'striped'], 'striped');
    const border = select('Border', ['all', 'default', 'none'], 'default');

    return (
      <ThemeProvider>
        <BaseStyles />
        <ListTable type={type} border={border} headerData={headerData} bodyData={bodyData} />
      </ThemeProvider>
    );
  });