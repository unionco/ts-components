import React, { forwardRef } from 'react';

type Ref = HTMLOptionElement;

export type OptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

const OptionComponent: React.FC<OptionProps> = ({ value, disabled, children }) => (
  <option value={value} disabled={disabled}>
    {children}
  </option>
);

const Option = forwardRef<Ref, OptionProps>((props, ref) => <OptionComponent ref={ref} {...props} />);
Option.displayName = 'Option';

export { Option };
