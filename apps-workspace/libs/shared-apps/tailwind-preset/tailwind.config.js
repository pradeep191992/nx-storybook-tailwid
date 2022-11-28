const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'slb-blue': '#0014DC',
      },
      fontFamily: {
        'slb-font': ['TWK Lausanne', 'sans-serif']
      }
    },
  },
  plugins: [],
};
