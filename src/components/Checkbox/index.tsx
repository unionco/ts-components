import React from 'react';
import { CheckboxWrapper, CheckboxInput, CheckboxLabel, IStyledCheckboxProps } from './styles';

interface ICheckboxProps
  extends IStyledCheckboxProps {
    id?: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    inner?: JSX.Element;
    onChange?: (e: any) => void;
  };

const Checkbox: React.FC<ICheckboxProps> = ({
  boxSize = 'medium',
  defaultChecked,
  disabled,
  fill = 'default',
  id = Math.random().toString(36).substring(2, 6),
  inner,
  name,
  onChange,
  round = false,
  value,
  variant = 'primary',
  ...rest
}) => {
  const props = { disabled, onChange, value,...rest };
  const wrapperProps = { disabled, boxSize, variant };

  return (
    <>
      <CheckboxWrapper {...wrapperProps}>
        <CheckboxInput type="checkbox" id={`input-${id}`} defaultChecked={defaultChecked} {...props} aria-label={name} />
        <div className="state">
          {inner && <div slot="inner">{inner}</div>}
          <CheckboxLabel htmlFor={`input-${id}`} fill={fill} round={round} size={boxSize}>Check me</CheckboxLabel>
        </div>
      </CheckboxWrapper>
    </>
  );
}


export { Checkbox, CheckboxLabel, ICheckboxProps };
