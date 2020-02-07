import styled, { IThemeStyledFunction } from '../../styles/styled';
import { StyledEyebrow } from '../Eyebrow';
import { StyledRichText } from '../RichText';
import { SpaceProps, space } from 'styled-system';

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
  padding: ${props => props.theme.space[6]} 0;
  text-align: ${props => props.textAlign ?? 'left'};

  ${StyledEyebrow} {
    margin-bottom: ${props => props.theme.space[6]};
  }

  h1 {
    margin-bottom: ${props => props.theme.space[3]};
  }

  h5 {
    margin-bottom: ${props => props.theme.space[4]};
  }

  p {
    margin-bottom: ${props => props.theme.space[6]};
  }

  ${props => props.twoCol && `
    ${StyledRichText} {
      column-count: 2;
      margin-bottom: ${props.theme.space[6]};

      p:last-child {
        margin-bottom: 0;
      }
    }
  `}

  div[slot="actions"] {
    align-self: ${props => textAlignToFlexMap(props.textAlign ?? 'left')};
  }

  ${space}
`;

export { Copy, IStyledCopyProps };
