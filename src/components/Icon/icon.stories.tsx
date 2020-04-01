import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Icon } from './index';
import { Flex, FlexItem } from "../Flex";
import AddressBook from './icons/AddressBook';
import Alarm from './icons/Alarm';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';
import ArrowDown from './icons/ArrowDown';
import ArrowUp from './icons/ArrowUp';

storiesOf("Icon", module)
  .add("Default", () => {
    const color = select('Color', [
      'primary',
      'secondary',
      'tertiary',
      'success',
      'danger',
      'warning',
      'dark',
      'medium',
      'light',
    ], 'primary');

    return (
      <ThemeProvider>
        <BaseStyles />
        <Flex wrap alignCenter>
          {icons.map((icon, index: number) => {
            const Component = icon.component;
            return (
              <FlexItem key={index} basis="10%">
                <div style={{ border: '1px solid #eee', padding: '16px', textAlign: 'center' }}>
                  <Icon icon={<Component />} color={color} />
                  <p style={{ textAlign: 'center', fontSize: '10px' }}>{icon.name}</p>
                </div>
              </FlexItem>
            );
          })}
        </Flex>
      </ThemeProvider>
    )
  })

export const icons = [
  { name: 'AddressBook', component: AddressBook },
  { name: 'Alarm', component: Alarm },
  { name: 'ArrowLeft', component: ArrowLeft },
  { name: 'ArrowRight', component: ArrowRight },
  { name: 'ArrowDown', component: ArrowDown },
  { name: 'ArrowUp', component: ArrowUp },
];
