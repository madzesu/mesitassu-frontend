import colors from './colors';
import borderRadius from './borderRadius';
import spacing from './spacing';
import boxShadow from './boxShadow';
import typography from './typography';
import breakpoints from './breakpoints';

declare global {
  namespace Jss {
    export interface Theme {
      colors: typeof colors
      typography: typeof typography
      spacing: typeof spacing
      borderRadius: typeof borderRadius
      boxShadow: typeof boxShadow
      breakpoints: typeof breakpoints
    }
  }
}

export {}
