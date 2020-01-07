import styled from '../../styles/styled';
import { Flex, FlexItem } from '../Flex';
import { StyledImage } from '../Image';
// import { StyledCopy } from '../Copy';

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
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;

  div[slot="content"] {
    flex-basis: 50%;
    ${props => props.reversed ? `padding-left: ${props.theme.space[6]};` : `padding-right: ${props.theme.space[6]};`}
  }

  ${Media} {
    flex-basis: 50%;
  }

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
      padding: 0;
    }

    ${props.stretch && `
      div[slot="content"] {
        max-width: 900px
      }

      ${Media} {
        margin: 0 auto;
        width: 100%;

        ${StyledImage} {
          height: 540px;
          object-fit: cover;
        }
      }
    `}
  `}

  ${props => props.bleed && `
    ${props.layout === 'col' ? `align-items: flex-start;` : ``}
    ${props.layout === 'row' ? `justify-content: flex-start !important;` : ``}

    overflow-x: visible;

    div[slot="content"] {
      max-width: 50%;
    }

    ${Media} {
      position: absolute;
      top: 0;
      width: 100%;
      object-fit: cover;
    }

    ${props.reversed ? `
      ${Media} {
        right: 50%;
      }
      div[slot="content"] {
        transform: translateX(100%);
      }
    ` : `
      ${Media} {
        left: 50%;
      }
    `}
  `}

  // media for the whole thing
  ${props => props.theme.media.md} {
    ${props => props.layout !== 'col' && `flex-direction: row;`}
  }
`;

StyledFlexibleContent.displayName = 'FlexibleContent';

export { StyledFlexibleContent, Media, IFlexibleContentStyleProps };
