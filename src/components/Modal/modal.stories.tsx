import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Button } from '../Button';
import { Modal, ModalButton } from './index';
import { Media } from '../index';

storiesOf("Modal", module)
  .add("Modal Button", () => {
    const modalSize = select('Modal Size', ['sm', 'md', 'lg'], 'lg');
    return (
      <ThemeProvider>
        <BaseStyles />
        <ModalButton
          modalSize={modalSize}
          buttonProps={{
            variant: 'primary',
            children: 'Click to Open',
          }}
        >
          <Media type="image" />
        </ModalButton>
      </ThemeProvider>
    )
  })
  .add("Modal", () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalSize = select('Modal Size', ['sm', 'md', 'lg'], 'lg');

    return (
      <ThemeProvider>
        <BaseStyles />
        <Modal modalSize={modalSize}>
          <Media type="image" />
        </Modal>
        <Button variant="primary" onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</Button>
      </ThemeProvider>
    )
  });
