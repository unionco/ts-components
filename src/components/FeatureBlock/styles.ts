import { styled } from '../../styles';
import { Icon } from '../Icon/styles'

const StyledFeatureBlock = styled.div`
    ${Icon} {
        height: 32px;
        width: 32px;
    }

    a {
        color: ${props => props.theme.colors.primary.base};
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        margin-bottom: 0.5em;
    }

    p {
        margin-bottom: 1em;
    }
`;

export { StyledFeatureBlock };
