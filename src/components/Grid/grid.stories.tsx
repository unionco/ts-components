import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Grid, GridItem } from './index';

storiesOf("Grid", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 6]}>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item 12 / 6
          </div>
        </GridItem>
        <GridItem size={[12, 6]}>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item 12 / 6
          </div>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem size={[12, 6, 4]}>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item 12 / 6 / 4
          </div>
        </GridItem>
        <GridItem size={[12, 6, 8]}>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item 12 / 6 / 8
          </div>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem>
          <div style={{ width: '100%', background: '#ddd' }}>
            Flex Item (auto)
          </div>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ));
