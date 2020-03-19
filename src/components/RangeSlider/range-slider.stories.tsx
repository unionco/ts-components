import React from "react";
import { storiesOf } from "@storybook/react";
// import { ThemeProvider } from '../../index';
// import { BaseStyles } from '../BaseStyles';
import RangeSlider from "./index";
// import { select } from "@storybook/addon-knobs";

storiesOf("Range Slider", module)
  .add("Default", () => {
    return (
      <RangeSlider min={0} max={120} />
    );
  });
