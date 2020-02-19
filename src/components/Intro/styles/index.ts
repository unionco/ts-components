import { styled, IThemeStyledFunction } from '../../../styles';
import { display, DisplayProps, SpaceProps, FlexboxProps, space, flexbox } from 'styled-system';
import { themeGet } from '../../../utils';

type StyledIntroProps = IThemeStyledFunction<'div'> & DisplayProps & SpaceProps & FlexboxProps & {
  layout?: 'row'|'column';
};

const StyledIntro = styled.div<StyledIntroProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${themeGet('space.4')};

  div[slot="copy"] {
    margin-bottom: ${themeGet('space.4')};
    padding-right: ${themeGet('space.4')};
    width: 60%;
  }

  ${props => props.layout === 'column' && `
    flex-direction: column;
    justify-content: center;

    div[slot="copy"] {
      text-align: center;
      padding-right: 0;
    }
  `}

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    div[slot="copy"] {
      width: 90%;
    }
  }

  ${display};
  ${space};
  ${flexbox};
`;

export { StyledIntro, StyledIntroProps };
