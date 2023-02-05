import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgrounds: {
      light: string;
      black: string;
      white: string;
      gray: string;
      purple: string;
      blue: string;
      grayLight: string;
      background: string;
    };
    colors: {
      white: string;
      black: string;
      dark: string;
      gray: string;
      light02: string;
      light04: string;
    };
  }
}
