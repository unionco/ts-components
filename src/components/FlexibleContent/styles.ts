import styled from '../../styles/styled';
import { Flex, FlexItem } from '../Flex';
import { StyledImage } from '../Image';
import { StyledCopy } from '../Copy';

interface IFlexibleContentStyleProps {
  layout?: string;
  order?: string;
  reversed?: boolean;
  bleed?: boolean;
  stretch?: boolean;
  background?: any;
  backgroundColor?: string;
  textAlign?: string;
}

const Media = styled(FlexItem)`
  height: 100%;
`;

Media.displayName = 'Media';

const StyledFlexibleContent = styled(Flex)<IFlexibleContentStyleProps>`
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: relative;
  max-width: ${props => props.theme.siteMaxWidth};
  margin: 0 auto;

  div[slot="content"] {
    flex-basis: 50%;
  }

  ${Media} {
    flex-basis: 50%;
  }

  ${(props) => {
    switch(props.textAlign) {
      case 'center':
        return `
          justify-content: center;

          div[slot="content"] {
            flex-basis: 60%;
          }

          ${StyledCopy} {
            align-items: center;
            text-align: center;
          }
        `;
      case 'right':
        return `
          justify-content: flex-end;
          ${StyledCopy} {
            align-items: flex-end;
            text-align: right;
          }
        `;
      case 'left':
      default:
        return `
          ${StyledCopy} {
            align-items: flex-start;
            text-align: left;
          }
        `;
    }
  }}

  ${props => props.reversed && `
    ${Media} {
      order: -1;
    }
  `}

  ${props => props.layout === 'col' && `
    justify-content: center;
    flex-direction: column;
    text-align: center;

    div[slot="content"] {
      align-items: center;
      max-width: 720px;
      margin: 0 auto;
    }

    ${props.stretch && `
      div[slot="content"] {
        max-width: 900px
      }

      ${Media} {
        margin: 0 auto;
        width: 90%;

        ${StyledImage} {
          height: 540px;
          object-fit: cover;
        }
      }
    `}
  `}

  ${props => props.bleed && `
    div[slot="content"] {
      max-width: 50%;
    }

    ${Media} {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 50%;
    }

    ${props.reversed && `
      div[slot="content"] {
        margin-left: 50%;
      }

      ${Media} {
        left: 0;
      }
    `}
  `}
`;

StyledFlexibleContent.displayName = 'FlexibleContent';

export { StyledFlexibleContent, Media, IFlexibleContentStyleProps };
