import { styled } from '../../styles';
import Modal from 'react-modal';

const StyledModal = styled(Modal)`
    bottom: auto;
    height: calc(100% - 120px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 120px);

    .Modal-close {
        background: none;
        border: 0;
        color: #000;
        font-size: 24px;
        position: absolute;
        right: 40px;
        top: 40px;
    }
`;

export { StyledModal };
