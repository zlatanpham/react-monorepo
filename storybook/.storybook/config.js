import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const stories = require.context('../stories', true, /\.stories\.js$/);
const components = require.context('../../ui', true, /\.stories\.tsx$/);
function loadStories() {
  stories.keys().forEach(filename => stories(filename));
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
