import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Container } from './index';

storiesOf('Container', module).add('Default', () => (
  <ThemeProvider>
    <BaseStyles />
    <Container>
      <div style={{ background: '#eee', padding: '50px', marginBottom: '50px' }}>Contained Max Width</div>
    </Container>
    <Container variant="thin">
      <div style={{ background: '#eee', padding: '50px', marginBottom: '50px' }}>Contained Max Width (thin)</div>
    </Container>
    <Container variant="extra-thin">
      <div style={{ background: '#eee', padding: '50px', marginBottom: '50px' }}>Contained Max Width (extra-thin)</div>
    </Container>
  </ThemeProvider>
));
