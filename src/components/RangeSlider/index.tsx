import React from 'react';
import { Range, RangeProps } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider: React.FC<RangeProps> = (props) => {
  console.log('props', props);
  return (
    <Range {...props} />
  );
};

export default RangeSlider;
