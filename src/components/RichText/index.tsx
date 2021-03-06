import React from 'react';
import { StyledRichText, IRichTextProps } from './styles';

const RichText: React.FC<IRichTextProps & React.HTMLAttributes<HTMLElement>> = ({ tightness = 'default', ...rest }) => {
  const props = { tightness, ...rest };

  return <StyledRichText {...props}>{props.children}</StyledRichText>;
};

export { RichText, StyledRichText };
