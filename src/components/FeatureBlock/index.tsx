import React from 'react';
import { StyledFeatureBlock, StyledFeatureBlockProps } from './styles';
import { Icon } from '../Icon';
import { H2, Paragraph } from '../Typography';

export type FeatureBlockProps = StyledFeatureBlockProps & {
  icon?: JSX.Element;
  title?: string;
  copy?: string;
  action?: JSX.Element;
  link?: string;
  linkText?: string;
};

const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon, title, copy, action, ...rest }) => {
  return (
    <StyledFeatureBlock {...rest}>
      {icon && <Icon icon={icon} />}
      {title && <H2 className="h4">{title}</H2>}
      {copy && <Paragraph>{copy}</Paragraph>}
      {action && <div slot="action">{action}</div>}
    </StyledFeatureBlock>
  );
};

export { FeatureBlock, StyledFeatureBlock };
