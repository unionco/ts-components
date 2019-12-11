import React from 'react';
import { StyledSelect, IStyledSelectProps } from './styles';

interface ISelectProps
  extends IStyledSelectProps {
    id?: string;
    name?: string;
    multiple?: boolean;
    selectedValue?: string;
  };

interface ISelectState {
  value?: string;
  hasFocus: string;
}

class Select extends React.Component<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);
    this.state = {
      value: this.props.selectedValue,
      hasFocus: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  public onFocus() {
    this.setState({
      hasFocus: 'has-focus'
    });
  }

  public handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  public render() {
    const { id, name, disabled, required, multiple, floating = false, children } = this.props;
    const { value, hasFocus } = this.state;

    return (
      <StyledSelect className={hasFocus} floating={floating} required={required} disabled={disabled}>
        <select
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          multiple={multiple}
          onChange={this.handleChange}
          onFocus={this.onFocus}
        >
          {children}
        </select>
      </StyledSelect>
    )
  }
}

export { Select, StyledSelect, ISelectProps };