import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;
    color: {
      background: string;
      neutral: string;
      header: string;
      primary: string;
      secondary: string;
      text: string;
    };
  }
}
