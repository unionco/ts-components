import React, { useState } from 'react';
import { StyledSelect, IStyledSelectProps, SelectWrapper } from './styles';
import { Label } from '../Label';

interface ISelectProps
  extends IStyledSelectProps {
  id?: string;
  name?: string;
  multiple?: boolean;
  selectedValue?: string;
  value?: string;
  label: string;
  onChange?: (e: any) => void;
};

const Select: React.FC<ISelectProps> = ({
  id = Math.random().toString(36).substring(2, 6),
  name,
  floating,
  selectedValue,
  value,
  required,
  multiple,
  label,
  disabled,
  onChange,
  children,
  ...rest
}) => {
  const [hasValue, setHasValue] = useState(false);
  const props = { disabled, onChange, value, name, ...rest };

  const getSvg = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><title>down-arrow</title><g fill="#000000"><path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="#000000"></path></g></svg>
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
  }

  return (
    <SelectWrapper floating={floating} disabled={disabled} value={hasValue}>
      {!floating && <Label htmlFor={`select-${id}`}>{label}</Label>}
      <StyledSelect id={`select-${id}`} aria-label={name} {...props} onChange={onChangeProxy}>
        {children}
      </StyledSelect>
      {floating && <Label htmlFor={`select-${id}`}>{label}</Label>}
      {getSvg()}
    </SelectWrapper>
  );
}

export { Select, StyledSelect, ISelectProps };

// class Select extends React.Component<ISelectProps, ISelectState> {
//   constructor(props: ISelectProps) {
//     super(props);
//     this.state = {
//       value: this.props.selectedValue,
//       hasFocus: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.onFocus = this.onFocus.bind(this);
//   }

//   public onFocus() {
//     this.setState({
//       hasFocus: 'has-focus'
//     });
//   }

//   public handleChange(event: any) {
//     this.setState({value: event.target.value});
//   }

//   public render() {
//     const { id, name, disabled, required, multiple, floating = false, children } = this.props;
//     const { value, hasFocus } = this.state;

//     return (
//       <StyledSelect className={hasFocus} floating={floating} required={required} disabled={disabled}>
//         <select
//           id={id}
//           name={name}
//           value={value}
//           disabled={disabled}
//           required={required}
//           multiple={multiple}
//           onChange={this.handleChange}
//           onFocus={this.onFocus}
//         >
//           {children}
//         </select>
//       </StyledSelect>
//     )
//   }
// }
