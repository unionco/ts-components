import { themeGet } from '@styled-system/theme-get';
import { styled } from '../../styles';
import { colors } from '../../theme';

export interface IStyledPaginationProps {
  align?: 'left' | 'center' | 'right';
  buttonSize?: 'small' | 'medium' | 'large';
  perPage?: number;
  variant?: keyof typeof colors;
}

export const StyledPagination = styled.div<IStyledPaginationProps>`
  border-top: 1px solid #BDBDBD;
  width: 100%;

  nav {
    display: flex;
    justify-content: ${(props) => {
      if (props.align === 'left') {
        return 'flex-start';
      } else if (props.align === 'right') {
        return 'flex-end';
      } else {
        return 'center';
      }
    }};
  }

  button {
    border: 0;
    font-size: 16px;
    font-weight: bold;
    background: none;

    [disabled] {
      opacity: 0.5;
    }

    &.Pagination-button {
      &[disabled] {
        border-top: 5px solid ${themeGet('colors.primary.base')};
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
      align-items: flex-end;
      display: inline-flex;
      margin-left: 40px;
    }

    &-prev {
      align-items: flex-end;
      display: inline-flex;
      margin-right: 40px;
    }

    &-spacer {
      align-items: flex-end;
      display: inline-flex;
      font-size: 12px;
      justify-content: center;
      opacity: 0.3;
      text-align: center;
      width: 40px;
    }
  }
`;
