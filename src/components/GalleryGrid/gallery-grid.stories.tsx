import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { GalleryGrid, GalleryGridItem } from "./index";

storiesOf("Gallery Grid", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <GalleryGrid>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
        <GalleryGridItem>
          <img src="https://placehold.it/200x200.png" alt="image" />
        </GalleryGridItem>
      </GalleryGrid>
    </ThemeProvider>
  ));
