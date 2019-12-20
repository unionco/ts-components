import React, { useState } from 'react';
import { StyledModal, IModalProps } from './styles';
import { Button } from '../Button';

interface IModal extends IModalProps {
  isOpen?: boolean | false;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
}

const ModalComponent: React.FC<IModal> = ({
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

export { ModalComponent, StyledModal, IModal };
