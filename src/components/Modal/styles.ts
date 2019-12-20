import { styled, IThemeStyledFunction } from '../../styles';
import Modal from 'react-modal';
import { variant, SpaceProps, space } from 'styled-system'

const modalSize = variant({
    prop: 'modalSize',
    scale: 'modalSizes'
});

export type IModalProps = IThemeStyledFunction<'div'> & SpaceProps & {
    /** Image url for background image */
    modalSize?: string;
}

const StyledModal = styled(Modal)<IModalProps>`
    bottom: auto;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    .Modal-close {
        background: none;
        border: 0;
        color: #000;
        font-size: 24px;
        position: absolute;
        right: 40px;
        top: 40px;
    }

    ${modalSize}
    ${space}
`;

export { StyledModal };
