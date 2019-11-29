import { addParameters, addDecorator, configure } from '@storybook/react';

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

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
