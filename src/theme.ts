// themes.ts
import type { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  isDark: true,
  color: {
    background: '#333333',
    neutral: '#4F4F4F',
    header: '#121212',
    primary: '#F1FAEE',
    secondary: '#242424',
    text: '#FFFFFF',
  },
};

export const lightTheme: DefaultTheme = {
  isDark: false,
  color: {
    background: '#dbd9d9',
    neutral: '#EAEAEA',
    header: '#f5f5f5',
    primary: '#1E2A78',
    secondary: '#C0C0C0',
    text: '#000000',
  },
};
