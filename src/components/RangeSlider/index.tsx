import React, { ReactNode } from 'react';
import { Range } from 'react-range';
import { Box } from '../Box';
import { DefaultHandle, DefaultTrack, TrackColor } from './styles';
import { Paragraph } from '../Typography';

export interface IRangeSlider extends TrackColor {
  min: number,
  max: number;
  onChange: (values: number[]) => void; // [TODO] same as above, just a copy/paste
  values: number[];
  minLabel?: string,
  maxLabel?: string;
  Handle?: (props: any) => ReactNode; // [TODO] This is defined in the react-range types, just not exported individually
  onFinalChange?: (values: number[]) => void; // [TODO] same as above, just a copy/paste
}


const RangeSlider: React.FC<IRangeSlider> = ({
  min,
  max,
  minLabel,
  maxLabel,
  Handle,
  onChange,
  onFinalChange,
  values,
  ...rest
}) => {
  const DefaultThumb = ({ props }: { props: any }) => (
    <DefaultHandle {...props} {...rest} />
  );

  const handleChange = (values: number[]) => {
    onChange(values);
  }

  const handleFinalChange = (values: number[]) => {
    if (onFinalChange) {
      onFinalChange(values);
    }
  };

  return (
    <>
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <DefaultTrack values={values} min={min} max={max} {...props} {...rest}>
            {children}
          </DefaultTrack>
        )}
        renderThumb={Handle || DefaultThumb}
        {...rest}
      />
      <Box display="flex" justifyContent="space-between">
        <Paragraph>{minLabel}</Paragraph>
        <Paragraph>{maxLabel}</Paragraph>
      </Box>
    </>
  );
};

export default RangeSlider;
