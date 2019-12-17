import React, { useState } from 'react';
import { StyledModal } from './styles';
import { Button } from '../index';

interface IModal {
  isOpen?: boolean | false;
  onAfterOpen?: () => void;
  onRequestClose?: () => void;
  style?: object | null;
  contentLabel?: string | null;
}

const customStyles = {
  content: {
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ModalComponent: React.FC<IModal> = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

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
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.children}
        <button className="Modal-close" onClick={closeModal}>×</button>
      </StyledModal>
    </>
  );
}

export { ModalComponent, StyledModal, IModal };
