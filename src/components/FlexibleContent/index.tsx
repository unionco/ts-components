import React from 'react';
import { StyledFlexibleContent, Media, IFlexibleContentStyleProps } from './styles';

interface FlexibleContentProps extends IFlexibleContentStyleProps {
  content?: JSX.Element;
  media?: JSX.Element;
}

const FlexibleContent: React.FC<FlexibleContentProps> = ({
  layout = 'row',
  order = 'last',
  reversed = false,
  bleed = false,
  stretch = false,
  // deprecated
  textAlign = 'left',
  content,
  media,
  ...rest
}) => {
  const props = { layout, bleed, stretch, reversed, textAlign, ...rest };
  return (
    <StyledFlexibleContent {...props}>
      {content && <div slot="content">{content}</div>}
      {media && <Media>{media}</Media>}
    </StyledFlexibleContent>
  );
};

export { FlexibleContent, StyledFlexibleContent, FlexibleContentProps, IFlexibleContentStyleProps };
