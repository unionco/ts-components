import { styled } from '../../styles';

export interface IStyledAccordionProps {
  open?: boolean;
};

export const StyledAccordionTrigger = styled.span<any>`
  display: flex;

  i {
    height: 16px;
    width: 16px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;

export const StyledAccordion = styled.div<IStyledAccordionProps>`
  display: block;

  .accordion_trigger {
    -webkit-appearance: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
    padding: 0;
    outline: none;
    width: 100%;

    ${StyledAccordionTrigger} {
      padding: ${(props) => props.theme.space[3]};

      [slot="start"] {
        padding-right: ${(props) => props.theme.space[3]};
      }

      [slot="end"] {
        margin-left: auto;
        transform: ${(props) => props.open ? `rotate(180deg)` : `rotate(0deg)`};
        transition: all 0.3s ease;
        transform-origin: center center;
      }
    }

    &:hover,
    &:active,
    &:focus {
      background: ${(props) => props.theme.colors.light.base};
    }
  }

  .accordion_panel {
    display: block;
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }
`;
