import { styled, IThemeStyledFunction } from '../../styles';
import { SpaceProps, space } from 'styled-system';

export type IStyledGridProps = IThemeStyledFunction<'div'> & SpaceProps;

const StyledGrid = styled.div<IStyledGridProps>`
  display: block;

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
