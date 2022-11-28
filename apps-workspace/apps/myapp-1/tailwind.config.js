const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const commonConfig = require('./../../libs/shared-apps/tailwind-preset/tailwind.config');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [commonConfig],
  theme: {
    extend: {},
  },
  plugins: [],
};
