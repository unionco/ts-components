import React, { ReactNode, useState } from 'react';
import { StyledModal, StyledModalProps } from './styles';
import { Button } from '../Button';

interface IModalButton extends StyledModalProps {
  children: ReactNode | ReactNode[];
  buttonProps: any;
}

const ModalButton: React.FC<IModalButton> = ({ buttonProps, modalSize = 'md', ...rest }: IModalButton) => {
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
      <Button onClick={openModal} {...buttonProps} />
      <StyledModal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} {...props}>
        {props.children}
        <button className="Modal-close" onClick={closeModal}>
          ×
        </button>
      </StyledModal>
    </>
  );
};

export default ModalButton;
