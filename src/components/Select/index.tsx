import React, { ReactNode, useState } from 'react';
import { StyledSelect, StyledSelectProps, SelectWrapper } from './styles';
import { Label } from '../Label';

interface SelectProps extends StyledSelectProps {
  id?: string;
  name?: string;
  multiple?: boolean;
  defaultValue?: string;
  value?: string;
  label?: string;
  onChange?: (e: any) => void;
  children: ReactNode | ReactNode[];
}

const Select: React.FC<SelectProps> = ({
  id = Math.random().toString(36).substring(2, 6),
  name,
  defaultValue,
  value,
  required,
  multiple = false,
  label,
  disabled,
  onChange,
  children,
  position = 'stacked',
  ...rest
}) => {
  const [hasValue, setHasValue] = useState(false);
  const props = { disabled, onChange, value, name, ...rest };

  const getSvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <title>down-arrow</title>
        <g fill="#000000">
          <path
            d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
            fill="#000000"
          ></path>
        </g>
      </svg>
    );
  };

  const onChangeProxy = (e: any) => {
    if (e.target.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <SelectWrapper position={position} disabled={disabled} hasValue={hasValue} {...rest}>
      {position && position !== 'floating' && (
        <Label required={required} htmlFor={`select-${id}`}>
          {label}
        </Label>
      )}
      <StyledSelect
        id={`select-${id}`}
        aria-label={name}
        {...props}
        defaultValue={defaultValue}
        onChange={onChangeProxy}
        multiple={multiple}
        required={required}
      >
        {children}
      </StyledSelect>
      {position && position === 'floating' && (
        <Label required={required} htmlFor={`select-${id}`}>
          {label}
        </Label>
      )}
      {!multiple && getSvg()}
    </SelectWrapper>
  );
};

export { Select, SelectWrapper, StyledSelect, SelectProps };
