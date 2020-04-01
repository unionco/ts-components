import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Container, Icon, Section, ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { TextInput } from './index';
import { icons } from '../Icon/icon.stories';


storiesOf("Text Input", module)
  .add("Default", () => {
    const hasStartIcon = boolean('Use Start Icon?', false);
    const iconName = select('Start Icon', icons.map(i => i.name), 'Search');
    const IconComponent = icons.find(icon => icon.name === iconName)?.component || React.Fragment;

    const inputProps = {
      label: text('Input Label', 'Label Value'),
      placeholder: text('Input Placeholder', 'Placeholder Value'),
      floating: boolean('Use Floating Label?', false),
      error: text('Input Error Message', 'Example Error Message'),
      ...(hasStartIcon && { start: <Icon icon={<IconComponent />} />})
    };

    return (
      <ThemeProvider>
        <BaseStyles />
        <Section m={6}>
          <Container>
            <TextInput {...inputProps} />
          </Container>
        </Section>
      </ThemeProvider>
    );
  })
