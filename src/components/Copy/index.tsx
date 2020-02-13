import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { RichText } from '../RichText';
import { Copy as StyledCopy, IStyledCopyProps } from './styles';
import { H1, H2 } from '../Typography';

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
      {heading && <H1 className="h2">{heading}</H1>}
      {subheading && <H2 className="h3" dangerouslySetInnerHTML={{ __html: subheading }} />}

      {
        copy && (
          <RichText
            tightness="default"
            twoCol={twoCol}
            dangerouslySetInnerHTML={{ __html: copy }}
          />
        )
      }

      {action && <div slot="actions">{action}</div>}
    </StyledCopy>
  );
};

export { Copy, StyledCopy, ICopyProps };
