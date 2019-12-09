import React from 'react';
import { StyledFlexibleContent, Media, IFlexibleContentStyleProps } from './styles';

interface IFlexibleContentProps
  extends IFlexibleContentStyleProps {
  content?: JSX.Element;
  media?: JSX.Element;
}

const FlexibleContent: React.FC<IFlexibleContentProps> = ({
  layout = 'row',
  order = 'last',
  reversed = false,
  bleed = false,
  stretch = false,
  content,
  media,
  ...rest
}) => {
  const props = { layout, bleed, stretch, reversed, ...rest };
  return (
    <StyledFlexibleContent {...props}>
      {content && <div slot="content">{content}</div>}
      {media && <Media basis="50%">{media}</Media>}
    </StyledFlexibleContent>
  );
};

export { FlexibleContent, StyledFlexibleContent, IFlexibleContentProps, IFlexibleContentStyleProps };
