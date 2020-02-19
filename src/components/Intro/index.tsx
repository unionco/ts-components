import React from 'react';
import { StyledIntro, StyledIntroProps } from './styles';

type IntroProps = StyledIntroProps & {
  /** copy slotted content */
  copy?: JSX.Element;
  /** action slotted content */
  action?: JSX.Element;
  /** applies default values for centering of content */
  layout?: 'row'|'column';
}

const Intro: React.FC<IntroProps> = ({
  copy,
  action,
  layout = 'row',
  ...rest
}) => {
  /**
   * Reset props with default values
   */
  const props = { layout, ...rest };

  return (
    <StyledIntro {...props}>
      {copy && <div slot="copy">{copy}</div>}
      {action && action}
    </StyledIntro>
  );
}

export { Intro, StyledIntro };
