import React, { Component } from 'react';
import { Table, TableContainer, TableHeader, TableBody, TableRow, TableTd, IStyledListTableProps, IStyledListTableCellProps } from './styles';

export interface IListTableProps
  extends IStyledListTableProps {
    headerData?: any,
    bodyData?: any
  };

class ListTable extends Component<IListTableProps> {
  public render() {
    const { type, border,  headerData, bodyData} = this.props;

    return (
      <TableContainer>
        <Table type={type} border={border}>
          <TableHeader>
            <TableRow>
              {headerData}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bodyData}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

// Export main component
export { ListTable, TableRow as ListTableRow, TableTd as ListTableCell, IStyledListTableProps, IStyledListTableCellProps };
