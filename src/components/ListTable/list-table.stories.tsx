import React from "react";
import { storiesOf } from "@storybook/react";
import { ListTable, ListTableCell, ListTableRow } from "./index";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { select } from "@storybook/addon-knobs";
// import { gridRowGap } from "styled-system";

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

    const getHeaders = () => {
      return headerData.map((cell: any, index: number) => {
        return (
          <ListTableCell py={4} key={index}>
            {cell}
          </ListTableCell>
        );
      });
    };

    const getRows = () => {
      return bodyData.map((row: any, index: number) => {
        return (
          <ListTableRow key={index}>
            {row.map((rowCell: any, index2: number) => {
              return (
                <ListTableCell py={4} key={index2}>
                  <p>{rowCell}</p>
                </ListTableCell>
              );
            })}
          </ListTableRow>
        );
      });
    };

    return (
      <ThemeProvider>
        <BaseStyles />
        <ListTable
          type={type}
          border={border} 
          headerData={getHeaders()}
          bodyData={getRows()} />
      </ThemeProvider>
    );
  });