import React from 'react';

interface IOptionProps {
  value?: string;
  disabled?: boolean;
};


class Option extends React.Component<IOptionProps> {
  public render() {
    const { value, disabled, children } = this.props;

    return (
      <option
        value={value}
        disabled={disabled}
      >
        {children}
      </option>
    )
  }
}

export { Option, IOptionProps };