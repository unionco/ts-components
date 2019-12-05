import React from 'react';
import { StyledCheckbox, IStyledCheckboxProps } from './styles';

interface ICheckboxProps 
  extends IStyledCheckboxProps {
    id?: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
  };

class Checkbox extends React.Component<ICheckboxProps> {
  public render() {
    const {id, name, value, defaultChecked, disabled, variant = 'primary', checkedColor = 'primary', checkboxSize = 'small'} = this.props;

    return (
      <StyledCheckbox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
        checkedColor={checkedColor}
        variant={variant}
        checkboxSize={checkboxSize}
      />
    )
  }
}

export { Checkbox, StyledCheckbox, ICheckboxProps };