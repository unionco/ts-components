import { default as FlexComponent, FlexItem as FlexItemComponent } from 'styled-flex-component';
import styled from 'styled-components';
import { SpaceProps, space, TextAlignProps, textAlign } from 'styled-system';

type IFlex = SpaceProps & {
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
};

type IFlexItem = SpaceProps &
  TextAlignProps & {
    order?: number;
    basis?: string;
    grow?: boolean;
    shrink?: boolean;
    noShrink?: boolean;
  };

const Flex = styled(FlexComponent)`
  ${space}
`;

const FlexItem = styled(FlexItemComponent)`
  ${textAlign}
  ${space}
`;

export { Flex, FlexItem, IFlex, IFlexItem };
