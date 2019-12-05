import React from 'react';
import { StyledTextarea, IStyledTextareaProps } from './styles';

interface ITextareaProps 
  extends IStyledTextareaProps {
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    cols?: number;
    rows?: number;
  };

interface ITextareaState {
  value?: string;
  hasFocus: string;
}

class Textarea extends React.Component<ITextareaProps, ITextareaState> {
  constructor(props: ITextareaProps) {
    super(props);
    this.state = {
      value: '',
      hasFocus: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  onFocus() {
    this.setState({
      hasFocus: 'has-focus'
    });
  }

  onBlur() {
    this.setState({
      hasFocus: ''
    });
  }

  public render() {
    const {id, name, cols, rows, resize = false, placeholder, disabled, required} = this.props;
    let className = this.state.hasFocus;

    if (this.state.value) {
      className += ' has-value'
    }

    return (
      <StyledTextarea
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        value={this.state.value}
        cols={cols}
        rows={rows}
        resize={resize}
        disabled={disabled}
        required={required}
        onChange={this.handleChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}

export { Textarea, StyledTextarea, ITextareaProps };