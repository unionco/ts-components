import { addParameters, addDecorator } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Config
addParameters({
  options: {
    panelPosition: 'bottom',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
});
addDecorator(withKnobs);
addDecorator(withA11y);
