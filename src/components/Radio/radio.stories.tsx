import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider, Grid, GridItem } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Radio } from './index';

storiesOf('Radio', module).add('Default', () => {
  const size = select('Size', ['small', 'medium', 'large'], 'medium');
  const fill = select('Fill', ['default', 'full', 'thick'], 'default');

  return (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12]} py={4} px={8}>
          <Radio
            label="Click Me"
            fill={fill}
            value="A"
            name="checkbox-a"
            variant="primary"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="B"
            name="checkbox-a"
            variant="success"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-a"
            variant="danger"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
        <GridItem size={[12]} py={4} px={8}>
          <Radio
            label="Click Me"
            fill={fill}
            value="A"
            name="checkbox-b"
            variant="primary"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="B"
            name="checkbox-b"
            variant="success"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-b"
            variant="danger"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
        <GridItem size={[12]} py={4} px={8}>
          <Radio
            label="Click Me"
            fill={fill}
            value="A"
            name="checkbox-c"
            variant="primary"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="B"
            name="checkbox-c"
            variant="success"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Radio
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-c"
            variant="danger"
            size={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
      </Grid>
    </ThemeProvider>
  );
});
