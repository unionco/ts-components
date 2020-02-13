import styled, { IThemeStyledFunction } from '../../../styles/styled';
import { StyledEyebrow } from '../../Eyebrow';
import { StyledRichText } from '../../RichText';
import { SpaceProps, space } from 'styled-system';
import { themeGet } from '../../../utils';

type IStyledCopyProps = IThemeStyledFunction<'div'> & SpaceProps & {
  twoCol?: boolean;
  textAlign?: string;
}

const textAlignToFlexMap = (prop: string) => {
  switch(prop) {
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    case 'left':
      default:
      return 'flex-start';
  }
}

const Copy = styled.div<IStyledCopyProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => textAlignToFlexMap(props.textAlign ?? 'left')};
  padding: ${themeGet('space.6')} 0;
  text-align: ${props => props.textAlign ?? 'left'};

  ${StyledEyebrow} {
    margin-bottom: ${themeGet('space.4')};
  }

  h1 {
    margin-bottom: ${themeGet('space.3')};
  }

  h2 {
    margin-bottom: ${themeGet('space.5')};
  }

  ${StyledRichText} {
    p {
      margin-bottom: ${themeGet('space.6')};
    }
  }

  ${props => props.twoCol && `
    ${StyledRichText} {
      column-count: 2;
      margin-bottom: ${themeGet('space.6')(props)};

      p:last-child {
        margin-bottom: 0;
      }
    }
  `}

  div[slot="actions"] {
    align-self: ${props => textAlignToFlexMap(props.textAlign ?? 'left')};
    margin: 0 -5px;
  }

  ${space}
`;

export { Copy, IStyledCopyProps };
