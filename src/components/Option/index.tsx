import React, { forwardRef } from 'react';

type Ref = HTMLOptionElement;

type IOptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

const OptionComponent: React.FC<IOptionProps> = ({
  value,
  disabled,
  children
}) => (
  <option value={value} disabled={disabled}>
    {children}
  </option>
);

export const Option = forwardRef<Ref, IOptionProps>((props, ref) => (
  <OptionComponent ref={ref} {...props} />
))

export { IOptionProps };
