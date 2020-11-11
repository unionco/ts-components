import styled from 'styled-components';
import { SpaceProps, space, BorderProps, border } from 'styled-system';
import { darken } from 'polished';

export type StyledListTableProps = SpaceProps & {
  type?: 'default' | 'striped';
  border?: 'default' | 'all' | 'none';
  accentColor?: string;
};

export type StyledListTableCellProps = BorderProps & SpaceProps;

const TableBody = styled.tbody``;
const TableHeader = styled.thead``;
const TableRow = styled.tr``;
const TableTh = styled.th<StyledListTableCellProps>`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: ${(props: any) => props.theme.space[3]} ${(props: any) => props.theme.space[5]};

  ${border}
  ${space}
`;
const TableTd = styled.td<StyledListTableCellProps>`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: ${(props: any) => props.theme.space[3]} ${(props: any) => props.theme.space[5]};

  ${border}
  ${space}
`;

const Table = styled.table<StyledListTableProps>`
  border-collapse: collapse;
  width: 100%;

  ${TableTd},
  ${TableTh} {
    text-align: left;
    border-color: ${(props: any) => darken(0.2, props.accentColor || props.theme.colors.light.base)};

    ${(props: any) =>
      props.border === 'none' &&
      `
      border-bottom: none;
    `}

    ${(props: any) =>
      props.border === 'all' &&
      `
      border: 1px solid ${darken(0.2, props.accentColor || props.theme.colors.light.base)};
    `}
  }

  ${TableBody} {
    ${TableRow} {
      ${(props: any) =>
        props.type === 'striped' &&
        `
        &:nth-child(odd) {
          background-color: ${props.accentColor || props.theme.colors.light.base};
        }
      `}
    }
  }

  ${space}
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export { Table, TableContainer, TableHeader, TableBody, TableRow, TableTh, TableTd };
