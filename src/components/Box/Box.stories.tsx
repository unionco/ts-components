import React from "react";
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '../../index';
import Box from './index';

storiesOf("Box", module)
  .add("Default", () => {
    return (
      <ThemeProvider>
        <Box>
          <h1>Here is a regular Box</h1>
        </Box>

        <Box m={4} p={4} backgroundColor="rebeccapurple" display="flex" justifyContent="space-between" color="white">
          <h1>Here is a styled Box</h1>
          <h2>Second flex</h2>
        </Box>
      </ThemeProvider>
    );
  });
