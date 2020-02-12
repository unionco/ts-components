import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Button } from "./index";

storiesOf("Button", module)
  .add("Default", () => {
    const fill = select('Fill', ['solid', 'outline', 'clear'], 'solid');
    const size = select('Size', ['small', 'medium', 'large'], 'medium');
    const textLink = boolean('Text Link', false);
    return (
      <ThemeProvider>
        <BaseStyles />
        <Button fill={fill} size={size} textLink={textLink} variant="primary">Primary Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="secondary">Secondary Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="tertiary">Tertiary Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="success">Success Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="warning">Warning Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="danger">Danger Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="dark">Dark Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="medium">Medium Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="light">Light Button</Button>
        <Button fill={fill} size={size} textLink={textLink} variant="link">Link Button</Button>
      </ThemeProvider>
    );
  })
  .add("Slots", () => (
    <ThemeProvider>
      <BaseStyles />
      <Button size="small" variant="primary" start={<i>&larr;</i>}>
        Slot Start
      </Button>
      <Button size="small" variant="primary" end={<i>&rarr;</i>}>
        Slot End
      </Button>
      <Button size="small" variant="primary" iconOnly={<i>&#x2713;</i>} />
      Icon Only
    </ThemeProvider>
  ));
