import React from 'react';
import { StyledRadio, IStyledRadioProps } from './styles';

interface IRadioProps 
  extends IStyledRadioProps {
    id?: string;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
  };

class Radio extends React.Component<IRadioProps> {
  public render() {
    const {id, name, value, defaultChecked, disabled, variant = 'primary', checkedColor = 'primary', radioSize = 'small'} = this.props;

    return (
      <StyledRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        disabled={disabled}
        checkedColor={checkedColor}
        variant={variant}
        radioSize={radioSize}
      />
    )
  }
}

export { Radio, StyledRadio, IRadioProps };