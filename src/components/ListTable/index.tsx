import React from 'react';
import { Table, TableContainer, TableHeader, TableBody, TableRow, TableTd, IStyledListTableProps, IStyledListTableCellProps } from './styles';

export interface IListTableProps
  extends IStyledListTableProps {
    headerData?: any,
    bodyData?: any
  };

const ListTable: React.FC<IListTableProps> = ({
  type,
  border, 
  headerData,
  bodyData,
}) => {
  const props = { type, border,  headerData, bodyData };

  return (
    <TableContainer>
      <Table {...props}>
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

// Export main component
export { ListTable, TableRow as ListTableRow, TableTd as ListTableCell, IStyledListTableProps, IStyledListTableCellProps };
