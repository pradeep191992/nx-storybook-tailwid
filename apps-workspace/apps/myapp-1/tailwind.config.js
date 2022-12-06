const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const commonConfig = require('./../../libs/shared-apps/tailwind-preset/tailwind.config');

module.exports = {
  // purge: [
  //   './../**/*.{js,jsx,ts,tsx,html}',
  //   './src/**/*.{js,jsx,ts,tsx,html}',
  //   './libs/**/*.{js,jsx,ts,tsx,html}'
  // ],
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
