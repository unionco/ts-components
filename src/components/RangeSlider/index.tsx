import React, { useState, ReactNode } from 'react';
import { Range } from 'react-range';
import { Box } from '../Box';
import { DefaultHandle, DefaultTrack, TrackColor } from './styles';

interface IRangeSlider extends TrackColor {
  min: number,
  max: number;
  minLabel?: string,
  maxLabel?: string;
  Handle?: (props: any) => ReactNode; // [TODO] This is defined in the react-range types, just not exported properly
  onChange?: (values: number[]) => void; // [TODO] same as above, just a copy/paste
}


const RangeSlider: React.FC<IRangeSlider> = ({ min, max, minLabel, maxLabel, Handle, onChange, ...rest }) => {
  const [values, setValues] = useState([min, max]);

  const DefaultThumb = ({ props }: { props: any }) => (
    <DefaultHandle {...props} {...rest} />
  );

  const handleChange = (values: number[]) => {
    if (onChange) {
      return onChange(values);
    }

    setValues([...values]);
  }

  return (
    <>
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <DefaultTrack values={values} min={min} max={max} {...props} {...rest}>
            {children}
          </DefaultTrack>
        )}
        renderThumb={Handle || DefaultThumb}
      />
      <Box display="flex" justifyContent="space-between">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </Box>
    </>
  );
};

export default RangeSlider;
