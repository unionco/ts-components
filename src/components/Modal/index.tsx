import React, { useState } from 'react';
import { default as ReactModal } from 'react-modal';
import { StyledModal, IModalProps } from './styles';
import { Button } from '../Button';
import ModalButton from './ModalButton';

interface IModal extends IModalProps, ReactModal {}

const Modal: React.FC<IModal> = ({
    modalSize = 'md',
    ...rest
  }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const props = {modalSize, ...rest};

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <>
      <Button variant="primary" onClick={openModal}>Open Modal</Button>
      <StyledModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        {...props}
      >
        {props.children}
        <button className="Modal-close" onClick={closeModal}>×</button>
      </StyledModal>
    </>
  );
}

export { Modal, ModalButton, StyledModal, IModal };
