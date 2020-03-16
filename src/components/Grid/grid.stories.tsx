import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Grid } from './index';
import { GridItem } from '../GridItem';

storiesOf("Grid", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Grid>
        <GridItem size={[12, 6, 4]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 4
          </div>
        </GridItem>
        <GridItem size={[12, 6, 4]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 4
          </div>
        </GridItem>
        <GridItem size={[12, 6, 4]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 4
          </div>
        </GridItem>
      </Grid>
      <br/><br/>
      <Grid>
        <GridItem size={[12, 6, 3]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 3
          </div>
        </GridItem>
        <GridItem size={[12, 6, 3]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 3
          </div>
        </GridItem>
        <GridItem size={[12, 6, 3]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 3
          </div>
        </GridItem>
        <GridItem size={[12, 6, 3]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 3
          </div>
        </GridItem>
      </Grid>
      <br/><br/>
      <Grid>
        <GridItem backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            Flex Item (auto)
          </div>
        </GridItem>
        <GridItem backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            Flex Item (auto)
          </div>
        </GridItem>
      </Grid>
      <br /><br />
      <Grid>
        <GridItem size={[12, 6, 6]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 6
          </div>
        </GridItem>
        <GridItem size={[12, 6, 4]} offSet={[0, 0, 2]} backgroundColor="light.shade">
          <div style={{ width: '100%' }}>
            12 / 6 / 6 with offSet 0 / 0 / 2
          </div>
        </GridItem>
      </Grid>
    </ThemeProvider>
  ));
