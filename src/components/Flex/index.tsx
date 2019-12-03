// @ts-ignore
import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
// import { styled } from '../../styles';

interface IFlex {
  full?: boolean;
  inline?: boolean;
  center?: boolean;
  rowReverse?: boolean;
  column?: boolean;
  columnReverse?: boolean;
  wrap?: boolean;
  wrapReverse?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  alignBaseline?: boolean;
  alignStretch?: boolean;
  contentCenter?: boolean;
  contentStart?: boolean;
  contentEnd?: boolean;
  contentBaseline?: boolean;
  contentStretch?: boolean;
  contentAround?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEvenly?: boolean;
}

interface IFlexItem {
  order?: number;
  basis?: string;
  grow?: boolean;
  shrink?: boolean;
  noShrink?: boolean;
}

// const Flex = styled<IFlex>(SFlex)`
//   display: block;
// `;
// const FlexItem = styled<IFlex>(SFlexItem)`
//   flex: 1;
// `;

export { Flex, FlexItem, IFlex, IFlexItem };
