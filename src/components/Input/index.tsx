import React from 'react';
import { StyledInput, IStyledInputProps } from './styles';

interface IInputProps
  extends IStyledInputProps {
    type?: string;
    id?: string;
    name?: string;
    placeholder?: string;
  };

interface IInputState {
  value?: string;
  hasFocus: string;
}

class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      value: '',
      hasFocus: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  public handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  public onFocus() {
    this.setState({
      hasFocus: 'has-focus'
    });
  }

  public onBlur() {
    this.setState({
      hasFocus: ''
    });
  }

  public render() {
    const { type = 'text', id, name, placeholder, disabled, required } = this.props;
    let className = this.state.hasFocus;

    if (this.state.value) {
      className += ' has-value'
    }

    return (
      <StyledInput
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={this.state.value}
        disabled={disabled}
        required={required}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}

export { Input, StyledInput, IInputProps };
