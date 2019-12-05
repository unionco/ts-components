import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { MasonryGrid, MasonryGridItem } from "./index";

storiesOf("Masonry Grid", module)
  .add("Default", () => {
    const minHeight = text('Min Height in vmin', '90vmin');
    const padding = number('Item Padding', 4);
    const value = number('Gallery Items', 2);
    const items = [...Array(value).keys()];

    return (
      <ThemeProvider>
        <BaseStyles />
        <MasonryGrid minHeight={minHeight} padding={padding}>
          {items.map((key: number) => (
            <MasonryGridItem key={key}>
              <img src="https://placehold.it/200x200.png" alt="image" />
            </MasonryGridItem>
          ))}
        </MasonryGrid>
      </ThemeProvider>
    );
  });
