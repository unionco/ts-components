import styled from 'styled-components';
import { FlexProps, flexbox, SpaceProps, space } from 'styled-system';

export type StyledGridProps = FlexProps & SpaceProps;

const StyledGrid = styled.div<StyledGridProps>`
  display: block;

  ${flexbox};
  ${space};
`;

const StyledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${(props: any) => props.theme.siteMaxWidth}) {
    margin: 0;
  }
`;

export { StyledGrid, StyledGridContainer };
