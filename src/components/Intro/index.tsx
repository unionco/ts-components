import React from 'react';
import { Flex, IFlex, FlexItem } from '../Flex';
import { styled } from '../../styles';

interface IIntro extends IFlex {
  copy?: JSX.Element;
  action?: JSX.Element;
}

const StyledIntro = styled(Flex)`
  margin-bottom: ${props => props.theme.space[4]};
`;

const Intro: React.FC<IIntro> = ({
  copy,
  action,
  ...props
}) => {
  return (
    <StyledIntro {...props}>
      {copy && <FlexItem basis="40%">{copy}</FlexItem>}
      {action && <FlexItem>{action}</FlexItem>}
    </StyledIntro>
  );
}

export { Intro, IIntro };
