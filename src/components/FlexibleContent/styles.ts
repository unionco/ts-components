import styled from '../../styles/styled';
import { Flex, FlexItem } from '../Flex';
import { StyledImage } from '../Image';

interface IFlexibleContentStyleProps {
  layout?: string;
  order?: string;
  reversed?: boolean;
  bleed?: boolean;
  stretch?: boolean;
  background?: any;
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

  div[slot="content"] {
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
