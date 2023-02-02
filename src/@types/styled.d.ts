import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    backgrounds: {
    light: string;
      black: string;
      white: string;
      gray: string;
      purple: string;
      grayLight: string;
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
