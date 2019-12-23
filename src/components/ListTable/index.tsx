import React, { Component } from 'react';
import { Table, TableContainer, TableHeader, TableBody, TableRow, TableTh, IStyledListTableProps} from './styles';

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
              {headerData.map((item: string, key: number) => (
                <TableTh key={key}>{item}</TableTh>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bodyData.map((items: any, key: number) => (
              <TableRow key={key}>
                {items.map((item: string, index: number) => (
                  <td key={index}>
                    {item}
                  </td>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

// Export main component
export { ListTable };
