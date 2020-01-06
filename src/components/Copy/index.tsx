import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { Copy as StyledCopy, IStyledCopyProps } from './styles';

interface ICopyProps extends IStyledCopyProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  copy?: string;
  action?: JSX.Element;
}

const Copy: React.FC<ICopyProps> = ({
  eyebrow,
  heading,
  subheading,
  copy,
  action,
  twoCol = false,
  ...rest
}) => {

  const props = { copy, twoCol, ...rest };
  return (
    <StyledCopy {...props}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {heading && <h1>{heading}</h1>}
      {subheading && <h5>{subheading}</h5>}
      {copy && <div className="copy" dangerouslySetInnerHTML={{ __html: copy }} />}
      {action && <div slot="actions">{action}</div>}
    </StyledCopy>
  );
};

export { Copy, StyledCopy, ICopyProps };
