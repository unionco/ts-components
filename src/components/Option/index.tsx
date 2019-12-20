import React from 'react';

interface IOptionProps {
  value?: string;
  disabled?: boolean;
};

const Option: React.FC<IOptionProps> = ({
  value,
  disabled,
  children
}) => (
  <option value={value} disabled={disabled}>
    {children}
  </option>
);

export { Option, IOptionProps };