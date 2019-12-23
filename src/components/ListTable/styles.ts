import { styled } from "../../styles";

export interface IStyledListTableProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'striped';
  border?: 'default' | 'all' | 'none';
}

const TableBody = styled.tbody``;
const TableHeader = styled.thead``;
const TableRow = styled.tr``;

const TableTh = styled.th<IStyledListTableProps>`
  ${props => props.size === 'small' && `
    width: 10%;
  `}

  ${props => props.size === 'medium' && `
    width: 25%;
  `}

  ${props => props.size === 'large' && `
    width: 50%;
  `}
`;

const Table = styled.table<IStyledListTableProps>`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border-bottom: 1px solid #d8d8d8;
    padding: 20px 32px;
    text-align: left;

    ${props => props.border === 'none' && `
      border-bottom: none;
    `}

    ${props => props.border === 'all' && `
      border: 1px solid #d8d8d8;
    `}
  }

  ${TableBody} {
    ${TableRow} {
      ${props => props.type === 'striped' && `
        &:nth-child(odd) {
          background-color: #fbfbfb;
        }
      `}
    }
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export { Table, TableContainer, TableHeader, TableBody, TableRow, TableTh };