import React from "react";
import { storiesOf } from "@storybook/react";
// import { ThemeProvider } from '../../index';
// import { BaseStyles } from '../BaseStyles';
import RangeSlider from "./index";
// import { select } from "@storybook/addon-knobs";

storiesOf("Range Slider", module)
  .add("Default", () => {
    return (
      <div style={{ width: 400, margin: 20 }}>
        <RangeSlider min={0} max={80} defaultValue={[20, 40]} />
      </div>
    );
  });
