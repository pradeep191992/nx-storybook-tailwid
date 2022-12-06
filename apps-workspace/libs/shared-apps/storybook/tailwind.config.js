const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const commonConfig = require('../tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./libs/**/*.{js,jsx,ts,tsx,html}'],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [commonConfig],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
