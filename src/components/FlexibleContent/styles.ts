import styled from 'styled-components';
import { Flex, FlexItem } from '../Flex';
import { StyledImage } from '../Image';
import { StyledCopy } from '../Copy';
import { objectFit } from '../../theme/mixins';

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
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;

  div[slot='content'] {
    ${StyledCopy} {
      max-width: 720px;
      ${(props: any) => (props.textAlign === 'center' ? `margin: 0 auto;` : ``)}
    }

    ${(props: any) => props.theme.media.md} {
      ${(props: any) =>
        props.reversed ? `padding-left: ${props.theme.space[6]};` : `padding-right: ${props.theme.space[6]};`}

      &:only-child {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  ${Media} {
    flex-basis: auto;
  }

  ${(props: any) =>
    props.reversed &&
    `
    ${Media} {
      order: -1;
    }
  `}

  ${(props: any) =>
    props.layout === 'row' &&
    `
    div[slot="content"] {
      flex: 1;
    }

    ${Media} {
      flex-basis: 50%;
    }
  `}

  ${(props: any) =>
    props.layout === 'col' &&
    `
    justify-content: center;
    flex-direction: column;
    text-align: center;

    div[slot="content"] {
      align-items: center;
      max-width: 720px;
      margin: 0 auto;
      padding: 0;
    }

    ${
      props.stretch &&
      `
      div[slot="content"] {
        max-width: 900px
      }

      ${Media} {
        margin: 0 auto;
        width: 100%;

        ${StyledImage} {
          height: 540px;
          ${objectFit('cover')}
        }
      }
    `
    }
  `}

  ${(props: any) =>
    props.bleed &&
    `
    ${props.layout === 'col' ? `align-items: flex-start;` : ``}
    ${props.layout === 'row' ? `justify-content: flex-start !important;` : ``}

    overflow-x: visible;

    div[slot="content"] {
      padding-left: 0px;
    }

    ${Media} {

    }

    ${props.theme.media.md} {
      div[slot="content"] {
        max-width: 50%;
      }

      ${Media} {
        position: absolute;
        top: 0;
        width: 100%;
        ${objectFit('cover')}
      }

      ${
        props.reversed
          ? `
        ${Media} {
          right: 50%;
        }
        div[slot="content"] {
          padding-left: 40px;
          transform: translateX(100%);
        }
      `
          : `
        ${Media} {
          left: 50%;
        }
      `
      }
    }
  `}

  // media for the whole thing
  ${(props: any) => props.theme.media.md} {
    ${(props: any) => props.layout !== 'col' && `flex-direction: row;`}
  }
`;

StyledFlexibleContent.displayName = 'FlexibleContent';

export { StyledFlexibleContent, Media, IFlexibleContentStyleProps };
