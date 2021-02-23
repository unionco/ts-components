import Modal from 'react-modal';
import { variant, SpaceProps, space } from 'styled-system';
import styled from 'styled-components';

const modalSize = variant({
  prop: 'modalSize',
  scale: 'modalSizes',
});

export type StyledModalProps = SpaceProps & {
  /** Image url for background image */
  modalSize?: string;
  top?: number;
  right?: number;
};

const StyledModal = styled(Modal)<StyledModalProps>`
  bottom: auto;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  .Modal-close {
    background: none;
    border: 0;
    color: #000;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    right: ${(props) => (props.right ? props.right : 40)}px;
    text-shadow: 0 0px 5px rgba(255, 255, 255);
    top: ${(props) => (props.top ? props.top : 40)}px;
  }

  ${modalSize}
  ${space}
`;

export { StyledModal };
