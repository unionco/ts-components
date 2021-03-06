import React, { ReactNode } from 'react';
import { Range } from 'react-range';
import { Box } from '../Box';
import { DefaultHandle, DefaultTrack, TrackColor } from './styles';
import { Paragraph } from '../Typography';

export interface RangeSlider extends TrackColor {
  min: number;
  max: number;
  onChange: (values: number[]) => void; // [TODO] same as above, just a copy/paste
  values: number[];
  Handle?: (props: any) => ReactNode; // [TODO] This is defined in the react-range types, just not exported individually
  minLabel?: string;
  maxLabel?: string;
  onFinalChange?: (values: number[]) => void; // [TODO] same as above, just a copy/paste
  step?: number;
}

const RangeSlider: React.FC<RangeSlider> = ({
  Handle,
  max,
  maxLabel,
  min,
  minLabel,
  onChange,
  onFinalChange,
  step,
  values,
  trackColor = 'primary',
  ...rest
}) => {
  const DefaultThumb = ({ props }: { props: any }) => <DefaultHandle {...props} trackColor={trackColor} {...rest} />;

  const handleChange = (values: number[]) => {
    onChange(values);
  };

  const handleFinalChange = (values: number[]) => {
    if (onFinalChange) {
      onFinalChange(values);
    }
  };

  return (
    <>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        onFinalChange={handleFinalChange}
        renderTrack={({ props, children }) => (
          <DefaultTrack trackColor={trackColor} values={values} min={min} max={max} {...props} {...rest}>
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

RangeSlider.defaultProps = {
  step: 1,
};

export default RangeSlider;
export * from './styles';
