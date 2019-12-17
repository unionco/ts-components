import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { ModalComponent as Modal } from './index';
import { Media } from '../index';

storiesOf("Modal", module)
  .add("Default", () => (
    <ThemeProvider>
      <BaseStyles />
      <Modal>
        <Media type="image" />
      </Modal>
    </ThemeProvider>
  ));
