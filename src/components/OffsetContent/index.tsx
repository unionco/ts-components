import React from 'react';
import { StyledOffsetContent, OffsetContentStyleProps, CardBackground, StyledCard } from './styles';

export interface OffsetContentProps extends OffsetContentStyleProps {
  content?: JSX.Element;
  cardColor?: string;
}

const OffsetContent: React.FC<OffsetContentProps> = ({ textAlign = 'left', content, background, cardColor }) => {
  const props = { content, background, textAlign, cardColor };
  return (
    <StyledOffsetContent {...props}>
      <CardBackground {...props}>
        <StyledCard {...props}>{content && <div slot="content">{content}</div>}</StyledCard>
      </CardBackground>
    </StyledOffsetContent>
  );
};

export { OffsetContent, StyledOffsetContent, OffsetContentStyleProps };
