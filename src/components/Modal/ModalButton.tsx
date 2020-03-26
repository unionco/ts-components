import React, { useState } from 'react';
import Modal from 'react-modal';
import { StyledModal, IModalProps } from './styles';
import { Button } from '../Button';

interface IModalButton extends IModalProps, Modal {
  buttonProps: any;
}

const ModalButton: React.FC<IModalButton> = ({
  buttonProps,
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
      <Button onClick={openModal} {...buttonProps} />
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

export default ModalButton;
