import React from 'react';
import { StyledInput, StyledFiles, IStyledInputProps } from './styles';

interface IInputProps
  extends IStyledInputProps {
    type?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    multiple?: boolean;
  };

interface IInputState {
  value?: string;
  hasFocus: string;
  fileNames: any[];
}

class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      value: '',
      hasFocus: '',
      fileNames: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFileClear = this.onFileClear.bind(this);
  }

  public handleChange(event: any) {
    if (this.props.type === 'file') {
      this.setState({fileNames: Array.from(event.target.files).map((file: any) => file.name)});
    }

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

  public onFileClear(event: any) {
    if (this.props.type === 'file') {
      this.setState({
        value: ''
      });
      this.setState({fileNames: this.state.fileNames.filter((person) => { 
        return person !== event.target.parentNode.dataset.file;
      })});
    }
  }

  public render() {
    const { type = 'text', id, name, placeholder, disabled, required, multiple } = this.props;
    let className = this.state.hasFocus;

    if (this.state.value) {
      className += ' has-value'
    }

    const fileNames = this.state.fileNames.map((filename, index) =>
      <div key={index} data-file={filename}>{filename} <button onClick={this.onFileClear}>X</button></div>
    );

    return (
      <>
        {type === 'file' && (
          <StyledFiles>
            {fileNames}
          </StyledFiles>
        )}
        <StyledInput
          className={className}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={this.state.value}
          disabled={disabled}
          required={required}
          multiple={multiple}
          onChange={this.handleChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </>
    )
  }
}

export { Input, StyledInput, IInputProps };