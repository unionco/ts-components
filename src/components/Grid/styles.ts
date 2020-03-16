import { styled, IThemeStyledFunction } from '../../styles';
import { FlexProps, flexbox, SpaceProps, space } from 'styled-system';

export type IStyledGridProps = IThemeStyledFunction<'div'> & FlexProps & SpaceProps;

const StyledGrid = styled.div<IStyledGridProps>`
  display: block;

  ${flexbox};
  ${space};
`;

const StyledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${props => props.theme.siteMaxWidth}) {
    margin: 0;
  }
`;

export {
  StyledGrid,
  StyledGridContainer
}
