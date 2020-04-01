import React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookWrapper from '../StorybookWrapper';
import FlyoutSearch, { ISearchChange } from './index';


storiesOf('Flyout Search', module)
  .add("Default", () => {
    const handleChange = (value: ISearchChange) => {
      console.log('handleCHANGE', value);
    }

    return (
      <StorybookWrapper>
        <FlyoutSearch onChange={handleChange} />
      </StorybookWrapper>
    );
  })
