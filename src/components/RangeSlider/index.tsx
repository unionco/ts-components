import React from 'react';
import 'rc-slider/assets/index.css';

const RangeSlider = (props: any) => {
  console.log('props', props);
  return (
    <pre>
      {
        JSON.stringify(props, null, 2)
      }
    </pre>
  );
};

export default RangeSlider;
