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
    font-size: 16px;
    font-weight: bold;

    [disabled] {
      opacity: 0.5;
    }

    &.Pagination-button {
      &[disabled] {
        border-top: 5px solid ${props => props.theme.colors.primary.base}
        cursor: initial;
      }
    }
  }

  .Pagination {
    &-button {
      align-items: flex-end;
      cursor: pointer;
      display: inline-flex;
      height: 40px;
      justify-content: center;
      width: 40px;
    }

    &-next {
      margin-left: 40px;
    }

    &-prev {
      margin-right: 40px;
    }

    &-spacer {
      align-items: center;
      display: inline-flex;
      font-size: 12px;
      justify-content: center;
      opacity: 0.3;
      text-align: center;
      width: 40px;
    }
  }
`;