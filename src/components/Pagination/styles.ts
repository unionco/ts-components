import { get } from 'lodash';
import { styled } from '../../styles';
import { colors } from '../../theme';

export interface IStyledPaginationProps {
  buttonSize?: 'small' | 'medium' | 'large';
  perPage?: number;
  variant?: keyof typeof colors;
}

export const StyledPagination = styled.nav<IStyledPaginationProps>`
  button {
    --neo-color-base: ${(props) => get(props.theme, `colors.${props.variant}.base`)};
    background: var(--neo-color-base);
    border: 0;
  }
`;