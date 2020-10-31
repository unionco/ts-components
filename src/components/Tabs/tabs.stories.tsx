import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Tabs } from './index';
import { TabsPanel } from '../TabsPanel';
import { TabsLink } from '../TabsLink';
import { TabsBar } from '../TabsBar';
import { select } from '@storybook/addon-knobs';

storiesOf('Tabs', module).add('Default', () => {
  const backgroundColor = select('Tabs Bar Background', ['default', 'primary', 'secondary', 'medium'], 'default');

  return (
    <ThemeProvider>
      <BaseStyles />
      <Tabs
        tabs={
          <TabsBar variant={backgroundColor} mb={3}>
            <TabsLink value={0}>Tab1</TabsLink>
            <TabsLink value={1}>Tab2</TabsLink>
            <TabsLink value={2}>Tab3</TabsLink>
          </TabsBar>
        }
        panels={
          <>
            <TabsPanel index={0}>
              <h3>Panel 1</h3>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.
              </p>
            </TabsPanel>
            <TabsPanel index={1}>
              <h3>Panel 2</h3>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus.
              </p>
            </TabsPanel>
            <TabsPanel index={2}>
              <h3>Panel 3</h3>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam.
              </p>
            </TabsPanel>
          </>
        }
      />
    </ThemeProvider>
  );
});
