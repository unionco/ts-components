import React from 'react';
import { StyledCheckbox, StyledCheckboxInput, StyledCheckboxLabel, IStyledCheckboxProps } from './styles';

interface ICheckboxProps
  extends IStyledCheckboxProps {
    id?: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    inner?: JSX.Element;
    label: string;
    onChange?: (e: any) => void;
  };

const Checkbox: React.FC<ICheckboxProps> = ({
  boxSize = 'medium',
  defaultChecked,
  disabled,
  fill = 'default',
  id = Math.random().toString(36).substring(2, 6),
  inner,
  label,
  name,
  onChange,
  round = false,
  value,
  variant = 'primary',
  ...rest
}) => {
  const props = { disabled, onChange, value, ...rest };
  const wrapperProps = { disabled, boxSize, variant };

  return (
    <>
      <StyledCheckbox {...wrapperProps}>
        <StyledCheckboxInput type="checkbox" id={`input-${id}`} defaultChecked={defaultChecked} variant={variant} {...props} aria-label={name} />
        <div className="state">
          {inner && <div slot="inner">{inner}</div>}
          <StyledCheckboxLabel htmlFor={`input-${id}`} fill={fill} round={round} size={boxSize}>{label}</StyledCheckboxLabel>
        </div>
      </StyledCheckbox>
    </>
  );
}

export default Checkbox;
export {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxInput,
  ICheckboxProps
};
