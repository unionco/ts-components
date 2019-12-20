import { styled } from '../../styles';

const StyledAvatar = styled.div`
    background: gray;
    border-radius: 50%;
    flex-shrink: 0;
    height: 64px;
    overflow: hidden;
    width: 64px;

    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

export { StyledAvatar };
