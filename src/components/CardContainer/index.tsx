// import React from 'react';
import { styled } from '../../styles';
import { Card } from '../Card/styles'

interface ICardContainerProps {
  gap?: number | string;
  perRow?: number;
};

const CardContainer = styled.div.attrs(({ gap }: ICardContainerProps) => ({
  gap: gap || 2,
}))<ICardContainerProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${props => props.gap}%;
  width: calc(100% + ${props => props.gap}%);

  ${Card} {
    margin-bottom: calc(2 * ${props => props.gap}%);
    margin-left: ${props => props.gap}%;
    width: calc(100% - ${props => props.gap}%);
  }

  ${props => props.theme.media.sm} {
    ${Card} {
      width: calc(${props => `${100 / (props.perRow || 3)}%`} - ${props => props.gap}%);
    }
  }
`;


export { CardContainer, ICardContainerProps };
