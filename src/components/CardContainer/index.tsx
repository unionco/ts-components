// import React from 'react';
import styled from 'styled-components';

export interface StyledCardContainerProps {
  gap?: number | string;
  perRow?: number;
}

const CardContainer = styled.div.attrs(({ gap }: StyledCardContainerProps) => ({
  gap: gap || 2,
}))<StyledCardContainerProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${(props: any) => props.gap}%;
  width: calc(100% + ${(props: any) => props.gap}%);

  > * {
    margin-bottom: calc(2 * ${(props: any) => props.gap}%);
    margin-left: ${(props: any) => props.gap}%;
    width: calc(100% - ${(props: any) => props.gap}%);
  }

  ${(props: any) => props.theme.media.sm} {
    > * {
      width: calc(50% - ${(props: any) => props.gap}%);
    }
  }

  ${(props: any) => props.theme.media.md} {
    > * {
      width: calc(${(props: any) => `${100 / (props.perRow || 3)}%`} - ${(props: any) => props.gap}%);
    }
  }
`;

export { CardContainer };
