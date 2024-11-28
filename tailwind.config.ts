import daisyui from 'daisyui';
import { light } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...light,
          primary: 'teal',
        },
      },
    ],
  },
};
