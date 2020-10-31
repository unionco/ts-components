import React, { ReactNode, useState } from 'react';
import { StyledModal, StyledModalProps } from './styles';
import { Button } from '../Button';
import ModalButton from './ModalButton';

export type ModalProps = StyledModalProps & {
  children: ReactNode | ReactNode[];
};

const ModalComponent: React.FC<ModalProps> = ({ modalSize = 'md', ...rest }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const props = { modalSize, ...rest };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // ?
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Open Modal
      </Button>
      <StyledModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} {...props}>
        {props.children}
        <button className="Modal-close" onClick={closeModal}>
          ×
        </button>
      </StyledModal>
    </>
  );
};

export { ModalComponent as Modal, ModalButton, StyledModal };
