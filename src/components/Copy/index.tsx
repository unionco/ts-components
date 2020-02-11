import React from 'react';
import { Eyebrow } from '../Eyebrow';
import { RichText } from '../RichText';
import { H2, H3 } from '../Typography';
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
      {heading && <H2 as="h1">{heading}</H2>}
      {subheading && <H3 as="h2" dangerouslySetInnerHTML={{ __html: subheading }} />}

      {
        copy && (
          <RichText tightness="default" twoCol={twoCol}>
            <div dangerouslySetInnerHTML={{ __html: copy }} />
          </RichText>
        )
      }

      {action && <div slot="actions">{action}</div>}
    </StyledCopy>
  );
};

export { Copy, StyledCopy, ICopyProps };
