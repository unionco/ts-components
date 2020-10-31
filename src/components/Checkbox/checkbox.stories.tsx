import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import Checkbox from '.';

storiesOf('Checkbox', module).add('Default', () => {
  const size = select('Size', ['small', 'medium', 'large'], 'medium');
  const fill = select('Fill', ['default', 'full', 'thick'], 'default');

  return (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12]} mb={8}>
          <Checkbox
            label="Click Me"
            fill={fill}
            value="A"
            name="checkbox-a"
            variant="primary"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            value="B"
            name="checkbox-b"
            variant="success"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-c"
            variant="danger"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            disabled
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-c"
            variant="danger"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            disabled
            label="Click Me"
            fill={fill}
            value="C"
            name="checkbox-c"
            variant="danger"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
        <GridItem size={[12]} mb={8}>
          <Checkbox
            label="Click Me"
            fill={fill}
            round
            value="A"
            name="checkbox-a"
            variant="primary"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            round
            value="B"
            name="checkbox-b"
            variant="success"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            round
            value="C"
            name="checkbox-c"
            variant="danger"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
        <GridItem size={[12]} mb={8}>
          <Checkbox
            label="Click Me"
            fill={fill}
            value="A"
            name="checkbox-a"
            variant="primary"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            value="B"
            name="checkbox-b"
            variant="success"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Click Me"
            fill={fill}
            round
            value="C"
            name="checkbox-c"
            variant="danger"
            boxSize={size}
            onChange={(e) => console.log('checked', e.target.value, e.target.checked)}
          />
        </GridItem>
      </Grid>
    </ThemeProvider>
  );
});
