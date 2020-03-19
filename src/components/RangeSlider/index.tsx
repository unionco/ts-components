import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styled from 'styled-components';

const Handle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rebeccapurple;
`;

interface IRangeSlider {
  min: number,
  max: number;
}

console.log('getTrackBackground', getTrackBackground);

const RangeSlider: React.FC<IRangeSlider> = ({ min, max }) => {
  const [values, setValues] = useState([20, 50]);

  console.log('values',values);

  return (
    <Range
      step={1}
      min={min}
      max={max}
      values={values}
      onChange={values => setValues([...values])}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '6px',
            width: '100%',
            background: getTrackBackground({
              values: values,
              colors: ["#ccc", "#f03", "#ccc"],
              min,
              max
            })
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => <Handle {...props} />}
    />
  );
};

export default RangeSlider;
