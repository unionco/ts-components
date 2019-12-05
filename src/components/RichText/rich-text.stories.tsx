import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { RichText } from "./index";
import { select } from "@storybook/addon-knobs";

storiesOf("Rich Text", module)
  .add("Default", () => {
    const style = select('Tightness', ['default', 'tight', 'loose'], 'default');
    return (
      <ThemeProvider>
        <BaseStyles />
        <RichText tightness={style}>
          <h2>Short headline</h2>
          <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur.</p>

          <h3>Medium length title</h3>
          <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <figure>
            <img src="https://placehold.it/600x300.png" alt="article image" />
          </figure>

          <h4>Medium length headline</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

          <ul>
            <li>Cras justo odio, dapibus ac facilisis in</li>
            <li>Egestas eget quam</li>
            <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris</li>
            <li>Nibh, ut fermentum massa justo sit amet risus </li>
          </ul>

          <h4>Medium length headline</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

          <ol>
            <li>Cras justo odio, dapibus ac facilisis in</li>
            <li>Egestas eget quam</li>
            <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris</li>
            <li>Nibh, ut fermentum massa justo sit amet risus </li>
          </ol>

          <blockquote>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <span>John Smith</span>
          </blockquote>
        </RichText>
      </ThemeProvider>
    );
  });
