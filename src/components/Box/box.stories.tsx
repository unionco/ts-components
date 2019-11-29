import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./index";
import { Theme as ThemeProvider } from '../../index';

storiesOf("Box", module)
  .add("Default", () => (
    <ThemeProvider>
      <Box>
        Box can be used to create both <Box as="span" bg="primary.base">inline</Box> and
        <Box bg="tertiary.base">block-level elements,</Box>
        <Box bg="secondary.base" width={[1, 1, 1 / 2]}>elements with fixed or responsive width and height,</Box>
        <Box bg="warning.base" p={4} mt={2}>and more!</Box>
      </Box>
    </ThemeProvider>
  ));
