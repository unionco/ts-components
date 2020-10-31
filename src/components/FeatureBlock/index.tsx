import React from 'react';
import { StyledFeatureBlock, IStyledFeatureBlockProps } from './styles';
import { Icon } from '../Icon';
import { H3, Paragraph } from '../Typography';

interface FeatureBlockProps extends IStyledFeatureBlockProps {
  icon?: JSX.Element;
  title?: string;
  copy?: string;
  action?: JSX.Element;
  link?: string;
  linkText?: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon, title, copy, action }) => {
  return (
    <StyledFeatureBlock>
      {icon && <Icon icon={icon} />}
      {title && <H3 className="h4">{title}</H3>}
      {copy && <Paragraph>{copy}</Paragraph>}
      {action && <div slot="action">{action}</div>}
    </StyledFeatureBlock>
  );
};

export { FeatureBlock, StyledFeatureBlock, FeatureBlockProps };
