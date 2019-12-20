import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { ModalComponent as Modal } from './index';
import { Media } from '../index';

storiesOf("Modal", module)
  .add("Default", () => {
    const modalSize = select('Modal Size', ['sm', 'md', 'lg'], 'lg');
    return (
      <ThemeProvider>
        <BaseStyles />
        <Modal modalSize={modalSize}>
          <Media type="image" />
        </Modal>
      </ThemeProvider>
    )
  });
