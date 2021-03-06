import styled from 'styled-components';
import { getVariantCSS } from '../../utils';
import { objectFit } from '../../theme/mixins';

interface IRichTextProps {
  tightness?: 'tight' | 'loose' | 'default';
  twoCol?: boolean;
}

const tightness = (props: any) => getVariantCSS(props.theme, `wysiwyg.tightness.${props.tightness}`);

const StyledRichText = styled.div<IRichTextProps>`
  display: block;
  max-width: ${(props: any) => props.theme.wysiwyg.maxWidth};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  p,
  ul {
    line-height: 1;
    margin: 0.8em 0;

    &:first-child {
      margin-top: 1px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    margin-bottom: ${(props: any) => props.theme.space[6]};
  }

  h2 {
    margin-bottom: ${(props: any) => props.theme.space[4]};
  }

  h3 {
    margin-bottom: ${(props: any) => props.theme.space[3]};
  }

  h4 {
    margin-bottom: ${(props: any) => props.theme.space[2]};
  }

  ${({ theme }) =>
    [1, 2, 3, 4, 5, 6].map(
      (key) => `
    p + h${key},
    figure + h${key},
    ol + h${key},
    ul + h${key} {
      margin-top: ${theme.space[6]};
    }
  `,
    )}

  ul,
  ol {
    margin-bottom: ${(props: any) => props.theme.space[4]};
    padding-left: 40px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ul ul,
  ol ul {
    list-style-type: circle;
    margin-left: 1.5em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-latin;
    margin-left: 1.5em;
  }

  li {
    line-height: 1.9;
  }

  p {
    ${(props: any) => tightness(props)}
  }

  hr {
    margin: 2.5em 0;
  }

  figure {
    height: 350px;
    overflow: hidden;
    padding: 0;
    margin: 0;
    margin-top: ${(props: any) => props.theme.space[4]};
    margin-bottom: ${(props: any) => props.theme.space[4]};
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      ${objectFit('cover', 'center center')}
    }
  }

  blockquote {
    background: #eee;
    border-left: 4px solid #262626;
    line-height: 1.5;
    margin: ${(props: any) => props.theme.space[5]} 0;
    padding: ${(props: any) => props.theme.space[4]};
    ${(props: any) => props.theme.fontSizes.lg};
    font-style: italic;
    text-align: left;

    * {
      margin: 0;
      padding: 0;
    }

    span {
      ${(props: any) => props.theme.fontSizes.base};

      &:before {
        content: '\2014';
        margin-right: 4px;
      }
    }
  }
`;

export { StyledRichText, IRichTextProps };
