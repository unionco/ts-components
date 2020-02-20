import React from 'react';
import { RadioWrapper, RadioInput, RadioLabel, IStyledRadioProps } from './styles';

interface IRadioProps
  extends IStyledRadioProps {
  id?: string;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  inner?: JSX.Element;
  label: string;
  onChange?: (e: any) => void;
};

const Radio: React.FC<IRadioProps> = ({
  size = 'medium',
  defaultChecked,
  disabled,
  fill = 'default',
  id = Math.random().toString(36).substring(2, 6),
  inner,
  label,
  name,
  onChange,
  value,
  variant = 'primary',
  ...rest
}) => {
  const props = { disabled, onChange, value, name, variant, ...rest };
  const wrapperProps = { disabled, size, variant };

  return (
    <RadioWrapper {...wrapperProps}>
      <RadioInput type="radio" id={`input-${id}`} defaultChecked={defaultChecked} {...props} aria-label={name} />
      <div className="state">
        {inner && <div slot="inner">{inner}</div>}
        <RadioLabel htmlFor={`input-${id}`} fill={fill} size={size}>{label}</RadioLabel>
      </div>
    </RadioWrapper>
  );
}


export { Radio, RadioLabel, IRadioProps };
