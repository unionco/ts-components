import React, { ChangeEvent } from 'react';
import { StyledInput, StyledFiles, IStyledInputProps } from './styles';

interface IInputProps
  extends IStyledInputProps {
    type?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    multiple?: boolean;
    defaultValue?: any;
    onFocus?: (ev: FocusEvent) => void;
    onBlur?: (ev: FocusEvent) => void;
    onChange?: (ev: ChangeEvent) => void;
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
      value: props.defaultValue || '',
      hasFocus: '',
      fileNames: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFileClear = this.onFileClear.bind(this);
  }

  public handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { type } = this.props;

    if (type === 'file') {
      const files: FileList | null = ev.target.files;

      if (files && files.length) {
        const fileNames: string[] = [];

        for (let i = 0; i < files.length; i++) {
          const file = files.item(i);

          if (file) {
            fileNames.push(file.name);
          }
        }

        this.setState({
          fileNames
        });
      }
    }

    this.setState({value: ev.target.value});

    const { onChange } = this.props;
    if (onChange) {
      onChange(ev);
    }
  }

  public onFocus(ev: React.FocusEvent<HTMLInputElement>) {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(ev.nativeEvent);
    }

    this.setState({
      hasFocus: 'has-focus'
    });
  }

  public onBlur(ev: React.FocusEvent<HTMLInputElement>) {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(ev.nativeEvent);
    }
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
    const { type = 'text', id, name, placeholder, disabled, required, multiple, defaultValue } = this.props;
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
          defaultValue={defaultValue}
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
