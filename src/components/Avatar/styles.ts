import { styled } from '../../styles';
import { objectFit } from '../../theme/mixins'

const StyledAvatar = styled.div`
    background: gray;
    border-radius: 50%;
    flex-shrink: 0;
    height: 64px;
    overflow: hidden;
    width: 64px;

    img {
        height: 100%;
        ${objectFit('cover')}
        width: 100%;
    }
`;

export { StyledAvatar };
