import React from 'react';
import { RichTextStyles, IRichTextProps } from './styles';

const RichText: React.FC<IRichTextProps> = ({
  tightness = 'default',
  ...rest
}) => {
  const props = { tightness, ...rest };
  return (
    <RichTextStyles {...props}>
      {props.children}
    </RichTextStyles>
  );
};

export { RichText, RichTextStyles };
