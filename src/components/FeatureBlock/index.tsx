import React from 'react';
import { StyledFeatureBlock } from './styles';
import { Icon } from '../Icon';

interface IFeatureBlock {
  icon?: JSX.Element;
  title?: string;
  copy?: string;
  link?: string;
  linkText?: string;
}

const FeatureBlock: React.FC<IFeatureBlock> = ({icon, title, copy, link, linkText}) => {
  return (
    <StyledFeatureBlock>
      {icon && (<Icon icon={icon} />)}
      {title && (<h4>{title}</h4>)}
      {copy && (<p>{copy}</p>)}
      {link && (<a href={link}>{linkText ? linkText : 'Learn More'}</a>)}
    </StyledFeatureBlock>
  );
}

export { FeatureBlock, StyledFeatureBlock, IFeatureBlock };
