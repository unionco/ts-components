import React from 'react';
import { styled, IThemeStyledFunction } from '../../styles';
import { display, DisplayProps, SpaceProps, FlexboxProps, space, flexbox } from 'styled-system';

type IIntro = IThemeStyledFunction<'div'> & DisplayProps & SpaceProps & FlexboxProps & {
  /** copy slotted content */
  copy?: JSX.Element;
  /** action slotted content */
  action?: JSX.Element;
  /** applies default values for centering of content */
  centered?: boolean;
}

const StyledIntro = styled.div<Omit<IIntro, 'copy' | 'action' | 'centered'>>`
  ${display};
  ${space};
  ${flexbox};
`;

const Intro: React.FC<IIntro> = ({
  copy,
  action,
  centered,
  display = 'flex',
  alignItems = 'center',
  justifyContent = 'space-between',
  mb = 4,
  ...rest
}) => {

  /**
   * Reset props with default values
   */
  const props = { alignItems, display, justifyContent, mb, ...rest };

  /**
   * Override styles if centered
   */
  if (centered) {
    props.flexDirection = 'column';
  }

  return (
    <StyledIntro {...props}>
      {copy && copy}
      {action && action}
    </StyledIntro>
  );
}

export { Intro, IIntro };
