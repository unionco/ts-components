import React, { ReactNode } from 'react';
import { Container, Section, ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';

interface StorybookWrapper {
  children: ReactNode | ReactNode[];
}

const StorybookWrapper: React.FC<StorybookWrapper> = ({ children }) => (
  <ThemeProvider>
    <BaseStyles />
    <Section p={6}>
      <Container>{children}</Container>
    </Section>
  </ThemeProvider>
);

export default StorybookWrapper;
