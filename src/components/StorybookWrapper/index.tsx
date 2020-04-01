import React, { ReactNode } from 'react';
import { Container, Section, ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';

interface IStorybookWrapper {
  children: ReactNode | ReactNode[];
};

const StorybookWrapper: React.FC<IStorybookWrapper> = ({ children }) => (
  <ThemeProvider>
    <BaseStyles />
    <Section m={6}>
      <Container>
        { children }
      </Container>
    </Section>
  </ThemeProvider>
);

export default StorybookWrapper;
