import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Icon } from '../../index';
import { Close, Search } from '../Icon/icons';
import TextInput from './index';
import StorybookWrapper from '../StorybookWrapper';

storiesOf('Text Input', module).add('Default', () => {
  const inputProps = {
    floating: boolean('Use Floating Label?', false),
    error: text('Input Error Message', 'Example Error Message'),
    label: text('Input Label', 'Label Value'),
    placeholder: text('Input Placeholder', 'Placeholder Value'),
  };

  return (
    <StorybookWrapper>
      <TextInput id="textInput-default" {...inputProps} />

      <br />

      <TextInput id="textInput-startIcon" start={<Icon icon={<Search />} />} {...inputProps} />

      <br />

      <TextInput
        id="textInput-endIcon"
        start={<Icon icon={<Search />} />}
        end={<Icon icon={<Close />} />}
        {...inputProps}
      />
    </StorybookWrapper>
  );
});
