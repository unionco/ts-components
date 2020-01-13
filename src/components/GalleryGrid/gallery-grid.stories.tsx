import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { GalleryGrid, GalleryGridItem } from "./index";

storiesOf("Gallery Grid", module)
  .add("Default", () => {
    const value = number('Gallery Items', 2);
    const items = Array.from(Array(value).keys());

    return (
      <ThemeProvider>
        <BaseStyles />
        <GalleryGrid>
          {items.map((key: number) => (
            <GalleryGridItem key={key}>
              <img src="https://placehold.it/200x200.png" alt="image" />
            </GalleryGridItem>
          ))}
        </GalleryGrid>
      </ThemeProvider>
    );
  });
