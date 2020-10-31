import React from 'react';
import {
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableTd,
  IStyledListTableProps,
  IStyledListTableCellProps,
} from './styles';

export interface ListTableProps extends IStyledListTableProps {
  headerData?: any;
  bodyData?: any;
  accentColor?: string;
}

const ListTable: React.FC<ListTableProps> = (props) => {
  const { bodyData, headerData } = props;

  return (
    <TableContainer>
      <Table {...props}>
        <TableHeader>
          <TableRow>{headerData}</TableRow>
        </TableHeader>
        <TableBody>{bodyData}</TableBody>
      </Table>
    </TableContainer>
  );
};

export {
  ListTable,
  TableRow as ListTableRow,
  TableTd as ListTableCell,
  IStyledListTableProps,
  IStyledListTableCellProps,
};
